import React from "react";
import {ResultWrapperDiv} from "../styled/Styled";

export interface ResultMessage {
    messageText?: string;
    resultAmount?: string;
    currency?: string;
}

const ResultPanel: React.FC<ResultMessage> = (props) => {
    const {messageText, resultAmount, currency} = props;

    return (
        <ResultWrapperDiv>
            {messageText}
            <b>{resultAmount}&nbsp;{currency}</b>
        </ResultWrapperDiv>
    );
};

export default ResultPanel;