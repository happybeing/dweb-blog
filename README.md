# React-Static Blog Demo

A simple blog that can be deployed to the 'clearweb' or SAFE Network web.

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

Build for production (output in `./dist`):

```
yarn build
```
Upload the contents of `./dist` to your website's root HTML directory on the web or SAFE Network.

### Automated Deployment to Web

To automate build and upload by ftp, see the bash script `./script/deployweb.sh`

### Automated Deployment to SAFE Network

If you are using SAFE Drive you can upload the website on SAFE Network with `rscync` as follows.

- Start SAFE Drive and connect to SAFE Network so that your SAFE Drive is mounted at `~/SAFE`

- Execute the following command, substituting the destination path of your website storage on SAFE Network. Note the trailing '/' on both source and destination paths.

```
   rsync -av --delete ./dist/ ~/SAFE/_public/rsdemo/www-root/
```
This can of course be used inside `deployweb.sh` or a similar script.

NOTE: using `rsync -av` is probablyre-uploading more files than necessary when you make changes because SAFE Drive does not preserve all file attributes. So you may like to experiment with more selective `rsync` options (i.e. ignoring some file attributes) and let us know what works best.

## Website Content

Create content as markdown files under `/content`. Later content will be derived from other sources such as Solid Linked Data (Turtle files) via LDP on clearweb or SAFE Network.

## Origin

This repo was created from the React Static v6 basic template, then modified to take home, about and blog content from /content from markdown files based on [old-examples-markdown](https://github.com/nozzle/react-static/tree/master/archives/old-examples/markdown). See also [rs-basic-test](https://github.com/theWebalyst/rs-basic-test/tree/take-content-from-markdown-files) for the early code.

## LICENSE

GPL3.0
