export interface Employess {
  id: number;
  fullName: string;
  position: string;
  avalibiltyDate: Date;
  salary: number;
  dateOfBirth: Date;
  address: string;
  phoneNumber: number;
  email: string;
  maritalStatus: string;
  resume?: File | null;
}
