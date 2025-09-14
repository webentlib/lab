function set_scrollbar_width() {
    document.documentElement.style.setProperty(
        '--scrollbar-width',
        (window.innerWidth - document.documentElement.clientWidth) + 'px'
    );
}

if (typeof window !== 'undefined') {
    set_scrollbar_width();
    window.addEventListener('resize', set_scrollbar_width);
}