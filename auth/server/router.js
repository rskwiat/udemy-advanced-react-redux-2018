const passport = require('passport');
const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');

const requireAuth = passport.authenticate('jwt', { session: false })
const requireSignIn = passport.authenticate('local', { session: false });

module.exports = (app) => {
  app.get('/', requireAuth, (req, res) => {
    res.send({ message: 'Super Secret Code us abc123' })
  });

  app.post('/signin', requireSignIn, Authentication.signin);
  app.post('/signup', Authentication.signup);
}
