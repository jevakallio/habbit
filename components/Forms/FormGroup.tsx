import { FormError } from "./FormError";

export const FormGroup = ({
  name,
  label,
  errors,
  touched,
  enabled,
  children,
  ...props
}) => (
  <div className={`FormGroup ${enabled ? "" : "disabled"}`}>
    <label htmlFor={name}>{label}</label>
    {errors[name] && touched[name] && <FormError>{errors[name]}</FormError>}
    {children}
    <style jsx>{`
      .FormGroup {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
      }

      .FormGroup.disabled {
        opacity: 0.15;
      }

      .FormGroup label {
        font-weight: bold;
        margin: 20px 0;
        font-size: 150%;
      }
    `}</style>
  </div>
);
