import React, { useContext } from 'react';
import { View, Button, StyleSheet, FlatList, TouchableOpacity, Image, Alert, Text } from 'react-native';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeItem, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      Alert.alert('Cart Empty', 'Your cart is empty!');
    } else {
      Alert.alert('Checkout Successful', 'Your order is on its way!');
      clearCart(); 
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const renderCartItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>R{item.price} x {item.quantity}</Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.removeButton]}
            onPress={() => removeItem(item.id)}
          >
            <Text style={styles.buttonText}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {cartItems.length > 0 && (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id}
            style={styles.cartList}
          />
          <Text style={styles.total}>Total: R{calculateTotal()}</Text>
        </>
      )}
      <Button title="Checkout" onPress={handleCheckout} color="#34D399" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000000',
  },
  cartList: {
    marginBottom: 20,
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    color: '#fff',
  },
  price: {
    fontSize: 16,
    color: '#fff',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#34D399',
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  removeButton: {
    backgroundColor: '#FF6347',
  },
  total: {
    fontSize: 18,
    color: '#fff',
    marginVertical: 10,
  },
});

export default Cart;
