import { useState } from 'react';
import { View, Text, TextInput, Switch, Button, Keyboard } from 'react-native';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        // justifyContent:'center',
        // alignItems:'center',
        alignSelf: 'stretch',
        backgroundColor: 'white',
        padding: 15
    },
    textInput: {
        borderColor: '#ed859d',
        borderWidth: 1,
        height: 40,
        marginBottom: 5,
        marginTop: 5,
        paddingLeft: 15,
        borderRadius: 20,
    },
    errorMsg: {
        color: "red",
        marginBottom: 5,
    },
    statusView: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 5,
    }
});
export default function Form(props) {
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDone, setTaskDone] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const handleAddPress = () => {
        if (taskDescription) {
            props.onAddTask(taskDescription, taskDone);
            setErrorMessage(null);
            setTaskDescription('');
            setTaskDone(false);
            Keyboard.dismiss();
        }
        else {
            setErrorMessage('The description is required.');
        }
    }



    return (
        <View style={styles.container}>
            {errorMessage && (<Text style={styles.errorMsg}>{errorMessage}</Text>)}

            <TextInput
                style={styles.textInput}
                placeholder='Enter a task description'
                maxLength={150}
                onChangeText={setTaskDescription}
                defaultValue={taskDescription}
            />

            <View style={styles.statusView}>
                <Text>Completed:</Text>
                <Switch trackColor={{true: '#ed859d'}} value={taskDone} onValueChange={setTaskDone}/>
            </View>

            <Button title='Add' onPress={handleAddPress}/>
        </View>
    );
}