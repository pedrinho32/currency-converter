import {Button, FormRow, FormWrapper, Input, Label, ResultWrapperDiv, Select} from "../styled/Styled";
import React, {FormEvent, useState} from "react";
import {CurrencyInfo} from "../model/CurrencyInfo";
import {ResultMessage} from "./ResultPanel";

interface FormProps {
    currencies: CurrencyInfo[];
    setResultMessage:  React.Dispatch<React.SetStateAction<ResultMessage | undefined>>;
}

const ConverterForm: React.FC<FormProps> = (props) => {
    const {currencies, setResultMessage} = props;

    const [inputAmount, setInputAmount] = useState<number>(0);
    const [selectedCurrencyCode, setSelectedCurrencyCode] = useState<string>("EUR");

    const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(ev.target.value);

        if (!isNaN(newValue)) {
            setInputAmount(newValue);
        }
    }

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement> | FormEvent<HTMLButtonElement>) => {
        ev.preventDefault();
        const targetCurrency = currencies.find(currency => currency.code === selectedCurrencyCode);
        if (targetCurrency) {
            const resultAmount = (inputAmount ?? 0) / Number(targetCurrency.rate) * Number(targetCurrency.amount);
            const roundedResultAmount = Math.round(resultAmount * 100) / 100;
            setResultMessage({
                prefixText: `${inputAmount.toLocaleString()} CZK = `,
                resultAmount: roundedResultAmount.toLocaleString(),
                currency: selectedCurrencyCode
            });
        } else {
            setResultMessage({prefixText: "Currency conversion failed"})
        }
    };

    const handleSelectedCurrencyChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCurrencyCode(ev.target.value);
    };

    return (
        <FormWrapper onSubmit={handleSubmit}>
            <FormRow>
                <Label>Amount in CZK</Label>
                <Input
                    value={inputAmount}
                    onChange={handleInputChange}
                />
            </FormRow>
            <FormRow>
                <Label>Target currency</Label>
                <Select
                    onChange={handleSelectedCurrencyChange}
                    value={selectedCurrencyCode}
                >
                    {currencies.map(currency => (
                        <option
                            key={currency.code}
                            value={currency.code}
                        >
                            {currency.code}
                        </option>
                    ))}
                </Select>
            </FormRow>
            <FormRow>
                <Button onSubmit={handleSubmit}>
                    Calculate
                </Button>
            </FormRow>
        </FormWrapper>
    );
};

export default ConverterForm;