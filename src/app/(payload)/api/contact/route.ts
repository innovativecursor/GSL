// import { NextResponse } from 'next/server'
// import payload from 'payload'
// import nodemailer from 'nodemailer'

// export async function POST(req: Request) {
//   try {
//     const data = await req.json()

//     // 1️⃣ Payload me save
//     await payload.create({
//       collection: 'contact-submissions',
//       data,
//     })

//     // 2️⃣ Nodemailer setup
//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT),
//       secure: false, // true for 465, false for 587
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     })

//     // 3️⃣ Email send
//     await transporter.sendMail({
//       from: process.env.SMTP_FROM,
//       to: data.email, // User ka email
//       subject: 'Thank you for contacting us',
//       text: `Hi ${data.fullName},\n\nThank you for contacting us. We will get back to you soon.`,
//     })

//     return NextResponse.json({ success: true })
//   } catch (err) {
//     console.error('Error sending email:', err)
//     return NextResponse.json({ success: false }, { status: 500 })
//   }
// }

// src/app/(payload)/api/contact/route.ts
export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import payload from 'payload'
import path from 'path'

let isPayloadInitialized = false

async function initPayload() {
  if (!isPayloadInitialized) {
    const configPath = path.resolve(process.cwd(), 'src/payload.config.ts')
    console.log('💡 Looking for config at:', configPath)

    await payload.init({
      secret: process.env.PAYLOAD_SECRET || '',
      configPath,
    })
    isPayloadInitialized = true
  }
}


export async function POST(req: Request) {
  try {
    await initPayload()

    const data = await req.json()

    // Save to Payload collection
    await payload.create({
      collection: 'contact-submissions',
      data,
    })

    // Nodemailer send
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
