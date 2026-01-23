export default defineNuxtRouteMiddleware(async (to, from) => {
    const supabase = useSupabase()
    
    const { data: { user } } = await supabase.auth.getUser()
    
    if (!user) {
      return navigateTo('/admin/login')
    }
    
    const { data: profile } = await supabase
      .from('user_profiles')
      .select('role')
      .eq('id', user.id)
      .single()
    
    if (!profile || profile.role !== 'admin') {
      await supabase.auth.signOut()
      return navigateTo('/admin/login')
    }
  })