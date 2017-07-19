export default function ensureAuthenticated(ctx, next) {
  if (ctx.isAuthenticated() && ctx.state.user.verifyHash === '') { 
    return next()
  }
  ctx.redirect('/login')
}
