const Blog = require("../model/blogModel");
const User = require("../model/userModel");

const resolvers = {
  Query: {
    blog: (parent, args) => Blog.findById(args.id),
    blogs: () => Blog.find({}),
    user: (parent, args) => User.findById(args.id),
    users: () => User.find({}),
  },
  Mutation: {
    addBlog: (parent, args) => {
      const blog = new Blog({
        title: args.title,
        author: args.author,
        description: args.description,
        image: args.image,
      });
      return blog.save();
    },
    addUser: (parent, args) => {
      const user = new User({
        firstName: args.firstName,
        lastName: args.lastName,
        email: args.email,
        password: args.password,
      });
      return user.save();
    },
  },
};

module.exports = { resolvers };
