const requestParams = {
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
};

const responseHandler = (response) => {
  if (response.ok) return response.json();
  return response.json()
    .catch(() => { throw new Error(response.statusText); })
    .then((json) => { throw new Error(json.message); });
};

function postData(url, data) {
  return fetch(url, { method: 'POST', body: JSON.stringify(data), ...requestParams })
    .then(responseHandler);
}

function getData(url) {
  return fetch(url, { method: 'GET', ...requestParams })
    .then(responseHandler);
}

function deleteData(url) {
  return fetch(url, { method: 'DELETE', ...requestParams })
    .then(responseHandler);
}

export default {
  getData,
  postData,
  deleteData,
};
