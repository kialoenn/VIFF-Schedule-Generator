/**
 * Class that represents RGB color model
 */
class RGB {
    /**
         *
         * @param {string} name RGB color code
         * @param {*} r Red
         * @param {*} g Green
         * @param {*} b Blue
         */
    constructor(name, r, g, b) {
        this.name = name;
        this.r = r;
        this.g = g;
        this.b = b;
    }
}

export default RGB;
