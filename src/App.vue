<template>
  <div>
    <tabbar></tabbar>

    <!--路由容器 -->
    <router-view></router-view>
  </div>
  <!--
  <div>
    <h1>状态更新</h1>
    Hello Vue - {{ myname }}
    <button @click="handleClick()">click</button>
    <h1>Todo</h1>
    <input type="text" v-model="mytext" />
    <button @click="handleAdd()">add</button>
    <ul>
      <li v-for="data in datalist" :key="data">
        {{ data }}
      </li>
    </ul>

    <h1>抽屉</h1>
    <navbar></navbar>
    <sidebar></sidebar>
  </div>
  -->
  <!-- <div id="nav">
     <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> 
  </div>
  -->
  <!-- <router-view /> -->
</template>

<script>
import tabbar from "./components/Tabbar";
// import axios from "axios";
// import navbar from "./components/Navbar";
// import Vue from "vue";
// Vue.component("navbar", navbar); // 注册全局组件
// ES6 模块导出
/*
export default {
  data() {
    return {
      myname: "guohai",
      mytext: "",
      datalist: []
    };
  },
  methods: {
    handleClick() {
      this.myname = "tuige";
    },
    handleAdd() {
      console.log(this.mytext);
      this.datalist.push(this.mytext);
    }
  },
  components: {
    navbar
  }
};
*/
export default {
  data() {
    return {};
  },
  components: {
    tabbar
  },
  mounted() {
    // 1- 后端配置好 cors
    /*
    axios.get('http://www.mei.com/appapi/home/eventForH5?params=%7B%7D&timestamp=1618210995079&summary=7142194e3afe226791217353760b4b42&platform_code=H5')
      .then(res=>{
        console.log(res.data);
      });
      */
    // 2- 猫眼 has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
    //需要使用vue的反向代理，配置在vue.config.js中的devServer设置
    /*
    axios.get('/ajax/movieOnInfoList?token=&optimus_uuid=92E2A7C09B6211EBB26DF56704B78AB994C95674E240480583D8A5FC955E1792&optimus_risk_level=71&optimus_code=10')
      .then(res=>{
        console.log(res.data);
      });
    */
    // 3- 卖坐
    // axios.get('')
    /*
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=510100&pageNum=1&pageSize=10&type=1&k=263451',
        headers: {
          'X-Client-Info' : '{"a":"3000","ch":"1002","v":"5.0.4","e":"16182920404430778456866817","bc":"510100"}',
          'X-Host': 'mall.film-ticket.film.list'
        },
        method: 'GET'
      }).then(res=>{
        console.log(res.data);
      });
      */
  }
};
</script>
<style>
/**
li {
  background-color: rgb(33, 146, 221);
}
*/
</style>

<!--
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
-->

<!-- 
The default setup is great for quickly prototyping a new project, while the manual setup provides more options that are likely needed for more 
production-oriented projects.
Save presets will be stored in JSON file named .vuerc in your user home directory. If you wish to modify saved presets/options, you can do so by editing 
this file.
During the project creation process, you may be also prompted to select a preferred package manager, or use the Taobao npm register mirror for faster 
dependency installation. Your chocies will also be saved ~/.vuerc.
The vue create command has a number of options and you can exploe them all by running: vue create --help.
Using the GUI
You can also create and manage project using a graphic interface with the vue ui command: vue ui
The above command will open a browser window with a GUI that guides you throught the project creation process.
Pulling 2.x Template (legacy)
VUE CLI >= 3 uses the same vue binary, so it is overwrites VUE CLI 2(vue-cli). If you still need legacy vue init functionality, you can install a 
vue global bridge:
npm install -g @vue/cli-init;

Plugins and presets
Plugins
Vue CLI uses a plugin-based architecture. If you inspect a newly created project's package.json, you will find dependencies that start with 
@vue/cli-plugin-. Plugins can modify the internal webpack configurations and inject commands to vue-cli-service. Most of features listed during 
the project creation process are implemented as plugins.
The plugin based architecture makes Vue CLI flexible and extensible. If you are interested in developing a plugin, check out the Plugin Development 
Guide.
TIP: you can install and manage Plugins using the GUI with vue ui command.
Installing Plugin in an Existing Project
Each CLI plugin ships with a generator (which creates files) and a runtime plugin (which tweaks the core webpack config and injects commands). When 
you use vue create to create a new project, some plugin will be pre-installed for you based on your feature selection. In case you want to install a 
plugin into an already created project, you can do so with the vue add command: vue add eslint.

Increasing the memory allocation of the virtual machine can improve performance but may also reduce the performance of other running application.
TIP
Vue add is specifically designed for installing and invoking Vue CLI plugins. It is not meant as a replacement for normal npm package. For normal 
npm packages, you should still use your package manager of choice.
Warning
It is recommended to commit your project's current state before running vue add, since the commaned will invoke the plugin's file generator 
and potentially make changes to your existing files.
The commands resolves @vue/eslint to the full package name @vue/cli-plugin-eslint, installs it from npm, and invokes its generator.
Without the @vue prefix, the command will resovle to an unscoped package instead. For example, to install the 3rd party plugin vue-cli-plugin-apollo:
vue add apollo;
You can also use 3rd party plugins under a specific scope. For example, if a plugin is named @foo/vue-cli-plugin-bar, you can add it with:
vue add @foo/bar;
You can pass generator options to the installed plugin (this will skip the prompt).
vue add eslint --config airbnb --lintOn save;
If a plugin already installed, you can skip the installation and only invoke its generator with the vue invoke command. The command will takes the same 
argurements as vue add.
TIP
If for some reason your plugins are listed in a package.json file other than the one located in your project, you can set the vuePlugins.resovleFrom 
option in the project package.json with the path to the folder containing the other package.json file.
For example, if you have a .config/package.json file:
{
  "vuePlugins":{
    "resovleFrom":".config"
  }
}
Project local plugin
If you neeed access to the plugin API in your project and don't want to create a full plugin for it, you can use the vuePlugins.service option 
in your package.json file.
{
  "vuePlugins":{
      "services":"my-commands.js"
  }
}
Each file need to export a function taking the plugin API as the first argurement. For more information about the plugin API, check out 
Plugin DevelopmentGuide.
You can also add files that will behave like UI plugins with the vuePlugins.ui option:
{
  "vuePlugins":{
    "ui":"my-ui.js"
  }
}
For more information, read the UI Plugin API.

Presets
A vue CLI preset is a JSON object that contains the pre-defined options and plugins for creating a new project so that the user don't have to go through the 
prompts to selection them.
Preset saved during vue create are stored in a configuration in your user home directory (~/.vuerc). You can directly edit this file to tweak/add/delete 
the saved presets.
Here's an example preset:
{
  "useConfigFiles":true,
  "cssPreprocessor":"sass",
  "plugins":{
    "@vue/cli-plugin-babel":{},
    "@vue/cli-plugin-eslint":{
      "config":"airbnb",
      "lintOn":["save","commit"]
    },
    "@vue/cli-plugin-router":{},
    "@vue/cli-plugin-vuex":{}
  }
}
The preset data is used by plugin generators to generate corresponding project file. In addition to the above fields, you can also add additional 
configuration for integrated tools:
{
  "useConfigFiles":true,
  "plugins":{...},
  "configs":{
    "vue":{...},
    "postcss":{...},
    "eslintConfig":{...},
    "jest":{...}
  }
}
These additional configurations will be merged into package.json or corresponding config files, depending on the value of useConfigFiles. 
For example, with useConfigFiles:true, the value of configs.vue will be merged into vue.config.js.
Preset Plugin Versioning
You can explicitly sepcify versions of the plugin being used:
{
  "plugins":{
    "@vue/cli-plugin-eslint":{
      "version":"^3.0.0",
      // ... other options for this plugin.
    }
  }
}
Note this is not required for offical plugins -- when omitted, the CLI will automatically use the lastest version availiable in the registry. 
However, it is recommended to provide a explicit version range for any 3rd party plugins listed in a preset.

Allowing Plugin Prompts
Each plugin can inject its own prompts during the project creation process, however when you are using the preset, those prompts will skipped 
because the Vue CLI assumes all the plugin options are already declared in the preset.
In some cases you may want the preset to only declare the desired plugins, while leaving flexibility by letting the user go through the prompts 
injected by the plugins.
For such scenarios you can specify "prompts":true in a plugin's option to allow its prompts to be injected:
{
  "plugins":{
    "@vue/cli-plugin-eslint":{
      //let the users pick their own ESLint config.
      "promts":true
    }
  }
}
Remote Presets
You can share a preset with other developers by publishing it in a git repo. The repo contain the following files:
preset.json: the main file containing the preset data (required). 
generator.js: a Generator that can inject or modify files in the preset.
prompts.js: a prompt file that can collect options for the generator.
Once the repo is published, you can then use the --preset option to use the remote preset when creating a project:
#use the preset from GitHub repo
vue reate --preset username/repo my-project

GitLab and BitBucket are also supported. Make sure to use the --clone option if fetching from private repos:
vue create --preset gitlab:username/repo --clone my-project
vue create --preset bitbucket:username/repo --clone my-project
# self-hosted repos
vue create --preset gitlab:my-gitlab-server.com:group/projectname --clone my-project
vue create --preset direct:ssh://git@my-gitlab-server.com/group/projectname.git --clone my-project
Local Filesystem Preset
When developing a remote preset, it can be tedious to have to repeatedly push the preset to a remote repo to test it. To simplify the workflow, 
you can directly work with local presets. Vue CLI will load local presets if the value for the --preset option is a relative or absolute file 
path, or ends with .json.
#./my-preset should be a directory containing preset.json
vue create --preset ./my-preset my-project
#or directly use a json file in cwd:
vue create --preset my-preset.json my-project

CLI service
Using the Binary
Inside a Vue CLI project, @vue/cli-service installs a binary named vue-cli-service. You can access the binary directly as vue-cli-service in npm 
script, or as ./node_modules/.bin/vue-cli-serivce from the terminal.
That is what you will see in the package.json of a project using the default preset:
{
  "scripts":{
    "serve":"vue-cli-service serve",
    "build":"vue-cli-service build"
  }
}
You can invoke these scripts using either npm or yarn:
npm run serve; or yarn serve;
vue-cli-service build
vue-cli-service build produces a producation-ready bundle in the dis/ directory, with minification for JS/CSS/HTML and auto vendor chunk splitting for 
better caching. The chunk manifest is inlined into the HTML.
There are a few useful flags:
--modern builds your app using Modern Mode, shipping native ES2015 code to modern browsers that support it, with auto fallback to a legacy bundle.
--target allows you to build any component(s) inside your project as a library or web components. See Build Target for more details.
--report and --report-json will generate reports based on your build stats that can help you analyse the size of the modules included in your bundle.
vue-cli-service inspect
You can use vue-cli-service inspect to inspect the webpack config inside a Vue CLI project. See Inspecting Webpack Config for more details.
Checking All Availiable Commands
Some CLI plugins will inject additional command to vue-cli-service. For example, @vue/cli-plugin-eslint injects the vue-cli-service lint command. You 
can all injected commands by running: npx vue-cli-service help;
You can also learn about the availiable options of each command with: npx vue-cli-service help [command];
Skipping Plugins
You can exclude sepcific plugins when running a command by passing the name of the plugin to the --skip-plugins options:
npx vue-cli-service build --skip-plugins pwa;
TIP
This option is available for every vue-cli-service command, including custom ones added by other plugins.
You can skip multiple plgins by passing names as a comma-sperated list.
npx vue-cli-service build --skip-plugins pwa,apollo;
Plugin names are resovled the same way they are during install, as described here.
#these are all equivalent.
npx vue-cli-service build --skip-plugins pwa;
npx vue-cli-service build --skip-plugins @vue/pwa;
npx vue-cli-service build --skip-plugins @vue/cli-plugin-pwa;

Caching and Parallelization
cache-loader is enabled for Vue/Babel/Typescrit compilations by default. Files are cached inside node_modules/.cache - if running into compilation 
issues, always try deleting the cache directory first.
thread-loader will be enabled for Babel/Typescript transpilation when the machine has more than 1 CPU cores.

Git Hooks
When installed, @vue/cli-service also installs yorkie, which allows you to easy specify Git hooks using the gitHooks field in your package.json:
{
  "gitHooks":{
    "pre-commit":"lint-staged"
  },
  "lint-staged":{
    "*.{js,vue}":[
      "vue-cli-service lint",
      "git add"
    ]
  }
}
WARNING
Yorkie is a fork of husky and is not compatible with the latter.

Configuration without Ejecting
Projects created via vue create are ready to go without the need for additional configuration. The plugins are designed to work with one another 
so in most cases, all you need to do is pick the features you want during the interactive prompts.
However, we also understand that it's impossible to cater to every possible need, and the needs of project may also change over time. Projects 
created by Vue CLI allow you to configure almost every aspect of tooling without ever needing to eject.

Browser Compilability
browserlist
You will notice a browserlist field in package.json (or a separate .browserlistrc file) specifying a range of browsers the project is targeting. 
This value will be used by @babel/preset-env and autoprefixer to automatically determine the JavaScript features that need to be transpiled and the CSS 
vendor prefixes needed.

Polyfills
A default Vue CLI project uses @vue/babel-preset-app, which uses @vue/preset-evn and the browserlist config to determine the Polyfills need for 
your project.
useBuiltIns:'usage'
By default, it passed useBuiltIns:usage to @vue/babel-preset-env which automatically detects the polyfills needed based on the language features 
used in your source code. This ensures only the minimum amount of polyfills are including in your final bundle. However, this also means if one of 
dependencies has specific requirement on polyfills, by default Babel won't be able to detect it.
If one of your dependencies need polyfills, you have a few options:
1, if the dependencies is written in an ES version that your target environments do not support: Add that dependency to the transpileDenpendencies 
option in vue.config.js. This would enable both syntax transforms and usage-based polyfill detection for that dependency.
2, if the dependency ships ES5 code and explicitly lists the polyfills needed: you can pre-include the needed polyfills using the polyfills option 
for @vue/Babel-preset-app. Note that es.promise is included by default because it's very common for libs to depend on Promises.
#babel.config.js
module.exports = {
  presets:[
    '@vue/app',{
      polyfill:[
        'es.promise',
        'es.symbol'
      ]
    }
  ]
}
TIP
It's recommended to add polyfills this way instead of directly importing them in your source code, becausce polyfills listed here can be automatically 
exclued if your browserlist targets don't need them.
3. if the dependency ships ES5 code, but uses ES6+ features without explictly listing polyfill requirements (e.g. Vuetify): Uses useBuiltIns:'entry' 
and then add import 'core-js/stable'; import 'regenerator-runtime/runtime'; to your entry file. This will import ALL polyfills based on browserlist 
targets so that you don't need to worry about dependency polyfills anymore, but will likely increase your final bundle size with some unused polyfills.

Polyfills when Building as Library or Web Components
When using Vue CLI to build a library or web components, it is recommended to pass useBuiltIns:false to @vue/Babel-preset-app to disable automatically 
polyfill injection. This ensures you don't unnecessary polyfills in your code, as it should be the responsibility of the consuming app to include 
polyfills.

Modern Mode
With Babel we are able to leverage all the newest language features in ES2015+, but that also we have to ship transpiled and polyfilled bundles 
in order to support older browsers. These transpiled bundles are often more verbose than the original native ES2015+ code, and also parse and run slower. 
Given that today a good majority of the modern browsers have decent support for native ES2015, it is a waste that we have to ship heavier and less 
efficient code to those browsers just because we have to support older ones.
Vue CLI offers a "Modern Mode" to help you solve this problems. When building for production with the following command:
vue-cli-service build --modern;
Vue CLI will produce two version of your app: one modern bundle targeting modern browsers that support ES Modules, and one legacy bundle targeting 
older browses that do not.
The cool part though is that there are no special employment requirements. The generated HTML file automatically employs the teachniques discussed 
in Phillip Walton's excellent post:
1. The modern bundle is loaded with <script type="module">, in browsers that support it; they are also preloaded using <link rel="modulepreload"> instead.
2. The legacy bundle is loaded with <script nomodule>, which is ingored by browsers that support ES Modules.
3. A fix for <script nomodule> in Safari 10 is also automatically inject.
For a Hello World app, the modern bundle is already 16% smaller. In production, the modern bundle will typically result in significantly faster 
parsing and evaluation, improving your app's loading performance.
TIP
<script type="module"> is loaded with CORS always enabled. This means your server must return valid CORS headers such as Access-Control-Allow-Origin: *. 
If you want to fetch the scripts with credentials, set the crossorigin option to use-credentials.
Also, modern mode uses inline script to avoid Safari 10 loading both bundles, so if you are using a strict SCP, you will need to explicitly allow 
the inline script with:
Content-Security-Policy: script-src 'self' 'sha256-4RS22DYeB7U14dra4KcQYxmwt5HkOInieXK1NUMBmQI=';
Detecting the Current Mode in Config
Sometimes you may need to change the webpack config only for the legacy build, or only for the modern build.
Vue CLI uses two environment variables to communicate this:
VUE-CLI-MODERN-MODE: The build was started with the --modern flag.
VUE-CLI-MODERN-BUILD: When true, the current config is for the modern build. Otherwise it's for the legacy build.
Important: These variables are only accessible when/after chainWebpack() and configureWebpack() functions are evaluated, (so not directly in the 
vue.config.js module's root scope). That means it's also available in the postcss config file.
Caveat: Adjusting the webpack plugins
Some plugins, i.e. html-webpack-plugin, preload-plugin etc. are only included in the config for modern mode. Trying to tap into their options in the 
legacy config can throw an error as the plugins don't exist.
Use the above tip about Detecing the Current Mode to manipulate plugins in the right mode only, and/or check if the plugin actually exsits in the 
current mode's config before trying to tap into their options.

HTML and Static Assets
HTML
The Index Files
The file public/index.html is a template that will be processed with html-webpack-plugin. During build, asset links will be inject automatically.
In addition, Vue CLI also automaically injects source hints (preload/prefetch), manifest/icon (when PWA is used), and the asset links for the 
JavaScript and CSS files produced during the build.
Interpolation
Since the index file is used as template, you can use the lodash template syntax to interpolate values in it:
<%= VALUE %> for unescaped interpolate.
<%- VALUE %> for HTML-escaped interpolate.
<% expression %> for javaScript control flows.
In addition to the default values exposed by html-webpack-plugin, all client-side env variables are also available directly. For example, 
to use the BASE_URL value:
<link rel="icon" href="<%=BASE_URL %> favicon.ico">
Preload
<link rel="preload"> is a type of resource hint that is used to specify resources that you need very soon after loading, which you therefore want 
to start preloading early in the lifecycle of a page load, before the browser's main rendering machinery kicks in.
By default, a Vue CLI app will automatically generator preload hint for all files that are needed for the initial rendering of your app.
The hints are injected using @vue/preload-webpack-plugin and can be modified/deleting via chainWebpack as config.plugin('preload').
Prefetch
<link rel="prefetch"> is a type of source hint that tells the browser to prefetch content that the user may visit in the near future in browser's 
idle time, after the page finishes loading. 
By default, a Vue CLI app will automatically generate prefetch hints for all Javascript files generated for async chunks (as a result of on-demand code 
splitting via dynamic import()).
The hints are injected using @Vue/preload-webpack-plugin and can be modified/deleted via chainWebpack as config.plugin(prefetch).
Note for multi page setups
When using a multipage setups, the plugin name above should be changed to match the structure 'prefetch-{pagename}', for example 'prefetch-app'.
Example:
//vue.config.js
module.exports = {
  chainWebpack: config => {
    //remove the prefetch plugin
    config.plugins.delete('prefetch')
    // or:
    // modify its options:
    config.plugin('prefetch').tap( options => {
      options[0].fileBlacklist = options[0].fileBlacklist || []
      options[0].fileBlacklist.push(/myasyncRoute(.)+?\.js$/)\
      return options
    })
  }
}
When the prefetch plugin is disabled, you can manually select specific chunks to pretech using webpack's inline comments:
import(/* webpackPrefetch: true*/ './someAsyncComponent.vue')
webpack's runtime will inject prefetch links when the parent chunk is loaded.
TIP
Prefetch links will consume bandwithd. If you have a large app with many async chunks and your users are primarily mobile and bandwidth-aware, 
you may want to diable prefetch links and manually select chunks to prefect.

Disable Index Generation
When using Vue CLI with an existing backend, you may need to disable the generation of index.html so that the generated assets can be used in 
a server-rendered page. To do so, the following can be added to vue.config.js:
 //vue.config.js
 module.exports = {
   //disable hashes in filenames
   filenameHashing: false,
   //delete HTML related webpack plugins
   chainWebpack: config => {
     config.plugins.delete('html')
     config.plugins.delete('preload')
     config.plugins.delete('prefetch')
   }
 }
However, this is not really recommanded because:
·Hard-coded file names makes it more difficult to implement efficient cache control.
·Hard-coded file names also do not play well with code-splitting, which generates additional JavaScript files with varying filenames.
·Hard-coded file names do not work with Modern Mode.
Instead, you should consider using the indexPath option to use the generated HTML as a view template in your server-side framework.

Building a Multi-Page App
Not every app has to be an SPA. Vue CLI supports building a multi-paged app using the pages option in vue.config.js. The built apps will efficiently 
share common chunks between multiple entries for optimal loading performance.

Static Assets Handling
Static assets can be handled in two different ways: 
· Imported in JavaScript or references in templates/CSS via relative paths. Such references will be handled by webpack. 
· Placed in the public directory and referenced via absolute paths. There assets will simply be coped and not go through webpack. 
Relative Path Imports
When you reference a static asset using relative path (must start .) inside JavaScript, CSS or *.Vue files, the assets will be included into webpack's 
dependency graph. During this compilation process, all asset URLs such as <img src="">, background: url(...), or CSS @import are resolved as module 
dependencies. 
For example, url(./image.png) will be translated into require ('./image.png'), and 
<img src='./image.png'>
will be compiled into: 
h('img',{attrs:{src:require('./image.png')}})
Internally, we use file-load to determine the final file location with version hashes and correct public based paths, use url-load to conditionally 
inline assets that are smaller than 4kb, reducing the amoount of HTTP requests. 
You can adjust the inline file size limit via chainWebpack. For example, to set the limit to 10kb instead: 
//vue.config.js
module.exports = {
  chainWebpack => {
    config.module
      .rule('images')
        .use('url-load')
          .loader('url-loader')
            .tap(option => Object.assign(options, {limit: 10240}))
  }
}

URL Transform Rules
· If the URL is an absolute path (e.g. /image/foo.png), it will be preserved as-it. 
· If the URL starts with ., it's interpreted as a relative module request and resolved based on folder structure in your file system. 
· If the URL starts with ~, anything after it is interpreted as a module request. This means you can even reference assets inside node modules:
<img src="~some-npm-package/foo.png">
· If the URL starts with @, it's also interpreted as a module request. This is useful because Vue CLI by default aliases @ to <projectRoot>/src. 
(templates only).

The public Folder
Any static assets placed in the public folder will simply copied and not go through webpack. You need to reference them using absolute paths. 
Note we recommend importing assets as part of your module dependency graph so that they will go through webpack with the following benefits:
· Scripts and stylesheets get minified and bundled together to avoid extra network requests. 
· Missing files cause compilation errors instead of 404 errors for your users. 
· Result filenames include content hashes so you don't need to worry about browsers caching their old versions.
The public directory is provided as a ecsape hatch, and when you reference it via absolute path, you need to take into account where your app will 
be deployed. If your app is not deployed at the root of a domain, you will need to prefix your URLs with the publicPath.
· In public/index.html or other HTML files used as templates by html-webpack-plugin, you need to prefix the link with <%= BASE_URL %>:
<link rel="icon" href="<%=BASE_URL %>favicon.ico">
· In templates, you will need to first pass the based URL to your component:
data() {
  return{
    publicPath: process.env.BASE_URL
  }
}
Then:
<img :src="'{publicPath}my-image.png'" >
When to use the public folder
· You need a file with a specific name in the build output.
· You have thousands of images and need to dynamically reference their paths.
· Some library may be incompatible with Webpack and you have no other option but to include it as a <script> tag.

Working with CSS
Vue CLI projects come with support for PostCSS, CSS Modules and pre-processors including Saas, Less, Stylus.

Reference Assets
All compiled CSS are processed by css-loader, which parses url() and resolves them as module requests. This means you can refer to assets using 
relative paths based on the local file structure. Note if you want to reference a file inside an npm dependency or via webpack alias, the path 
must be prefixed with ~ to avoid ambiguity. See Assets Static Handling fore more details.

Pre-processors
You can select pre-processors (Sass/Less/Stylus) when creating the project. If you did not do so, the internal webpack config is still pre-configured 
to handle all of them. You just need to manually install the corresponding webpack loaders: 
# Sass
npm install -D sass-loader sass
# Less
npm install -D less-loader less
# Stylus
npm install -D stylus-loader stylus
Note on webpack 4
When using webpack version 4, the default in Vue CLI 4, you need to make sure your loaders are compatible with it. Otherwise you will get errors about 
conflicting peer dependencies. In this case you can use an older version of the loader that is still compatible with the webpack 4.
# Sass
npm install -D sass-loader@^10 sass
Then you can import the corresponding file types, or use them in *.vue files with: 
<style lang="scss">
$color: red;
</style>
A Tip on Sass Performance
Note that when you using Dart Sass, synchronous compilation is twice as fast as asynchronous compilation by default, due to the overhead of asynchronous 
callbacks. To avoid the overhead, you can use the fibers package to call asynchronous importers from the synchronous code path. To enable this, simply 
install fibers as a project dependency: 
npm install -D fibers
Please also be aware, as it's a native module, there may be compilability issues vary on the OS and build environment. In that case, please run 
npm uninstall -D fibers to fix the problems.

Automatic Imports
If you want to automatically import files (for colors, variables, mixins ...), you can use the type-resources-loader. Here is an example for stylus 
that imports ./src/styles/imports.styl in every SFC and every stylus files:
//vue.config.js
const path = require('path')
module.exports = {
  chainWebpack : config => {
    const types = ['vue-modules', 'vue', 'normal-modules', 'mormal']
    types.forEach(type=>addStyleResource(config.module.rule('stylus').oneOf(type)))
  }
  function addStyleResouce(rule){
    rule.use('style-resource')
      .loader('style-resource-loader')
        .options({
          patterns: [
            path.resolve(_dirname, './src/styles/imports.styl')
          ]
        })
  }
}
You can also use the vue-cli-plugin-style-resource-loader.

PostCSS
Vue CLI uses PostCSS internally. 
You can configure PostCSS via .postcssrc or any config resource supported by postcss-load-config, and configure postcss-loader via css.loaderOptions.postcss 
in vue.config.js. 
The autoprefixer plugin is enabled by default. To configure the browser targets, use the browserlist field in package.json. 
Note on Vendor-prefixed CSS Rules
In the producation build, Vue CLI optimizes your CSS and will drop unnecessary vendor-prefixed CSS ruls based on your browser targets. With 
autoprefixer enabled by default, you should alwasy use only non-prefixed CSS rules.

CSS Modules
You can use CSS Modules in *.vue  files out of the box with <style module>.
To import CSS or other pre-processor files as CSS Modules in JavaScript, the filename should end with .module.(css|less|sass|scss|styl): 
import styles from './foo.module.css'
//works for all supported pre-processors as well
import styles from './foo.module.scss'
If you want to drop the .module in the filenames, set css.requireModuleExtension to false in vue.config.js: 
//vue.config.js
module.exports = {
  css: {
    requireModuleExtension : false
  }
}
If you wish to customize the generated CSS Modules class name, you can do so via css.loaderOptions.css in vue.config.js. All css-loader options are 
supported here, for example localIdentName and camelCase: 
//vue.config.js
module.exports = {
  css: {
    loaderOptions:{
      css:{
        //Note: the following config format is different between Vue CLI v4 and v3.
        //For Vue CLI v3 users, please refer to css-loader v1 documentations.
        // https://github.com/webpack-contrib/css-loader/tree/v1.0.1
        module:{
          localIdentName: '[name]-[hash]'
        },
        localsConvention: 'camelCase'
      }
    }
  }
}

Passing Options to Pre-processor Loaders
Sometimes you may want to pass options to the pre-processor's webpack loader. You can do that using the css.loaderOptions option in vue.config.js. 
For example, To pass some shared global variables to all your Sass/Less styles: 
//vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      //pass options to sass-loader
      //@/ is an alias to /src.
      // so this assumes you have a file named './src/variables.sass'
      // Note: this options is named 'prependData' in sass-loader v8
      sass:{
        additionalData: '@import "@/variables.sass"'
      },
      // By default the 'sass' option will apply to both syntaxes
      // because the 'scss' syntax is also processed by sass-loader underlyingly
      // but when we configuring the 'prependData' option
      // 'scss' syntax requires an semicolon at the end of a statement, while 'sass' syntax requires none.
      // in this case, we can target the 'scss' syntax separately using the 'scss' option.
      scss:{
        additionalData: '@import/variables.scss'
      },
      //pass Less.js Options to less-loader
      less:{
        // http://lesscss.org/usage/#less-options-strict-units `Global Variables'
        // 'primary' is global variables fields name
        globalVars : {
          primary: #fff
        }
      }
    }
  }
}
Loaders which can be configured via LoaderOptions include:
· css-loader
· postcss-loader
· sass-loader 
· less-loader
· stylus-loader
TIP
This is preferred over manually tapping into specific loaders using chainWebpack, because these options need to be applied in multiple locations 
where the corresponding loader is used.

























-->
