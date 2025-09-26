import PlaceList from "../components/Places/PlaceList";
import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { fetch } from "../utils/database";

const AllPlaces = ({route}) => {
    const [loadedPlaces, setLoadedPlaces] = useState([]);

    const isFocused = useIsFocused();
    useEffect(()=>{
        // const getData = async() =>{
        //     await fetch();    
        // }
        // // const isItHave = loadedPlaces.filter()
        // if (isFocused) {
        //     // setLoadedPlaces((curLoadPlaces)=>{
        //     //     return [...curLoadPlaces, route.params.place];
        //     // });
        //     getData();
        //     // setLoadedPlaces();
        // }
        fetch().then((res)=>{
            console.log(res);
            // return res;
        }).catch((err)=>{console.log(err);
        })
    }, [isFocused]);

    return (
        <PlaceList places={loadedPlaces} />
    );
};

export default AllPlaces;