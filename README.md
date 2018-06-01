# vue-ssr

A Simple Vue.js project to demonstrate `server-side rendering with VueJS` from the ground-up (without using any framework like [nuxtjs](https://nuxtjs.org/)).

This helped me understand the nitty-gritties of server-side rendering in general.

Also performs client-side `hydration` which allows app routing to work client-side once the html is loaded first time.

## Build Setup

Here's how you run can see things in action:

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for server-side rendering
npm run build # build client bundle
npm run build-server # build server bundle

# Run express server to serve assets server-side
node server.js
```

Detailed description of everything can be found in the official [VueJS SSR Guide](https://ssr.vuejs.org/guide).
