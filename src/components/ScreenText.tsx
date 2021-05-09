import React from 'react';
import { Text } from 'react-native';

const ScreenText = ({...props}) => {
    return (
        <Text style={{...props.style, fontFamily: 'open-sans' }}>
            { props.children }
        </Text>
    );
}

export default ScreenText;
