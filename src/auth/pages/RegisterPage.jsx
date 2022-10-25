import { Button, Grid, TextField, Typography, Link, Alert } from "@mui/material"
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { AuthLayout } from "../layout/AuthLayout"

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe contener un @' ],
  password: [ (value) => value.length >= 6, 'El password debe tener mas de 6 letras' ],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio' ],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const { 
    displayName, email, password, onInputChange, formState,
    displayNameValid, emailValid, passwordValid, isFormValid 
  } = useForm( formData, formValidations );

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted( true );

    if ( !isFormValid ) return;

    dispatch( startCreatingUserWithEmailPassword(formState) );
  }

  return (
    <AuthLayout title="Crear cuenta">
        <form onSubmit={ onSubmit } className="animate__animated animate__fadeIn animate__faster">
          <Grid container>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField
                label="Nombre completo"
                type="text"
                placeholder="Nombre completo"
                fullWidth
                name="displayName"
                value={ displayName }
                error={ !!displayNameValid && formSubmitted}
                helperText={ displayNameValid }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField
                label="correo"
                type="email"
                placeholder="correo@google.com"
                fullWidth
                name="email"
                value={ email }
                error={ !!emailValid && formSubmitted}
                helperText={ emailValid } 
                onChange={ onInputChange }
                
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField
                label="password"
                type="password"
                placeholder="password"
                fullWidth
                name="password"
                value={ password }
                error={ !!passwordValid && formSubmitted}
                helperText={ passwordValid }
                onChange={ onInputChange }
              />
            </Grid>

            <Grid container spacing={ 2 } sx={{ mb:2, mt: 1 }}>
              
              <Grid item xs={ 12 } display={ !!errorMessage ? '': 'none' }>
                <Alert severity="error"> { errorMessage } </Alert>
              </Grid>
            
              <Grid item xs={ 12 } >
                <Button disabled={isCheckingAuthentication} type="submit" variant='contained' fullWidth>
                  Crear cuenta 
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent='end'>
              <Typography sx={{mr:1}}> ¿Ya tienes cuenta? </Typography>
              <Link component={ RouterLink } color="inherit" to="/auth/login">
                Ingresar
              </Link>

            </Grid>
          </Grid>
        </form>
    </AuthLayout>


     
  )
}
