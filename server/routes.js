/**
 * Main application routes
 */

'use strict'

export default function (app) {
  app.use('/things', require('./api/things'))
  // app.use('/auth', require('./auth').default)

  // // All undefined asset or api routes should return a 404
  // app.route('/:url(api|auth|components|app|bower_components|assets)/*')
  //   // .get(errors[404])
  //   .get((req, res) => {
  //     res.status(404).send('Not Found')
  //   })

  // All other routes should redirect to the index.html
  app.route('/*')
    .get((req, res) => {
      res.status(403).send('<h1>403 Forbidden</h1>')
    })
}
