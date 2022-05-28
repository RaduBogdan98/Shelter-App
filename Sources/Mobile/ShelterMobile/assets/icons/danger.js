import * as React from "react"
import Svg, { Path } from "react-native-svg"

const DangerIcon = (props) => (
    <Svg
        width={25}
        height={25}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="m12.5 6.134 7.53 13.01H4.97l7.53-13.01Zm0-3.99-11 19h22l-11-19Zm1 14h-2v2h2v-2Zm0-6h-2v4h2v-4Z"
            fill="#F46E6E"
        />
    </Svg>
)

export default DangerIcon
