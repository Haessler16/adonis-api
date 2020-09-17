'use strict'
const User = use('App/Models/User');

class AuthController {
    async login({request,response,auth}){
        const {email,password} = request.only(['email','password'])
        const token = await auth.attempt(email,password)
        return response.ok(token)
    }    
    async register({request,response,auth}){
        const userData = request.only(['fullname','email','password'])
        const user = await User.create(userData)
        const token = await auth.generate(user)
        return response.created({
            status: true,
            data: user,
            token:token
        })
    }
    async getUser({auth,response}){
        const user = await auth.getUser();
        return response.ok(user)
    }    
}

module.exports = AuthController
