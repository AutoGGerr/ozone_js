const getData = () => {
    return fetch('https://js-project-ozon-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json()
        });
}

export default getData