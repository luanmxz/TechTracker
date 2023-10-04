import { createClient } from '@supabase/supabase-js';
import 'dotenv/config'

const { API_SUPABASE_URL, API_SUPABASE_ANON_KEY } = process.env;

if (!API_SUPABASE_URL || !API_SUPABASE_ANON_KEY) {
    throw new Error("Alguma variável de ambiente não está definida.");
}

const supabase = createClient(API_SUPABASE_URL, API_SUPABASE_ANON_KEY);

export default supabase;