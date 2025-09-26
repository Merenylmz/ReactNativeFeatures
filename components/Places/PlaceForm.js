import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useCallback, useState } from "react";
import Colors from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import PrimaryButton from "../UI/PrimaryButton";
import {Place} from "../../models/place";

const PlaceForm = ({onCreatePlace}) => {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [location, setLocation] = useState();

  const takenImageHandler = (image) =>{
    setImage(image);
  }
  const pickedLocationHandler = useCallback((locations) =>{
    setLocation(locations);
  }, [])
  const savePlaceHandler = () =>{
    const newPlace = new Place(title, image, location);
    onCreatePlace(newPlace);
  }
  const deneme = () =>{
    onCreatePlace({"address": undefined, "id": "0.24251829080554352", "imageUri": "file:///data/user/0/host.exp.exponent/cache/ImagePicker/c93d77a9-8212-4688-b02a-2ae7b3be5228.jpeg", "location": {"latitude": 37.77281079238239, "longitude": -122.44625866413116}, "title": "Deneme"});
  }
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput style={styles.input} onChangeText={(e)=>setTitle(e)} value={title}/>
      </View>
      <ImagePicker onTakenImage={takenImageHandler}/>
      <LocationPicker onPickedLocation={pickedLocationHandler}/>
      <PrimaryButton style={{marginTop: 20}} onPress={savePlaceHandler}>Save</PrimaryButton>
      <PrimaryButton style={{marginTop: 20, marginBottom: 100}} onPress={deneme}>Denemeee</PrimaryButton>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
    fontSize: 16
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
    borderRadius: 5
  }
});
