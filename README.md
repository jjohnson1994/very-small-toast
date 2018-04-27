# Very Small Toast

A very small JS library for showing toasts, written in 496 bytes or CSS and 996 bytes of JS.

## How to

Install using Yarn or NPM
```
  yarn add very-small-toast
  - or -
  npm install very-small-toast
```

#### Import JS
In you main JS file:
``` js
  import Toast from 'very-small-toast';
  ...
  $vsToast('Hello Toast');
```
The `$vsToast` method is added to `window` so can be called from anywhere.

#### Import CSS
You can either import the CSS or SCSS, if you want to customise anything import the SCSS.

To import CSS, in you index.html add
``` html
<link rel='stylesheet' href='node_modules/very-small-toast/dist/main.css'/>
```

To import SCSS and make customising a lot easier, add this to your main .scss
```
  @import 'toast-variable-overrides';
  @import '~very-small-toast/scss/verysmalltoast.scss';
```

`@import 'toast-variable-overrides';` will be a file with variables overwriting the ones using in `verysmalltoast.scss`.

### Customising
Check inside `_variables.scss` to see what variables are available. All values used are available in `_variables.scss`, just set them in your custom `_toast-variable-overrides.scss`.