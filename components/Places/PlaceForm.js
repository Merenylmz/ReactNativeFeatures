import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useCallback, useState } from "react";
import Colors from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import PrimaryButton from "../UI/PrimaryButton";

const PlaceForm = () => {
  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [location, setLocation] = useState();

  const takenImageHandler = (image) =>{
    setImage(image);
  }
  const pickedLocationHandler = useCallback((location) =>{
    setLocation(location)
  }, [])
  const savePlaceHandler = () =>{
    console.log(title, image, location);
  }
  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>PlaceForm</Text>
        <TextInput style={styles.input} onChangeText={(e)=>setTitle(e)} value={title}/>
      </View>
      <ImagePicker onTakenImage={takenImageHandler}/>
      <LocationPicker onPickedLocation={pickedLocationHandler}/>
      <PrimaryButton style={{marginTop: 20}} onPress={savePlaceHandler}>Save</PrimaryButton>
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
