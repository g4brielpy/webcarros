import z from "zod";

export const registerSchema = z.object({
  name: z.string().nonempty("O nome é obrigatório"),
  email: z.email("Insira um email válido").nonempty("O email é obrigatório"),
  password: z
    .string()
    .nonempty("A senha é obrigatório")
    .min(6, "Insira uma senha com mais de 4 dígitos"),
});

export type FormData = z.infer<typeof registerSchema>;
