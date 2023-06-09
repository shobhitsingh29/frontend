import { trpc } from '~/utils/trpc';
import { NextPageWithLayout } from './_app';
import { inferProcedureInput } from '@trpc/server';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { Button, Switch, Navbar, Textarea } from '@nextui-org/react';
import { DevIcon } from '~/components/icons/sidebar/dev-icon';
import { Flex } from '~/components/styles/flex';

import Typester from '~/components/typester';
import type { AppRouter } from '~/server/routers/_app';
import { Spotify } from '~/components/spotify';

const IndexPage: NextPageWithLayout = () => {
  const [value, setValue] = useState('');
  const [isCodePost, setIsCodePost] = useState(true);

  const utils = trpc.useContext();
  const postsQuery = trpc.post.list.useInfiniteQuery(
    {
      limit: 5,
    },
    {
      getPreviousPageParam(lastPage) {
        return lastPage.nextCursor;
      },
    },
  );

  const addPost = trpc.post.add.useMutation({
    async onSuccess() {
      // refetches posts after a post is added
      await utils.post.list.invalidate();
    },
  });

  // prefetch all posts for instant navigation
  // useEffect(() => {
  //   const allPosts = postsQuery.data?.pages.flatMap((page) => page.items) ?? [];
  //   for (const { id } of allPosts) {
  //     void utils.post.byId.prefetch({ id });
  //   }
  // }, [postsQuery.data, utils]);

  return (
    <>
      <Navbar isBordered variant="floating">
        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Home
            </Button>
          </Navbar.Item>
          <Navbar.Item>
            <Button auto flat as={Link} href="/candidates">
              Candidates
            </Button>
          </Navbar.Item>
          <Navbar.Item>
            <Button auto flat as={Link} href="/leetcode">
              Leetcode
            </Button>
          </Navbar.Item>
          <Navbar.Item>
            <Button auto flat as={Link} href="/portfolio">
              Portfolio
            </Button>
          </Navbar.Item>
          <Navbar.Item>
            <Button auto flat as={Link} href="/stocks">
              Stocks
            </Button>
          </Navbar.Item>
          <Navbar.Item>
            <Button auto flat as={Link} href="/mySettings">
              mySettings
            </Button>
          </Navbar.Item>
          <Navbar.Item>
            <Button auto flat as={Link} href="/playground">
              Playground
            </Button>
          </Navbar.Item>
          <Navbar.Item>
            <Button auto flat as={Link} href="/google">
              Google
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      <Spotify />
      <h2>
        Latest wale Posts
        {postsQuery.status === 'loading' && '(loading)'}
      </h2>

      <button
        onClick={() => postsQuery.fetchPreviousPage()}
        disabled={
          !postsQuery.hasPreviousPage || postsQuery.isFetchingPreviousPage
        }
      >
        {postsQuery.isFetchingPreviousPage
          ? 'Loading more...'
          : postsQuery.hasPreviousPage
          ? 'Load More'
          : 'Nothing more to load'}
      </button>

      {postsQuery.data?.pages.map((page, index) => (
        <Fragment key={page.items[0]?.id || index}>
          {page.items.map((item) => (
            <article key={item.id}>
              <h3>{item.title}</h3>
              <Link href={`/post/${item.id}`}>View more</Link>
            </article>
          ))}
        </Fragment>
      ))}

      <hr />

      <h3>Add a Post</h3>

      <form
        onSubmit={async (e) => {
          /**
           * In a real app you probably don't want to use this manually
           * Checkout React Hook Form - it works great with tRPC
           * @see https://react-hook-form.com/
           * @see https://kitchen-sink.trpc.io/react-hook-form
           */
          e.preventDefault();
          const $form = e.currentTarget;
          const values = Object.fromEntries(new FormData($form));
          type Input = inferProcedureInput<AppRouter['post']['add']>;
          //    ^?
          const input: Input = {
            title: values.title as string,
            text: value as string,
          };
          try {
            await addPost.mutateAsync(input);

            $form.reset();
          } catch (cause) {
            console.error({ cause }, 'Failed to add post');
          }
        }}
      >
        <label htmlFor="title">Title:</label>
        <br />
        <input
          id="title"
          name="title"
          type="text"
          disabled={addPost.isLoading}
        />
        <br />
        <label htmlFor="text">Text:</label>
        <br />
        <Switch
          checked={isCodePost}
          size="xl"
          color="success"
          icon={<DevIcon />}
          onChange={(e) => setIsCodePost(!isCodePost)}
        />

        <Flex>
          {isCodePost ? (
            <Typester value={value} setValue={setValue} />
          ) : (
            <Textarea
              id="text"
              name="text"
              disabled={addPost.isLoading}
              placeholder="Enter your post"
            />
          )}
        </Flex>
        <br />
        <br />
        <input type="submit" disabled={addPost.isLoading} />
        {addPost.error && (
          <p style={{ color: 'red' }}>{addPost.error.message}</p>
        )}
      </form>
    </>
  );
};

export default IndexPage;

/**
 * If you want to statically render this page
 * - Export `appRouter` & `createContext` from [trpc].ts
 * - Make the `opts` object optional on `createContext()`
 *
 * @link https://trpc.io/docs/ssg
 */
// export const getStaticProps = async (
//   context: GetStaticPropsContext<{ filter: string }>,
// ) => {
//   const ssg = createProxySSGHelpers({
//     router: appRouter,
//     ctx: await createContext(),
//   });
//
//   await ssg.post.all.fetch();
//
//   return {
//     props: {
//       trpcState: ssg.dehydrate(),
//       filter: context.params?.filter ?? 'all',
//     },
//     revalidate: 1,
//   };
// };
