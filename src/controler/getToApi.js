import base from '../api/baseURL';

function GetToApi() {
    return fetch(base.baseUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({query: "{employee {id,firstName,lastName,vote,jobTitle,avatar}}"})
    }).then(response => {
        const statusCode = response.status
        const data = response.json()
        return Promise.all([statusCode, data])
    }).then(async ([res, data]) => {
        return ({'status': res, 'data': data.data})
    });

}

export default GetToApi;

