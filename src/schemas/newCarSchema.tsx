import { z } from "zod";

export const newCarSchema = z.object({
  name_car: z.string().nonempty("O nome do carro é obrigatório!"),
  model: z.string().nonempty("O modelo é obrigatório!"),
  year: z.string().nonempty("O ano do carro é obrigatório!"),
  km: z.string().nonempty("Os km's é obrigatório!"),
  price: z.string().nonempty("O preço do carro é obrigatório!"),
  city: z.string().nonempty("A cidade é obrigatório!"),
  whatsapp: z
    .string()
    .min(1, "O telefone é obrigatório!")
    .refine((value) => /^(\d{10,11})$/.test(value), {
      message: "Número de telefone inválido!",
    }),
  description: z.string().nonempty("A descrição é obrigatório!"),
});

export type NewCarFormData = z.infer<typeof newCarSchema>;
