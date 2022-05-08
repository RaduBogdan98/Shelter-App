import * as React from "react"
import Svg, { Path } from "react-native-svg"

const MedicalIcon = (props) => (
    <Svg
        width={16}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M13.333 4h-2.666V2.667c0-.734-.6-1.334-1.334-1.334H6.667c-.734 0-1.334.6-1.334 1.334V4H2.667c-.734 0-1.334.6-1.334 1.333v8c0 .734.6 1.334 1.334 1.334h10.666c.734 0 1.334-.6 1.334-1.334v-8c0-.733-.6-1.333-1.334-1.333ZM6.667 2.667h2.666V4H6.667V2.667Zm6.666 10.666H2.667v-8h10.666v8Z"
            fill={props.fill || "#fff"}
        />
        <Path
            d="M8.667 6.667H7.333v2h-2V10h2v2h1.334v-2h2V8.667h-2v-2Z"
            fill={props.fill || "#fff"}
        />
    </Svg>
)

export default MedicalIcon
