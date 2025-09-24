import { Alert, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "../UI/CustomButton";
import Colors from "../../constants/colors";
import { getCurrentPositionAsync, PermissionStatus, useForegroundPermissions } from "expo-location";
import getMapPreview, { getAddress } from "../../utils/location";
import { useIsFocused, useNavigation, useRoute } from "@react-navigation/native";

const LocationPicker = ({onPickedLocation}) => {
    const [locationPermissionInfo, requestPermission] = useForegroundPermissions();
    const navigation = useNavigation();
    const route = useRoute();
    const [pickedLocation, setPickedLocation] = useState();
    const isFocused = useIsFocused();

    const verifyPermission = async() =>{
        if (locationPermissionInfo.status === PermissionStatus.UNDETERMINED) {
            const permissionRes = await requestPermission();

            return permissionRes.granted;
        }
        if (locationPermissionInfo.status === PermissionStatus.DENIED) {
            return false;
        }
        return true;
    }

    const getLocationHandler = async() =>{
        const status = await verifyPermission();
        if(!status) return Alert.alert("Please Give Permission", "Please give location permission for application running");
        
        const location = await getCurrentPositionAsync();
        setPickedLocation(location.coords);
    }
    const pickOnMapHandler = ()=>{
        navigation.navigate("Map");
    }

    useEffect(()=>{
        if (route.params && isFocused) {
            setPickedLocation({latitude: route.params.lat, longitude: route.params.lng});
        }
    }, [isFocused, route]);

    useEffect(()=>{
        // const fetchAddress = async () => {
        //     if (!pickedLocation) return;
        //     const address = await getAddress(pickedLocation.lat, pickedLocation.lng);
        //     const locationWithAddress = { ...pickedLocation, address };
        //     console.log(locationWithAddress);
        onPickedLocation(pickedLocation);
        // };

        // fetchAddress();
    }, [pickedLocation, onPickedLocation]);
  return (
    <View>
        <View style={styles.mapContainer}>
            <Image source={{uri: pickedLocation && getMapPreview(pickedLocation.latitude, pickedLocation.longitude)}} style={styles.image}/>
        </View>
        <View style={styles.actions}>
            <CustomButton icon={"location"} onPress={getLocationHandler}>Locate User</CustomButton>
            <CustomButton icon={"map"} onPress={pickOnMapHandler}>Pick on Map</CustomButton>
        </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
    mapContainer: {
        width: "100%",
        height: 200,
        marginVertical: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        overflow: "hidden"
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: "100%"
    }
});
