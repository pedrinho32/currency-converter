import React from "react";
import {CurrencyInfo} from "../model/CurrencyInfo";

export interface CurrencyTableProps {
    headerRow: CurrencyInfo;
    currencies: CurrencyInfo[];
}

const CurrencyTable: React.FC<CurrencyTableProps> = (props) => {
    const {headerRow, currencies} = props;

    return (
        <table>
            <thead>
            <tr>
                <td>{headerRow.country}</td>
                <td>{headerRow.currency}</td>
                <td>{headerRow.amount}</td>
                <td>{headerRow.code}</td>
                <td>{headerRow.rate}</td>
            </tr>
            </thead>
            <tbody>
            {currencies.map(currencyInfo => (
                <tr key={currencyInfo.code}>
                    <td>{currencyInfo.country}</td>
                    <td>{currencyInfo.currency}</td>
                    <td>{currencyInfo.amount}</td>
                    <td>{currencyInfo.code}</td>
                    <td>{currencyInfo.rate}</td>
                </tr>
            ))}
            <tr>
                <td>

                </td>
            </tr>
            </tbody>
        </table>
    );
};

export default CurrencyTable;