import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const ALLOWED_SERVICES = ['IT Support', 'Web Development', 'Technical Support', 'Help Desk Technicians'];

function validate(body) {
  const { name, position, location, service, rating, testimonial, email } = body;
  if (!name?.trim()) return 'Name is required';
  if (!position?.trim()) return 'Position/Company is required';
  if (!location?.trim()) return 'Location is required';
  if (!ALLOWED_SERVICES.includes(service)) return 'Please select a valid service type';
  const r = Number(rating);
  if (!Number.isInteger(r) || r < 1 || r > 5) return 'Rating must be 1–5';
  if (!testimonial?.trim() || testimonial.length < 20) return 'Testimonial must be at least 20 characters';
  if (!email?.trim()) return 'Email is required';
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) return 'Please enter a valid email';
  return null;
}

export async function POST(req) {
  try {
    const body = await req.json();
    const error = validate(body);
    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    const payload = {
      name: body.name.trim(),
      position: body.position.trim(),
      location: body.location.trim(),
      service: body.service,
      rating: Number(body.rating),
      testimonial: body.testimonial.trim(),
      projectOutcome: body.projectOutcome?.trim() || '',
      email: body.email.trim(),
      submittedAt: new Date().toISOString(),
    };

    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.TESTIMONIAL_NOTIFY_EMAIL || 'philiporjikelechi@gmail.com',
        replyTo: payload.email,
        subject: `[Portfolio] New testimonial submission from ${payload.name}`,
        text: `
New testimonial submission (appears on site only after you approve and add to data/approved-testimonials.json):

Name: ${payload.name}
Position: ${payload.position}
Location: ${payload.location}
Service: ${payload.service}
Rating: ${payload.rating}/5
Email: ${payload.email}

Testimonial:
${payload.testimonial}

Project outcome: ${payload.projectOutcome || '(none)'}

---
To approve: add this testimonial object to data/approved-testimonials.json and redeploy.
        `.trim(),
      });
    }

    return NextResponse.json({ message: 'Thank you! Your testimonial has been submitted and will appear on the site after review.' }, { status: 200 });
  } catch (err) {
    console.error('Testimonial submit error:', err);
    return NextResponse.json({ error: 'Failed to submit testimonial. Please try again.' }, { status: 500 });
  }
}
