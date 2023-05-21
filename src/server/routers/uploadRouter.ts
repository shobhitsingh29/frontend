/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */
import { publicProcedure, router } from '../trpc';
import { prisma } from '~/server/prisma';
import { z } from 'zod';
import { TRPCError } from '@trpc/server';
import { Prisma } from '@prisma/client';

const defaultUploadSelect = Prisma.validator<Prisma.uploadimgSelect>()({
  id: true,
  url: true,
  email: true,
});
export const uploadRouter = router({
  byId: publicProcedure
    .input(
      z.object({
        id: z.string().uuid().optional(),
      }),
    )
    .query(async ({ input }) => {
      const { id } = input;

      const data = await prisma.uploadimg.findFirst({
        where: { id },
        select: defaultUploadSelect,
      });
      if (!data) {
        throw new TRPCError({
          code: 'NOT_FOUND',
          message: `No post with id '${id}'`,
        });
      }
      return data;
    }),
  add: publicProcedure
    .input(
      z.object({
        id: z.string().uuid(),
        url: z.string().min(1),
        email: z.string().min(1),
      }),
    )
    .mutation(async ({ input }) => {
      return await prisma.uploadimg.create({
        data: input,
        select: defaultUploadSelect,
      });
    }),
});
