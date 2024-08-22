import React, { useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image } from 'react-native';
import { CartContext } from './CartContext';

const Menu = () => {
  const { addToCart } = useContext(CartContext);

  const menuItems = [
    { id: '1', name: 'Burger', image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg', description: 'Burger with small fries', price: 85 },
    { id: '2', name: 'Pizza', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh5cGEMyG0NvhMVBCPY-INjnU83zkrm1sQ7A&s.jpg', description: 'Pepperoni pizza', price: 150 },
    { id: '3', name: 'Pasta', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf2w4h8vO1dUhv4HhWl1pk59K8icCzr_z70g&s.jpg', description: 'Meatball pasta in a delicious tomato sauce', price: 120 },
    { id: '4', name: 'Fried Chicken', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDoWAXdv-GURfzUNKET_vRWOYlAaqHX_S4Jw&s.jpg', description: 'Korean fried chicken in a spicy sticky sauce', price: 80 },
    { id: '5', name: 'Gatsby', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO6k1MUyiustyQhIluUEgPyY0Y8pviqy7Jcg&s.jpg', description: 'With everything you could imagine in one sandwich', price: 100 },
    { id: '6', name: 'Shisanyama', image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQNBcw5wM9oK-LQuKD_HePxq26XPzIml38rSqpoP-kRg15j3U3D4wzQERGvy53uVjzJvhPSQLYQQHpBpWg0HNRsGbV05gPUp5Weq1tTAMNvVKFt8zknJ3xNo6AgYNfil_Clk2s8rZlKEg/s1600/MG_3882.jpg', description: 'Braai meat with plenty sides', price: 200 },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>R{item.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(item)} color="#34D399" />
    </View>
  );

  return (
    <FlatList
      data={menuItems}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    backgroundColor: '#000',
  },
  name: {
    fontSize: 18,
    color: '#fff',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    color: '#aaa',
    marginVertical: 5,
  },
  price: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 15, 
  },
});

export default Menu;
