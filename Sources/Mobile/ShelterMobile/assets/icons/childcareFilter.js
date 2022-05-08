import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ChildcareIcon = (props) => (
    <Svg
        width={16}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M8.667 1.333v5.334H14a5.332 5.332 0 0 0-5.333-5.334Zm1.333 4v-2.44c1.133.4 2.033 1.3 2.44 2.44H10Zm-5.707 2L3.66 6H1.333v1.333h1.48s1.26 2.714 1.414 2.947A2.326 2.326 0 0 0 3 12.333a2.336 2.336 0 0 0 2.333 2.334 2.329 2.329 0 0 0 2.307-2h1.387c.16 1.133 1.133 2 2.306 2a2.336 2.336 0 0 0 2.334-2.334c0-.693-.307-1.313-.787-1.74.7-.9 1.12-2.033 1.12-3.26H4.293Zm1.04 6c-.553 0-1-.446-1-1 0-.553.447-1 1-1 .554 0 1 .447 1 1 0 .554-.446 1-1 1Zm6 0c-.553 0-1-.446-1-1 0-.553.447-1 1-1 .554 0 1 .447 1 1 0 .554-.446 1-1 1Zm.494-3.56-.194.247a2.337 2.337 0 0 0-2.407 1.313H7.44c-.333-.693-1-1.2-1.787-1.313l-.293-.447c-.067-.113-.227-.46-.447-.906h7.527a3.93 3.93 0 0 1-.613 1.106Z"
            fill={props.fill || "#fff"}
        />
    </Svg>
)

export default ChildcareIcon
