const express = require('express');
const blogController = require('../controllers/blogController');
// const newpageController = require('../controllers/newController'); //UPADATE

const router = express.Router();

// router.get('/newpage', newpageController.renderNewPage); //NEW
// router.get('/login', newpageController.renderNewPage); //NEW
// router.get('/register', newpageController.renderNewPage); //NEW
router.get('/create', blogController.blog_create_get);
router.get('/', blogController.blog_index);
router.post('/', blogController.blog_create_post);
router.get('/:id', blogController.blog_details);
router.delete('/:id', blogController.blog_delete);

module.exports = router;