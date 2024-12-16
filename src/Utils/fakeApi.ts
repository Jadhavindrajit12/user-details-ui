// utils/fakeApi.ts

import axios from "axios";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  address: {address: string, city: string};
  phone: string;
  birthDate: string;
  email: string;
  ip: string,
}

const convertApiResponse = (data: User[]) => {
  return data.map((item: User) => {
    return ({
      id: item.id,
      address: `${item.address.address}, ${item.address.city}`,
      birthDate: item.birthDate,
      email: item.email,
      skypeId: item.ip,
      phone: item.phone,
      name: `${item.firstName} ${item.lastName}`
    })
  })
}
export const fetchUsers = () => {
  return axios.get('https://dummyjson.com/users').then(response => {
    return convertApiResponse(response.data.users)
  }).catch(error => {
    console.error(error)
  })
};
