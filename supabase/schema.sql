create extension if not exists pgcrypto;

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  company text,
  email text not null,
  phone text not null,
  product text not null,
  quantity text,
  dimensions text,
  message text,
  consent boolean not null default false,
  source text not null default 'website'
);

alter table public.enquiries enable row level security;

-- No public read/insert policies are created. The Next.js server route uses
-- the service-role key stored only in server environment variables.
-- Never expose the service-role key in client-side code.
