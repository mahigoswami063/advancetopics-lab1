import { View, ScrollView } from 'react-native';
import Task from './Task';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
    //    backgroundColor: '#fce6eb',
       backgroundColor: "white",
        padding: 10,
    }
});

export default function Tasks(props) {
    return (
        <View style={styles.container}>
        <ScrollView>
        {props.tasks.map((task, index) => (<Task key={index} task={task} changeStatus={props.changeStatus} onRemove={props.onRemove}/>))}
        </ScrollView>
        </View>
    );
}