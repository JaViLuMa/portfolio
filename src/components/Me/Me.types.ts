import type { PostgrestError } from '@supabase/supabase-js';

type Image = {
  id: string;
  src: string;
  title: string;
  alt: string;
  description: string;
};

export type ImageId = Pick<Image, 'id'>;

export type MeProps = {
  data: Image[];
  error: PostgrestError | null;
};
