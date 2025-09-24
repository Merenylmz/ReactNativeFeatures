import PlaceForm from "../components/Places/PlaceForm";

const AddPlaces = ({navigation}) => {
  const createPlaceHandler = (newPlace) =>{
    navigation.replace("AllPlaces", {
      place: newPlace
    });

  }
  return (
    <PlaceForm onCreatePlace={createPlaceHandler}/>
  );
};

export default AddPlaces;

// const styles = StyleSheet.create({});
