import { api_path_url, authToken } from "../secret";


async function handleApiRequest(url, options = {}, headers = {}) {
    try {
        const apiResponse = await fetch(`${api_path_url}${url}`, {
            ...options,
            headers: {
                "x-auth-token": authToken,
                ...headers,
            },
        });

        if (!apiResponse.ok) {
            throw new Error(`HTTP error! status: ${apiResponse.status}`);
        }

        const result = await apiResponse.json();
        return result; 
    } catch (error) {
        console.error(error);
        return null; 
    }
}


export default handleApiRequest;
