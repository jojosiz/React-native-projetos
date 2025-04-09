import React, { useState } from 'react';
import { SectionList, StyleSheet, Text, View, Image, TextInput } from 'react-native';

const movies = [
  {
    title: '1980s',
    data: [
      { id: '1', title: 'Nausicaä do Vale do Vento', year: 1984, description: 'Uma princesa guerreira luta para salvar seu mundo de um apocalipse ecológico.', image: require('../assets/1984-Nausicaä-do-Vale-do-Vento.webp') },

      { id: '2', title: 'O castelo no céu', year: 1986, description: 'O filme retrata as aventuras de um menino e uma menina tentando proteger um cristal mágico de um grupo de agentes militares, enquanto procuram um lendário castelo flutuante.', image: require('../assets/1986-O-Castelo-no-Céu.webp') },

      { id: '3', title: 'Meu Amigo Totoro', year: 1988, description: 'Duas irmãs descobrem criaturas mágicas em sua nova casa no campo.', image: require('../assets/1988-Meu-Amigo-Totoro.webp') },
    ],
  },
  {
    title: '1990s',
    data: [
      { id: '4', title: 'Eu posso ouvir o oceano', year: 1993, description: 'Após o divórcio dos pais de Rikako, uma estudante de Tóquio, é transferida para um colégio de Kochi, uma cidade litorânea remota da capital', image: require('../assets/Eu-Posso-Ouvir-o-Oceano.webp') },

      { id: '5', title: 'Sussuros do coração', year: 1995, description: 'Shizuku é uma estudante que sonha em ser uma escritora e decide, durante o verão, ler vinte livros. Mas, curiosamente, todas as edições que ela pegou na biblioteca já haviam sido lidas por um tal de Seiji Amasawa.', image: require('../assets/Sussurros-do-Coração.webp') },

      { id: '6', title: 'Princesa Mononoke', year: 1997, description: 'Um príncipe envolvido em uma batalha entre humanos e espíritos da floresta.', image: require('../assets/1997-Princesa-Mononoke.webp') },
    ],
  },
  {
    title: 'Anos 2000',
    data: [
{ id: '7', title: 'A Viagem de Chihiro', year: 2001, description: 'Uma garota entra em um mundo mágico e deve trabalhar para libertar seus pais.', image: require('../assets/2001-A-Viagem-de-Chihiro.webp') },

      { id: '8', title: 'O Castelo Animado', year: 2004, description: 'Uma bruxa lança uma terrível maldição sobre a jovem Sophie, transformando-a numa velha de 90 anos.', image: require('../assets/2004-O-Castelo-Animado.webp') },

      { id: '9', title: 'Ponyo: Uma Amizade que Veio do Mar', year: 2008, description: 'Ponyo é uma peixinha dourada que conhece o garoto Sosuke. Ele a leva para a sua casa e decide cuidar dela. O amor e a amizade deles são tão grandes, que Ponyo resolve se tornar humana só para ficar mais tempo ao lado de Sosuke.', image: require('../assets/2008-Ponyo.webp') },
    ],
  },
];


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: '#1E90FF',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#87CEFA',
    padding: 8,
    borderRadius: 5,
    marginBottom: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  image: {
    width: 100,
    height: 160,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'gray',
  },
});

const ListaGhibli = () => {
  const [search, setSearch] = useState('');
  
  const filteredMovies = movies.map(section => ({
    title: section.title,
    data: section.data.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase())),
  })).filter(section => section.data.length > 0);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Buscar filmografia Ghibli..."
        value={search}
        onChangeText={setSearch}
      />
      <SectionList
        sections={filteredMovies}
        keyExtractor={(item) => item.id}
        renderSectionHeader={({ section }) => <Text style={styles.sectionHeader}>{section.title}</Text>}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title} ({item.year})</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ListaGhibli;
