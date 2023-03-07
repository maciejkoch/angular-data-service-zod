export interface User {
  id: number;
  fullName: string;
  age?: number;
  gender: string;
  company: {
    name: string;
    address: string;
  };
  address: string;
}
