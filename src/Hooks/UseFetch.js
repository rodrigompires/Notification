import React from "react";

const UseFetch = () => {
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(null)

    const request = React.useCallback(async (url, options) => {
        let response;
        let json;

        try {
            setError(null);
            setLoading(true);
            response = await fetch(url, options);
            json = await response.json();
        } catch (erro) {
            json = null;
            setError('Erro');
        } finally {
            setData(json);
            setLoading(false);
            return {response, json}

        }

    }, []);

    return {
        data,
        error, 
        request, 
        loading
    }
 
}

export default UseFetch;
