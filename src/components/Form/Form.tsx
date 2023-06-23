import { FieldValues, Controller, useFormContext } from 'react-hook-form'
import {
  FormContainer,
  Field,
  SubmitButton,
  FormTitle,
  FieldsContainer,
  SelectLabel,
  SelectHelperText,
  StyledSelect,
} from './styled'
import { IFormField } from '../../types'
import { equalityCheck } from '../../app/helpers/mainHelper'
import WealthWiseLogo from '../../assets/logos/wealthWiseMain.svg'
import MenuItem from '@mui/material/MenuItem'

type Props = {
  title: string
  formFields: IFormField[]
  submitText: string
  onSubmitHandler: (data: FieldValues) => void
  showLogo?: boolean
  defaultValues?: Record<string, string | number>
}

const Form = ({
  title,
  formFields,
  submitText,
  onSubmitHandler,
  showLogo,
  defaultValues,
}: Props) => {
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
      {showLogo && <img src={WealthWiseLogo} />}
      <FieldsContainer>
        {formFields.map(
          (
            {
              name,
              required,
              checkEqual,
              errorMessage,
              type,
              pattern,
              options,
            },
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
              defaultValue={defaultValues ? defaultValues[name] : ''}
              render={({ field: { onChange, value } }) =>
                type === 'select' ? (
                  <>
                    <SelectLabel
                      sx={{
                        color: errors[name]?.message
                          ? '#d32f2f'
                          : 'rgba(0,0,0,0.6)',
                      }}
                    >
                      {name}
                    </SelectLabel>
                    <StyledSelect
                      label={name}
                      value={value}
                      onChange={onChange}
                      error={Boolean(errors[name])}
                      fullWidth
                      variant="filled"
                    >
                      {options?.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </StyledSelect>
                    <SelectHelperText>
                      {(errors[name]?.message as string) || ''}
                    </SelectHelperText>
                  </>
                ) : (
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
                )
              }
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
