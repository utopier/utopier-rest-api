import passport from 'passport';
import local from './local';
import User from '../entities/User';

export default () => {
  passport.serializeUser((user:any, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id }});
      done(null, user); // req.user
    } catch (error) {
      console.error(error);
      done(error);
    }
  });

  local();
};