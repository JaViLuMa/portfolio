import type { Database } from 'supabaseTypes';

import { createClient } from '@supabase/supabase-js';

const supabase = createClient<Database>(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_KEY
);

export default supabase;
