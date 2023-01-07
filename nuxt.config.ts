// import axios from 'axios'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    // Jwt
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,

    // Cloudinary
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET
  },
  nitro: {
    prerender: {
      // 手動 route
      routes: ['/tweet/1', '/tweet/2']
    }
  },
  // 異步動態 routes
  // hooks: {
  //   async 'nitro:config'(config) {
  //     const data = await axios
  //       .get('xxxxx')
  //       .catch((err) => {
  //         console.log('api err', err)
  //       })

  //     const addRoutes = data.list.map(
  //       (item) => `/tweet/${item.id}`
  //     )
  //     config.prerender.routes.push(...addRoutes)
  //   }
  // },
  build: {
    transpile: ['@heroicons/vue']
  },
  ...(process.env.NODE_ENV === 'production' ? { builder: 'webpack' } : {})
})
