import axios, {AxiosResponse} from "axios";

export const useCnbApi = () => {

    const fetchRates = (): Promise<AxiosResponse<string>> => {
        const url = "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt";
        return axios.get(url);
    };

    return {
        fetchRates,
    };
};