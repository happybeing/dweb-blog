# DWeb Blog - how to deploy a Website to Web and Decentralised Web

DWeb Blog is a blazing fast website that is deployed to both the Web and DWeb (decentralised web) in a single command, and shows you how to do the same.

It supports combines the advanced features from [ReactJs](http://reactjs.org/) for design, and development, including hot reloading, with static optimisation and just-in-time preloading of [React-static](https://github.com/nozzle/react-static).

DWeb's purpose is to show you how to do everything it does, and to provide a live tutorial for website development by documenting its evolution from capable demo and starting point for a pro website, to fully fledged CMS.

With help, this project can be developed into a full featured Wordpress style CMS, combining the interoperability and analytical capabilities of Solid with the security, privacy and freedom of SAFE Network, and bridge the transition from the increasingly centralised web, to the a more robust user oriented decentralised web.

## Current Status

DWeb already works so you can visit it live on web and SAFE Network (see below) as well as use it as the basis for your own website.
Posts and content are created in markdown, and automatically uploaded to the Web *and* to SAFE Network with a single command.

Code and content versioning and backup are easily maintained under git. My intention is to build on this base to work with local headless CMS or cloud CMS, and other data types such as RDFa (Linked Data).

Workflow:

1. Create and edit markdown files under `./content`
 - Run `./scripts/deployweb.sh`
 - It's live!
    * Web:  http://dweb.happyeing
    * DWeb: [safe://dweb](safe://dweb) (Requires SAFE Browser, get it from [safenetwork.tech](https://safenetwork.tech)).

If you build on DWeb Blog yourself, you can help build the future by submitting your enhancements in the form of pull requests via [github/dweb-blog](https://github.com/theWebalyst/dweb-blog) (owned by Microsoft) or `safe://dweb.dgit` via [SAFE Drive/safegit](https://github.com/theWebalyst/safe-drive) (owned by us). The latter is still in alpha, so for the time being both will be kept in sync.

DWeb is itself a fork of [rs-blog-demo](https://github.com/theWebalyst/rs-blog-demo) (shh, don't tell github), my playground for learning about React-static, and a live example of building blazing fast websites on web *and* DWeb (SAFE Network). Some enhancements to DWeb will no doubt make it back into rs-blog-demo, which will remain a cleaner more basic starting point, but likely some way behind DWeb Blog. So for now best to fork DWeb Blog and start here.

## Quick Start

### Development

React-static uses `yarn` so if you don't have it, install without `npm` from [yarnpkg.com](https://yarnpkg.com) or using `npm` with:
```
$ npm install -g yarn
```

Install React-static:
```
$ yarn global add react-static
```
Get DWeb and run the development server.
```
git clone https://github.com/theWebalyst/dweb-blog && \
cd dweb-blog && \
yarn  && \
yarn start
```

Visit http://localhost:3000 and start adding content (see below), or editing the code if you want to modify the look and feel, styles, colours and so on. See the [React-static documention](https://github.com/nozzle/react-static#react-static) for how to customise the website code.

### Test a production build

```
yarn stage
yarn serve # at http://localhost:3000
```

## Deploy Website

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

Fork of [rs-blog-demo](https://github.com/theWebalyst/rs-blog-demo).

## LICENSE

- Website content is Copyright (C) Mark Hughes 2019. All Rights Reserved.
- Everything else is GPL3.0

'Content' includes everything under `./content` and `./public`.
