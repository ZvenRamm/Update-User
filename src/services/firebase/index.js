const { initializeApp, cert } = require("firebase-admin/app");

const serviceAccount = require("../../utils/constants/service-account.json");

const app = initializeApp({
  credential: cert(serviceAccount),
  databaseURL: 'https://example-f8d23-default-rtdb.firebaseio.com'
});

module.exports = app;
