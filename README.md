# Web based Presentation slides

> 📖 Animated next level presentation in browser using Mithril.js 


- press <kbd>t</kbd> on page and template will change
- you can add demo pages on slides
- `json` based slide creation :
```javascript
// setup
var THEMES = ['black', 'white', 'gradient', 'showroom'];

var data = [
  {
    "title": "<span class='irsans'>عنوان ارائه</span>",
    "subtitle": "جعفررضائی<br/><span style='font-size:15px'>jafar.rezaei.ard@gmail.com</span>"
  },

  {
    "title": "موضوع چیه؟"
  },
  // ...
};
```
- code high-ligher on slide
- we use jRun to lazy load files

### Run locally

just open `index.html` file
