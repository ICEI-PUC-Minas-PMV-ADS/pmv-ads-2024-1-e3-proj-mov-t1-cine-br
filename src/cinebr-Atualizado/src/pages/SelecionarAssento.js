import React, { useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';

const SelecionarAssento = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState(new Set());
  const [selectedSeats, setSelectedSeats] = useState(new Set());
  const [reservedSeats, setReservedSeats] = useState(new Set());
  const [ticketType, setTicketType] = useState('Inteiro');
  const [seatPrices, setSeatPrices] = useState({});
  const navigation = useNavigation();

  const ticketPrices = {
    Meia: 10,
    Inteiro: 20,
  };

  const onPress = (rowLabel, seat) => {
    const seatLabel = `${rowLabel}${seat}`;
    if (!selectedSeats.has(seatLabel) && !reservedSeats.has(seatLabel)) {
      setCount(count + 1);
      setProducts(new Set(products.add(seatLabel)));
      setSelectedSeats(new Set(selectedSeats.add(seatLabel)));
      setSeatPrices(prevSeatPrices => ({
        ...prevSeatPrices,
        [seatLabel]: ticketPrices[ticketType],
      }));
    }
  };

  const onClear = () => {
    setCount(0);
    setProducts(new Set());
    setSelectedSeats(new Set());
    setReservedSeats(new Set());
    setSeatPrices({});
  };

  const onConfirm = () => {
    setReservedSeats(new Set([...reservedSeats, ...selectedSeats]));
    setSelectedSeats(new Set());
    navigation.navigate('TelaCadastro');
  };

  const selectedProducts = Array.from(products).join(', ');
  const totalValue = Array.from(products).reduce((total, seat) => total + seatPrices[seat], 0);

  const renderSeats = () => {
    const seats = [];
    const rows = [
      { label: 'A', seats: [1, 2, 3, 4, 5] },
      { label: 'B', seats: [6, 7, 8, 9, 10, 11, 12, 13, 14] },
      { label: 'C', seats: [15, 16, 17, 18, 19, 20, 21, 22, 23] },
      { label: 'D', seats: [24, 25, 26, 27, 28, 29, 30] },
      { label: 'E', seats: [31, 32, 33, 34, 35, 36, 37] },
      { label: 'F', seats: [38, 39, 40, 41, 42, 43, 44] },
      { label: 'G', seats: [45, 46, 47, 48, 49, 50, 51, 52, 53] },
      { label: 'H', seats: [54, 55, 56, 57, 58, 59, 60, 61, 62] },
      { label: 'I', seats: [63, 64, 65, 66, 67] },
    ];

    rows.forEach(row => {
      seats.push(
        <View key={row.label} style={styles.rowContainer}>
          <Text style={styles.rowLabel}>{row.label}</Text>
          {row.seats.map(seat => {
            const seatLabel = `${row.label}${seat}`;
            return (
              <TouchableWithoutFeedback key={seat} onPress={() => onPress(row.label, seat)}>
                <View style={[
                  styles.button,
                  selectedSeats.has(seatLabel) && styles.selectedButton,
                  reservedSeats.has(seatLabel) && styles.reservedButton,
                ]}>
                  <Text style={styles.buttonText}>{seat}</Text>
                </View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
      );
    });

    return seats;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha o tipo de ingresso:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={ticketType}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => setTicketType(itemValue)}
        >
          <Picker.Item label="Meia" value="Meia" />
          <Picker.Item label="Inteiro" value="Inteiro" />
        </Picker>
      </View>
      <View style={styles.seatContainer}>
        {renderSeats()}
      </View>
      <View style={styles.buttonActionContainer}>
        <TouchableWithoutFeedback onPress={onConfirm}>
          <View style={styles.confirmButton}>
            <Text>Confirmar</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={onClear}>
          <View style={styles.clearButton}>
            <Text>Cancelar</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Produtos selecionados: {selectedProducts}</Text>
        <Text style={styles.infoText}>Quantidade: {count} itens</Text>
        <Text style={styles.infoText}>Valor: R$ {totalValue},00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#4DCEC1',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  pickerContainer: {
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: 150,
  },
  seatContainer: {
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  rowLabel: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#90EE90',
    padding: 10,
    margin: 5,
    width: 10,
    height: 10,
    justifyContent: 'center',
  },
  selectedButton: {
    backgroundColor: '#F1696B',
  },
  reservedButton: {
    backgroundColor: '#FFD700',
  },
  buttonText: {
    color: '#000',
  },
  buttonActionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  confirmButton: {
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
    padding: 10,
    width: 100,
    height: 30,
    justifyContent: 'center',
    marginRight: 10,
  },
  clearButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 100,
    height: 30,
    justifyContent: 'center',
    marginLeft: 10,
  },
  infoContainer: {
    alignItems: 'flex-start',
    padding: 10,
    width: '80%',
  },
  infoText: {
    color: '#000000',
    fontSize: 16,
    marginVertical: 5,
  },
});

export default SelecionarAssento;
