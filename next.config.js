const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const nextConfig = {
    reactStricMode: true,
    images: {
       loader: "akamai",
       path: "",
     }
}
module.exports = withPlugins([optimizedImages], { target: 'serverless' });
