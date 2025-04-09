import React from 'react';
import { SafeAreaView } from 'react-native';
import ListaMangas from './componente/ListaMangas.jsx';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ListaMangas />
    </SafeAreaView>
  );
}

