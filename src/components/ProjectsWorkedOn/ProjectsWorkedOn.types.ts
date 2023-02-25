import type { PostgrestError } from '@supabase/supabase-js';

export type ProjectsWorkedOn = {
  id: string;
  title: string;
  description: string;
  link: string;
  external: boolean;
};

export type ProjectsWorkedOnProps = {
  data: ProjectsWorkedOn[];
  error: PostgrestError | null;
};
