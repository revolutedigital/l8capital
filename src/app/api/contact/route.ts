import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Digite um e-mail válido'),
  whatsapp: z
    .string()
    .min(10, 'Digite um número com DDD')
    .regex(/^[0-9]+$/, 'Digite apenas números'),
  size: z.string().min(1, 'Selecione uma opção'),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate data
    const validatedData = contactSchema.parse(body)

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Integrate with CRM (HubSpot, RD Station, etc.)
    // 4. Send WhatsApp notification via Twilio/WhatsApp Business API

    // For now, log the data (replace with actual integration)
    console.log('New contact submission:', validatedData)

    // Example: Send to webhook or external service
    // await fetch('https://your-webhook.com/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(validatedData),
    // })

    return NextResponse.json(
      {
        success: true,
        message: 'Contato recebido com sucesso!',
        data: { name: validatedData.name }
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Dados inválidos',
          errors: error.errors
        },
        { status: 400 }
      )
    }

    console.error('Contact form error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Erro interno do servidor'
      },
      { status: 500 }
    )
  }
}
