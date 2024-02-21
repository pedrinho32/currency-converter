import React from "react";
import {CurrencyInfo, HeaderInfo} from "../model/CurrencyInfo";
import {BodyRow, Table, TableCell, TableCellAmount, TableHead} from "../styled/Styled";

export interface CurrencyTableProps {
    headerRow: HeaderInfo;
    currencies: CurrencyInfo[];
}

const CurrencyTable: React.FC<CurrencyTableProps> = (props) => {
    const {headerRow, currencies} = props;

    return (
        <Table>
            <TableHead>
                <tr>
                    <TableCell>{headerRow.country}</TableCell>
                    <TableCell>{headerRow.currency}</TableCell>
                    <TableCell>{headerRow.amount}</TableCell>
                    <TableCell>{headerRow.code}</TableCell>
                    <TableCell>{headerRow.rate}</TableCell>
                </tr>
            </TableHead>
            <tbody>
            {currencies.map(currencyInfo => (
                <BodyRow key={currencyInfo.code}>
                    <TableCell>{currencyInfo.country}</TableCell>
                    <TableCell>{currencyInfo.currency}</TableCell>
                    <TableCellAmount>{currencyInfo.amount}</TableCellAmount>
                    <TableCell>{currencyInfo.code}</TableCell>
                    <TableCell>{currencyInfo.rate}</TableCell>
                </BodyRow>
            ))}
            </tbody>
        </Table>
    );
};

export default CurrencyTable;