import React from "react";
import {ResultWrapperDiv} from "../styled/Styled";

export interface ResultMessage {
    prefixText?: string;
    resultAmount?: string;
    currency?: string;
}

const ResultPanel: React.FC<ResultMessage> = (props) => {
    const {prefixText, resultAmount, currency} = props;

    return (
        <ResultWrapperDiv>
            {prefixText}
            <b>{resultAmount}</b>
            &nbsp;
            <b>{currency}</b>
        </ResultWrapperDiv>
    );
};

export default ResultPanel;