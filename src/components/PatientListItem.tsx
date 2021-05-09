import React from 'react';
import { View, StyleSheet } from 'react-native';
import ScreenText from './ScreenText';

const PatientListItem = ({...props}) => {
    return (
        <View style={styles.row}>
            <ScreenText style={styles.text}>{ props.item.name }</ScreenText>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        marginVertical: 10,
        marginHorizontal: 20,
    },
    text: {
        fontSize: 20,
    }
})

export default PatientListItem;
