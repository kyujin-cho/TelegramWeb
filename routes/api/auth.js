import Users from '../../DB/User'
import axios from 'axios'

export async function getUser(ctx, next) {
  try {
    const user = await Users.findOne({_id: ctx.state.userId}).exec()
    ctx.body = await {
      success: true, 
      data: user
    }
  } catch (error) {
    ctx.body = await {
      success: false,
      error: error.message
    }
  }
}



export async function signUp(ctx, next) {

}