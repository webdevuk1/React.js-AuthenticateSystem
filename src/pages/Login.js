import { Formik, Form } from "formik";
import { FiMail, FiLock } from "react-icons/fi";
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

const Login = () => {
  return (
    <div>
      <StyledFormArea>
        <Avatar image={Logo} />
        <StyledTitle color={colors.theme} size={30}>
          Memebers Login
        </StyledTitle>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email adress")
              .required("Required"),
            password: Yup.string()
              .min(8, "Password is too short")
              .max(30, "Password is too long")
              .required("Required"),
          })}
          onSubmit={(value, { setSubmitting }) => {
            console.log(value);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="email"
                type="text"
                label="Email Address"
                placeholder="olga1@example.com"
                icon={<FiMail />}
              />

              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="*********"
                icon={<FiLock />}
              />

              <ButtonGroup>
                {!isSubmitting && (
                  <StyledFormButton type="submit">Login</StyledFormButton>
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
          New here? <TextLink to="/signup">Sign Up</TextLink>
        </ExtraText>
      </StyledFormArea>
      <CopyRightText>All right reserved &copy;2020</CopyRightText>
    </div>
  );
};

export default Login;
