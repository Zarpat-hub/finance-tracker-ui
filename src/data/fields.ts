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
    pattern: /(.*?)/,
    errorMessage: "Passwords aren't equal",
    required: true,
    type: 'password',
    checkEqual: 'password',
  },
]

export const loginFormFields: IFormField[] = [
  {
    name: 'username', // change to email if backend changes
    pattern: /(.*?)/,
    errorMessage: '',
    required: true,
  },
  {
    name: 'password',
    pattern: /(.*?)/,
    errorMessage: '',
    required: true,
    type: 'password',
  },
]

export const configurationFields: IFormField[] = [
  {
    name: 'currency',
    pattern: /(.*?)/,
    errorMessage: '',
    required: true,
  },
  {
    name: 'balance',
    pattern: /(.*?)/,
    errorMessage: '',
    required: true,
    type: 'number',
  },
  {
    name: 'savings',
    pattern: /(.*?)/,
    errorMessage: '',
    required: true,
    type: 'number',
  },
  {
    name: 'payDay',
    pattern: /(.*?)/,
    errorMessage: '',
    required: true,
    type: 'number',
  },
  {
    name: 'spendingLimit',
    pattern: /(.*?)/,
    errorMessage: '',
    required: false,
    type: 'number',
  },
]

export const goalFields: IFormField[] = [
  {
    name: 'name',
    pattern: /(.*?)/,
    errorMessage: '',
    required: true,
  },
  {
    name: 'priority',
    pattern: /(.*?)/,
    errorMessage: '',
    required: true,
    type: 'select',
    options: ['LOW', 'MEDIUM', 'HIGH'],
  },
  {
    name: 'deadline',
    pattern: /(.*?)/,
    errorMessage: '',
    required: true,
    type: 'date',
  },
  {
    name: 'value',
    pattern: /(.*?)/,
    errorMessage: '',
    required: true,
    type: 'number',
  },
]

export const spendingFields: IFormField[] = [
  {
    name: 'type',
    pattern: /(.*?)/,
    errorMessage: '',
    required: true,
    type: 'select',
    options: ['Constant', 'Single'],
  },
  {
    name: 'category',
    pattern: /(.*?)/,
    errorMessage: '',
    required: true,
    type: 'select',
    options: [
      'Food',
      'Home',
      'Transport',
      'Healthcare',
      'Clothes',
      'Hygiene',
      'Kids',
      'Entertainment',
      'Debt',
      'Other',
    ],
  },
  {
    name: 'date',
    pattern: /(.*?)/,
    errorMessage: '',
    required: true,
    type: 'date',
  },
  {
    name: 'frequence',
    pattern: /(.*?)/,
    errorMessage: '',
    required: true,
    type: 'select',
    options: ['Weekly', 'Monthly', 'Yearly'],
  },
  {
    name: 'description',
    pattern: /(.*?)/,
    errorMessage: '',
    required: false,
  },
  {
    name: 'value',
    pattern: /(.*?)/,
    errorMessage: '',
    required: true,
    type: 'number',
  },
]

export const earningFields: IFormField[] = [
  {
    name: 'name',
    pattern: /(.*?)/,
    errorMessage: '',
    required: true,
  },
  {
    name: 'value',
    pattern: /(.*?)/,
    errorMessage: '',
    required: true,
    type: 'number',
  },
]

export const constantIncomeFields: IFormField[] = [
  {
    name: 'name',
    pattern: /(.*?)/,
    errorMessage: '',
    required: true,
  },
  {
    name: 'value',
    pattern: /(.*?)/,
    errorMessage: '',
    required: true,
    type: 'number',
  },
  {
    name: 'date',
    pattern: /(.*?)/,
    errorMessage: '',
    required: true,
    type: 'date',
  },
]
