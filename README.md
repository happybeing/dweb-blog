# React-Static Blog Demo

A simple blog that can be deployed to the 'clearweb' or SAFE Network web.

WORK IN PROGESS!

## Create A React-Static Blog

### Development

```
git clone https://github.com/theWebalyst/rs-blog-demo && \
cd rs-blog-demo && \
yarn  && \
yarn start
```

Visit http://localhost:3000 and start adding content (see below), or editing the code if you want to modify the look and feel, styles, colours and so on. See the [React-static documention](https://github.com/nozzle/react-static#react-static) for how to customise the website code.

### Test a production build

```
yarn stage
yarn serve # at http://localhost:3000
```

## Deploy Your Website

Build for production:

```
yarn build
```
#### TODOs
```
   [ ] TODO how to deploy to web (js script)
   [ ] TODO how to deploy to SAFE Network (bash script)
```

## Website Content

Create content as markdown files under `/content`. Later content will be derived from other sources such as Solid Linked Data (Turtle files) via LDP on clearweb or SAFE Network.

## Origin

This repo was created from the React Static v6 basic template, then modified to take home, about and blog content from /content from markdown files based on [old-examples-markdown](https://github.com/nozzle/react-static/tree/master/archives/old-examples/markdown). See also [rs-basic-test](https://github.com/theWebalyst/rs-basic-test/tree/take-content-from-markdown-files) for the early code.

## LICENSE

GPL3.0
