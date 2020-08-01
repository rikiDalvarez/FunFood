const BASE_URL = "http://localhost:5005";

function getRestaurants() {
    console.log("working");
    return fetchRequest('/restaurants');
}

function fetchRequest(path, options) {
    return fetch(BASE_URL + path, options)
        .then((res) => (res.status < 400 ? res : Promise.reject(res)))
        .then((res) => (res.status !== 400 ? res.json() : res))
        .catch((err) => {
            console.error("error", err)
        });
}

module.exports = { getRestaurants }
