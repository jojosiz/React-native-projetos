import {View, Text} from "react-native";

const Dog = (props: DogProps) => {
  return (
     <View style={{ borderBottomWidth: 2, 
     borderBottomColor: '#D2691E', 
     paddingBottom: 8, 
     marginBottom: 8 }} >

    <Text>🐕Ola, me chamo {props.name}, e minha raça é {props.breed}.</Text>
    </View>

  );
};
export default Dog;