export const FormError = ({ children }) => (
  <div className="FormError">
    {children}
    <style jsx>{`
      .FormError {
        margin-bottom: 10px;
        vertical-align: middle;
        color: red;
      }
    `}</style>
  </div>
);
