import {Button, ButtonWrapper, FormRow, FormWrapper, Input, Label, Select} from "../styled/Styled";
import React, {FormEvent, useRef, useState} from "react";
import {CurrencyInfo} from "../model/CurrencyInfo";
import {ResultMessage} from "../model/ResultMessage";

interface FormProps {
    currencies: CurrencyInfo[];
    setResultMessage: React.Dispatch<React.SetStateAction<ResultMessage | undefined>>;
}

const ConverterForm: React.FC<FormProps> = (props) => {
    const {currencies, setResultMessage} = props;

    const [inputAmount, setInputAmount] = useState<number>();
    const [inputShownValue, setInputShownValue] = useState<string>("");
    const [selectedCurrencyCode, setSelectedCurrencyCode] = useState("EUR");

    const inputRef = useRef<HTMLInputElement>(null);

    const handleInputChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(ev.target.value);

        if (!isNaN(newValue)) {
            setInputAmount(newValue);
            setInputShownValue(ev.target.value);
        }
    }

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement> | FormEvent<HTMLButtonElement>) => {
        ev.preventDefault();
        const targetCurrency = currencies.find(currency => currency.code === selectedCurrencyCode)!;
        if (inputAmount) {
            const resultAmount = Number(inputAmount) / targetCurrency.rate * targetCurrency.amount;
            const roundedResultAmount = Math.round(resultAmount * 100) / 100;
            setResultMessage({
                resultAmount: roundedResultAmount.toLocaleString(),
                targetCurrencyCode: selectedCurrencyCode
            });
            setInputShownValue(inputAmount.toLocaleString());
            inputRef.current?.blur();
        } else {
            setResultMessage({messageText: "Please input amount to convert"})
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
                    value={inputShownValue}
                    onChange={handleInputChange}
                    onFocus={() => setInputShownValue((inputAmount ?? "").toString())}
                    onBlur={() => setInputShownValue((inputAmount ?? "").toLocaleString())}
                    ref={inputRef}
                    placeholder="0"
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
                            {`${currency.code} (${currency.country})`}
                        </option>
                    ))}
                </Select>
            </FormRow>
            <ButtonWrapper>
                <Button onSubmit={handleSubmit}>
                    Calculate
                </Button>
            </ButtonWrapper>
        </FormWrapper>
    );
};

export default ConverterForm;