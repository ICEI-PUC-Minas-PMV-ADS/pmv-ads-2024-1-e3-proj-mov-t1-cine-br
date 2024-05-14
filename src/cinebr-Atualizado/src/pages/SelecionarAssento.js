import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, ScrollView, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const ingressos = [
  { tipo: 'Inteira', codigo: '001', valor: 40.0 },
  { tipo: 'Meia', codigo: '002', valor: 20.0 },
];

const assentosInicial = [
  {
    fileira: 'A',
    cadeira: '01',
    reservado: false,
    tipo: '',
    selecionado: false,
  },
  {
    fileira: 'A',
    cadeira: '02',
    reservado: false,
    tipo: '',
    selecionado: false,
  },
  {
    fileira: 'A',
    cadeira: '03',
    reservado: false,
    tipo: '',
    selecionado: false,
  },
  {
    fileira: 'A',
    cadeira: '04',
    reservado: false,
    tipo: '',
    selecionado: false,
  },
  {
    fileira: 'A',
    cadeira: '05',
    reservado: true,
    tipo: 'Inteira',
    selecionado: false,
  }, // Bloqueado, não conta no total
  {
    fileira: 'B',
    cadeira: '01',
    reservado: false,
    tipo: '',
    selecionado: false,
  },
  {
    fileira: 'B',
    cadeira: '02',
    reservado: false,
    tipo: '',
    selecionado: false,
  },
  {
    fileira: 'B',
    cadeira: '03',
    reservado: true,
    tipo: 'Meia',
    selecionado: false,
  }, // Bloqueado, não conta no total
  {
    fileira: 'B',
    cadeira: '04',
    reservado: false,
    tipo: '',
    selecionado: false,
  },
  {
    fileira: 'B',
    cadeira: '05',
    reservado: false,
    tipo: '',
    selecionado: false,
  },
];

const SelecionarAssento = () => {
  const [assentos, setAssentos] = useState(assentosInicial);
  const [tipoIngresso, setTipoIngresso] = useState('Inteira');

  const toggleSeat = (index) => {
    let newSeats = [...assentos];
    if (
      newSeats[index].fileira + newSeats[index].cadeira === 'A05' ||
      newSeats[index].fileira + newSeats[index].cadeira === 'B03'
    ) {
      return; // Não permite alterar os assentos A05 ou B03
    }
    if (!newSeats[index].reservado) {
      newSeats[index].reservado = true;
      newSeats[index].tipo = tipoIngresso;
      newSeats[index].selecionado = true;
    } else {
      newSeats[index].reservado = false;
      newSeats[index].tipo = '';
      newSeats[index].selecionado = false;
    }
    setAssentos(newSeats);
  };

  const totalItens = assentos.filter(
    (seat) =>
      seat.reservado &&
      !(
        seat.fileira + seat.cadeira === 'A05' ||
        seat.fileira + seat.cadeira === 'B03'
      )
  ).length;
  const valorTotal = assentos.reduce((acc, seat) => {
    if (
      seat.reservado &&
      !(
        seat.fileira + seat.cadeira === 'A05' ||
        seat.fileira + seat.cadeira === 'B03'
      )
    ) {
      return acc + ingressos.find((ing) => ing.tipo === seat.tipo).valor;
    }
    return acc;
  }, 0);

  return (
    <ScrollView style={styles.container}>
      <Picker
        selectedValue={tipoIngresso}
        style={styles.picker}
        onValueChange={(itemValue) => setTipoIngresso(itemValue)}>
        {ingressos.map((ing) => (
          <Picker.Item key={ing.codigo} label={ing.tipo} value={ing.tipo} />
        ))}
      </Picker>
      <View style={styles.seatsContainer}>
        {assentos.map((seat, index) => (
          <TouchableOpacity
            key={seat.fileira + seat.cadeira}
            style={[
              styles.seat,
              seat.reservado
                ? seat.selecionado
                  ? styles.selectedSeat
                  : styles.reservedSeat
                : styles.availableSeat,
            ]}
            onPress={() => toggleSeat(index)}
            disabled={
              seat.fileira + seat.cadeira === 'A05' ||
              seat.fileira + seat.cadeira === 'B03'
            }>
            <Text>{seat.fileira + seat.cadeira}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.totais}>
        <Text>
          Assentos selecionados:{' '}
          {assentos
            .filter((seat) => seat.selecionado)
            .map((seat) => seat.fileira + seat.cadeira)
            .join(', ')}
        </Text>
        <Text>{totalItens} ingressos</Text>
        <Text>Total: R$ {valorTotal.toFixed(2)}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  seatsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  seat: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  reservedSeat: {
    backgroundColor: 'yellow', // Assentos reservados são amarelos
  },
  selectedSeat: {
    backgroundColor: 'red', // Assentos selecionados são vermelhos
  },
  availableSeat: {
    backgroundColor: 'green', // Assentos disponíveis são verdes
  },
  totais: {
    marginTop: 20,
  },
  picker: {
    height: 50,
    width: 150,
  },
});

export default SelecionarAssento;
