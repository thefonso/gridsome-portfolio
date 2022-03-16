# Portfolio using VueJS, GraphQL and Gridsome

### Show notes: WIP (work in progress...I'll finish this write-up on Mar 17th)

# gridsome basics:

## What is it?
Gridsome is a Vue.js powered static site generator
in the same vain as GatsbJS (if you are coming from React)

### What does that mean?

- Vue.js for your frontend.
- Data sourcing - Use any Headless CMSs, APIs or Markdown-files for data.
- Local development with hot-reloading - See code changes in real-time.
- File-based page routing - Any Name.vue file in src/pages is a static route.
- Dynamic routing - Any [param].vue file in src/pages is a dynamic route.
- Static file generation - Deploy securely to any CDN or static web host.
- GraphQL data layer - Simpler data management with a centralized data layer.
- Automatic Code Splitting - (What is code splitting?)
- Plugin ecosystem - Find a plugin for any job.




### Core concepts

- describe each: templates, pages, layouts, components
	- templates: Templates for **GraphQL collections** should be added here.
	
	- pages: Pages are usually used for normal pages or for listing items from a GraphQL
	collection. Add .vue files here to create pages. For example **About.vue** will be 
    **site.com/about**.
	
	- layouts: Layout components are used to wrap pages and templates. 
	  Layouts should contain components like headers, footers or sidebars 
	  that will be used across the site.
	
	- components: that will be imported to Pages and Layouts 
- Main diff between Gridsome and Nuxt - graphQL

### Building out the site

- Old site - view and discus
- "About Me" component
- "Projects" component
- "Education" or "My Story"
- "Contact"

- smooth slider
- "Blog" route to new page

- github
- Project board
to do / in progress / done


# Basic graphQL tutorial:

### simple example using jsonplace holder

https://gridsome.org/docs/querying-data/

- here is how you call the end point
- this is EXACTLY what you do to see the data response in the GraphQL gui
- here is how you call that data via GraphQL in a Gridsome page
- same for a Gridsome component




### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`
`yarn global add @gridsome/cli`

### 2. Create a Gridsome project

1. clone this repo
2. `cd repo-directory` to open the folder
3. yarn install (or npn)
4. `gridsome develop` to start a local dev server at `http://localhost:8080`

# gridsome-portfolio

## Design
(Screen shots go here)

### Color Palette

```scss
.color-palette {
  color:#bb3b0e
  #dd7631
  #708160
  #d8c593
  #900c3f
}
```
