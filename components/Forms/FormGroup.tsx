export const FormError = ({ children }) => <div>{children}</div>;

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
    {children}
    {errors[name] && touched[name] && <FormError>{errors.task}</FormError>}
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
