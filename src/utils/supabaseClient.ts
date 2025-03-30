import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vemquetylnypzlbnskyt.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZlbXF1ZXR5bG55cHpsYm5za3l0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzMjgwMDUsImV4cCI6MjA1ODkwNDAwNX0.iaFHk1yWu87a8JLteSxcUgh9DSJeuD8H7s2yPHOWWLg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
