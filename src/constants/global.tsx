import { Dimensions } from 'react-native';

const getWindowHeight = () => {
    return Dimensions.get('window').height;
};

const getWindowWidth = () => {
    return Dimensions.get('window').width;
};

const colors = {
    primary: '#3498db',
    secondary: '#2ecc71',
    background: '#ecf0f1',
    text: '#2c3e50',
};

export const global = {
    getWindowHeight,
    getWindowWidth,
    colors
};
