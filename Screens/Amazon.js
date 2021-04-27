import React,{useState,useEffect} from 'react'
import { View,TouchableOpacity,ScrollView,Text,StatusBar} from 'react-native'
import Bar from '../Components/Bar'
import Card from '../Components/Card'
import {Ionicons,AntDesign} from '@expo/vector-icons'
const Logo=()=><Ionicons size={24} color="dodgerblue" name="logo-amazon"/>
const statusbarheight=StatusBar.currentHeight
function Amazon({navigation}) {
    const [data,setdata]=useState([{author:'naveen'}])
    const [sortby,setsortby]=useState('')
    useEffect(()=>{
        const response=fetch(`https://newsapi.org/v2/everything?q=${"Amazon"}&from=2021-03-27&sortBy=publishedAt&apiKey=159badcbcb0647ed9e3721a55db9bef4&language=en`)
        response.then(res=>res.json()).then(data=>{
            //console.log(data)
            setdata(data.articles)
        })
    },[])
    return (
        <View>
            <Bar name="Amazon">
                <Logo/>
            </Bar>
            <ScrollView style={{top:statusbarheight+5,marginBottom:100}}>
            <View style={{alignItems:'center'}}>
            <Ionicons size={200} color="dodgerblue" name="logo-amazon"/>
                </View>
                <View style={{flexDirection:'row',padding:15,justifyContent:'space-between'}}>
                    <View>
                        <Text style={{color:'dodgerblue'}} onPress={()=>navigation.navigate("Details")}>From</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>                        
                        <Text style={{color:'dodgerblue',paddingHorizontal:3}}>Sort by</Text>
                        <AntDesign name="down" size={16} color="dodgerblue" />
                    </View>
                </View>
                {data.map(datum=>{
                    return(
                        <TouchableOpacity >
                            <Card  title={datum.title} description={datum.description} author={datum.author} date={datum.publishedAt} data={datum} onPress={()=>navigation.navigate("Details",{data:datum})}>
                                <Logo/>
                            </Card>
                        </TouchableOpacity>

                    )
                })}
                
            </ScrollView>
        </View>
    )
}

export default Amazon
