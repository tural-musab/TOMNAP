create table if not exists public.early_access_leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  work_email text not null,
  company_name text,
  country text,
  social_profile_url text,
  role text,
  message text,
  locale text default 'en',
  source text default 'tomnap_landing',
  user_agent text,
  created_at timestamptz default now()
);

create index if not exists early_access_leads_created_at_idx
  on public.early_access_leads (created_at desc);
