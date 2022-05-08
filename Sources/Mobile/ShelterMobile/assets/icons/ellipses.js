import * as React from "react"
import Svg, { Path } from "react-native-svg"

const EllipsesIcon = (props) => (
    <Svg
        width={35}
        height={35}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M17.5 11.667a2.925 2.925 0 0 0 2.917-2.917A2.925 2.925 0 0 0 17.5 5.833a2.925 2.925 0 0 0-2.917 2.917 2.925 2.925 0 0 0 2.917 2.917Zm0 2.916a2.925 2.925 0 0 0-2.917 2.917 2.925 2.925 0 0 0 2.917 2.917 2.925 2.925 0 0 0 2.917-2.917 2.925 2.925 0 0 0-2.917-2.917Zm0 8.75a2.925 2.925 0 0 0-2.917 2.917 2.925 2.925 0 0 0 2.917 2.917 2.925 2.925 0 0 0 2.917-2.917 2.925 2.925 0 0 0-2.917-2.917Z"
            fill={props.fill || "#000"}
        />
    </Svg>
)

export default EllipsesIcon
