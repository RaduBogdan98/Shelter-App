import * as React from "react"
import Svg, { Path } from "react-native-svg"

const CircleCheck = (props) => (
  <Svg
    width={35}
    height={35}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M17.5 2.917C9.45 2.917 2.917 9.45 2.917 17.5S9.45 32.083 17.5 32.083 32.083 25.55 32.083 17.5 25.55 2.917 17.5 2.917Zm0 26.25c-6.431 0-11.667-5.236-11.667-11.667S11.07 5.833 17.5 5.833 29.167 11.07 29.167 17.5 23.93 29.167 17.5 29.167Zm6.694-18.113-9.61 9.61-3.778-3.762-2.056 2.056 5.833 5.834L26.25 13.125l-2.056-2.07Z"
      fill="#44A783"
    />
  </Svg>
)

export default CircleCheck
