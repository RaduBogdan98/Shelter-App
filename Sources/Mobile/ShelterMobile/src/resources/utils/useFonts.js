import * as Font from 'expo-font';

const useFonts = async () =>
    await Font.loadAsync({
        'light': require('../fonts/Outfit-Light.ttf'), //300
        'regular': require('../fonts/Outfit-Regular.ttf'), //400
        'medium': require('../fonts/Outfit-Medium.ttf'), //500
        'semibold': require('../fonts/Outfit-SemiBold.ttf'), //600
        'bold': require('../fonts/Outfit-Bold.ttf'), //700
    });

export default useFonts;

