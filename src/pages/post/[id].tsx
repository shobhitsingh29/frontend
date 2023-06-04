import NextError from 'next/error';
import { useRouter } from 'next/router';
import { NextPageWithLayout } from '~/pages/_app';
import { RouterOutput, trpc } from '~/utils/trpc';

type PostByIdOutput = RouterOutput['post']['byId'];

function PostItem(props: { post: PostByIdOutput }) {
  const { post } = props;
  return (
    <>
      <h1>{post.title}</h1>
      <em>Created {post.createdAt.toLocaleDateString('en-us')}</em>
      {post?.type === 'code' ? (
        <pre
          style={{
            padding: '16px',
            overflow: 'auto',
            fontSize: '85%',
            lineHeight: 1.45,
            backgroundColor: '#f6f8fa',
            borderRadius: '6px',
          }}
        >
          <code style={{ color: ' grey', background: 'none' }}>
            {post.text}
          </code>
        </pre>
      ) : (
        <pre
          style={{
            padding: '16px',
            overflow: 'auto',
            fontSize: '85%',
            lineHeight: 1.45,
            backgroundColor: '#f6f8fa',
            borderRadius: '6px',
          }}
        >
          <code style={{ color: ' grey', background: 'none' }}>
            {post.text}
          </code>
        </pre>
      )}
      <h2>Raw data:</h2>
      <pre>{JSON.stringify(post, null, 4)}</pre>
    </>
  );
}

const PostViewPage: NextPageWithLayout = () => {
  const id = useRouter().query.id as string;
  const postQuery = trpc.post.byId.useQuery({ id });

  if (postQuery.error) {
    return (
      <NextError
        title={postQuery.error.message}
        statusCode={postQuery.error.data?.httpStatus ?? 500}
      />
    );
  }

  if (postQuery.status !== 'success') {
    return <>Loading...</>;
  }
  const { data } = postQuery;
  return <PostItem post={data} />;
};

export default PostViewPage;
