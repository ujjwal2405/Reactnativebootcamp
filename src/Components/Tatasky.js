import React from 'react';
import {View, Text, StyleSheet, TextInput,TouchableOpacity, Button} from 'react-native';


class Tatasky extends React.Component{
    constructor(props){
        super(props);
        this.state={
            newValue:props.route.params.data
        } 
        
    }
   
   

    render(){
        const {newValue}=this.state;
        const {navigation,route}=this.props;
    
        return(
            <View style={{backgroundColor:"grey",flex:1}}>
                <View style={styles.recharge}>
                  <Text style={styles.rechargeText}>Recharge</Text>  
                </View>
            
            <View style={styles.amount}>
            <Text style={styles.enterAmount}>
                Enter Amount
            </Text>
            <Text style={styles.recommendedRecharge}>
                {`${newValue} BHaalu`}
            </Text>
            <View style={{borderBottomWidth:3,borderBottomColor:"blue"}}>
            <Text style={{padding:8,fontSize:35}}> 
                Rs. 999
            </Text>
            </View>
            
            <View style={styles.greyBlock}>
            <TouchableOpacity onPress={()=>navigation.navigate('Safearea')}>
            <View style={styles.proceedPayment}>
            
                <Text style={{fontSize:13,color:"#ffffff"}}>
                    Proceed to Payment
                </Text>
            
            </View>
            </TouchableOpacity>
            <Button title="xyz" onPress={newValue}></Button>
            </View>
            
            
            </View>
            <View style={{flexDirection:"row",marginTop:25,paddingBottom:8}}>
            <Text style={{marginLeft:30,fontSize:15}} >Recommended Plans</Text>
            <Text style={{marginHorizontal:"30%",color:"blue",fontSize:15}}>View All Plans</Text>
            </View>
            
            <View style={styles.plansBlock}>
            <Text style={styles.unlimitedData}>Unlimited Data</Text>
            
            <View style={{flexDirection:"row",marginTop:10,paddingBottom:8}} >
            
            <View style={{paddingLeft:20}}>
            <Text>VALIDITY</Text>
            <Text>30 Days</Text>
            </View>
            
            <View style={{marginHorizontal:"5%",borderLeftColor:"grey",borderLeftWidth:1,paddingLeft:10}}>
            <Text>Speed</Text>
            <Text>50 MBPS</Text>
            </View>
            
            <View style={styles.priceTag}>
            <Text style={{color:"white",fontSize:20}}>₹ 1249</Text>
            </View>
            
            </View>
            
            <View style={{borderTopColor:"grey",borderTopWidth:2}}>
            <Text style={styles.unlimitedData}>Unlimited Data</Text>
            
            <View style={{flexDirection:"row",marginTop:10,paddingBottom:8}} >
            
            <View style={{paddingLeft:20}}>
            <Text>VALIDITY</Text>
            <Text>90 Days</Text>
            </View>
            
            <View style={{marginHorizontal:"5%",borderLeftColor:"grey",borderLeftWidth:1,paddingLeft:10}}>
            <Text>Speed</Text>
            <Text>100 MBPS</Text>
            </View>
            
            <View style={styles.priceTag}>
            <Text style={{color:"white",fontSize:20}}>₹ 1800</Text>
            </View>
            
            </View>
            
            </View>
            
            
            
            
            </View>
            
            
            </View>



        )

    }
}

const styles = StyleSheet.create({
    recharge: {
        width:'100%',
        height:150,
        backgroundColor:'purple',
        justifyContent:"center"
    },
    rechargeText:{
        marginLeft:15,
        fontSize:20,
        color:"white"
    },
    amount:{
        width:'90%',
        height:250,
        backgroundColor:'white',
        marginLeft:20,
        // opacity:0.4,
        alignItems:'center',
        borderColor:"white",
        borderWidth:2,
        marginTop:-50,
        borderRadius:8
        
    },
    enterAmount:{
        fontSize:25,
        color:'black',
        marginTop:10,
        fontWeight:"bold"
        },
    recommendedRecharge:{
            fontSize:18,
            color:"grey",
            
    },
    greyBlock:{
    width:"100%",
    height:125,
    alignItems:"center",
    justifyContent:"center",
    },
    proceedPayment:{
    height:50,
    width:150,
    backgroundColor:"#cc0066",
    padding:5,
    borderRadius:8,
    borderColor:"black",
    borderWidth:2,
    justifyContent:"center",
    alignItems:"center"
    },
    plansBlock:{
        width:'90%',
        height:250,
        backgroundColor:'white',
        marginLeft:20,
        borderColor:"white",
        borderRadius:3,
        borderWidth:2
    },
    unlimitedData:{
        paddingLeft:15,
        paddingTop:10,
        fontWeight:"bold",
        fontSize:20
    },
    priceTag:{
        backgroundColor:"#cc0066",
        height:50,
        width :150,
        borderRadius:10,
        borderWidth:2,
        borderColor:"black",
        alignItems:"center",
        justifyContent:"center",
        marginLeft:10
        
    }

        
    


});

export default Tatasky