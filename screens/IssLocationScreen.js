import * as React from 'react';
import { StyleSheet, Text, View , Image , StatusBar , SafeAreaView, ImageBackground , Platform } from 'react-native';
import MapView , {Marker} from 'react-native-maps';
import {axios} from 'axios';

export default class IssLocatorScreen extends React.Component{
    constructor(){
        super();
        this.state={
            location:{}
        }
    }
    componentDidMount(){
        this.getIssLocation()
    }
    getIssLocation=()=>{
        axios.get('https://api.wheretheiss.at/v1/satellites/25544')
        .then((response)=>{
            this.setState({
                location: response.data
            })
        }).catch((error)=>{
            alert(error.message);
        })
    }

    render(){
        if(Object.keys(this.state.location).length === 0){
            return(
                <View style={{flex:1, justifyContent: 'center' , alignItems: 'center'}}>
                    <Text>Loading...</Text>
                </View>
            )
        }else{
            return(
                
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea}/>
                    <ImageBackground source={require('../assets/iss_bg.jpg')} style={styles.backgroundImage}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>ISS LOCATION</Text>
                    </View>
                    <View style={styles.mapContainer}>
                        <MapView 
                            style={styles.map} 
                            region={{
                                latitude: this.state.location.latitude,
                                longitude: this.state.location.longitude,
                                longitudeDelta: 100,
                                latitudeDelta: 100
                            }}>
                                <Marker 
                                coordinate={{
                                    latitude: this.state.location.latitude,
                                    longitude: this.state.location.longitude
                                }}>
                                    <Image source={require('../assets/iss_icon.png')}  style={{width: 50 , Height: 50}}/>
                                </Marker>
                            </MapView>
                    </View>
                    </ImageBackground>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container:{flex:1},
    droidSafeArea:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage:{
        flex:1,
        resizeMode: 'cover'
    },
    titleContainer:{
        flex: 0.1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    },
    mapContainer:{
        flex:0.6
    },
    map:{
        height: '100%',
        width: '100%'
    }
});