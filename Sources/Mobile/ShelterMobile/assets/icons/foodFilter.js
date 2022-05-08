import * as React from "react"
import Svg, { Path } from "react-native-svg"

const FoodIcon = (props) => (
    <Svg
        width={16}
        height={16}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M.667 14.653c0 .374.3.674.673.674H10c.373 0 .673-.3.673-.674V14H.667v.653Zm5-8.66c-2.5 0-5 1.34-5 4.007h10c0-2.667-2.5-4.007-5-4.007ZM2.413 8.667c.74-1.034 2.314-1.34 3.254-1.34s2.513.306 3.253 1.34H2.413ZM.667 11.333h10v1.334h-10v-1.334Zm11.333-8V.667h-1.333v2.666H7.333l.154 1.334h6.373L12.927 14H12v1.333h1.147c.56 0 1.02-.433 1.086-.98l1.1-11.02H12Z"
            fill={props.fill || "#fff"}
        />
    </Svg>
)

export default FoodIcon
