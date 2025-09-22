import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import { launchCameraAsync, launchImageLibraryAsync, PermissionStatus, useCameraPermissions } from "expo-image-picker";
import { useEffect, useState } from "react";
import Colors from "../../constants/colors";
import CustomButton from "../UI/CustomButton";

const ImagePicker = ({onTakenImage}) => {
    const [cameraPermissionInfo, requestPermission] = useCameraPermissions();
    const [pickedImage, setPickedImage] = useState();

    const verifyPermission = async() =>{
        if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
            const permissionRes = await requestPermission();

            return permissionRes.granted;
        }
        if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
            return false;
        }
        return true;
    }

    const takeImageHandler = async() =>{
        const status = await verifyPermission();
        if(!status) return Alert.alert("Camera was not open", "Please Give permission for use application camera");

        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16,9],
            quality: .5
        });
        setPickedImage(image.assets[0].uri);
        onTakenImage(image.assets[0].uri);
    };
    let imageComponent = <Text>No image yet!</Text> 
    if (pickedImage) {
        imageComponent = <Image source={{uri: pickedImage}} style={styles.image}/>
    }

  return (
    <View>
      <View style={styles.imageContainer}>
        {imageComponent}
      </View>
      <CustomButton onPress={takeImageHandler} icon={"camera"}>Take a Image</CustomButton>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
        height: 200,
        marginVertical: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        overflow: "hidden"
    },
    image: {
        width: "100%",
        height: "100%",
    }
});
