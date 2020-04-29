import React from "react";
import SectionListHeader from "./SectionListHeader";
import SectionListItem from "./SectionListItem";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  SectionList,
  Alert,
  BackHandler,
  Clipboard
} from "react-native";

arrObj = [
  { categoryId: 1, name: "Fruits", quantity: 2 },
  { categoryId: 1, name: "Fruits", quantity: 3 },
  { categoryId: 2, name: "Mobile", quantity: 39 },
  { categoryId: 2, name: "Laptops", quantity: 62 },
  { categoryId: 3, name: "Toys", quantity: 39 },
  { categoryId: 3, name: "Chairs", quantity: 62 },
  { categoryId: 4, name: "Bottles", quantity: 21 },
  { categoryId: 4, name: "Tables", quantity: 36 }
];

let datas = [];
arrObj.forEach(item => {
  if (!datas.includes(item.categoryId)) {
    datas.push(item.categoryId);
  }
});

var newList = [];
datas.forEach(item => {
  var dataList = {};
  dataList.title = item;
  dataList.data = [];
  arrObj.filter(value => {
    if (value.categoryId === item) {
      dataList.data.push(value);
    }
  });
  newList.push(dataList);
});

DisplayText = () => {
  return "Hello";
};

class demoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      text: " ",
      ClipText: " "
    };
  }
  AlertToggle = () => {
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Navigate",
          onPress: () => {
            Clipboard.setString(this.state.ClipText),
              this.props.navigation.navigate("Clip");
          }
        }
      ],
      { cancelable: false }
    );
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      this.setState({
        count: this.state.count + 1
      });
      if (this.state.count == 1) {
        this.setState({
          text: "Back handler Triggered"
        });
        setTimeout(() => {
          this.setState({
            text: " "
          });
        }, 3000);
      }
      if (this.state.count == 2) {
        this.AlertToggle();
        this.setState({
          count: 0
        });
      }
      return true;
    });
  }
  render() {
    const { route, navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Text>{this.state.text}</Text>
        {/* <Text style={{fontSize:20,padding:10}}>{route.params.routedata}</Text> */}
        <View style={styles.container}>
          {/* <Text>{route.params.datas}</Text> */}

          <TextInput
            style={{
              height: 40,
              widht: "60%",
              marginTop: 15,
              marginBottom: 10
            }}
            onChangeText={ClipText => this.setState({ ClipText })}
          ></TextInput>

          <SectionList
            sections={newList}
            renderItem={({ item }) => {
              return (
                <SectionListItem
                  name={item.name}
                  categName={item.categName}
                  quantity={item.quantity}
                />
              );
            }}
            renderSectionHeader={({ section }) => (
              <SectionListHeader titles={section.title} />
            )}
          />
        </View>
        {/* <TouchableOpacity onPress={AlertToggle}>
           <View>
               <Text>
                   Trigger Alert
               </Text>
           </View>
       </TouchableOpacity> */}
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5ead97"
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: "bold",
    color: "black",
    backgroundColor: "#8fb1aa",
    marginTop: 20
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
export default demoScreen;
