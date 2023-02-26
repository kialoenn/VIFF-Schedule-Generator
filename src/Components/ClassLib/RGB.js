/**
 * Class that represents RGB color model
 */
class RGB {
    /**
         *
         * @param {string} code RGB color code
         * @param {*} r Red
         * @param {*} g Green
         * @param {*} b Blue
         */
    constructor(code, r, g, b) {
        this.code = code;
        this.r = r;
        this.g = g;
        this.b = b;
    }
}

export default RGB;
