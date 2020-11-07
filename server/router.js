const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/add')
  .post(controllers.addOne)

  router
  .route('/all')
  .get(controllers.getAll)
  .delete(controllers.deleteAll)

  router
    .route('/deleteOne/:id')
    .delete(controllers.deleteOne)

module.exports = router;