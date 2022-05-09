import { useEffect, useState } from "react";

export const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T | null>(null);
    const [fetchingData, setFetchingData] = useState(false);

    useEffect(() => {
        setFetchingData(true);
        
        const timer = setTimeout(async () => {
            try {
                const response = await fetch(url);
                console.log(response);
                const data = await response.json();

                setData(data);
            } catch (error) {
                console.log(error);
            } finally {
                setFetchingData(false);
            }
        }, 2000);

        return () => {
            clearTimeout(timer);
        }
    }, [url]);

    return {data, fetchingData} as const;
};