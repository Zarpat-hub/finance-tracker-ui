import { FieldValues, Controller, useFormContext } from 'react-hook-form'
import {
  FormContainer,
  Field,
  SubmitButton,
  FormTitle,
  FieldsContainer,
} from './styled'
import { IFormField } from '../../types'
import { equalityCheck } from '../../app/helpers/mainHelper'

type Props = {
  title: string
  formFields: IFormField[]
  submitText: string
  onSubmitHandler: (data: FieldValues) => void
}

const Form = ({ title, formFields, submitText, onSubmitHandler }: Props) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
    getValues,
  } = useFormContext()

  const values = getValues()

  return (
    <FormContainer onSubmit={handleSubmit(onSubmitHandler)}>
      <FormTitle>{title}</FormTitle>
      <FieldsContainer>
        {formFields.map(
          (
            { name, required, checkEqual, errorMessage, type, pattern },
            index
          ) => (
            <Controller
              key={index}
              control={control}
              name={name}
              rules={{
                required: {
                  value: required,
                  message: `${name} is required`,
                },
                validate: (text) =>
                  checkEqual
                    ? equalityCheck(text, values[checkEqual]) || errorMessage
                    : pattern.test(text) || errorMessage,
              }}
              defaultValue={''}
              render={({ field: { onChange, value } }) => (
                <Field
                  label={name}
                  value={value}
                  onChange={onChange}
                  variant={'filled'}
                  error={Boolean(errors[name])}
                  helperText={(errors[name]?.message as string) || ''}
                  type={type ?? 'text'}
                  fullWidth
                />
              )}
            />
          )
        )}
      </FieldsContainer>
      <SubmitButton variant={'contained'} size={'large'} type={'submit'}>
        {submitText}
      </SubmitButton>
    </FormContainer>
  )
}

export default Form
