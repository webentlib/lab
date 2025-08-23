# Installation

1. Pull this repo to the root folder (same lvl as `package.json`) to get `lab/` folder.
2. Add this to your base layout (commonly `base.svelte`) to the very top of your `<script>` tag:
```js
import '/lab/css/lab.css';
import '/lab/css/reset.css';
import '/lab/css/buttons.css';
import '/lab/css/tables.css';
import '/lab/css/cards.css';
import '/lab/css/highlight.css';
import '/lab/css/loader.css';
import '/lab/css/misc.css';
import '/lab/css/controls/forms.css';
import '/lab/css/controls/controls.css';
import '/lab/css/controls/selects.css';
import '/lab/css/controls/chips.css';
```
3. Add this to your `all.js`:
```js
import '/lab/js/extend.js';
export { Helper } from '/lab/js/helper.js';
export { Select } from '/lab/js/select.js';
export { Datetime, DatetimeHelper } from '/lab/js/datetime.js';
export { BaseModel } from '/lab/js/models.js';
export { svg } from '/lab/js/svg.js';
```

# Usage

... demo is in progress ...