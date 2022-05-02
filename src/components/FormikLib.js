import { useField } from "formik";
import { StyledTextInput, StyledLabel, StyledIcon, ErrorMsg } from "./Styles";

import { FiEyeOff, FiEye } from "react-icons/fi";
import { useState } from "react";

export const TextInput = ({ icon, ...props }) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>

      {props.type !== "password" && (
        <StyledTextInput
          invalidStyle={meta.touched && meta.error}
          {...field}
          {...props}
        />
      )}

      {props.type === "password" && (
        <StyledTextInput
          invalidStyle={meta.touched && meta.error}
          {...field}
          {...props}
          type={show ? "text" : "password"}
        />
      )}

      <StyledIcon>{icon}</StyledIcon>

      {props.type === "password" && (
        <StyledIcon onClick={() => setShow(!show)} right="true">
          {show && <FiEye />}
          {!show && <FiEyeOff />}
        </StyledIcon>
      )}

      {meta.touched && meta.error ? (
        <ErrorMsg>{meta.error}</ErrorMsg>
      ) : (
        <ErrorMsg style={{ visibility: "hidden" }}>.</ErrorMsg>
      )}
    </div>
  );
};

// useField: 11min on formik guide.
// Guide on formik: https://www.youtube.com/watch?v=FD50LPJ6bjE&t=887s
// What is htmlFor: https://stackoverflow.com/questions/12894169/what-is-the-html-for-attribute-in-label
