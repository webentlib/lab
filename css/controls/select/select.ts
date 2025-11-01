export function Select(el) {
    let font_expansion_coef = 0;
    try {
        font_expansion_coef = FONT_EXPANSION_COED;
    } catch (error) {
        if (error instanceof ReferenceError) {
            // pass
        } else {
            throw error;
        }
    }
    el.style.minWidth = Math.ceil(el.offsetWidth) + font_expansion_coef + 'px';
    el.classList.add('_STYLED');
    el.disabled = false;
}
