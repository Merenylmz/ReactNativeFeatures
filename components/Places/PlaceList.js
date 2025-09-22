import { StyleSheet, Text, View } from "react-native";
import PlaceItem from "./PlaceItem";
import Colors from "../../constants/colors";

const PlaceList = ({places}) => {
    if (!places || places.length == 0) {
        return (
            <View style={styles.fallBackContainer}>
                <Text style={styles.fallBackText}>No Places added yet - start adding some!</Text>
            </View>
        );
    }

    return (
        <FlatList data={places} renderItem={({item})=><PlaceItem place={item} />} keyExtractor={(item)=>item.id}/>
    );
};

export default PlaceList;

const styles = StyleSheet.create({
    fallBackContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    fallBackText: {
        fontSize: 16,
        color: Colors.primary100
    }
});
