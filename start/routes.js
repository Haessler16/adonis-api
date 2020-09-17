'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Great!, its work' }
})
Route.group(() => {
    Route.post('/login','AuthController.login');
    Route.post('/register','AuthController.register');  
    Route.get('/getUser','AuthController.getUser');
    
    //Workspace
        //Collaborator
        //Projects
            //Analytics
                //accounts
                    //Zappier
            //Ux - Ui

    //Briefings
        Route.post('/briefings','BriefingController.store')
    //Projects
        Route.get('/projects','ProjectController.index')
    
}).prefix('api')
