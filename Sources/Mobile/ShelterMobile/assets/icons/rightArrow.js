import * as React from "react"
import Svg, { Path } from "react-native-svg"

const RightArrowIcon = (props) => (
    <Svg
        width={26}
        height={25}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="m9.414 17.055 4.857-4.59-4.857-4.59 1.495-1.41 6.364 6-6.364 6-1.495-1.41Z"
            fill="#000"
        />
    </Svg>
)

export default RightArrowIcon
