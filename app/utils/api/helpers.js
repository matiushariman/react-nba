import axios from 'axios';

const API_KEY =
  '1b18526b7cc793c1b187323af45c5b608e144836f70330b45bac362329e017b0';

axios.defaults.baseURL = `https://allsportsapi.com/api/basketball/?APIKey=${API_KEY}`;

export async function post(endpoint, payload, auth = null) {
  const postFunc = auth
    ? axios.post(endpoint, payload)
    : axios.post(endpoint, payload);

  return postFunc.then(response => response.data).catch(error => {
    throw error.response.data;
  });
}

export function update(endpoint, payload, auth = null) {
  const authHeaders = { headers: { Authorization: `Bearer ${auth}` } };
  const patchFunc = auth
    ? axios.patch(endpoint, payload, authHeaders)
    : axios.patch(endpoint, payload);

  return patchFunc.then(response => response).catch(error => {
    throw error.response.data;
  });
}

export function get(endpoint, auth = null) {
  const getFunc = auth ? axios.get(endpoint) : axios.get(endpoint);

  return getFunc.then(response => response).catch(error => {
    throw error.response.data;
  });
}

export function remove(endpoint, auth = null) {
  const getFunc = auth ? axios.delete(endpoint) : axios.delete(endpoint);

  return getFunc.then(response => response).catch(error => {
    throw error.response.data;
  });
}
