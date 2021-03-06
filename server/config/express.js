/**
 * Express configuration
 */

'use strict'

// import express from 'express'
// import morgan from 'morgan'
// import compression from 'compression'
import bodyParser from 'body-parser'
// import methodOverride from 'method-override'
// import cookieParser from 'cookie-parser'
import errorHandler from 'errorhandler'
// import path from 'path'
// import lusca from 'lusca'
// import config from './environment'
// import passport from 'passport'
// import session from 'express-session'
// import connectMongo from 'connect-mongo'
// import mongoose from 'mongoose'
// var MongoStore = connectMongo(session)

export default function (app) {
  var env = app.get('env')

  // app.set('appPath', path.join(config.root, 'client'))
  // app.use(express.static(app.get('appPath')))

  // app.use(morgan('dev'))

  // app.use(compression())
  app.use(bodyParser.urlencoded({
    extended: false
  }))
  app.use(bodyParser.json())
  // app.use(methodOverride())
  // app.use(cookieParser())
  // app.use(passport.initialize())

  // Persist sessions with MongoStore / sequelizeStore
  // We need to enable sessions for passport-twitter because it's an
  // oauth 1.0 strategy, and Lusca depends on sessions
  // app.use(session({
  //   secret: config.secrets.session,
  //   saveUninitialized: true,
  //   resave: false,
  //   store: new MongoStore({
  //     mongooseConnection: mongoose.connection,
  //     db: 'mean'
  //   })
  // }))

  /**
   * Lusca - express server security
   * https://github.com/krakenjs/lusca
   */
  // if (env !== 'test' && !process.env.SAUCE_USERNAME) {
  //   app.use(lusca({
  //     // csrf: {
  //     //   angular: true
  //     // },
  //     csrf: false,
  //     xframe: 'SAMEORIGIN',
  //     hsts: {
  //       maxAge: 31536000, // 1 year, in seconds
  //       includeSubDomains: true,
  //       preload: true
  //     },
  //     xssProtection: true
  //   }))
  // }

  if (env === 'development' || env === 'test') {
    app.use(errorHandler()) // Error handler - has to be last
  }
}
