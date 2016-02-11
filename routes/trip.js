var Trip  = require('../controllers/trip');

module.exports = function(express, app){

    var router = express.Router();
        router.route('/trips')
        .get(Trip.getAll)
        .post(Trip.add);

        router.route('/trips/:id')
        .get(Trip.get)
        .put(Trip.update)
        .delete(Trip.delete);

    app.use('/', router);
}
