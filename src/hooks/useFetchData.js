import { useState, useEffect } from 'react';
import chalk from 'chalk';

function useFetchData(url, options = {}) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        console.log(chalk.blue(`Fetching data from: ${url}`));

        try {
            const response = await fetch(url, options);
            if(!response.ok) throw new Error("Failed to fetch data");

            const result = await response.json();
            console.log(chalk.green("Data fetched successfully!"), result);
            setData(result);
        } catch(err) {
            console.log(chalk.red("Error fetching data:"), err.message);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, loading, error, refetch: fetchData };
}

export default useFetchData;