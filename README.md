[![WTFPL 2.0][license-image]][license-url]

# News feed

### General Info
During an interview process in one outsource company I was given a tch task to complete.

I considered to use this task as additional tiny pet project for future employments and (probably)
not to do more similar 'tech' tasks just to show my familiarity with specific languages/libraries.

Yes, I'm also lazy as all of us :upside_down_face:

### Description

There is a set of data available in public.

I need to take that data and display it in the browser.
The main goal is to show page with each data entry' title and image.
 - There should be a possibility to edit each title and save it (of course).
 - Moreover, user should be able to delete each data entry.
 - After deletion for a few seconds there should be a simple notification to user and ability to restore deleted item.
In addition there could be another page that displays only list of all titles.

To do that I used React, Redux, few functional methods (written by myself) and composition.
I also used [React Material Web Components](https://github.com/jamesmfriedman/rmwc) library which is a wrapper of official
[Material Design Components](https://github.com/material-components/material-components-web/blob/master/docs/framework-wrappers.md) in Web.

### How To

To run this project just install all its dependencies running
```
npm -i
```
or (preferably)
```
yarn install
```

Then just run
```
npm run build
```
or (preferably)
```
yarn run build
```

This will run simple `http-server` that serves the project on `localhost:8080`. Open that in browser.

Enjoy! :wink:

[license-url]: http://www.wtfpl.net
[license-image]: https://img.shields.io/badge/licence-WTFPL-blue?style=flat-square
