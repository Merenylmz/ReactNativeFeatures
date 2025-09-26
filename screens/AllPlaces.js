import PlaceList from "../components/Places/PlaceList";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { fetch } from "../utils/database";

const AllPlaces = ({route}) => {
    const [loadedPlaces, setLoadedPlaces] = useState([]);

    const isFocused = useIsFocused();
    useEffect(()=>{
        const getData = async() =>{
            const res = await fetch();    
            setLoadedPlaces(res);
        }
        // const isItHave = loadedPlaces.filter()
        if (isFocused) {
            // setLoadedPlaces((curLoadPlaces)=>{
            //     return [...curLoadPlaces, route.params.place];
            // });
            getData();
        }
    }, [isFocused]);

    return (
        <PlaceList places={loadedPlaces} />
    );
};

export default AllPlaces;