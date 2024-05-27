
# What is routing ?

When we click on a link in a traditional server-rendered web app, the browser receives an HTML response from the server and reloads the entire page with the new HTML. This is traditional serverside routing.

In many Single-Page Applications (SPA)s, the "routing" is done on the client side, via the browser. A client-side router is responsible for managing the application's rendered view by intercepting the navigation and dynamically updating the current page. this allows the user to switch between pages without refreshing the entire page resulting in an overall better user experience.

In VUE.js the vue-router links between the browser’s URL/History and Vue’s components allowing for certain paths to render the associated view.  


When creating a vue project, the vue-router can be set up very easily by default.


### Step 1: Install the vue router js library 

Vue Router can be installed through Npm with the package named vue-router using below command.


``` 
    npm install vue-router
```

It can also be used via a script tag as shown below.

``` 
<script src="https://unpkg.com/vue-router"></script>
```
### Step 2: Create your Vue project

``` 
vue create test-routing-spa 
```

### Step 3: add our Vue router using the following command.

```
vue add router

```
