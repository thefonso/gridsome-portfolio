// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router,appOptions, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdn.jsdelivr.net/npm/font-awesome@4.x/css/font-awesome.min.css'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900',
  });

  const opts = {
    icons: {
      iconfont: 'fa4', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
  } //opts includes, vuetify themes, icons, etc.
  Vue.use(Vuetify)

  appOptions.vuetify = new Vuetify(opts);
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
