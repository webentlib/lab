export function Select(el) {
    const FONT_EXPANSION_COEF = 2;
    el.style.minWidth = Math.ceil(el.offsetWidth) + FONT_EXPANSION_COEF + 'px';
    el.classList.add('_STYLED');
}
