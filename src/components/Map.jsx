import React from "react";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import roofs from "../lib/roofs.json";
import '../css files/Map.css'
import Grid from '@material-ui/core/Grid';

const Map = () => {
  const addressDict = roofs.AddressString;
  const lat = roofs.AddLat;
  const lng = roofs.AddLng;
  const sqMtr = roofs.sqrd_meters;
  return (
    <Grid container id='grid-map'>   
      <Grid item lg={6}>
    <LeafletMap
      id='map'
      center={[lat[200], lng[200]]}
      zoom={15}
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
    </Grid>
    <Grid item lg={3}>
        <h2 id='text1'>The map on the left indicates some of the buldings in Paris where it can be installed a roofarm</h2>
        <h2 id='text2'>According to a survey made by Le Monde on 2019, less than 5% of the buldings implement it</h2>
    </Grid>
    <Grid item lg={3}>
        <h2 id='text3'>More than 2 million people lives in Paris according to the last census and the city counts with over 15 thousands buildings</h2>
      </Grid>  
    </Grid>

  );
};

export default Map;
