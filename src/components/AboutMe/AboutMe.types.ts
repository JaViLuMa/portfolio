import type { PostgrestError } from '@supabase/supabase-js';

type AboutMe = {
  id: string;
  description: string;
};

export type AboutMeProps = {
  data: AboutMe[];
  error: PostgrestError | null;
};
