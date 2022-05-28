import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CircleRemove = (props) => (
    <Svg
        width={35}
        height={35}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M21.277 11.667 17.5 15.444l-3.777-3.777-2.056 2.056 3.777 3.777-3.777 3.777 2.056 2.056 3.777-3.777 3.777 3.777 2.056-2.056-3.777-3.777 3.777-3.777-2.056-2.056ZM17.5 2.917C9.435 2.917 2.917 9.435 2.917 17.5c0 8.065 6.518 14.583 14.583 14.583 8.065 0 14.583-6.518 14.583-14.583 0-8.065-6.518-14.583-14.583-14.583Zm0 26.25c-6.431 0-11.667-5.236-11.667-11.667S11.07 5.833 17.5 5.833 29.167 11.07 29.167 17.5 23.93 29.167 17.5 29.167Z"
            fill="#67697C"
        />
    </Svg>
)

export default CircleRemove
