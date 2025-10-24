export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import payload from 'payload'
// import path from 'path'

let isPayloadInitialized = false

import payloadConfig from '../../../../../payload.config'

async function initPayload() {
  if (!isPayloadInitialized) {
    await payload.init({
      // secret: process.env.PAYLOAD_SECRET || '',
      config: payloadConfig,
      // disableAutomaticMigrations: true,
    })
    isPayloadInitialized = true
  }
}

export async function POST(req: Request) {
  try {
    await initPayload()

    const data = await req.json()

    await payload.create({
      collection: 'contact-submissions',
      data,
    })
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: data.email,
      subject: 'Thank you for contacting us',
      text: `Hi ${data.fullName},\n\nThank you for contacting us. We will get back to you soon.`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Error in /api/contact:', err)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
