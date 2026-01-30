import { getCookie } from './cookie.ts';

export function csrf() {
    if (typeof window === 'undefined') {
        return;
    }

    // Сгенерировано не без помощи ИИ

    const originalFetch = window.fetch;

    window.fetch = function(url, params) {

        if (!params) {
            params = {};
        }

        // Ensure params.headers exists
        if (!params.headers) {
            params.headers = new Headers();
        }

        const csrftoken = getCookie('csrftoken');

        // Check if X-CSRFToken already exists
        let tokenAlreadyExists = false;

        if (params.headers instanceof Headers) {
            tokenAlreadyExists = params.headers.has('X-CSRFToken');
            if (!tokenAlreadyExists && csrftoken) {
                params.headers.append('X-CSRFToken', csrftoken);
            }
        } else if (Array.isArray(params.headers)) {
            // Check array format headers
            tokenAlreadyExists = params.headers.some(([key]) =>
                key.toLowerCase() === 'x-csrftoken'
            );
            if (!tokenAlreadyExists && csrftoken) {
                params.headers.push(['X-CSRFToken', csrftoken]);
            }
        } else {
            // Check object format headers
            const headerKey = Object.keys(params.headers).find(key =>
                key.toLowerCase() === 'x-csrftoken'
            );
            tokenAlreadyExists = !!headerKey;
            if (!tokenAlreadyExists && csrftoken) {
                params.headers['X-CSRFToken'] = csrftoken;
            }
        }

        return originalFetch(url, params);
    };
}