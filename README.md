# 🐅 [fabianisaksson.com](fabianisaksson.com) 🐅

A place for me to learn and play around.
Boostrapped with create react app.

## 📐 Prequisites

This project is built and run with yarn 2 and the PnP (plug and play) solution. No more node_modules!
To set up yarn 2 run the snippets below in your terminal while standing in this projects directory.

`npm install -g yarn`

`yarn set version berry`

## 🏎️ Running it locally

`yarn`

`yarn start`

And runing the production version is just

`yarn start:production`

## 🚢 Deployments

This project is deployed as a static SPA to an S3 bucket on AWS.
The deployments runs on github actions, check out `.github/workflows/deployS3Bucket.yml` for the deats.

## 🖥️ IDE

I use vscode and have the `.vscode` config checked in since it contains some setup to make vscodes typescript and eslint plugins work without node_modules.
