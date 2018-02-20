const routes = module.exports = require('next-routes')()

// ref => .add('user', '/user/:id', 'profile')
// .add('/:noname/:lang(en|es)/:wow+', 'complex') .add({name: 'beta', pattern:
// '/v3', page: 'v3'})

routes
    .add('about','/about')
    .add('blog', '/blog/:slug')
