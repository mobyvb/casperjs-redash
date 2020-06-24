# Scripts for Redash Screenshots

## Installation
* [Install Phantomjs](https://phantomjs.org/download.html) - I downloaded the Linux 64-bit tar.bz2, then copied `extracteddownload/bin/phantomjs` to `/usr/bin`
* [Install Casperjs](http://docs.casperjs.org/en/latest/installation.html) - `npm install -g casperjs`

## Running
* `$ export redash_email=<your redash email>`
* `$ export redash_password=<your redash password>`
* `$ casperjs screenshotgraphs.js`
