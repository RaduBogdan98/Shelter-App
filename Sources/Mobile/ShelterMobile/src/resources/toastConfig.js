import { BaseToast } from 'react-native-toast-message';
import { CheckIcon } from '../../assets/icons';
import { style } from "../resources/colors";

const toastConfig = {
    success: (props) => (
        <BaseToast
            {...props}
            style={{ width: '92%', borderLeftColor: style.accentGreen, alignItems: 'center', paddingHorizontal: 10 }}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            text1Style={{
                fontWeight: "400",
                fontFamily: 'regular',
            }}
            text1NumberOfLines={2}
            renderLeadingIcon={() => (<CheckIcon />)}
        />
    )
}

export default toastConfig;