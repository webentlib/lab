function get_scrollbar_width() {
    // Method 1: Window calculation (most efficient)
    const windowWidth = window.innerWidth - document.documentElement.clientWidth;
    if (windowWidth > 0) return windowWidth;

    // Method 2: Temporary div (fallback)
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    document.body.appendChild(outer);

    const inner = document.createElement('div');
    outer.appendChild(inner);

    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
    document.body.removeChild(outer);

    return scrollbarWidth;
}

function set_scrollbar_width() {
    document.documentElement.style.setProperty(
        '--scrollbar-width',
        get_scrollbar_width() + 'px'
    );
}

if (typeof window !== 'undefined') {
    set_scrollbar_width();
    window.addEventListener('resize', set_scrollbar_width);
}