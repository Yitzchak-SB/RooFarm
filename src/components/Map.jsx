import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import roofs from "../lib/roofs.json";

const Map = () => {
  const addressDict = roofs.AddressString;
  const lat = roofs.AddLat;
  const lng = roofs.AddLng;
  const sqMtr = roofs.sqrd_meters;
  return (
    <LeafletMap
      center={[lat[200], lng[200]]}
      zoom={15}
      //   maxZoom={10}
      attributionControl={true}
      zoomControl={true}
      doubleClickZoom={true}
      scrollWheelZoom={true}
      dragging={true}
      animate={true}
      easeLinearity={0.35}
    >
      <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />

      {Object.keys(addressDict).map(function (key, i) {
        if (i % 10 === 0) {
          return (
            <Marker key={key} position={[lat[key], lng[key]]}>
              <Popup>
                This roof is perfect for roofarm! it has{" "}
                {Math.floor(sqMtr[key])} square meters of usable space.
              </Popup>
            </Marker>
          );
        }
      })}
    </LeafletMap>
  );
};

export default Map;
