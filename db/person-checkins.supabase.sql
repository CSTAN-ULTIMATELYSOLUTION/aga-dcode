-- QR cohort check-in table for Supabase.
-- Run this in the Supabase SQL editor before deploying the Vercel API.

create extension if not exists pgcrypto;

create table if not exists public.person_checkins (
  id uuid primary key default gen_random_uuid(),
  cohort_code text not null,
  phone text not null,
  normalized_phone text not null,
  full_name text,
  english_name text,
  chinese_name text,
  email text,
  ic_or_passport text,
  date_of_birth date,
  gender text,
  job_title text,
  company_name text,
  industry text,
  employment_status text,
  work_experience text,
  company_address text,
  e_invoice_name text,
  e_invoice_tin text,
  e_invoice_id_type text,
  e_invoice_id_no text,
  e_invoice_address text,
  e_invoice_email text,
  payment_status text not null default 'unknown',
  payment_amount text,
  payment_reference text,
  payment_note text,
  info_completed_at timestamptz,
  checked_in_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint person_checkins_normalized_phone_key unique (normalized_phone)
);

alter table public.person_checkins add column if not exists job_title text;
alter table public.person_checkins add column if not exists company_name text;
alter table public.person_checkins add column if not exists industry text;
alter table public.person_checkins add column if not exists employment_status text;
alter table public.person_checkins add column if not exists work_experience text;
alter table public.person_checkins add column if not exists company_address text;

alter table public.person_checkins enable row level security;

revoke all on table public.person_checkins from anon, authenticated;
grant select, insert, update on table public.person_checkins to service_role;

create or replace function public.set_person_checkins_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_person_checkins_updated_at on public.person_checkins;
create trigger set_person_checkins_updated_at
before update on public.person_checkins
for each row
execute function public.set_person_checkins_updated_at();
