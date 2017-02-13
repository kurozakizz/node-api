'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // MongoDB connection options
  mongo: {
    uri: process.env.MONGODB_URI || 'mongodb://mongodb/app-dev'
  },

  // Seed database on startup
  seedDB: true

}
