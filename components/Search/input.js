import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const TextInputCom = styled.TextInput`
  background-color: white;
  margin: 10px 30px 30px 30px;
  padding: 10px 10px;
  border-radius: 15px;
`;

const Input = ({ placeholder, value, onChange, onSubmit }) => (
  <TextInputCom
    value={value}
    onChangeText={onChange}
    onSubmitEditing={onSubmit}
    placeholder={placeholder}
    returnKeyType={"search"}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Input;
