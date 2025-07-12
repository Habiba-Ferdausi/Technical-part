
export type Coordinates = { lat: number; lng: number };

export type Address = {
  addressLine: string | null;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
};

export type Bank = {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
};

export type Company = {
  department: string;
  name: string;
  title: string;
};


export type RawUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  image: string;
  university: string;
  address: Address;
  bank: Bank;
  company: Company;

};

export type Page = {
  users: RawUser[];
  total: number;
  skip: number;
  limit: number;
};
