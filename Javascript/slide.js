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

  {
    "subtitle": "یک فریم ورک برای توسعه سریع کاربردهای مختلف درفضای مجاذی را میتوان در این بخش مشاهده کرد."
  },

  {
    "title": "بسیار سبک و سریع",
    "bullets": [
      "سرعت بارگذاری و استفاده بالا",
      "نیاز به زمان کمتر برای یادگیری"
    ]
  },

  {
    "title": "زیبایی کم نظیر",
    "bullets": [
      "امکان استفاده از material design",
      "همه چی آرومه"
    ]
  },

  {
    "title": "سریع",
    "bullets": [
      "استفاده از virtual dom",
      "توضیح کد نمونه"
    ]
  },

  {
    "title": "کد نمونه :",
    "codes": [
        `//namespace
      var app = {};
      //model
      app.PageList = function() {
        return m.request({method: \"GET\", url: \"pages.json\"});
      };`]

  },

  {
    "codes": [
      "//controller",
      "app.controller = function() {",
      "  var pages = app.PageList();",
      "  return {",
      "    pages: pages,",
      "    rotate: function() {",
      "      pages().push(pages().shift());",
      "    }",
      "  }",
      "};"
    ]
  },

  {
    "codes": [
      "//view",
      "app.view = function(ctrl) {",
      "  return [",
      "    ctrl.pages().map(function(page) {",
      "      return m(\"a\", {href: page.url}, page.title);",
      "    }),",
      "    m(\"button\", {onclick: ctrl.rotate}, \"Rotate links\")",
      "  ];",
      "};",
      "",
      "//initialize",
      "m.module(document.getElementById(\"example\"), app);"
    ]
  },

  {
    "title": "What about performance?"
  },

  {
    "image": {
      "src": "https://user-images.githubusercontent.com/592709/34955055-645ab0e8-fa55-11e7-82ed-dcdc225642e6.png",
      "width": "800"
    }
  },

  {
    "title": "What can you do with it?"
  },

  {
    "title": "Demo 1",
    "subtitle": "A Todo App"
  },

  {
    "embed": {
      "src": "https://farzher.github.io/mithril-livescript-todomvc/",
      "width": "889",
      "height": "667",
      "frameborder": "0"
    }
  },

  {
    "title": "Demo 2",
    "subtitle": "A Spreadsheet"
  },

  {
    "embed": {
      "src": "https://codepen.io/wulab/full/aExXWJ/",
      "width": "889",
      "height": "667",
      "frameborder": "0"
    }
  },

  {
    "title": "Demo 3",
    "subtitle": "A Reader App"
  },

  {
    "embed": {
      "src": "https://codepen.io/wulab/full/vEKWKv",
      "width": "375",
      "height": "667",
      "frameborder": "0"
    }
  },

  {
    "title": "Demo 4",
    "subtitle": "A Presentation App"
  },

  {
    "title": ";-)",
    "subtitle": "You have already seen it"
  },

  {
    "title": "▲",
    "subtitle": "These slides are inside Mithril!"
  },

  {
    "codes": [
      "{",
      "  \"title\": \"Demo 4\",",
      "  \"subtitle\": \"A Presentation App\"",
      "},",
      "",
      "{",
      "  \"title\": \";-)\",",
      "  \"subtitle\": \"You have already seen it\"",
      "},",
      "",
      "{",
      "  \"title\": \"▲\",",
      "  \"subtitle\": \"These slides are inside Mithril!\"",
      "},"
    ]
  },

  {
    "title": "با تشکر از توجه شما",
    "subtitle": "سورس پروژه در " + "<a href='http://github.com' >گیت هاب</a>"
  }
];



var Fullscreen = {
  isEnabled: function() {
    return document.webkitFullscreenEnabled ||
                document.mozFullScreenEnabled ||
                document.msFullscreenEnabled;
  },
  hasElement: function() {
    return !( !document.webkitFullscreenElement &&
              !document.mozFullScreenElement &&
              !document.msFullscreenElement );
  },
  request: function(element) {
    if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  },
  exit: function() {
    if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
};


// model
var state = {
  data: data,
  error: '',
  index: 0,
  pointer: true,
  theme: 3,

  setData: function(value) {
    if (Array.isArray(value)) {
      state.data = value;
    }
  },
  setError: function(value) {
    if (typeof(value) === 'string') {
      state.error = value;
    }
  },
  setIndex: function(value) {
    if (value >= 0 && value < state.data.length) {
      state.index = value;
    }
  },
  setTheme: function(value) {
    if (value >= 0 && value < THEMES.length) {
      state.theme = value;
    }
  },

//   load: function() {
//     m.request({method: 'GET', url: 'https://codepen.io/wulab/pen/azxxvW.html'}).
//       then(function(data) { state.setData(data) }).
//       catch(function(error) { state.setError(error.message) });
//   },
  togglePointer: function() {
    state.pointer = !state.pointer;
  },
  switchTheme: function() {
    var nextTheme = (state.theme + 1) % THEMES.length;
    state.setTheme(nextTheme);
  },
  currentSlide: function() {
    return state.data.length > 0 ? state.data[state.index] : {};
  },
  forward: function() {
    state.setIndex(state.index + 1);
  },
  backward: function() {
    state.setIndex(state.index - 1);
  },
};

// view
var Slide = {
  oncreate: function(vnode) {
    document.oncontextmenu = vnode.attrs.oncontextmenu;
    document.onkeydown = vnode.attrs.onkeydown;
  },
  view: function(vnode) {
        setTimeout(function(){
          hljs.highlightBlock(document.querySelector("pre"));
        } , 200);
    var data = vnode.attrs.data;
    return m('#slide', {
      class: THEMES[vnode.attrs.theme],
      style: {cursor: vnode.attrs.pointer ? 'default' : 'none'},
      onclick: vnode.attrs.onclick,
      ontouchend: vnode.attrs.ontouchend
    }, [
      m('#objects', [
        !data.image    ? '' : m('img'   , data.image            ),
        !data.title    ? '' : m('h1'    , m.trust(data.title)   ),
        !data.subtitle ? '' : m('h2'    , m.trust(data.subtitle)),
        !data.div      ? '' : m('div'   , m.trust(data.div)),
        !data.codes    ? '' : m('pre'   , data.codes.join('\n') ),
        !data.embed    ? '' : m('iframe', data.embed            ),
        !data.bullets  ? '' : m('ul'    ,
          data.bullets.map( function(bullet) { return m('li', bullet) } )
        )
      ])
    ]);
  }
};

var Presentation = {
  handleClick: function(event) {
    this.play(state.forward);
    event.preventDefault();
  },
  handleContextmenu: function(event) {
    this.play(state.backward);
    m.redraw();
    event.preventDefault();
  },
  handleKeydown: function(event) {
    switch (event.key) {
      case 'Enter':
      case ' ':
      case 'ArrowRight':
      case 'ArrowDown':
      case 'Right':
      case 'Down':
        this.play(state.forward);
        break;
      case 'Backspace':
      case 'ArrowLeft':
      case 'ArrowUp':
      case 'Left':
      case 'Up':
        this.play(state.backward);
        break;
      case 'c':
        state.togglePointer();
        break;
      case 't':
        state.switchTheme();
        break;
      case 'q':
        Fullscreen.exit();
        break;
      default:
        return;
    }
    m.redraw();
    event.preventDefault();
  },
  oninit: state.load,
  oncreate: function(vnode) {
    vnode.state.play = function(action) {
      if (Fullscreen.isEnabled() && !Fullscreen.hasElement()) {
        Fullscreen.request(vnode.dom);
      } else {
        action();
      }
    };
  },
  view: function(vnode) {
    return m(Slide, {
      data: state.currentSlide(),
      pointer: state.pointer,
      theme: state.theme,
      onclick: this.handleClick.bind(this),
      ontouchend: this.handleClick.bind(this),
      oncontextmenu: this.handleContextmenu.bind(this),
      onkeydown: this.handleKeydown.bind(this)
    });
  }
};

// render
document.body = document.createElement('body');
m.mount(document.body, Presentation);
