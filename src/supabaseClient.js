// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://neflybjxzqkjkvtxjmni.supabase.co';
const supabaseKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lZmx5Ymp4enFramt2dHhqbW5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM2MDUzMTcsImV4cCI6MjA3OTE4MTMxN30.NjOFPlZuTMV9wI_Uy8N8ZrS4uazQFgaKtG4YU8nNhQU';
// const supabaseUrl = import.meta.env.SUPABASE_PROJECT_URL;
// const supabaseKey = import.meta.env.SUPABASE_API_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
