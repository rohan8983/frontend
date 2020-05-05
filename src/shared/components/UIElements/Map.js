import React, { useState, useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css";

const styles = {
  width: "100%",
  height: "100%",
};

const MapboxGLMap = (props) => {
  const [map, setMap] = useState(null);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoicm9oYW45NTExIiwiYSI6ImNrOXE0a2l5NDBndnYzZXFjcjFlYjRwN2gifQ.hNkWXEStEeEnuABMxm7X3A';
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11", // stylesheet location
        center: [27.1751448, 78.0421422],
        zoom: 5
      });
      map.on("load", () => {
        setMap(map);
        map.resize();
      });
      new mapboxgl.Marker()
        .setLngLat([27.1751448, 78.0421422])
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(`<h3> Taj Mahal </h3><p>The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra</p>`))
        .addTo(map);
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);
  return (
    <div className={`map ${props.className}`} style={props.style}>
      <div ref={el => (mapContainer.current = el)} style={styles} />
    </div>
  );
};

export default MapboxGLMap;
