import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native';

const mangas = [
  { id: '1', title: 'One Piece', image: require('../assets/Oni picie.jpeg') },
  { id: '2', title: 'Naruto', image: require('../assets/Naruto.jpeg') },
  { id: '3', title: 'Attack on Titan', image: require('../assets/Attack on Titan.jpeg') },
  { id: '4', title: 'Demon Slayer', image: require('../assets/Demon Slayer.jpeg') },
  { id: '5', title: 'Kaoru Hana wa Rin to Saku', image: require('../assets/Kaoru Hana wa Rin to Saku.jpg')},
  { id: '6', title: 'Vinland Saga', image: require('../assets/Vinland Saga.jpg')},
  {id: '7', title: 'A Sign of Affection', image: require('../assets/A Sing of Affection.jpg')}

];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
  },
  
  input: {
    height: 50,
    borderColor: '#cce5ff',
    borderWidth: 11,
    borderRadius: 11,
    paddingHorizontal: 11,
    marginBottom: 18,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },
  image: {
    width: 100,
    height: 160,
    borderRadius: 10,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
   
  },

  
});

const ListaMangas = () => {
  const [search, setSearch] = useState('');
  const [filteredMangas, setFilteredMangas] = useState(mangas);

  const handleSearch = (text) => {
    setSearch(text);
    setFilteredMangas(
      text
        ? mangas.filter((manga) =>
            manga.title.toLowerCase().includes(text.toLowerCase())
          )
        : mangas
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar mangá..."
        value={search}
        onChangeText={handleSearch}
      />
      <ScrollView>
        {filteredMangas.map((manga) => (
          <View key={manga.id} style={styles.itemContainer}>
            <Image source={manga.image} style={styles.image} />
            <Text style={styles.text}>{manga.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ListaMangas;


