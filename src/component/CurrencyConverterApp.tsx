import React, {useEffect, useState} from 'react';
import {useCnbApi} from "../hook/CnbApiHook";
import CurrencyTable, {CurrencyTableProps} from "./CurrencyTable";
import {CurrencyInfo} from "../model/CurrencyInfo";
import {Wrapper} from "../styled/Styled";
import ResultPanel, {ResultMessage} from "./ResultPanel";
import ConverterForm from "./ConverterForm";

interface FetchedCurrencies extends CurrencyTableProps {
    dateValid: string;
}

const CurrencyConverterApp: React.FC = () => {
    const {fetchRates} = useCnbApi();

    const [fetchedCurrencies, setFetchedCurrencies] = useState<FetchedCurrencies>();
    const [resultMessage, setResultMessage] = useState<ResultMessage>();

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
        <Wrapper>
            <h1>CURRENCY CONVERTER</h1>

            {fetchedCurrencies &&
            <>
                <ConverterForm
                    currencies={fetchedCurrencies.currencies}
                    setResultMessage={setResultMessage}
                />
                {resultMessage &&
                <ResultPanel
                    prefixText={resultMessage?.prefixText}
                    resultAmount={resultMessage?.resultAmount}
                    currency={resultMessage?.currency}
                />
                }
                <CurrencyTable
                    currencies={fetchedCurrencies.currencies}
                    headerRow={fetchedCurrencies.headerRow}
                />
            </>
            }
        </Wrapper>
    );
};

export default CurrencyConverterApp;
