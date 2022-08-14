const withPWA = require('next-pwa')

module.exports = withPWA({
  trailingSlash: true,
  exportPathMap: function () {
    return {
      '/': {page: "/"}
    }
  },
  images: {
    loader: "custom"
  },
  pwa: {
    dest: 'public'
  }
});
