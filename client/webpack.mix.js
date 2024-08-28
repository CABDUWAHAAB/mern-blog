const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");

// Set the public path
mix.setPublicPath("public");

// Compile SCSS with TailwindCSS
mix.sass("src/scss/styles.scss", "public/css").options({
  postCss: [tailwindcss("./tailwind.config.js")],
});

// Compile React and JavaScript
mix.js("./src/index.tsx", "public/js").react(); // Use .react() if you're working with React

// Minify CSS and JS files
mix.webpackConfig({
  optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        test: /\.css$/,
        minify: CssMinimizerPlugin.cleanCssMinify,
      }),
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  stats: {
    children: true,
  },
});

// Disable notifications
mix.disableNotifications();
