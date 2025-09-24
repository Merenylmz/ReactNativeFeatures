import PlaceList from "../components/Places/PlaceList";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";

const AllPlaces = ({route}) => {
    const [loadedPlaces, setLoadedPlaces] = useState([]);

    const isFocused = useIsFocused();
    useEffect(()=>{
        // const isItHave = loadedPlaces.filter()
        if (isFocused && route.params) {
            setLoadedPlaces((curLoadPlaces)=>{
                return [...curLoadPlaces, route.params.place];
            });
        }
    }, [isFocused, route]);

    return (
        <PlaceList places={loadedPlaces} />
    );
};

export default AllPlaces;