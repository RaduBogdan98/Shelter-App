import * as React from "react"
import Svg, { Path } from "react-native-svg"

const MapIcon = (props) => (
    <Svg
        width={30}
        height={30}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M15 2.5a8.744 8.744 0 0 0-8.75 8.75C6.25 17.813 15 27.5 15 27.5s8.75-9.688 8.75-16.25A8.744 8.744 0 0 0 15 2.5Zm-6.25 8.75C8.75 7.8 11.55 5 15 5s6.25 2.8 6.25 6.25c0 3.6-3.6 8.988-6.25 12.35-2.6-3.338-6.25-8.788-6.25-12.35Z"
            fill={props.color || "#000"}
        />
        <Path
            d="M15 14.375a3.125 3.125 0 1 0 0-6.25 3.125 3.125 0 0 0 0 6.25Z"
            fill={props.color || "#000"}
        />
    </Svg>
)

export default MapIcon;
