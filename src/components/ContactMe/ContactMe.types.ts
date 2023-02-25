import type { PostgrestError } from '@supabase/supabase-js';

export type Contact = {
  id: string;
  value: string;
  label: string;
  href: string;
  external: boolean;
};

export type ContactMeProps = {
  data: Contact[];
  error: PostgrestError | null;
};
