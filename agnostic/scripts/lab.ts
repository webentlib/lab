export const Lab: any = {}

Lab.range = function(start, stop, step=1) {
    // https://stackoverflow.com/a/44957114/4117781
    return Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step);
}

Lab.random = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

Lab.click_on_enter = function(e) {
    if (e.key === 'Enter') {
        e.currentTarget.click();
    }
}

Lab.decode = function(encodedStr) {
    // AI
    const regex = /=\?([^?]+)\?([bq])\?([^?]+)\?=/gi;
    return encodedStr.replace(regex, (match, charset, encoding, text) => {
        if (encoding.toLowerCase() === 'b') {
            // Base64 decoding
            const decodedBytes = atob(text);
            // Decode UTF-8 bytes
            return decodeURIComponent(escape(decodedBytes));
        } else if (encoding.toLowerCase() === 'q') {
            // Quoted-printable decoding (not needed here since your string uses 'b')
            // Implement if necessary
            return text;
        }
        return text;
    });
}
