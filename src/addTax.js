function addTax(n) {

    const num = (n * 0.08875) + n;

    if (typeof num === "number") {

        return num.toFixed(2);
    }
}

module.exports = addTax;



