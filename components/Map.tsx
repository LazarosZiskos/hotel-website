
import { useEffect, useRef, } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function Map() {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const initMap = async () => {

            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
                version: "weekly"
            });

            const { Map } = await loader.importLibrary('maps');
            //init marker
            const {Marker} = await loader.importLibrary('marker') as google.maps.MarkerLibrary


            const position = {
                lat: 40.268427626420625,
                lng: 22.596055941125844
            }

            // map options
            const mapOptions: google.maps.MapOptions = {
                center: position,
                zoom: 17,
                mapId: "MY_NEXTJS_MAPID"
            }

            //Setup the map
            const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

            // put up marker
            const marker = new Marker({
                map: map,
                position: position
            });


        }
        initMap();
    }, [])

    return (
        <div className="h-[400px]" ref={mapRef}/>

    )
}
export default Map;