import * as React from "react";
const SvgComponent = (props: React.SVGAttributes<HTMLOrSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      fill="#838691"
      fillRule="evenodd"
      d="M8.5 8.5V4H4v4.5h4.5ZM4 3h4.5a1 1 0 0 1 1 1v4.5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm4.5 13v-4.5H4V16h4.5ZM4 10.5h4.5a1 1 0 0 1 1 1V16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4.5a1 1 0 0 1 1-1ZM16 4v4.5h-4.5V4H16Zm0-1h-4.5a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1H16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm0 13v-4.5h-4.5V16H16Zm-4.5-5.5H16a1 1 0 0 1 1 1V16a1 1 0 0 1-1 1h-4.5a1 1 0 0 1-1-1v-4.5a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
