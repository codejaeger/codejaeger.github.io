## Credits

This website (template) is based on [Gatsby's RolwinReevan Portfolio template](https://github.com/rolwin100/rolwinreevan_gatsby_blog) using [ant-design](https://ant.design).

It is rewritten for academic usage with the help of [Reapor-Yurnero](https://github.com/Reapor-Yurnero).

Full credits for this awesome website template goes to [tc-imba's Gatsby Personal Website Template for Academic Usage](https://github.com/tc-imba/gatsby-theme-academic/tree/master).

## Why Gatsby?

Because of The Great Gatsby!! On a serious note though, being written in Javascript it can be used with React.js almost with no extra effort. Also, it's my hope someday to augment the website with some cool Three.js animations (you know the stuff where everything flies on the screen making browsing almost impossible :smile:)

### Build + deploy notes
* Clean up cache before during development for "hot" reloading `rm -rf example/node_modules/.bin example/node_modules/.cache/ example/.cache/ deploy/public/`.
* deploy using `yarn deploy` (takes a few minutes to take effect), develop using `yarn develop` (almost instantaneous).

## Deployment

This site uses GitHub Actions for automatic deployment to GitHub Pages. The deployment happens automatically when you push to the `master` branch.

### Manual Deployment Steps

If you need to deploy manually or set up deployment for a new repository:

1. **Enable GitHub Pages:**
   - Go to your repository Settings → Pages
   - Under "Source", select "GitHub Actions"

2. **GitHub Actions Workflow:**
   - The `.github/workflows/deploy.yml` file handles automatic deployment
   - It installs system dependencies, builds the site, and deploys to GitHub Pages
   - No manual intervention needed - just push to `master`

3. **Local Development:**
   ```bash
   # Development server with hot reload
   yarn develop
   
   # Clean cache if needed
   rm -rf example/node_modules/.bin example/node_modules/.cache/ example/.cache/ deploy/public/
   
   # Build locally (optional - GitHub Actions handles this)
   yarn build
   ```

4. **Troubleshooting:**
   - Check the Actions tab in your GitHub repository for deployment status
   - If deployment fails, check the workflow logs for errors
   - Common issues: missing system dependencies, large file sizes, or network timeouts
