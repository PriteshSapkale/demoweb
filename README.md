# KRAFTLINE PACKAGING — Website starter

A responsive Next.js 15 website for a Maharashtra-based corrugated packaging startup. It is designed to generate qualified B2B enquiries from FMCG manufacturers, distributors and other businesses.

## What's included

- Premium industrial visual identity (kraft, charcoal, warm ivory)
- Responsive single-page website with Home, Products, Industries, Capabilities, About, FAQ and Contact sections
- Quote request form with client-side validation and server API route
- Supabase persistence integration for quote enquiries
- WhatsApp contact link, activated when a real number is configured
- SEO metadata, Open Graph metadata, robots and sitemap
- SQL schema for the enquiries table
- No fabricated certifications, client logos, testimonials or factory claims

## Run locally

1. Install Node.js 20.9 or newer.
2. Extract this folder and open a terminal inside it.
3. Run `npm install`.
4. Copy `.env.example` to `.env.local`.
5. Add your Supabase project URL and service-role key (see below).
6. Run `npm run dev` and open http://localhost:3000.

The site itself can be previewed without Supabase. The enquiry API intentionally returns a clear setup error until Supabase is configured; it does not pretend to save leads.

## Configure lead capture

1. Create a project at https://supabase.com.
2. Open the SQL Editor and run `supabase/schema.sql`.
3. Copy the project URL and service-role key into `.env.local`.
4. Restart the dev server.
5. Submit a test enquiry and confirm it appears in the `enquiries` table.

Keep `SUPABASE_SERVICE_ROLE_KEY` server-side only. Never add it to a `NEXT_PUBLIC_` variable or browser code.

## Configure WhatsApp

Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to your business number with country code and digits only. Example format: `919876543210` (replace with your real number). Until configured, the website shows a prompt to add the sales contact rather than linking to a fake number.

## Before publishing — important launch checklist

- Confirm brand name availability, trademark and domain before committing to the name.
- Replace the proposed brand name, business address, phone, email and social links with verified details.
- Add real factory, machinery, team and product photography. Current photography is illustrative stock imagery.
- Confirm actual manufacturing capabilities, board grades, flute profiles, printing, dimensions, MOQ and lead times.
- Do not publish any certification, food-contact compliance, quality claim, customer logo or capacity guarantee unless verified.
- Add a privacy policy and consent wording reviewed for your business and applicable law.
- Configure transactional email notifications if your team needs an email alert for each new lead.
- Add analytics and a cookie notice if you deploy analytics or advertising trackers.
- Test the enquiry flow, mobile layout, keyboard navigation and performance on your production domain.
- Configure DNS, HTTPS and deployment on Vercel or another Next.js host.

## Production build

```bash
npm run build
npm start
```

## Project structure

```text
app/
  api/quote/route.ts   # quote form API
  globals.css          # complete visual system and responsive styles
  layout.tsx           # SEO metadata and document shell
  page.tsx             # homepage and lead-generation sections
  robots.ts
  sitemap.ts
lib/
  site.ts              # editable company details
supabase/
  schema.sql            # enquiries table
public/
  kraftline-mark.svg
```

## Current business assumptions

- Location: Maharashtra, India
- Stage: New startup, setting up manufacturing
- Indicative monthly capacity: 10,000–50,000 boxes (provided by the business owner; confirm before publishing as a firm guarantee)
- Initial products: 3-ply boxes, 5-ply boxes and custom FMCG packaging
- WhatsApp: intentionally unconfigured until a real business number is supplied
