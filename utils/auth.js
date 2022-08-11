const withAuth = (req, res, next) => {
    // If the user is not logged in, redirect the request to the login route
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      console.log("logged-in in middleware")
      next();
    }
  };
  
  module.exports = withAuth;
  