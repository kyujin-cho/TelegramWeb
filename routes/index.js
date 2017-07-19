import Router from 'koa-router'
import passport from 'koa-passport'
import ensure from '../middlewares/ensure'

import api from './api'

const router = Router()

router.get('/', (ctx, next) => {
    if(ctx.isAuthenticated())
        await ctx.redirect('/chat')
    else
        await ctx.redirect('/login')
})


router.get('/login', (ctx, next) => {
    ctx.state = {
        title: 'Login'
    }
    await ctx.render('login', {})
})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/chat', 
    failureRedirect: '/login'
}),  (ctx, next) => {
        ctx.flash('username')
    if(ctx.request.body.username.length === 0 ||
    ctx.request.body.password.length === 0) {
      ctx.flash = {username: ctx.request.body.username, loginError: 'Please specify both username and password!' }
      ctx.redirect('/login')
    } else next()
})

router.get('/signup', (ctx, next) => {
    await ctx.render('signup', {})
})

router.get('/chat', ensure, (ctx, next) => {
    await ctx.render('chat', {})
})


router.use(api.routes(), api.allowedMethods())

export default router