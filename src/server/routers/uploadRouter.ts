/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */
import { publicProcedure, router } from '../trpc';
import { prisma } from '~/server/prisma';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import { Prisma } from '@prisma/client';

const defaultPostSelect = Prisma.validator<Prisma.uploadSelect>()({
  id: true,
  url: true,
});
export const uploadRouter = router({
  byId: publicProcedure
    .input(
      z.object({
        id: z.number(),
      }),
    )
    .query(async ({ input }) => {
      const { id } = input;

      const data = await prisma.upload.findFirst({
        where: { id },
        select: defaultPostSelect,
      });
      if (!data) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No post with id '${id}'`,
        });
      }
      return data;
    }),
});
