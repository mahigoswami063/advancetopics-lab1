import { View, Text, Pressable, Modal, Switch, Alert, Button } from 'react-native';
import { StyleSheet } from 'react-native';
import { useState } from 'react';

const styles = StyleSheet.create({
    container: {
        flex:1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    borderRadius: 15,
    borderColor: '#fce6eb',
    borderWidth: 3,
    },
    text1: {
        fontWeight: 'bold',
    },
    modal:{
        flex: 1,
        padding: 10,
        flexDirection: "column",
        justifyContent: "center",
      
    },
    flexRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    text2: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});

export default function Task(props) {
    const [modal, showModal] = useState(false);

    const toggleModal = () => {
        showModal(!modal);
    }

    const changeStatus = (status) => {
        props.changeStatus(props.task.id, status)
    }

    const remove = () => {
        Alert.alert('Delete Task', 'Do you want to permanently delete? Action cant be undone.', [{
            text: 'Yes', onPress: () => {props.onRemove(props.task.id); showModal(false)},     
        },{text: 'No'}])
        
    }

return (
    <>
        <Pressable onPress={toggleModal}>
            <View style={styles.container}>
            <Text style={styles.text1}>{props.task.description}</Text>
            <Text>Id: {props.task.id}</Text>
            <Text>Status: {props.task.done ? 'Complete' : 'Open'}</Text>
            </View>
        </Pressable>

        <Modal visible={modal} >
            <View style={styles.modal}>
                <View style={styles.flexRow}>
                    <Text style={styles.text2}> {props.task.description} </Text>
                    <Pressable onPress={toggleModal}><Text style={styles.text2}>x</Text></Pressable>
                </View>
                <View style={styles.flexRow}>
                    <Text>Change Status:</Text>
                    <Switch value={props.task.done} onValueChange={changeStatus}></Switch>
                {/* <Pressable onPress={remove}><Text>Remove</Text></Pressable> */}
                </View>
                <Button title='Remove' onPress={remove}/>
            </View>
        </Modal>
    </>
)}