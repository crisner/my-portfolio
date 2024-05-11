export default function manifest() {
    return {
      name: 'Portfolio - Renisha Christie',
      short_name: 'Portfolio - RC',
      description: "Renisha Christie's frontend/fullstack development portfolio",
      start_url: '/',
      display: 'standalone',
      background_color: '#251c1c',
      theme_color: '#251c1c',
      icons: [
        {
          src: '/favicon.ico',
          sizes: 'any',
          type: 'image/x-icon',
        },
      ],
    }
  }