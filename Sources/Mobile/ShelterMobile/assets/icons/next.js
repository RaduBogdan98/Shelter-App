import * as React from "react";
import Svg, { Path } from "react-native-svg";

const NextIcon = (props) => (
    <Svg
        width={25}
        height={25}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="m15.625 5.208-1.469 1.47 4.771 4.78H2.083v2.084h16.844l-4.781 4.78 1.479 1.47 7.292-7.292-7.292-7.292Z"
            fill="#000"
        />
    </Svg>
);

export default NextIcon;
