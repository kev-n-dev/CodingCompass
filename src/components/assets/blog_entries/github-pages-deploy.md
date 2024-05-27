# Deploying Vite + React Project to GitHub Pages

This guide outlines the steps to deploy your Vite + React project to GitHub Pages, allowing you to host your project online for free.

## Prerequisites

Before proceeding, ensure you have the following:

- Node.js installed on your machine
- A GitHub account
- Your Vite + React project ready to deploy

## Set up your project to be deployable

1. **Install `gh-pages` package:**

   ```bash
   npm install gh-pages --save-dev
   ```
   
2. Configure vite.config.js for GitHub Pages:

   Add the following configuration to your vite.config.js file:

   ```js
   // vite.config.js

   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [react()],
    base: '/your-repo-name/' // Change 'your-repo-name' to your GitHub repository name
   })
   ```
 
3. Update your package.json file with the following scripts:

   ```js
   {
      "scripts": {
         "deploy": "vite build && gh-pages -d dist",
         "predeploy": "rm -rf dist"
      }
   }
   ```

4. Configure GitHub Pages settings:

   Go to your GitHub repository settings.
   Scroll down to the GitHub Pages section.
   Set the source branch to gh-pages. ( create this branch if it doesnt exist)

5. Deploy to GitHub Pages:

   Run the following command to deploy your project to GitHub Pages:

   ```bash
   npm run deploy
   ```
6. Access your deployed site:

   Your Vite + React project is now deployed to GitHub Pages. You can access it using the following URL:

   ```
   https://your-github-username.github.io/your-repo-name/
   Replace your-github-username with your GitHub username 
   and your-repo-name with the name of your GitHub repository.
   ```


Additional Notes


to update your file you can 
Remember to commit and push your changes to GitHub before deploying.
It may take a few minutes for changes to reflect on your deployed site.
If you encounter any issues during deployment, refer to the GitHub Pages documentation or the respective documentation of the tools used.
That's it! Your Vite + React project is now live on GitHub Pages.
