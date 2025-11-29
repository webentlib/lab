let scrollbar_width = 0;

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
    scrollbar_width = get_scrollbar_width();
    document.documentElement.style.setProperty(
        '--scrollbar-width',
        scrollbar_width + 'px'
    );
}

function has_scroll(e=null) {
    const HAS_Y_SCROLL = document.documentElement.scrollHeight - scrollbar_width > document.documentElement.clientHeight;
    const HAS_X_SCROLL = document.documentElement.scrollWidth - scrollbar_width > document.documentElement.clientWidth;

    if (HAS_Y_SCROLL) {
        document.body.classList.add('_HAS_Y_SCROLL');
    } else {
        document.body.classList.remove('_HAS_Y_SCROLL');
    }

    if (HAS_X_SCROLL) {
        document.body.classList.add('_HAS_X_SCROLL');
    } else {
        document.body.classList.remove('_HAS_X_SCROLL');
    }
}

if (typeof window !== 'undefined') {
    set_scrollbar_width();
    window.addEventListener('resize', set_scrollbar_width);

    has_scroll();
    window.addEventListener('resize', has_scroll);
}