const router = require('express').Router();
const { BlogPost, User } = require('../models');
const withAuth = require('../utils/auth');

// existing blog posts if any have been posted
router.get ('/', async (req, res) => {
    try{
        //findAll() blog posts
        const blogPost = await BlogPost.findAll({
            include: [
                {
                    model: BlogPost,
                    attributes: ['title', 'description'],
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

//navigation links for the homepage and the dashboard
//http://localhost:3001/ --the homepage
router.get ('/', async (req, res) => {
    try{
        //findAll() blog posts
        const blogPosts = await BlogPost.findAll({
            include: [
                {
                    model: BlogPost,
                    attributes: ['title', 'description'],
                },
            ],
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//option to log in
router.get ('/login', async (req, res) => {
    try{
        //findAll() blog posts
        const blogPosts = await BlogPost.findAll({
            include: [
                {
                    model: BlogPost,
                    attributes: ['title', 'description'],
                },
            ],
        });
    } catch (err) {
        res.status(500).json(err);
    }
});