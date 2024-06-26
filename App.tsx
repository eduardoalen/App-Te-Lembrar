import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';

function App() {

  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
    'Imagine uma nova história para sua vida e acredite nela.',
    'Não espere por uma crise para descobrir o que é importante em sua vida.',
    'Nas dificuldades da vida, descobrimos a nossa verdadeira força interior. ',
    'A verdadeira riqueza está nas experiências que acumulamos e não nos bens materiais que possuímos.',
    'Colecione memórias e acumule sorrisos. Todo o resto é passageiro.',
    'A vida é curta demais para gastar tempo se preocupando com coisas que estão além do nosso controle. Viva! Sonhe!',
    'Acredite em si e chegará um dia em que os outros não terão outra escolha senão acreditar com você.',
    'Pessimismo leva à fraqueza, otimismo ao poder.',
    'O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.'
  ];

  function geraFrase() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length) //floor: numero inteiro -
    let fraseGerada = frases[numeroAleatorio]
    setTextoFrase('" ' + fraseGerada + ' "');
  }

  function reiniciar() {
    setTextoFrase('');
  }

  return (
    <View style={styles.container}>
      
      <Image
      source={require('./src/imagem.png')}
      style={styles.img}
      />

      <Text style={styles.textofrase}> {textoFrase} </Text>

      <TouchableOpacity style={styles.botao} onPress={ geraFrase }>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Gerar frase</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, { marginTop: 15, borderColor: '#E3E3E3' }]} onPress={ reiniciar }>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: '#E3E3E3' }]}>Reiniciar</Text>
        </View>
      </TouchableOpacity> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111111'
  },
  img: {
    width: 230,
    height: 230,
  },
  textofrase: {
    fontSize: 20,
    color: '#F5BBAF',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#910000',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F5BBAF'
  }
});

export default App;