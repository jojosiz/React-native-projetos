import {View, Text} from "react-native";

const Cat = (props: CatProps) => {
  return (
    <View style={{ borderBottomWidth: 2, 
    borderBottomColor: '#C8A2C8', 
    paddingBottom: 8, 
    marginBottom: 8 }} >
    
      <Text>🐈‍⬛Ola, eu sou {props.name}, e tenho {props.age} anos.</Text>
    </View>
  );
};
export default Cat;
