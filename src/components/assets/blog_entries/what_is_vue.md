# What is Vue?
![npm create vite@latest](./blog_images/vue/vue.jpg)

**_Vue_** (pronounced /vjuː/, like view) is a JavaScript framework used to build user interfaces.
It provides a declarative and component-based programming approach that aids in the speedy development of user interfaces, whether they are basic or complicated.

Because it incorporates the prop-driven development of React and the templating capability of Angular, Vue.js is frequently referred to as a hybrid of React and Angular.

However, vue emphasizes regular HTML and CSS rather than being a CSS-in-JS framework like React or depending on TypeScript (a superset of JavaScript), as Angular does. This makes Vue an approachable framework for beginners to pick up.

if you imagine javascript as an alphabet, then Vue is a phrasebook that gives programmers the tools to create complex phrases in a shorter time.

Vue's two main characteristics are:

- **_Declarative rendering_**, which enables us to declaratively describe HTML output depending on the JavaScript state. Vue extends normal HTML with a template vocabulary. To interpolate the necessary data in the DOM, double curly braces are utilized as placeholders.
- **_Reactivity_**: When JavaScript state changes, Vue automatically monitors them and quickly updates the DOM, this is one of Vues most recognizably distinctive features. It facilitates easy-to-understand state management.

EXAMPLE:

<!-- testing  -->

<pre>
  &lt;div id="app" &gt;
    &lt;button @ click="count++"&gt;
      Count is: {{ count }}
      &lt;/button&gt;
    &lt;/div&gt;

    <script>
    import { createApp } from 'vue'
      createApp({
        data() {
          return {
            count: 0
          }
        }
      }).mount('#app')
    </script>
</pre>

<br/>

# Components

Vue Single-File Components (a.k.a. \*.vue files, abbreviated as SFC) is a special file format that allows us to encapsulate the template, logic, and styling of a Vue component in a single file.

In the example below we can see that a Vue SFC is a natural extension of the classic trio of HTML, CSS, and JavaScript.
The &lt;template&gt;, &lt;script&gt;, and &lt;style&gt; represent the view, logic, and styling of a component that can be imported and used throughout your project.

<pre>
    <script>
      export default {
      // Properties returned from data() become reactive state
      // and will be exposed on `this`.
        data() {
          return {
            count: 0
          }
        },
        // Methods are functions that mutate state and trigger updates.
        // They can be bound as event listeners in templates.
        methods: {
          increment() {
            this.count++
          }
      },
      // Lifecycle hooks are called at different stages
      // of a component&#39;s lifecycle.
      // This function will be called when the component is mounted.
      mounted() {
        console.log(`The initial count is ${this.count}.`)
      }
    }
    </script>

    &lt;template&gt;
      &lt;!-- this.count is displayed reactively here using Declarative rendering --&gt;
      &lt;button @ click=&quot;count++&quot;&gt;Count is: {{ count }}&lt;/button&gt;
    &lt;/template&gt;

    <style scoped>
      button {
        font-weight: bold;
      }
    </style>

</pre>
<hr>
In another entry, we will discuss the process of creating proper single-file components (SFC), like a header and a footer that you can use as a strong starting point for future Vue projects.
<hr>
<br/>

Vue has a variety of uses that you can choose from according on your use case:

- Static HTML improvement without a build step
- Web components can be embedded on any page.
- Application with Just One Page (SPA)
- Server-Side Rendering / Full Stack (SSR)
- Static site generation using Jamstack (SSG)
- focusing on WebGL, mobile, desktop, and even the terminal

By the end of this blog, if you follow along, You should have a functioning Vue.js application running on a local server that renders quick feedback in-browser while you work using hot module reloading with Webpack.

<br>

# Getting Started:

The Vue CLI (command line interface) is a powerful component for Vue.js development. The major feature of the Vue CLI is its ability to construct and pre-configure a new single-page application with the vue create command. The Vue CLI also includes a variety of useful features that improve the Vue development experience.

there are 2 major versions of Vue: Vue2 & Vue3
Vue 3 is the current, most recent major version of Vue.
It has new capabilities including teleport, suspense, and multiple root elements per template that are not included in Vue 2. Additionally, it has breaking changes that render Vue 2 incompatible.

Because many libraries used in creating this blog are still not Vue3 compatible, Vue2 was used. however much of the syntax and practices from Vue 2 are used in Vue 3 and the migration from Vue2 to Vue3 is relatively simple to perform at a later date.

# Prerequisites

You will need the following:

- Node.js version 10.6.0 or greater installed on your computer.
- basic knowledge of JavaScript, HTML, and CSS

## Step 1 — Download the Vue CLI

You must issue a command through npm or Yarn to download Vue CLI however it's advisable to stick to one approach or the other throughout your project.

Moving forward, this tutorial will use npm commands.

The required Vue CLI files can be downloaded from the registrar, by running the command below:

```
npm i -g @vue/cli

```

- in the context of command options, -g indicates that the code should be installed on your computer globally.
  you can add it if you want to utilize the CLI from any location on your machine, if you do not include it the vue CLI will only function in the directory where it was installed.
  <br/>
  After installation, you will have access to the vue binary in your command line.
  You can verify that it is properly installed by simply running

```
  vue
OR
  vue --version
```

<br/>
At this point, you have successfully downloaded npm globally along with the Vue CLI tool that you will use in the next section to create a generated Vue.js project.

## Step 2 — Generating a Single-Page Application

manually creating a project is not the most efficient use of your time Since setting up a new Vue.js project from scratch can potentially take hours.

The real strength of Vue CLI is that it gives you a ready-made template based on your requirements.
It's all set up, so you can get right to work creating your website or application. The command line prompt in Vue CLI 3 will ask you a few questions about your project, download the necessary files, and pre-configure it for you so that you can start working right away.

To generate a single-page application, navigate to the directory you’d like your Vue project in, then run the following:

```
vue create your-project-name
```

- in this cmd **_your-project-name_** is the name of your project and can be whatever you’d like. It will be the name of the folder that contains all of your Vue.js project files.

Once you type out that command, continue by pressing Enter. You will then receive the following prompt:

```
Vue CLI v5.0.8
? Please pick a preset: (Use arrow keys)
  Default ([Vue 3] babel, eslint)
  Default ([Vue 2] babel, eslint)
❯ Manually select features

```

You can use the Vue 2 or Vue 3 defaults if you do not want to specify selected features.
However, for the purposes of this example, we will select "Manually select features" to observe how each option is installed by the CLI.

After selecting `Manually select features`, you will receive several options, listed below, you will notice that some of these items are already selected. You may select as many or as few as you would like.

However, for this tutorial, select the following by pressing &lt;space&gt; while the cursor is highlighting the option:

<pre>
Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: (Press &lt;space&gt; to select, &lt;a&gt; to toggle all, &lt;i&gt; to invert selection, and &lt;enter&gt; to proceed)
❯◉ Babel
 ◯ TypeScript
 ◉ Progressive Web App (PWA) Support
 ◉ Router
 ◯ Vuex
 ◯ CSS Pre-processors
 ◉ Linter / Formatter
 ◯ Unit Testing
 ◯ E2E Testing
</pre>

<br/>
### What are these options, and why do we want them?

- `Babel` is a toolchain that is mainly used to convert ECMAScript 2015+ code into a **_backward compatible_** version of JavaScript in current and **older browsers** or **environments**.

- `Progressive Web Application (PWA)` is a type of web app that can operate both as a web page and mobile app on any device.<br/>
  `// This website is a PWA so you can download it to your device if you wish.`

- `Vue Router` helps link between the browser's URL/History and Vue's components allowing for certain paths to render whatever view is associated with it.<br/>
  `// It is the reason why you can share the URL to this individual blog entry`

- `linting` is an automated process for static analysis of the codebase for potential errors and inconsistencies with the project’s coding standards. <br/>

<hr>

<br/>

### Continuing Configuration

Once you have your options selected, press the ENTER key. The CLI will then ask you additional questions in order to determine how each of the features you selected is installed for your project.

The first question will ask which version of Vue you’d like to use: 2.x or 3.x. For this tutorial, we will use Vue 2 for greater support from the Vue Community.

```
Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, PWA, Router, Linter
? Choose a version of Vue.js that you want to start the project with
3.x
❯ 2.x
```

Next, Vue CLI will ask about the history mode. History mode will make each route its own URL. This means you will not have the /#/ (hash) in your application’s URL
If you do use history mode, you will need a Node server to run your project. This is not a problem, because Vue CLI 3 provides you with a Node server.

for this page because I won't initially be making any requests to a server I will Type N to answer yes to history mode:

```
Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, PWA, Router, Linter
? Choose a version of Vue.js that you want to start the project with 2.x
? Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n)
```

Next, you will receive questions regarding the linter style.
the linter will evaluate your code as you develop your application and enforce syntactical rules during development.
this helps to keep your code consistent no matter who works on your project and what operating system or IDE a developer is using.

Typically your integrated development environment (IDE) can read this configuration and format your code on save.

```
Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, PWA, Router, Linter
? Choose a version of Vue.js that you want to start the project with 2.x
? Use history mode for router? (Requires proper server setup for index fallback in production) No
? Pick a linter / formatter config: (Use arrow keys)
ESLint with error prevention only
ESLint + Airbnb config
❯ ESLint + Standard config
ESLint + Prettier

```

The following option lets you decide when ESLint should format your code. When you save your work or upload it to a platform like GitHub, GitLab, or BitBucket, this can happen. It is advised to check any changes before committing to version control by using Lint on save:

<pre>
Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, PWA, Router, Linter
? Choose a version of Vue.js that you want to start the project with 2.x
? Use history mode for router? (Requires proper server setup for index fallback in production) No
? Pick a linter / formatter config: Basic
? Pick additional lint features: (Press &lt;space &gt; to select, &lt;a&gt; to toggle all, &lt;i&gt; to invert selection, and &lt;enter&gt; to proceed)
❯◉ Lint on save
◯ Lint and fix on commit

</pre>

after going through all your selected options, the CLI will ask you if you want to store these configurations as dedicated files or in the package.json.

For several reasons, storing configurations in separate files is considered the best practice. This way, configurations can be more easily shared between projects, and you'll also keep your `package.json` as readable as possible by defining only the crucial details about your app

```
Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, PWA, Router, Linter
? Choose a version of Vue.js that you want to start the project with 2.x
? Use history mode for router? (Requires proper server setup for index fallback in production) No
? Pick a linter / formatter config: Basic
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? (Use arrow keys)
❯ In dedicated config files
In package.json

```

The CLI tool will then ask if you wish to save this choice as a preset for upcoming projects.
If you are creating multiple projects for your employer and you want things to be consistent, this is helpful.

Go ahead and save this configuration as a preset; Vue CLI will ask you to rename it. Name it `coding_corps vue intro`... or whatever you would like:

At this point, you will have something along the lines of this in your terminal summarizing all of your options:

```

Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, PWA, Router, Linter
? Choose a version of Vue.js that you want to start the project with 2.x
? Use history mode for router? (Requires proper server setup for index fallback in production) No
? Pick a linter / formatter config: Basic
? Pick additional lint features: Lint on save
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? (y/N)
```

Press ENTER and Vue CLI will start creating your app.
When completed, navigate to the project folder and run the cmd `npm run serve`

You do not need to download dependencies, as the CLI already did that for you.
To view your generated project, open your browser of choice and visit localhost:8080 in the URL bar.
You will find a welcome screen with the Vue logo and the technologies you’ve selected in the previous steps.

<div>
<img style="width:100%; border-radius: 7px;
border: 5px solid #555;
" src="../images/what_is_vue/vue_sc.png" >
</img>
</div>

<br/>
<center> <h1>Congratulations!!</h1></center>

You have now created your first vue web application using Vue.js and the vue CLI!
The created code base is now available for editing you can also leave the server running to monitor your code changes live in the browser.

<br/>
<style>
 pre {    
    font-size: 15px;
        font-family: Monaco, 'Courier New', Courier, monospace;
    overflow-x: scroll;
    line-height: 1.5;
}
</style>
