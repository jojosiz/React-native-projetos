import React from 'react';
import { SafeAreaView } from 'react-native';
import ListaFilmesGhibli from './componente/ListaFilmesGhibli.jsx';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ListaFilmesGhibli />
    </SafeAreaView>
  );
};

export default App;


