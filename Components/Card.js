import React from 'react'
import { View, StyleSheet, Dimensions, Text ,TouchableOpacity} from 'react-native'
const screen = Dimensions.get('screen')
const width = screen.width
function Card(props) {
    //console.log(props.data)
 
    return (
        <TouchableOpacity style={styles.card} onPress={props.onPress}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.description}>{props.description}</Text>
            <View style={{padding:10}}>
            <Text style={styles.date}>Author:{props.author || '--'}</Text>
            <Text style={styles.date}>PublishedAt:{props.date}</Text>

            </View>

        </TouchableOpacity>
    )
}

export default Card
const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        zIndex: 1,
        width: width - 20,
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: 10,
        padding: 10
    },
    title: {
        fontSize: 18,
        padding:5
    },
    description:{
        color:'grey',
        paddingHorizontal:10
    },
    daterow:{
        flexDirection:"row",
        justifyContent:'space-between'
    },
    date:{
        color:'dodgerblue',
        
    }

})