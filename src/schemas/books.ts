import { z } from "zod";

export const BookSchema = z.object({
  id: z.number(),
  title: z.string(),
  author: z.string(),
  genre: z.string(),
  rating: z.number(),
  totalCopies: z.number(),
  availableCopies: z.number(),
  description: z.string(),
  coverColor: z.string(),
  coverUrl: z.string().url(),
  videoUrl: z.string(),
  summary: z.string(),
  isLoaned: z.boolean().optional(),
});

export type Book = z.infer<typeof BookSchema>;
