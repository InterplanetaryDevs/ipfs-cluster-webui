"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapOptions = void 0;
function mapOptions(options) {
    if (options == undefined)
        return '';
    const parts = [];
    for (const key of Object.keys(options)) {
        parts.push(mapOptionName(key) + '=' + options[key].toString());
    }
    return parts.join('&');
}
exports.mapOptions = mapOptions;
function mapOptionName(name) {
    return name.replace(/(A-Z)/, '-$1').toLowerCase();
}
