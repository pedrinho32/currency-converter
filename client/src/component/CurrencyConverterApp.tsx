import React, {useEffect, useState} from "react";
import {useCnbApi} from "../hook/CnbApiHook";
import {CurrencyInfo} from "../model/CurrencyInfo";
import {ResultMessage} from "../model/ResultMessage";
// @ts-ignore
import Spinner from "../Spinner-1s-200px.gif";
import {Note, ResultWrapperDiv, TableWrapper, Wrapper} from "../styled/Styled";
import ConverterForm from "./ConverterForm";
import CurrencyTable, {CurrencyTableProps} from "./CurrencyTable";

interface FetchedCurrencies extends CurrencyTableProps {
    dateValid: string;
}

const CurrencyConverterApp: React.FC = () => {
    const {fetchRates} = useCnbApi();

    const [fetchedCurrencies, setFetchedCurrencies] = useState<FetchedCurrencies>();
    const [resultMessage, setResultMessage] = useState<ResultMessage>();

    useEffect(() => {
        fetchRates()
            .then(resp => {
                const respLines: string[] = resp.data.split("\n");
                const currenciesLines = respLines.slice(2, respLines.length - 1);

                setFetchedCurrencies({
                    dateValid: respLines[0].split("#")[0].trim(),
                    headerRow: parseLineToCurrency(respLines[1]),
                    currencies: currenciesLines.map(line => parseLineToCurrency(line)),
                });
            })
            .catch(err => {
                setResultMessage({messageText: "We're sorry, current rates are not available. Please try again later."});
                console.error("An error occurred while fetching rates from CNB:", err);
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
            {!fetchedCurrencies
                ? <img src={Spinner} alt="Loading indicator"/>
                : <>
                    <ConverterForm
                        currencies={fetchedCurrencies.currencies}
                        setResultMessage={setResultMessage}
                    />
                    {resultMessage?.messageText &&
                    <ResultWrapperDiv>
                        {resultMessage.messageText}
                        <b>
                            {resultMessage.resultAmount}
                            &nbsp;
                            {resultMessage.targetCurrencyCode}
                        </b>
                    </ResultWrapperDiv>
                    }
                    <TableWrapper>
                        <CurrencyTable
                            currencies={fetchedCurrencies.currencies}
                            headerRow={fetchedCurrencies.headerRow}
                        />
                        <Note>{`* Rates are valid for ${fetchedCurrencies.dateValid}`}</Note>
                    </TableWrapper>
                </>
            }
        </Wrapper>
    );
};

export default CurrencyConverterApp;
