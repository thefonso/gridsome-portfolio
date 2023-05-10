// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const nodeExternals = require('webpack-node-externals')
const axios = require('axios')

module.exports = function (api) {
//is this for vuetify?
  api.chainWebpack((config, { isServer }) => {
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/]
        })
      ])
    }
  })
 //this gives us the gist data
  api.loadSource(async actions => {
    const { data } = await axios.get('https://api.github.com/users/thefonso/gists')

    const collection = actions.addCollection({
      typeName: 'Post'
    })

    for (const item of data) {
      const contentUrl = Object.values(item.files)[0].raw_url
      const { data: content } = await axios.get(contentUrl)
      collection.addNode({
        id: item.id,
        title: item.description,
        content_url: contentUrl,
        content: content
      })
    }
  })

  api.configureServer(app => {
    //what should this be???
    // app.get('/graphql', (req, res) => {
    //   res.send('Hello, world!')
    // })
  })
  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
