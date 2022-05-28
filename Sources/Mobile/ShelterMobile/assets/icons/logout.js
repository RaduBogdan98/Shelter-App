import * as React from "react"
import Svg, { Path } from "react-native-svg"

const LogoutIcon = (props) => (
    <Svg
        width={24}
        height={25}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="m16.983 7.144-1.363 1.41 2.494 2.59H8.283v2h9.831l-2.494 2.58 1.363 1.42 4.834-5-4.834-5Zm-12.567-2h7.734v-2H4.416c-1.063 0-1.933.9-1.933 2v14c0 1.1.87 2 1.933 2h7.734v-2H4.416v-14Z"
            fill="#000"
        />
    </Svg>
)

export default LogoutIcon
