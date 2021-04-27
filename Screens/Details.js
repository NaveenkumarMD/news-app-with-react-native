import React from 'react'
import {View,Text,Dimensions,StyleSheet,ScrollView,Image} from 'react-native'
import Bar from '../Components/Bar'
const screen=Dimensions.get('screen')
const width=screen.width
function Details({navigation,route}) {
    const data=route.params.data
    console.log(data.content)
    return (
        <View >
            <Bar name="Details"/>
            <ScrollView style={styles.container}>
                <Text style={styles.title}>{data.title}</Text>
                <Image source={{uri:data.urlToImage}} style={styles.Image}/>
                <Text style={styles.date}>Author:{data.author}</Text>
                <View style={{padding:10}}>
                <Text style={styles.description}>{data.description}</Text>
                <Text style={styles.content}>{data.content}</Text>
              
                </View>

            </ScrollView>
        </View>
    )
}

export default Details
const styles=StyleSheet.create({
    container:{
        top:40,
        
    },
    Image:{
        width:width,
        height:300
    },
    date:{
        fontSize:12,
        color:'dodgerblue',
        padding:10
    },
    title:{
        color:'dodgerblue',
        fontSize:24,
   
        padding:18,
    },
    description:{
        fontSize:20,
        color:'black',
        margin:10
    },
    content:{
        fontSize:16,
        color:'grey',
        margin:10
    }
})