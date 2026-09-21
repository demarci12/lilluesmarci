create table if not exists public.rsvps (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text,
  phone text,
  attending boolean not null,
  guest_count int not null default 1,
  plus_ones jsonb not null default '[]'::jsonb, -- [{ "name": "..." }, ...]
  dietary_restrictions text,
  message text,
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'declined')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists rsvps_status_idx on public.rsvps (status);

create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists rsvps_set_updated_at on public.rsvps;
create trigger rsvps_set_updated_at
  before update on public.rsvps
  for each row execute function public.set_updated_at();

alter table public.rsvps enable row level security;

-- Guests can submit an RSVP (insert only).
create policy "Anyone can submit an RSVP"
  on public.rsvps for insert
  to anon
  with check (true);

-- Reads/updates/deletes go through the service-role key from admin-only
-- server actions (see src/lib/supabase/admin.ts) — no anon select/update policy.
