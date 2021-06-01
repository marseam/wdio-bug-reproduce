# wdio-bug-reproduce
Using node 14 latest
1. pull this repo
2. npm install
3. npm run test:wdio
4. notice Cannot use import statement outside a module

note: this worked until i removed  require: ['@babel/register'], from wdio.conf.js which wdio removed the need fo this in v7.
