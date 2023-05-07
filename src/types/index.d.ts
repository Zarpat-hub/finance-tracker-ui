export interface IFormField {
  name: string
  pattern: RegExp
  errorMessage: string
  required: boolean
  type?: string
  checkEqual?: string
}
