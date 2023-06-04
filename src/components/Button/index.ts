import styled, { css } from "styled-components";

type ButtonVariant = "contained" | "outlined" | "link";

interface ButtonProps {
  variant?: ButtonVariant;
  delete?: boolean;
}

export const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  ${(props) =>
    props.variant === "contained" &&
    css`
      background-color: ${props.delete ? "#f54242" : "#007bff"};
      color: white;
      border: none;
    `}

  ${(props) =>
    props.variant === "outlined" &&
    css`
      background-color: transparent;
      color: ${props.delete ? "#f54242" : "#007bff"};
      border: 1px solid ${props.delete ? "#f54242" : "#007bff"};
    `}
  
  ${(props) =>
    props.variant === "link" &&
    css`
      background-color: transparent;
      color: ${props.delete ? "#f54242" : "#007bff"};
      border: none;
      text-decoration: underline;
    `}
`;

Button.defaultProps = {
  variant: "contained",
};
