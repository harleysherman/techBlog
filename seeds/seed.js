const sequelize = require('../config/connection');
const { User, BlogPost, Comment } = require('../models');

const userData = require('./userData.json');
const blogPostData = require('./blogPostData.json');
//const commentData = require('./commentData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  let newPosts = [];

  for (const post of blogPostData) {
    newPosts.push(  
      await BlogPost.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    })
    )
  }

  //loop over comment data
  // for (const comment of commentData) {
  //   await Comment.create({
  //     ...comment,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //     blog_post_id: newPosts[Math.floor(Math.random() * newPosts.length)].id,
//    });
  // }

  process.exit(0);
};

seedDatabase();
