import type { PostgrestError } from '@supabase/supabase-js';

type MiscData = {
  id: string;
  text: string;
};

export type MiscProps = {
  data: MiscData[];
  error: PostgrestError | null;
};
