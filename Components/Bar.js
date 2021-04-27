import React from 'react'
import {View,StyleSheet,Dimensions,StatusBar,Text} from 'react-native'
import {StatusBar as Sb} from 'expo-status-bar'
const statusbarheight=StatusBar.currentHeight
function Bar(props) {
    return (
        <View style={styles.bar}>
            <Sb style="light" />
            {props.children}
            <Text style={styles.Text}>{props.name}</Text>
        </View>
    )
}

export default Bar
const styles=StyleSheet.create({
    bar:{
        flexDirection:'row',
        zIndex:1,
        top:statusbarheight,
        backgroundColor:'white',
        height:60,
        alignItems:'center',
        paddingLeft:10,
                
    },
    Text:{
        fontSize:20,
        paddingLeft:10,
        fontWeight:'800',
        color:'dodgerblue'
    }
})