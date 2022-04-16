import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SearchIcon = (props) => (
    <Svg
        width={26}
        height={24}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M16.692 14h-.85l-.302-.27c1.055-1.14 1.69-2.62 1.69-4.23 0-3.59-3.133-6.5-7-6.5-3.865 0-7 2.91-7 6.5s3.135 6.5 7 6.5a7.29 7.29 0 0 0 4.556-1.57l.29.28v.79l5.386 4.99L22.066 19l-5.374-5Zm-6.461 0c-2.682 0-4.846-2.01-4.846-4.5S7.549 5 10.23 5c2.681 0 4.846 2.01 4.846 4.5S12.912 14 10.23 14Z"
            fill="#4A7DCB"
        />
    </Svg>
)

export default SearchIcon
