import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import ContactImage from '../assets/download.jpeg';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', 
    padding: 10,
  },
  searchInput: {
    width: '100%',
    height: 40,
    borderRadius: 20,
    backgroundColor: 'black',
    color: 'white',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  itemContainer: {  
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: '#D4AF37', // Texto branco
  },
});

const Listadecontatos = () => {
  const [search, setSearch] = useState('');
  const [contacts] = useState([
    { key: 'Ana Maria' },
    { key: 'Bruno' },
    { key: 'Diego' },
    { key: 'Joana' },
    { key: 'Jane' },
    { key: 'João' },
    { key: 'Naiade' },
  ]);

  const filteredContacts = contacts.filter(contact =>
    contact.key.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="🔎 Pesquisar contato"
        placeholderTextColor="gray"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredContacts}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={ContactImage} style={styles.image} />  
            <Text style={styles.text}>{item.key}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()} 
      />
    </View>
  );
};

export default Listadecontatos;


