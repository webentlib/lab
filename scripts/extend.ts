Number.prototype.PAD = function(n=2) {
    return ('0' + this).slice(-n);
}

String.prototype.PAD = function(n=2) {
    return ('0' + this).slice(-n);
}

String.prototype.CAPITALIZE = function() {
    return String(this).charAt(0).toUpperCase() + String(this).slice(1);
}

Number.prototype.FORMAT = function(n=' ') {
    // https://stackoverflow.com/a/41858572/4117781
    return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, n);
}

String.prototype.FORMAT = function(n=' ') {
    // https://stackoverflow.com/a/41858572/4117781
    return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, n);
}
