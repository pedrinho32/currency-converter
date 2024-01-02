import React, {useEffect, useState} from 'react';
import '../css/App.css';
import {useCnbApi} from "../hook/CnbApiHook";
import {CurrencyInfo} from "../model/CnbRatesResponse";

const CurrencyConverterApp: React.FC = () => {
    const {fetchRates} = useCnbApi();

    const [currencies, setCurrencies] = useState<CurrencyInfo[]>();

    useEffect(() => {
        fetchRates().then(resp => {
            const respLines: string[] = resp.data.split("\n");
            const respCurrencies = respLines
                .slice(2, respLines.length-1)
                .map(line => {
                    const splitLine = line.split("|");
                    return {
                        country: splitLine[0],
                        currency: splitLine[1],
                        amount: Number(splitLine[2]),
                        code: splitLine[3],
                        rate: Number(splitLine[4]),
                    };
                });

            setCurrencies(respCurrencies);
        });
    }, []);

    return (
        <div className="App">
            <h1>Currency converter</h1>

        </div>
    );
};

export default CurrencyConverterApp;
