import { createClient } from '@supabase/supabase-js';

// Hardcoded Supabase credentials for GitHub Pages deployment
// Environment variables are not available in static GitHub Pages hosting
const supabaseUrl = 'https://wxbfwfwendaspokmxxkb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4YmZ3ZndlbmRhc3Bva214eGtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMxMzEzNjQsImV4cCI6MjA3ODcwNzM2NH0.C-xNBxgRkQSsedd0jY0rw5rL1GrxG8s7M7VtsmIA3XM';

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
