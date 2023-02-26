/**
 * Class that represent CMYK color model
 */
class CMYK {
    /**
         *
         * @param {string} name CMYK color code
         * @param {number} c Cyan
         * @param {number} m Magenta
         * @param {number} y Yellow
         * @param {number} k Black
         */
    constructor(name, c, m, y, k) {
        this.name = name;
        this.c = c;
        this.m = m;
        this.y = y;
        this.k = k;
    }
}

export default CMYK;
