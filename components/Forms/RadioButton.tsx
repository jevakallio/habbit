import { optionStyles } from "./styles";

export const RadioButton = ({ children, ...props }) => (
  <div className="OptionContainer">
    <input type="radio" className="Option Radio" {...props} />
    <span className="OptionLabel">{children}</span>
    <style jsx>{optionStyles}</style>
  </div>
);
