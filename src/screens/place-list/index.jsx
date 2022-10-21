import { FlatList, Image, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { PlaceItem } from "../../components";
import { loadPlaces } from "../../store/place.slice";
import { styles } from "./styles";
import { useEffect } from "react";

const PlaceList = ({ navigation }) => {
  const dispatch = useDispatch();
  const places = useSelector((state) => state.place.places);

  useEffect(() => {
    dispatch(loadPlaces());
  }, [dispatch]);

  const renderItem = ({ item }) => (
    <PlaceItem
      {...item}
      onSelect={() => navigation.navigate("PlaceDetail", { placeId: item.id })}
    />
  );

  const ListEmptyComponent = () => (
    <View style={styles.emptyContainer}>
      <Image source={{uri: 'https://i.ibb.co/dmzrttq/icono.jpg'}} style={styles.img}/>
      <Text style={styles.emptyText}>No tienes personas añadidas</Text>
    </View>
  );
  return (
    <FlatList
      style={styles.container}
      data={places}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

export default PlaceList;
