export const Helper = {}

Helper.range = function(start, stop, step=1) {
    // https://stackoverflow.com/a/44957114/4117781
    return Array(Math.ceil((stop - start) / step)).fill(start).map((x, y) => x + y * step);
}

Helper.random = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const result = Math.floor(Math.random() * (max - min + 1)) + min;
    return result;
}

Helper.click_on_enter = function(e) {
    if (e.key === 'Enter') {
        e.currentTarget.click();
    }
}
