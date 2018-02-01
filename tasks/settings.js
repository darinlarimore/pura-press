module.exports = {
  "browsersync": {
    "files": [
      "./src/_compiled/styles.css",
      "./src/_compiled/*.js",
      "./*.php"
    ],
    // "server": "src", // use this if it IS a static site
    "proxy": "http://local.pura-press.test/", // use this if it's NOT a static site, ex: app.mysite.dev
    "notify": false,
    "open": false
  },
  "templatePath": "/*.html" // Relative to the src directory
}
