import * as z from "zod";

export const eventFormSchema = z.object({
  title: z.string().min(3, "Le titre doit contenir au moins 3 caractéres"),
  description: z
    .string()
    .min(3, "La description doit contenir au moins 3 caractéres")
    .max(400, "La description doit contenenir plus de 400 caractéres"),
  location: z
    .string()
    .min(3, "La localisation doit contenir au moins 3 caractéres")
    .max(400, "La localisation doit contenir plus de 400 caractéres"),
  imageUrl: z.string(),
  startDateTime: z.date(),
  endDateTime: z.date(),
  categoryId: z.string(),
  price: z.string(),
  isFree: z.boolean(),
  url: z.string().url(),
});
