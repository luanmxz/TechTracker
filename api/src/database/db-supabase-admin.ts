import { createClient } from '@supabase/supabase-js';
import 'dotenv/config'

const { API_SUPABASE_URL, API_SUPABASE_ADMIN_KEY } = process.env;

if (!API_SUPABASE_URL || !API_SUPABASE_ADMIN_KEY) {
    throw new Error("Alguma variável de ambiente não está definida.");
}


const supabase_admin = createClient(API_SUPABASE_URL, API_SUPABASE_ADMIN_KEY, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
}).auth.admin;

export default supabase_admin;