import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  const mapContainerStyle = { width: "100%", height: "400px" };
  const center = { lat: 38.9072, lng: -77.0369 }; // Ubicación (Washington DC)

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;