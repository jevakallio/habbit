import React from "react";

const Logo = ({ title, ...props }) => (
  <svg viewBox="0 0 367 345" {...props}>
    <title>{title}</title>
    <defs>
      <circle id="prefix__a" cx={74.262} cy={74.262} r={74.262} />
    </defs>
    <g transform="translate(11 11)" fill="none" fillRule="evenodd">
      <circle
        stroke="#FFF"
        strokeWidth={22}
        fill="#F55"
        cx={160.827}
        cy={161.734}
        r={160.759}
      />
      <path
        fill="#FFD100"
        d="M307.031 182l48.96 67.649-83.595 9.645L267 207.851z"
      />
      <g transform="translate(86.987 87.895)">
        <mask id="prefix__b" fill="#fff">
          <use xlinkHref="#prefix__a" />
        </mask>
        <use fill="#FFF" xlinkHref="#prefix__a" />
        <ellipse
          stroke="#000"
          strokeWidth={10}
          fill="#000"
          mask="url(#prefix__b)"
          cx={73.861}
          cy={74.465}
          rx={47.701}
          ry={46.617}
        />
      </g>
    </g>
  </svg>
);

export default Logo;
