
const getData = async () => {
    const data = fetch ('http://localhost:3001/procedures/getTableHtml')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        return data;
    })
    .catch(err => console.log(err));
    return data;
};

const addHtml = async (data) => {
    try {
        const data = await getData();
        document.getElementsByClassName('content-check')[0].innerHTML = data.response;
    } catch (err) {
        console.log(err);
    };
};

addHtml();

