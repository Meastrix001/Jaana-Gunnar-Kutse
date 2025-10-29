import { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

type UseGoogleMapProps = {
  center: google.maps.LatLngLiteral;
  zoom?: number;
};
export function useGoogleMap({ center, zoom = 14 }: UseGoogleMapProps) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDdiU2dU-KjuUS7VZ36VojmlddokRQSy4c",
    libraries: ["places"],
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    setMap(mapInstance);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return {
    isLoaded,
    map,
    GoogleMapComponent: (
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "100%",
        }}
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* <Marker position={center} /> */}
      </GoogleMap>
    ),
  };
}
