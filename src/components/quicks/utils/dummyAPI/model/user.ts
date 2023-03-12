export interface User {
  id: string
  title?: 'mr' | 'ms' | 'mrs' | 'miss' | 'dr' | ''
  firstName: string
  lastName: string
  gender: 'male' | 'female' | 'other' | ''
  email: string
  dateOfBirth: string
  registerDate: string
  phone: string
  picture?: string
  location: Location
}
export type UserPreview = Pick<User, 'id' | 'title' | 'firstName' | 'lastName' | 'picture'>

interface Location {
  street: string
  city: string
  state: string
  country: string
  timezone: string
}
