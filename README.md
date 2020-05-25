[![WTFPL 2.0][license-image]][license-url]

# News feed

### General Info
During an interview process in one outsource company I was given a tech task to complete.

I considered to use this task as a possible pet project for future employments and (probably)
not to do more similar 'tech' tasks just to show my familiarity with specific languages/libraries.

Yes, I'm also lazy like all of us :upside_down_face:

### Description

There is a set of data available in public.

I need to take that data and display it in the browser.
The main goal is to show a page with each data entry in format of its title and image. Data is provided in format of a few nested arrays.
 - Each specific item contains its `width` property. It's based on the 12-column grid system, value is the # of columns.
 - There should be a possibility to edit each title and save it (locally only).
 - Moreover, user should be able to delete each data entry (locally only).
 - After deletion, for a few seconds there should be a simple notification to user and ability to restore deleted item.
In addition there could be another page that displays only list of all titles.

There were not mentioned any requirements about responsive design and styles so I did not nothing in that field. Just a simple consideration about the pages, routing and items' styles. *YAGNI => Profit!* :grinning:

To do that I used React, Redux, immer, a few functional methods (written by myself) and composition.
I also used [React Material Web Components](https://github.com/jamesmfriedman/rmwc) library which is a wrapper of official
[Material Design Components](https://github.com/material-components/material-components-web/blob/master/docs/framework-wrappers.md) in Web.

### How To

To run this project just install all its dependencies typing
```
npm install
```
or (preferably)
```
yarn install
```

Then just type
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
