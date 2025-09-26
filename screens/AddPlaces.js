import PlaceForm from "../components/Places/PlaceForm";
import { insert } from "../utils/database";

const AddPlaces = ({navigation}) => {
  const createPlaceHandler = (newPlace) =>{
    insert(newPlace).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    });

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
