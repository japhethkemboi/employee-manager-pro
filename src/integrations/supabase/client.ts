// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = "https://bbkbepnahvqeqqifbbxk.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJia2JlcG5haHZxZXFxaWZiYnhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE2NDM2MzIsImV4cCI6MjA0NzIxOTYzMn0.rtoBGv7P4Px8UJ3h_XOciJkZO8DW3_tExhSxtC-DntY";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);