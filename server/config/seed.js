/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict'
import Thing from '../api/thing/thing.model'
import User from '../api/user/user.model'

Thing.find({}).remove()
  .then(() => {
    Thing.create(
      {
        name: 'Development Tools',
        info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
        'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
        'Stylus, Sass, and Less.'
      },
      {
        name: 'Server and Client integration',
        info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
        'AngularJS, and Node.'
      },
      {
        name: 'Smart Build System',
        info: 'Build system ignores `spec` files, allowing you to keep ' +
        'tests alongside code. Automatic injection of scripts and ' +
        'styles into your index.html'
      },
      {
        name: 'Modular Structure',
        info: 'Best practice client and server structures allow for more ' +
        'code reusability and maximum scalability'
      },
      {
        name: 'Optimized Build',
        info: 'Build process packs up your templates as a single JavaScript ' +
        'payload, minifies your scripts/css/images, and rewrites asset ' +
        'names for caching.'
      },
      {
        name: 'Deployment Ready',
        info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
        'and openshift subgenerators'
      }
    )
  })

User.find({}).remove()
  .then(() => {
    User.create(
      {
        provider: 'local',
        name: 'Test User',
        email: 'test@example.com',
        password: 'test'
      },
      {
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@example.com',
        password: 'admin',
        port: [
          {
            name: 'intuch',
            lastClosePrice: 52.50,
            buyPrice: 50.50,
            trend: 'up',
            buyVolume: 100000.00
          }, {
            name: 'ps',
            lastClosePrice: 23.60,
            buyPrice: 25.00,
            trend: 'down',
            buyVolume: 50000.00
          }, {
            name: 'bts',
            lastClosePrice: 9.10,
            buyPrice: 8.15,
            trend: 'up',
            buyVolume: 200000.00
          }, {
            name: 'vgi',
            lastClosePrice: 4.50,
            buyPrice: 3.84,
            trend: 'down',
            buyVolume: 400000.00
          }, {
            name: 'bcp',
            lastClosePrice: 35.00,
            buyPrice: 31.00,
            trend: 'down',
            buyVolume: 350000.00
          }, {
            name: 'bem',
            lastClosePrice: 7.00,
            buyPrice: 5.00,
            trend: 'up',
            buyVolume: 500000.00
          }, {
            name: 'kbank',
            lastClosePrice: 163.00,
            buyPrice: 150.5,
            trend: 'up',
            buyVolume: 100000.00
          }
        ],
        watchList: [
          {
            name: 'intuch',
            lastClosePrice: 52.50,
            trend: 'up'
          }, {
            name: 'ps',
            lastClosePrice: 23.60,
            trend: 'down'
          }, {
            name: 'bts',
            lastClosePrice: 9.10,
            trend: 'up'
          }, {
            name: 'vgi',
            lastClosePrice: 4.50,
            trend: 'down'
          }, {
            name: 'bcp',
            lastClosePrice: 35.00,
            trend: 'down'
          }, {
            name: 'bem',
            lastClosePrice: 7.00,
            trend: 'up'
          }, {
            name: 'kbank',
            lastClosePrice: 163.00,
            trend: 'up'
          }
        ]
      })
      .then(() => {
        console.log('finished populating users')
      })
  })
