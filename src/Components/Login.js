import React from 'react';
import {View, Text, StyleSheet, TextInput,TouchableOpacity, Button} from 'react-native';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={text:'',passtext:'',changed:0};

      }
  onChangeText(text){
   
  }

  onPressing=()=>{
    this.setState({
      changed:this.state.changed+1
    })
 
  }
 
  render(){
   const {navigation,route}=this.props;

     return(
         <View style={styles.container}>
            <Text>Username</Text>
            <TextInput
            style={{
                height: 50,
                width: '90%',
                borderColor: 'blue',
                borderWidth: 1,
              }}

              onChangeText={text=>this.setState({text})}
            />
            <Text>{this.state.text}</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Tatasky',{data:this.onPressing()})}>
            <Text>Login</Text>
            </TouchableOpacity>
            <TextInput 
            style={{
                height: 50,
                width: '90%',
                borderColor: 'blue',
                borderWidth: 1,
              }}
              onChangeText={passtext=>this.setState({passtext})}
            
            />
            <Text>{this.state.passtext}</Text>
            <Text>{this.state.changed}</Text>
            <Button title="Press" onPress={this.onPressing}></Button>
         
         </View>
     )
 }  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Login