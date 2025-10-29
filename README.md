# Components

### Common  
form.css  
helpers.css  

### Interactive

dropdown.css  
modal.css  

### Elements

hr.css  
counter.css  
legend.css  
button.css  
loader.css  
tabs.css  

### Controls

control.css  
select.css  
chips.css  

### Content

table.css  
cards.css  
highlight.css  
summary.css  
division.css  


# Installation

1. Pull this repo to the root folder (same lvl as `package.json`) to get `lab/` folder.
2. Add this to your base layout (commonly `base.svelte`) to the very top of your `<script>` tag:
```js
// LAB
import '/lab/index.css';
```
3. Add this to your `all.ts`:
```js
// LAB
export { Lab, Select, Datetime, DatetimeHelper, BaseModel, svg, getCookie } from '/lab/';
```

# Usage

... demo is in progress ...

# SELECT

#### Basic select
```html
<select class="SELECT">
    <option>Option</option>
</select>
```

#### Select, adjusted by option's width
```html
<script>
    import {Select} from '/all.ts';
    // or
    import {Select} from '/lab/';
</script>
<select class="SELECT" use:Select>
    <option>Option</option>
</select>
```

#### Select, with icon before
```html
<div class="SELECT_WITH_ICON">
    <span class="SELECT_ICON">
        {@html Icons.timezone({size: 24})}
    </span>
    <select class="SELECT _INLINE" use:Select>
        <option>Option</option>
    </select>
</div>
```

#### Select, with icon inside — add `_ICON_INSIDE`
```html
<div class="SELECT_WITH_ICON _ICON_INSIDE">
    <span class="SELECT_ICON">
        {@html Icons.timezone({size: 24})}
    </span>
    <select class="SELECT _INLINE" use:Select>
        <option>Option</option>
    </select>
</div>
```

#### Select, with icon inside, styled as label — add `_ICON_AS_LABEL`
```html
<div class="SELECT_WITH_ICON _ICON_AS_LABEL">
    <span class="SELECT_ICON">
        {@html Icons.timezone({size: 24})}
    </span>
    <select class="SELECT _INLINE" use:Select>
        <option>Option</option>
    </select>
</div>
```
