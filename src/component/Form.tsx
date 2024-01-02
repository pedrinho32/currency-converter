import {Button, FormRow, FormWrapper, Input, Label, ResultPanel, Select} from "../styled/Styled";
import React, {useState} from "react";
import {CurrencyInfo} from "../model/CurrencyInfo";

interface FormProps {
    currencies: CurrencyInfo[];
}

interface ResultMessage {
    prefixText: string;
    resultAmount?: string;
}

const ConverterForm: React.FC<FormProps> = ({currencies}) => {

    const [inputAmount, setInputAmount] = useState<number>(0);
    const [resultMessage, setResultMessage] = useState<ResultMessage>();
    const [selectedCurrencyCode, setSelectedCurrencyCode] = useState<string>("EUR");

    const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(ev.target.value);

        if (!isNaN(newValue)) {
            setInputAmount(newValue);
        }
    }

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        const targetCurrency = currencies.find(currency => currency.code === selectedCurrencyCode);
        if (targetCurrency && inputAmount) {
            const resultAmount = inputAmount / Number(targetCurrency.rate) / Number(targetCurrency.amount);
            const roundedResultAmount = Math.round(resultAmount * 100) / 100;
            setResultMessage({
                prefixText: `${inputAmount} CZK equals to `,
                resultAmount: `${roundedResultAmount} ${selectedCurrencyCode}`
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
                    onFocus={() => setResultMessage(undefined)}
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
                <Button>
                    Calculate
                </Button>
            </FormRow>
            <FormRow>
                <ResultPanel>
                    {resultMessage?.prefixText}
                    <b>{resultMessage?.resultAmount}</b>
                </ResultPanel>
            </FormRow>
        </FormWrapper>
    );
};

export default ConverterForm;