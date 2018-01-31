# Pura Press
Pura is an opinionated, but lightweight project starter kit. Powered by ES2015, Node.js, Webpack and more! Now inside a wordpress theme!

## Requirements
- Node 7.8.0 (use [nvm](https://github.com/creationix/nvm) to manage your Node versions!)
- [Yarn](https://yarnpkg.com) `npm i -g yarn`

## Setting up
1. Clone/download to your machine inside the wp-content/themes folder
2. Run `yarn` to install dependencies

## Deploying/compiling the project
By default, directories that contain compiled CSS and JavaScript are ignored. You may change this by altering the `.gitignore`. However, **we recommend not committing compiled assets to your project** and letting your continuous integration/deployment tool compile your project before deployment. This is for a couple reasons:

1. 🌀 You no longer need to track giant, minified files in Git
2. ⚠️ When you have merge conflicts they will _only_ occur in the source files and be simpler to resolve
3. ⏱ You no longer need to run a `build` task before deploying changes

## Tasks

| Task                        | Description                                                                                                  |
|:----------------------------|:-------------------------------------------------------------------------------------------------------------|
| `yarn start` or `yarn dev`  | Watch for changes to new files.                                                                              |
| `yarn test`                 | Lints your CSS and JS files. Useful when you want to ensure your build won't fail because of a linting error |
| `yarn build && yarn deploy` | **Only run in your deployment process!** Compiles CSS/JS, minifies images and revs files                     |

## 🚨 IMPORTANT! Using Yarn vs. NPM
**Please note:** We are using Yarn on this project and not using NPM. This means **you should not use npm commands when adding/removing dependencies**! Please refer to the [Yarn's documentation](https://yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison) to ensure you are running the correct `yarn` command to:

- Add new dependencies
- Remove dependencies
- Reinstall dependencies

## Setup process

For this example I'm using twentyseventeen as an example theme but the same method can be applied other themes. If it's got css and js it will work... probably, just may have to change some paths.

Prep: config wordpress like normal, make a db, create mamp apache server to test locally, set wp-config to the correct settings. [Wordpress's documentation](https://codex.wordpress.org/Installing_WordPress)

### Copy files and configure browsersync

1. Create new theme folder set .gitignore
2. Copy files from twentyseventeen into new theme folder.
3. Copy Pura files into new theme also! Just drop them in the theme root.
4. Set browsersync to proxy to the local url and if you want you can set to watch for php changes too in `settings.js`

### Configure Styles

1. Set style.css in the theme's root to `@import './src/_compiled/styles.css';`
2. Copy the long list of styles to a module to test it out. Run yarn to build modules, then run yarn start to fire it up. Point your browsers to localhost:300x If the styles are broken you might need to make sure the paths are correct. If the default pura page shows on local you might have the browser sync set to sever or the wrong local url in there.

### Configure Javascript

I think there are multiple ways to do this. I'll demo one method, which adds js on top of the base js and won't trip the linter, I hope.

1. Locate functions.php it's in the root.
2. Add `wp_enqueue_script( 'pura-script', get_template_directory_uri() . '/src/_compiled/app.js' );` to functions.php I think this works well here because it's always gonna get pulled in vs. putting it like in the footer template.
3. In app.js you can pick and choose modules with es6 imports.

### After Thoughts
* Building and deploying.

