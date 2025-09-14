function has_scroll(e=null) {
    const HAS_Y_SCROLL = document.documentElement.scrollHeight > document.documentElement.clientHeight;
    const HAS_X_SCROLL = document.documentElement.scrollWidth > document.documentElement.clientWidth;

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
    has_scroll();
    window.addEventListener('resize', has_scroll);
}