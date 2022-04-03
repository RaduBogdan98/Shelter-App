import * as React from "react"
import Svg, { Path } from "react-native-svg"

const FeedIcon = (props) => (
    <Svg
        width={30}
        height={30}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M23.75 6.25v5H5v-5h18.75Zm0 12.5v5H5v-5h18.75Zm1.25-15H3.75c-.688 0-1.25.563-1.25 1.25v7.5c0 .688.563 1.25 1.25 1.25H25c.688 0 1.25-.563 1.25-1.25V5c0-.688-.563-1.25-1.25-1.25Zm0 12.5H3.75c-.688 0-1.25.563-1.25 1.25V25c0 .688.563 1.25 1.25 1.25H25c.688 0 1.25-.563 1.25-1.25v-7.5c0-.688-.563-1.25-1.25-1.25Z"
            fill={props.color || "#000"}
        />
    </Svg>
)

export default FeedIcon;
