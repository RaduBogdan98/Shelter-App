import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CheckIcon = (props) => (
    <Svg
        width={24}
        height={19}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M7.837 14.168 2.354 8.542 0 10.958 7.837 19 24 2.416 21.646 0 7.837 14.168Z"
            fill="#44A783"
        />
    </Svg>
)

export default CheckIcon
