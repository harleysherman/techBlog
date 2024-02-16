const router = require('express').Router();
const userRoutes = require('./dashboardRoutes');
const blogPostRoutes = require('./blogPostRoutes');
//const commentRoutes = require('./commentRoutes');

router.use('/users', userRoutes);
router.use('/blogPost', blogPostRoutes);
//router.user('/comment', commentRoutes);

module.exports = router;
