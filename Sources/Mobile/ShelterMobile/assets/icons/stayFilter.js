import * as React from "react"
import Svg, { Path } from "react-native-svg"

const StayIcon = (props) => (
    <Svg
        width={16}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M4.667 9.333c1.106 0 2-.893 2-2 0-1.106-.894-2-2-2-1.107 0-2 .894-2 2 0 1.107.893 2 2 2Zm0-2.666c.366 0 .666.3.666.666 0 .367-.3.667-.666.667A.669.669 0 0 1 4 7.333c0-.366.3-.666.667-.666Zm8-2H7.333V10H2V3.333H.667v10H2v-2h12v2h1.333v-6a2.666 2.666 0 0 0-2.666-2.666ZM14 10H8.667V6h4C13.4 6 14 6.6 14 7.333V10Z"
            fill={props.fill || "#fff"}
        />
    </Svg>
)

export default StayIcon
