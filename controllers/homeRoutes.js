const router = require('express').Router();
const { BlogPost, User } = require('../models');
const withAuth = require('../utils/withAuth');

// existing blog posts if any have been posted
router.get ('/', async (req, res) => {
    try{
        //findAll() blog posts
        const blogPost = await BlogPost.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ],
        });
        const blogPosts = blogPost.map((blogPost) => blogPost.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('all', { 
            blogPosts
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//link for the user dashboard
router.get ('/dashboard', withAuth, async (req, res) => {
    try{
        //findAll() blog post
        const blogPostData = await BlogPost.findAll({
            where: {
                user_id: req.session.user_id,
            },
            include: [
                {
                    model: User,
                    attributes: ['name','email'],
                },
            ],
        })
        console.log(blogPostData);

        // const userBlogPost =  blogPostData.map((blogPost) => blogPost.get({ plain: true }));
        const userBlogPost = blogPostData.map(post => post.get({ plain: true }));

        res.render(`dashboard`, {
         blogPosts: userBlogPost,
         logged_in: true   
        });  
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

//option to log in
router.get ('/login', async (req, res) => {
    try{
        //render form template for login
        res.render("login");
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

//option to sign in
router.get ('/signup', async (req, res) => {
    try{
        //render form template for sign up
        res.render("signup");
    } catch (err) {
        res.status(500).json(err);
    }
  });

module.exports = router;