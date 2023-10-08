import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  useGetAllProductsQuery,
  useGetProductQuery,
} from '../redux/slices/apiSlice';
import CustomProductCard from '../components/CustomProductCard';

const HomeScreem = () => {
  const [search, setSearch] = useState('');
  const {data: allProductData, isLoading: allProductLoader} =
    useGetAllProductsQuery();

  const {data: productData, isLoading: productLoader} =
    useGetProductQuery(search);

  if (allProductLoader) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={40} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <TextInput
          onChangeText={setSearch}
          style={styles.textInput}
          placeholder="Search..."
        />

        {productLoader ? (
          <ActivityIndicator size={40} />
        ) : (
          (search ? productData.products : allProductData.products).map(
            (item, index) => (
              <CustomProductCard
                key={index}
                title={item.title}
                image={item.thumbnail}
                description={item.description}
                price={item.price}
              />
            ),
          )
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreem;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, paddingBottom: 0},
  scrollView: {gap: 10, paddingBottom: 20},
  loaderContainer: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  textInput: {borderWidth: 1, borderRadius: 10, paddingHorizontal: 10},
});
