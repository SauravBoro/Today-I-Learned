import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eulznoccccwporsieaxw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1bHpub2NjY2N3cG9yc2llYXh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMxMjE5NjEsImV4cCI6MjAwODY5Nzk2MX0.0EvrWmVdz3kmpC5p2jbgE-L5LXrWKXPF2Nh9E-_GGlg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
