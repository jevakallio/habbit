import { optionStyles } from "./styles";

export const CheckBox = ({ children, ...props }) => (
  <div className="OptionContainer">
    <input type="checkbox" className="Option" {...props} />
    <span className="OptionLabel">{children}</span>
    <style jsx>{optionStyles}</style>
  </div>
);
