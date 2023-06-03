import { z } from "zod";

const clientSchema = z.object({
  id: z.string(),
  name: z.string().min(6).max(45),
  email: z.string().email().min(10).max(45),
  password: z.string().min(6).max(45),
  phone: z.number().min(10).max(14),
  imgUrl: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  deletedAt: z.string().nullable(),
});

const clientCreateSchema = clientSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const clientUpdateSchema = clientCreateSchema.partial();
const userResponseSchema = clientSchema.omit({ password: true });

export default {
  clientSchema,
  clientCreateSchema,
  clientUpdateSchema,
  userResponseSchema,
};
