import { createClient } from '@supabase/supabase-js'

export const useSupabase = () => {
  const config = useRuntimeConfig()
  
  if (!config.public.supabaseUrl || !config.public.supabaseAnonKey) {
    console.error('Supabase Config fehlt! Prüfe deine .env Datei')
    throw new Error('Supabase Konfiguration fehlt')
  }
  
  const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabaseAnonKey
  )
  
  return supabase
}