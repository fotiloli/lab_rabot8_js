// BEGIN

const groupBy = (itemes, proredely) => {
    return itemes.reduce((qwerty, item) => {
        const key = item[proredely];
        if (!qwerty[key]) {
            qwerty[key] = [];
        }
        qwerty[key].push(item);
        return qwerty;
    }, {});
};

export default groupBy;

// END

