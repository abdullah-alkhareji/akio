import styled, { css } from "styled-components";

type ButtonVariant = "contained" | "outlined" | "link";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  variant?: ButtonVariant;
  delete?: boolean;
  fullWidth?: boolean;
  size?: ButtonSize;
}

export const Button = styled.button<ButtonProps>`
  padding: ${(props) => {
    switch (props.size) {
      case "sm":
        return "5px 10px";
      case "lg":
        return "15px 30px";
      default: // md is default
        return "10px 20px";
    }
  }};
  border-radius: 4px;
  font-size: ${(props) => {
    switch (props.size) {
      case "sm":
        return "14px";
      case "lg":
        return "18px";
      default: // md is default
        return "16px";
    }
  }};
  cursor: pointer;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};

  ${(props) =>
    (!props.variant || props.variant === "contained") &&
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
