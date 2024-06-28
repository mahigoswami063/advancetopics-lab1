import { View, Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: "#ed859d",
        paddingTop: 35,
        paddingBottom:20,
    },
    text: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20,
    }
});

export default function Header() {
    return (
        <View style={styles.container}>
        <FontAwesome5 name="list-ol" size={24} color="white"/>
        <Text style={styles.text}>Mahi's Todo App</Text>
        </View>
    );
}

