import { getCookie } from '/all.ts';

export function csrf() {
    if (typeof window === 'undefined') {
        return;
    }

    // Сгенерировано не без помощи ИИ

    const originalFetch = window.fetch;

    window.fetch = function(url, params) {
        const csrftoken = getCookie('csrftoken');

        if (!params)
            params = {};
        if (!params.headers)
            params.headers = new Headers();

        if (params.headers instanceof Headers) {
            params.headers.append('X-CSRFToken', csrftoken);
        } else if (Array.isArray(params.headers)) {
            params.headers.push(['X-CSRFToken', csrftoken]);
        } else {
            params.headers['X-CSRFToken'] = csrftoken;
        }

        return originalFetch(url, params);
    };
}