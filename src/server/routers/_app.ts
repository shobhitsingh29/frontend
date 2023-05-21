/**
 * This file contains the root router of your tRPC-backend
 */
import { publicProcedure, router } from '../trpc';
import { postRouter } from './post';
import { uploadRouter } from './uploadRouter';

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'yay!'),

  post: postRouter,
  uploadimg: uploadRouter,
});

export type AppRouter = typeof appRouter;
