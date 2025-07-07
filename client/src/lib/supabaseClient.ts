import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mmdhpdtwprgjrztpnpqw.supabase.co'; // ← Replace with your URL
const supabaseAnonKey = 'tripathi11#'; // ← Replace with your anon key

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
