import {writable, get} from 'svelte/store';

const selectsStore = writable([]);

let font_expansion_coef = 1;

try {
    font_expansion_coef = FONT_EXPANSION_COED;
} catch (error) {
    if (error instanceof ReferenceError) {
        // pass
    } else {
        throw error;
    }
}

function redraw(e, selects=[]) {

    if (!selects?.length) {
        selects = get(selectsStore);
    }

    for (const select of selects) {
        if (!select.classList.contains('_STYLED')) {
            let computedStyle = window.getComputedStyle(select);
            let min_width = computedStyle.getPropertyValue('min-width');
            if (min_width) {
                select.setAttribute('data-min-width', min_width);
            }
        } else if (select.classList.contains('_STYLED')) {
            let dumped_min_width = select.getAttribute('data-min-width');
            if (!['0px', 'auto', 'unset'].includes(dumped_min_width)) {
                select.style.setProperty('min-width', dumped_min_width || 'unset');
            } else {
                select.style.removeProperty('min-width');
            }
            select.classList.remove('_STYLED');
        }

        select.style.minWidth = Math.ceil(select.offsetWidth) * font_expansion_coef + 'px';
        select.classList.add('_STYLED');
        select.disabled = false;
    }
}

selectsStore.subscribe((value) => {
    if (typeof window === 'undefined')
        return;
    if (value?.length) {
        window.addEventListener('resize', redraw);
    } else {
        window.removeEventListener('resize', redraw);
    }
})

export function Select(select) {

    selectsStore.update((value) => {
        value.push(select);
        return value
    });

    redraw(null, [select]);

    return {
        destroy() {
            selectsStore.update((value) => {
                value = value.filter(item => item !== value);
                return value;
            });
        }
    };
}
