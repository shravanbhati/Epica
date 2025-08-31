import { createClient } from "@supabase/supabase-js";
import "dotenv/config";

export const supabaseServer = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE,
  { auth: { persistSession: false } }
);
