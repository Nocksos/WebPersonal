import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
  email: z.string().email({ message: 'El correo electrónico no es válido' }),
  subject: z.string().min(1, { message: 'El asunto es obligatorio' }),
  message: z.string().min(10, { message: 'El mensaje debe tener al menos 10 caracteres' }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export class ContactService {
  static async sendForm(data: ContactFormData): Promise<void> {
    // Valida los datos utilizando el esquema de Zod en el servicio
    contactFormSchema.parse(data)

    // Simula una petición HTTP de envío a la API con un retardo de 1.5 segundos
    await new Promise((resolve) => setTimeout(resolve, 1500))
  }
}
