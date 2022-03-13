// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const nodeExternals = require('webpack-node-externals')
const axios = require('axios')

module.exports = function (api) {

  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/]
        })
      ])
    }
  })

  api.loadSource(async actions => {
    const { data } = await axios.get('https://swapi.dev/api/films')

    const collection = actions.addCollection({
      typeName: 'Post'
    })

    for (const item of data.results) {
      collection.addNode({
        id: item.id,
        title: item.title
      })
    }
  })

  api.configureServer(app => {
    //what should this be???
    // app.get('/graphql', (req, res) => {
    //   res.send('Hello, world!')
    // })
  })
  // api.createPages(({ createPage }) => {
  //   // Use the Pages API here: https://gridsome.org/docs/pages-api/
  // })
}
