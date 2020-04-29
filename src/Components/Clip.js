import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  Clipboard,
  SectionList
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

class Clip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigScreen: " ",
      data:[]
    };
  }
  async getContent() {
    const CopiedText = await Clipboard.getString();
    this.setState({
      navigScreen: CopiedText
    });
  }

  componentDidMount() {
    fetch(
      "https://api.myjson.com/bins/oylfu"
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
            data,
        })
      });
  }
  
  render() {
    const { navigScreen,data } = this.state;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Text>Heelloooo</Text>

        <TouchableOpacity
          onPress={() => {
            this.getContent();
          }}
        >
          <Text>Press Me Paste</Text>
        </TouchableOpacity>
        <Text>{navigScreen}</Text>

          <SectionList
            style={{
                flex:1,
                backgroundColor:'red'
            }}
            sections={[
              {
                  title:'title',
                  data: data
                }
            ]}
            renderItem={({ item }) => {
              return (
                <View>
                    <Text>{item.productName}</Text>
                    <Text>{item.price}</Text>
                    <Text>{item.volume} : {item.measurementUnit.unitId}</Text>
                    
                </View>
              );
            }}
            renderSectionHeader={({ section:productId }) => (
              <View>
                  <Text>
                      {section.primaryCategory}
                  </Text>
              </View>
            )}
          />
          

      </SafeAreaView>
    );
  }
}
export default Clip;
