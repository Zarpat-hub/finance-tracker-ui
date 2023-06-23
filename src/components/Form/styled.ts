import {
  Box,
  Button,
  FormHelperText,
  InputLabel,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { styled } from '@mui/system'

export const FormContainer = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  alignContent: 'center',
  width: '100%',
  padding: '2rem 1rem',
  maxWidth: '360px',
  fontFamily: '"Gill Sans", sans-serif',
  color: 'rgba(0,0,0,0.8)',
})

export const Field = styled(TextField)({
  padding: '1rem 0',
  margin: '0.75rem 0',
  '& .MuiInputLabel-root': {
    position: 'absolute',
    top: '14px',
    left: 0,
    transform: 'translate(0, -100%)',
    transition: 'transform 0.2s ease-out, font-size 0.2s ease-out',
    '&::first-letter': {
      textTransform: 'uppercase',
    },
  },
  '& .MuiInputBase-root': {
    marginTop: '0.5rem',
    fontSize: '18px',
  },
  '& .MuiFilledInput-input': {
    padding: '0.5rem',
  },
  '& .MuiFormHelperText-root::first-letter': {
    textTransform: 'uppercase',
  },
})

export const SubmitButton = styled(Button)({
  fontWeight: 'bold',
  letterSpacing: '0.1rem',
})

export const FormTitle = styled(Typography)({
  fontSize: '32px',
  marginTop: 0,
})

export const FieldsContainer = styled(Box)({
  padding: '0.5rem',
  width: '100%',
  maxWidth: '320px',
})

export const SelectLabel = styled(InputLabel)({
  padding: '0.5rem 0',
  '&::first-letter': {
    textTransform: 'uppercase',
  },
})

export const SelectHelperText = styled(FormHelperText)({
  padding: '0 14px',
  color: '#d32f2f',
  '&::first-letter': {
    textTransform: 'uppercase',
  },
  marginBottom: '20px',
})

export const StyledSelect = styled(Select)({
  '& .MuiSelect-select': {
    paddingTop: '9px',
    paddingBottom: '9px',
  },
})
