import React from "react";
import styled from "styled-components/macro";
import { FormControl, Button as MuiButton } from "@material-ui/core";
import { spacing } from "@material-ui/system";
import TextInput from "../TextInput";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { createPost } from "../../redux/actions";

const Button = styled(MuiButton)(spacing);

function CreatePostForm({ closeModal }) {
  const dispatch = useDispatch();

  const user = useSelector(({ users }) => users.currentUser);

  const addPost = ({ title, body }) => {
    dispatch(createPost({ title, body, userId: user.id })).then((response) => {
      if (response) {
        closeModal();
      }
    });
  };

  return (
    <Formik
      initialValues={{
        title: "",
        body: "",
      }}
      validationSchema={Yup.object().shape({
        title: Yup.string().required("Title is required"),
        body: Yup.string().required("Body is required"),
      })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          addPost(values);
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
          <FormControl fullWidth variant="outlined">
            <TextInput
              type="text"
              name="title"
              label="Title"
              value={values.title}
              errors={errors}
              touched={touched}
              onBlur={handleBlur}
              onChange={handleChange}
              variant="standard"
            />
          </FormControl>

          <FormControl fullWidth variant="outlined">
            <TextInput
              type="text"
              name="body"
              label="Body"
              value={values.body}
              errors={errors}
              touched={touched}
              onBlur={handleBlur}
              onChange={handleChange}
              variant="standard"
            />
          </FormControl>

          <Button
            type="submit"
            py={3}
            variant="contained"
            color="primary"
            fullWidth
            size="large"
          >
            Create
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default CreatePostForm;
