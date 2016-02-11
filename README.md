# NodeJS, Express, Mongoose API starter

## Project structure & Setup
### Dependencies

#### Mongodb

Mongodb is a NOSQL database. More information can be found here - https://docs.mongodb.org

To install - https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/

#### Mongoose

Mongoose provides a nice way to interact with your Mongodb database using defined Models.

Read here for more information - http://mongoosejs.com/docs/guide.html

#### Express

Express is a nodejs web application framework. We use it to simplify the creation of our web API.

Read here for more information - http://expressjs.com/

### Folder structure
``` js
config
|   -- config.js
controllers
|   -- employee.js
|   -- employer.js
Examples
|   -- example1.html
helpers
|   -- modelHelpers.js
models
|   -- employee.js
|   -- employer.js
routes
|   -- api-routes.js
-- app.js
-- package.json
-- README.ms
```
## Understanding the API

### Require Section
Include controllers to handle api requests
``` js
var Employer         = require('../controllers/employer');
var Employee         = require('../controllers/employee');

```
### Security function
This is an example only. It will always return true!

Add your logic here to handle access to the API.
``` js
function securePages(req, res, next){
    if(true){
        next();
    }else{
        res.redirect('/');
    }
}
```

### Routes

Handle API routes.

securePages references a function that will always be run on the route. This allows us to control access before doing anything else.

The get, post, put and delete routes are passed to the contollers to manage.

``` js
router.route('/employers',securePages)
.get(Employer.getAll)
.post(Employer.add);

router.route('/employers/:id',securePages)
.get(Employer.get)
.put(Employer.update)
.post(Employer.update)
.delete(Employer.delete);
```

### Controllers

TODO

## Mongoose
Mongoose documentation
- http://mongoosejs.com/docs/guide.html
