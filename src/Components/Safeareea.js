import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Image,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';

class Safeareea extends React.Component {
  constructor(props) {
    super(props);
  }

  check(id) {
    switch (id) {
      case '1':
        Alert.alert('Top Left');
        break;
      case '2':
        Alert.alert('Top Center');
        break;

      case '3':
        Alert.alert('Top Right');
        break;

      case '4':
        Alert.alert('Mid Left');
        break;

      case '5':
        Alert.alert('Mid MId');
        break;

      case '6':
        Alert.alert('Mid Right');
        break;

      case '7':
        Alert.alert('Bottom Left');
        break;

      case '8':
        Alert.alert('Bottom Mid');
        break;

      case '9':
        Alert.alert('Bottom Right');
        break;
    }
  }

  render() {
    const {navigation}=this.props;
    console.log('HI');
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#E0E0E0'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity onPress={() => this.check('1')}>
            <Image
              style={styles.img}
              source={require('../Assests/guitar.jpeg')}></Image>
          </TouchableOpacity>

          <TouchableOpacity style={{flex: 1}} onPress={() => this.check('2')}>
            <Text style={styles.text}>text</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.check('3')}>
            <Image
              style={styles.img}
              source={require('../Assests/guitar.jpeg')}></Image>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => this.check('4')}>
            <Text style={styles.text}>text</Text>
          </TouchableOpacity>

          <View style={{flex: 1}}>
            <Button title="Button" onPress={() => this.check('5')}></Button>
          </View>

          <TouchableOpacity onPress={() => this.check('6')}>
            <Text style={styles.text}>text</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity onPress={() => this.check('7')}>
            <Image
              style={styles.img}
              source={require('../Assests/guitar.jpeg')}></Image>
          </TouchableOpacity>

          <TouchableOpacity style={{flex: 1}} onPress={() => this.check('8')}>
            <Text style={styles.text}>text</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Listing')}>
            <Image
              style={styles.img}
              source={require('../Assests/guitar.jpeg')}></Image>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    height: 100,
    width: 100,
    flex: 0.3,
  },
  text: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
  },
});

export default Safeareea;
