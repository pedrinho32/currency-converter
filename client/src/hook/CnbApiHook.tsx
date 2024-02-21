import axios, {AxiosResponse} from "axios";
import {FetchedCurrencies} from "../component/CurrencyConverterApp";

export const useCnbApi = () => {

    const fetchRates = (): Promise<AxiosResponse<FetchedCurrencies>> => {
        // return axios.get("https://currency-converter-server-2.vercel.app/api/exchange-rates");
        return axios.get("http://localhost:3001/api/exchange-rates");
    };

    return {
        fetchRates,
    };
};