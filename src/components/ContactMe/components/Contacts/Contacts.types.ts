import type { PostgrestError } from '@supabase/supabase-js';

import type { Contact } from '../../ContactMe.types';

export type ContactsProps = {
  contacts: Contact[];
  error: PostgrestError | null;
};
