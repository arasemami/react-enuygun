 const baseUrl = 'http://localhost:9002/graphql';
 
function FetchData() {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({query: "{employee {id,firstName,lastName,vote,jobTitle,avatar,mobile,email,address,summary}}"})
    }).then(response => {
        const statusCode = response.status
        const data = response.json()
        return Promise.all([statusCode, data])
    }).then(async ([res, data]) => {
        return ({'status': res, 'data': data.data})
    });

}

export default FetchData;

