import React, {useEffect, useState} from 'react';
import {useCnbApi} from "../hook/CnbApiHook";
import CurrencyTable, {CurrencyTableProps} from "./CurrencyTable";
import {CurrencyInfo} from "../model/CurrencyInfo";

interface FetchedCurrencies extends CurrencyTableProps{
    dateValid: string;
}

const CurrencyConverterApp: React.FC = () => {
    const {fetchRates} = useCnbApi();

    const [fetchedCurrencies, setFetchedCurrencies] = useState<FetchedCurrencies>();

    useEffect(() => {
        fetchRates().then(resp => {
            const respLines: string[] = resp.data.split("\n");
            const currenciesLines = respLines.slice(2, respLines.length - 1);

            setFetchedCurrencies({
                dateValid: respLines[0].split("#")[0].trim(),
                headerRow: parseLineToCurrency(respLines[1]),
                currencies: currenciesLines.map(line => parseLineToCurrency(line)),
            });
        });
    }, []);

    const parseLineToCurrency = (line: string): CurrencyInfo => {
        const splitLine = line.split("|");
        return {
            country: splitLine[0],
            currency: splitLine[1],
            amount: splitLine[2],
            code: splitLine[3],
            rate: splitLine[4],
        };
    };

    return (
        <div>
            <h1>Currency converter</h1>
            {fetchedCurrencies &&
            <CurrencyTable
                currencies={fetchedCurrencies.currencies}
                headerRow={fetchedCurrencies.headerRow}
            />
            }
        </div>
    );
};

export default CurrencyConverterApp;
