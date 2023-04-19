import { createApp } from 'vue'
import App from '@/App.vue'

import '@/assets/styles/main.scss'
import { router } from '@/router/router'

const app = createApp(App)

app
  .use(router)
  .mount('#app')

export {
  app
}
