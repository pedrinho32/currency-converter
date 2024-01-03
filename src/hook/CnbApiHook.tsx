import axios, {AxiosResponse} from "axios";

export const useCnbApi = () => {

    const fetchRates = (): Promise<AxiosResponse<string>> => {
        return axios.get("http://localhost:3001/api/exchange-rates");
    };

    return {
        fetchRates,
    };
};