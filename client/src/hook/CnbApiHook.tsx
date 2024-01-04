import axios, {AxiosResponse} from "axios";

export const useCnbApi = () => {

    const fetchRates = (): Promise<AxiosResponse<string>> => {
        return axios.get("https://currency-converter-server-2.vercel.app/api/exchange-rates");
    };

    return {
        fetchRates,
    };
};