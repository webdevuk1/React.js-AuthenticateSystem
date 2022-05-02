import { Formik, Form } from "formik";
import { FiMail, FiLock, FiUser, FiCalendar } from "react-icons/fi";
import * as Yup from "yup";
import { ThreeDots } from "react-loader-spinner";

import {
  StyledFormArea,
  StyledTitle,
  StyledFormButton,
  Avatar,
  colors,
  ButtonGroup,
  ExtraText,
  TextLink,
  CopyRightText,
} from "../components/Styles";
import Logo from "./../assets/logo.jpg";
import { TextInput } from "../components/FormikLib";

const Signup = () => {
  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle color={colors.theme} size={30}>
          Memebers Sign Up
        </StyledTitle>
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirmPassword: "",
            dateOfBirth: "",
            name: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email adress")
              .required("Required"),
            password: Yup.string()
              .min(8, "Password is too short")
              .max(30, "Password is too long")
              .required("Required"),
            name: Yup.string().required("Required"),
            dateOfBirth: Yup.date().required("Required"),
            confirmPassword: Yup.string()
              .required("Required")
              .oneOf([Yup.ref("password")], "Passwords must match"),
          })}
          onSubmit={(value, { setSubmitting }) => {
            console.log(value);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="name"
                type="text"
                label="Full Name"
                placeholder="Olga Simpson"
                icon={<FiUser />}
              />

              <TextInput
                name="email"
                type="text"
                label="Email Address"
                placeholder="olga1@example.com"
                icon={<FiMail />}
              />

              <TextInput
                name="dateOfBirth"
                type="date"
                label="Date of birth"
                icon={<FiCalendar />}
              />

              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="*********"
                icon={<FiLock />}
              />

              <TextInput
                name="confirmPassword"
                type="password"
                label="Confirm Password"
                placeholder="*********"
                icon={<FiLock />}
              />

              <ButtonGroup>
                {!isSubmitting && (
                  <StyledFormButton type="submit">Sign Up</StyledFormButton>
                )}

                {isSubmitting && (
                  <ThreeDots
                    type="ThreeDots"
                    color={colors.theme}
                    height={49}
                    width={100}
                  />
                )}
              </ButtonGroup>
            </Form>
          )}
        </Formik>
        <ExtraText>
          Already have an account? <TextLink to="/login">Login</TextLink>
        </ExtraText>
      </StyledFormArea>
      <CopyRightText>All right reserved &copy;2020</CopyRightText>
    </div>
  );
};

export default Signup;
