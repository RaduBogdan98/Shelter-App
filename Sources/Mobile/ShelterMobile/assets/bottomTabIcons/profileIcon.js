import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ProfileIcon = (props) => (
    <Svg
        width={30}
        height={30}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M19.638 15.887a7.5 7.5 0 1 0-9.275 0 12.5 12.5 0 0 0-7.775 10.226 1.257 1.257 0 1 0 2.5.274 10 10 0 0 1 19.875 0 1.25 1.25 0 0 0 1.25 1.113h.137a1.25 1.25 0 0 0 1.1-1.375 12.5 12.5 0 0 0-7.812-10.238ZM15 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z"
            fill={props.color || "#000"}
        />
    </Svg>
)

export default ProfileIcon;
