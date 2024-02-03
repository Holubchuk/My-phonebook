import axios from 'axios';

export async function requestContacts() {
  const BASE_URL = 'https://65b2b1d59bfb12f6eafe4a83.mockapi.io/contacts';

  const response = await axios.get(`${BASE_URL}`);
  return response.data;
}

export const requestAddContact = async newContactData => {
  const BASE_URL = 'https://65b2b1d59bfb12f6eafe4a83.mockapi.io/contacts';

  const response = await axios.post(BASE_URL, newContactData);
  return response.data;
};

export const requestDeleteContact = async contactId => {
  const BASE_URL = 'https://65b2b1d59bfb12f6eafe4a83.mockapi.io/contacts';

  const response = await axios.delete(`${BASE_URL}/${contactId}`);
  return response.data;
};
