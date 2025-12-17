export default defineNuxtConfig({
    devtools: { enabled: true },
    srcDir: 'app/',
    modules: ['@nuxtjs/tailwindcss'],
    css: ['~/assets/css/tailwind.css'],
    app: {
    head: {
        title: 'Hotel ...',
        meta: [
            { name: 'description' , content: 'Hotel ... in Hamburg' }
        ],
        link: [
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css' }
    
        ]
        }
    }
})