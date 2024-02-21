const parseResponse = (resp) => {
    const respLines = resp.data.split("\n");
    const currenciesLines = respLines.slice(2, respLines.length - 1);

    return {
        dateValid: respLines[0].split("#")[0].trim(),
        headerRow: parseHeaderLine(respLines[1]),
        currencies: currenciesLines.map(line => parseLineToCurrency(line)),
    }
};

const parseHeaderLine = (line) => {
    const splitLine = line.split("|");
    return {
        country: splitLine[0],
        currency: splitLine[1],
        amount: splitLine[2],
        code: splitLine[3],
        rate: splitLine[4],
    };
};

const parseLineToCurrency = (line) => {
    const splitLine = line.split("|");
    return {
        country: splitLine[0],
        currency: splitLine[1],
        amount: Number(splitLine[2]),
        code: splitLine[3],
        rate: Number(splitLine[4]),
    };
};


module.exports = {parseResponse};