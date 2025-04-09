import React from 'react';
import {Text, View} from 'react-native';


import Cat from "./Componente/Cat.jsx";

import Dog from "./Componente/Dog.jsx";

const App = () => {
  return (
    <View style={{ padding: 15, gap: 20 }}>
      <Cat name="Joana" age={4} />
      <Cat name="Maria" age={8} />
      <Cat name="João" age={6} />
      <Dog name= "Adolfo" breed="Pastor alemão"/>
      <Dog name= "Huck" breed= "Buldogue" />
      <Dog name= "Rex" breed= "Golden Retriever" />
    </View>
  );
};

export default App;