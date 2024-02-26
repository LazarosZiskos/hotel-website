import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

function Map() {
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: "AIzaSyAUEvLDQe1iwwliGbYb-HslHGjMZP7wXRk",
                version: "weekly"
            });

            const google = await loader.load();

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

            // Setup the map
            const map = new google.maps.Map(mapRef.current as HTMLDivElement);

            // Set map options
            map.setOptions(mapOptions);

            // Put up marker
            const marker = new google.maps.Marker({
                position: position,
                map: map
            });
        }
        initMap();
    }, [])

    return (
        <div className="h-[400px]" ref={mapRef}/>
    )
}

export default Map;
