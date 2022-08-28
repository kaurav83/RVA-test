export interface ICardNews {
  id: string;
  picture: string;
  createdAt: string;
  status: string;
  description: string;
  link1: string;
  link2: string;
}

export interface IErrorResponse {
  error: string;
  message: string;
  statusCode: number;
}

export interface IProfile {
  address: IAddress;
  company: ICompany;
  email: string;
  id: number;
  name: string;
  phone: string;
  username: string;
  website: string;
}

export interface IAddress {
  city: string;
  geo: IGeo;
  street: string;
  suite: string;
  zipcode: string;
}

export interface ICompany {
  bs: string;
  catchPhrase: string;
  name: string;
}

export interface IGeo {
  lat: string;
  lng: string;
}
