import type { PostgrestError } from '@supabase/supabase-js';

export type CV = {
  id: string;
  link: string;
};

export type CVProps = {
  data: CV[];
  error: PostgrestError | null;
};
