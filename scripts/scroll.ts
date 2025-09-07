function has_scroll(e) {
    const HAS_Y_SCROLL = document.documentElement.scrollHeight > document.documentElement.clientHeight;
    const HAS_X_SCROLL = document.documentElement.scrollWidth > document.documentElement.clientWidth;

    if (HAS_Y_SCROLL) {
        document.documentElement.classList.add('_HAS_Y_SCROLL');
    } else {
        document.documentElement.classList.remove('_HAS_Y_SCROLL');
    }

    if (HAS_X_SCROLL) {
        document.documentElement.classList.add('_HAS_X_SCROLL');
    } else {
        document.documentElement.classList.remove('_HAS_X_SCROLL');
    }
}

if (typeof window !== 'undefined') {
    window.addEventListener('resize', has_scroll);
    window.addEventListener('load', has_scroll);
}