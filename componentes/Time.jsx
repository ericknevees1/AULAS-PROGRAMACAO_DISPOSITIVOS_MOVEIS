import React from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import { Card, Text } from 'react-native-paper';
import Jogador from './Jogador';

const Time = ({ nome, anoFundacao, mascote, imagem, jogadores }) => {
  return (
    <Card style={styles.card}>
      <Card.Content>
        <Text variant="titleLarge">{nome}</Text>
        <Text>Ano de Fundação: {anoFundacao}</Text>
        <Text>Mascote: {mascote}</Text>
        <Image source={{ uri: imagem }} style={styles.imagem} />

        <Text variant="titleMedium" style={styles.subtitle}>Jogadores:</Text>
        
        <FlatList
          data={jogadores}
          keyExtractor={(item) => item.nome}
          renderItem={({ item }) => (
            <Jogador nome={item.nome} numero={item.numero} imagem={item.imagem} />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    padding: 10,
  },
  imagem: {
    width: 280,
    height: 250,
    marginVertical: 10,
    alignSelf: 'center',
  },
  subtitle: {
    marginTop: 10,
  },
});

export default Time;
