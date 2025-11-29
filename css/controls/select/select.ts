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
        select.classList.remove('_STYLED');
        select.style.removeProperty('min-width');
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

    redraw([select]);

    return {
        destroy() {
            selectsStore.update((value) => {
                value = value.filter(item => item !== value);
                return value;
            });
        }
    };
}
