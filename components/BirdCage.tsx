import React from "react";

const BirdCage = ({ color = "#ccc", children, ...props }) => (
  <div {...props}>
    <div className="BirdCage">
      <svg
        className="Scenery"
        viewBox="0 0 3975 2263"
        preserveAspectRatio="none"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M0 0h3975v2263H0V0z" fill={color} />
          <path
            d="M0-26h3975v1670.425c-193.93 54.05-339.824 89.237-437.68 105.56-488.254 81.446-986.36 44.48-1494.32-110.897-660.667-202.087-1341.667-200.308-2043 5.337V-26z"
            fillOpacity={0.5}
            fill="#FFF"
          />
          <path
            d="M.256 0H3975v1314.467l-1351.913-303.442c-620.626 257.672-1141.926 386.508-1563.899 386.508-782.604 0-1135.581 13.155-1058.932 39.467V0z"
            fillOpacity={0.21}
            fill="#FFF"
          />
        </g>
        {/* <g transform="scale(0.5 0.5) translate(1000, 1000)">{children}</g> */}
      </svg>
      <div className="Children">{children}</div>
    </div>
    <style jsx>{`
      .BirdCage {
        position: relative;
        height: 50vh;
        width: 100vw;
        left: 50%;
        right: 50%;
        margin-top: -20px;
        margin-left: -50vw;
        margin-right: -50vw;
      }
      .Scenery {
        min-width: 100%;
        position: absolute;
        height: 50vh;
        left: 0;
        top: 0;
      }
      .Children {
        position: relative;
        width: 100%;
        height: 40vh;
      }
    `}</style>
  </div>
);

export default BirdCage;
