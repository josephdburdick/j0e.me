const Logo = ({
  pathColor = "#000000",
  backgroundColor = "#505050",
  maskUrl = "",
}) => (
  <svg
    width="157.67036mm"
    height="50.454559mm"
    viewBox="0 0 157.67036 50.454559"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      {maskUrl && (
        <pattern
          id="bgPattern"
          patternUnits="userSpaceOnUse"
          width="100"
          height="100"
        >
          <image href={maskUrl} x="0" y="0" width="100" height="100" />
        </pattern>
      )}
    </defs>
    <g id="layer1" transform="translate(-10.516502,-116.98034)">
      <path
        id="path1"
        d="m 42.051305,116.98063 -7.884583,12.61251 H 48.35756 v 25.2282 H 29.437383 v -17.65935 l -18.920882,30.27292 h 50.453922 v -50.45428 z"
        style={{
          fill: maskUrl ? "url(#bgPattern)" : pathColor,
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: "0.352778",
        }}
      />
      <path
        id="path2"
        d="M 98.727625,154.82106 H 79.808154 v -25.22784 h 18.919471 z m -31.53304,12.61357 H 111.3419 V 116.98035 H 67.194585 Z"
        style={{
          fill: maskUrl ? "url(#bgPattern)" : pathColor,
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: "0.352778",
        }}
      />
      <path
        id="path3"
        d="m 130.34512,154.8212 v -6.30731 h 26.01595 l -7.88317,-12.61393 h -18.13278 v -6.3066 h 14.19013 l -7.88317,-12.61287 H 117.7312 v 50.45428 h 50.45568 l -7.88317,-12.61357 z"
        style={{
          fill: maskUrl ? "url(#bgPattern)" : pathColor,
          fillOpacity: 1,
          fillRule: "nonzero",
          stroke: "none",
          strokeWidth: "0.352778",
        }}
      />
      <path
        id="path7"
        d="M 104.9217,123.70941 73.759782,160.3983"
        style={{
          fill: "none",
          stroke: maskUrl ? "url(#bgPattern)" : pathColor,
          strokeWidth: "11.9944",
          strokeLinecap: "butt",
          strokeLinejoin: "miter",
          strokeMiterlimit: 4,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
      />
    </g>
    <rect
      width="100%"
      height="100%"
      fill={backgroundColor}
      style={{ position: "absolute", top: 0, left: 0, zIndex: -1 }}
    />
  </svg>
)

export default Logo
