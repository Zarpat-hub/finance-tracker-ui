import { IFormField } from '../types'

export const registerFormFields: IFormField[] = [
  {
    name: 'username',
    pattern: /^[a-zA-Z0-9]{3,20}$/,
    errorMessage:
      'Username must be between 3 and 20 characters long and can only contain letters and numbers',
    required: true,
  },
  {
    name: 'email',
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage:
      'Email must follow the format: "example@domain.extension" and have a valid domain name extension (e.g. .com, .net, .org)',
    required: true,
  },
  {
    name: 'password',
    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
    errorMessage:
      'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit',
    required: true,
    type: 'password',
  },
  {
    name: 'confirm password',
    pattern: /^$/,
    errorMessage: "Passwords aren't equal",
    required: true,
    type: 'password',
    checkEqual: 'password',
  },
]
