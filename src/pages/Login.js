import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Grid as MuiGrid,
  Paper,
  FormControl as MuiFormControl,
  Button as MuiButton,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import styled from "styled-components/macro";
import { Formik } from "formik";
import * as Yup from "yup";
import TextInput from "../components/TextInput";
import { loginUser } from "../redux/actions";
import { saveCookie } from "../utils/cookiesHandler";

const Grid = styled(MuiGrid)(spacing);
const FormControl = styled(MuiFormControl)(spacing);
const Button = styled(MuiButton)(spacing);

const MainContent = styled(Paper)`
  flex: 1;
  background: ${(props) => props.theme.palette.background.default};

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex: none;
  }

  .MuiPaper-root .MuiPaper-root {
    box-shadow: none;
  }
`;

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const login = (values) => {
    dispatch(loginUser(values.userId)).then((response) => {
      if (response) {
        saveCookie("userId", response.data[0].id);
        history.push(`/posts`);
      }
    });
  };

  return (
    <MainContent>
      <Helmet title="Login" />

      <Grid container spacing={6} justify="center" mt={40}>
        <Grid item lg={8} xl={6}>
          <Formik
            initialValues={{
              userId: "",
              password: "",
            }}
            validationSchema={Yup.object().shape({
              userId: Yup.string().required("User Name is required"),
              password: Yup.string().required("Password is required"),
            })}
            onSubmit={async (
              values,
              { setErrors, setStatus, setSubmitting }
            ) => {
              try {
                login(values);
              } catch (error) {
                const message = error.message || "Something went wrong";

                setStatus({ success: false });
                setErrors({ submit: message });
                setSubmitting(false);
              }
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={6}>
                  <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined">
                      <TextInput
                        type="text"
                        name="userId"
                        label="User ID"
                        value={values.userId}
                        errors={errors}
                        touched={touched}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        variant="standard"
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <FormControl fullWidth variant="outlined">
                      <TextInput
                        type="password"
                        name="password"
                        label="Password"
                        value={values.password}
                        errors={errors}
                        touched={touched}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        variant="standard"
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      py={3}
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                    >
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </MainContent>
  );
};

export default Login;
