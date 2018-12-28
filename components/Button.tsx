import Head from "next/head";
import Logo from "./Logo";
import { colors } from "../theme";

const Button = ({ children, disabled, role = "primary", ...props }) => (
  <button
    {...props}
    disabled={disabled}
    className={`Button ${disabled ? "disabled" : role}`}
  >
    {children}
    <style jsx>{`
      .Button {
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
      }

      .primary {
        background-color: ${colors.red};
        color: ${colors.white};
      }

      .disabled {
        background-color: ${colors.grey};
        color: ${colors.black};
      }
    `}</style>
  </button>
);

export default Button;
