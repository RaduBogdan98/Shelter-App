import * as React from "react"
import Svg, { Path } from "react-native-svg"

const BackIcon = (props) => (
    <Svg
        width={35}
        height={35}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="m13.125 27.708 2.056-2.056-6.679-6.694h23.581v-2.916H8.503l6.693-6.694-2.07-2.056L2.915 17.5l10.21 10.208Z"
            fill={props.fill || "#4A7DCB"}
        />
    </Svg>
)

export default BackIcon
