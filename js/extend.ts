Number.prototype.pad = function(n=2) {
    return ('0' + this).slice(-n);
}

String.prototype.pad = function(n=2) {
    return ('0' + this).slice(-n);
}

Number.prototype.format = function(n=' ') {
    // https://stackoverflow.com/a/41858572/4117781
    return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, n);
}

String.prototype.format = function(n=' ') {
    // https://stackoverflow.com/a/41858572/4117781
    return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, n);
}
