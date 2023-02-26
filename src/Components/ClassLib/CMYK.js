/**
 * Class that represent CMYK color model
 */
class CMYK {
    /**
         *
         * @param {string} code CMYK color code
         * @param {number} c Cyan
         * @param {number} m Magenta
         * @param {number} y Yellow
         * @param {number} k Black
         */
    constructor(code, c, m, y, k) {
        this.code = code;
        this.c = c;
        this.m = m;
        this.y = y;
        this.k = k;
    }
}

export default CMYK;
