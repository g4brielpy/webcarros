import { z } from "zod";

export const loginSchema = z.object({
  email: z.string("Insira um email válido").nonempty("O email é obrigatório"),
  password: z
    .string()
    .nonempty("A senha é obrigatório")
    .min(4, "Insira uma senha com mais de 4 dígitos"),
});

export type FormData = z.infer<typeof loginSchema>;
