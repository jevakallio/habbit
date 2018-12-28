import css from "styled-jsx/css";
import { colors } from "../../theme";

const size = 32;
const halo = 64;

export const optionStyles = css`
  @keyframes click-wave {
    0% {
      height: ${size}px;
      width: ${size}px;
      opacity: 0.35;
      position: relative;
    }
    100% {
      height: ${halo}px;
      width: ${halo}px;
      margin-left: -${(halo - size) / 2}px;
      margin-top: -${(halo - size) / 2}px;
      opacity: 0;
    }
  }

  .OptionContainer {
    margin-bottom: 18px;
  }

  .OptionLabel {
    margin-left: 4px;
  }

  .Option {
    appearance: none;
    position: relative;
    top: 13.33333px;
    right: 0;
    bottom: 0;
    left: 0;
    height: ${size}px;
    width: ${size}px;
    transition: all 0.15s ease-out 0s;
    background: #cbd1d8;
    border: 3px solid transparent;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    margin-right: 0.5rem;
    outline: none;
    position: relative;
    z-index: 1000;
    box-sizing: content-box;
  }
  .Option:hover {
    background: #9faab7;
  }

  .Option:focus {
    border: 3px solid ${colors.orange};
  }

  .Option:checked {
    background: ${colors.red};
  }

  .Option:checked::before {
    height: ${size}px;
    width: ${size}px;
    position: absolute;
    content: "✔";
    display: inline-block;
    font-size: ${size / 2}px;
    text-align: center;
    line-height: ${size}px;
  }

  .Option:checked::after {
    -webkit-animation: click-wave 0.65s;
    -moz-animation: click-wave 0.65s;
    animation: click-wave 0.65s;
    background: ${colors.red};
    content: "";
    display: block;
    position: relative;
    z-index: 100;
  }

  .Option.Radio {
    border-radius: 50%;
  }
  .Option.Radio::after {
    border-radius: 50%;
  }
`;
