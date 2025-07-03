export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: 'male' | 'female' | 'other';
  profilePicture?: string;
  createdAt: Date;
  updatedAt: Date;
}
