// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
// import "leaflet/dist/leaflet.css";
// import { geojsonData } from './finalsetted';

// const WardMapComponent = () => {
//     // const [geojsonData, setGeojsonData] = useState(null);

//     // useEffect(() => {
//     //     // Load GeoJSON data
//     //     fetch('finalsetted.geojson')
//     //         .then(response => response.json())
//     //         .then(data => setGeojsonData(data))
//     //         .catch(error => console.error('Error fetching GeoJSON:', error));
//     // }, []);

//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         try {
//     //             const response = await fetch('finalsetted.geojson');
//     //             const data = await response.json();
//     //             setGeojsonData(data);
//     //         } catch (error) {
//     //             console.error('Error map  fetching GeoJSON:', error);
//     //         }
//     //     };

//     //     fetchData();
//     // }, []);

//     const highlightStyle = {
//         fillColor: 'red',
//         color: 'black',
//         weight: 2
//     };

//     const handleFeatureClick = (e) => {
//         // Highlight the clicked feature
//         e.target.setStyle(highlightStyle);
//     };

//     return (
//         <MapContainer center={[22.7196, 75.8577]} zoom={11} style={{ height: '100%', width: '100%' }}>
//             <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//             {geojsonData && (
//                 <GeoJSON
//                     data={geojsonData}
//                     style={() => ({
//                         fillColor: '#3b3b3b',
//                         color: 'black',
//                         weight: 2
//                     })}
//                     eventHandlers={{
//                         click: handleFeatureClick
//                     }}
//                 />
//             )}
//         </MapContainer>
//     );
// };

// export default WardMapComponent;


import React, { useEffect } from 'react';

const WardMap = () => {
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.data["datawrapper-height"]) {
        const iframes = document.querySelectorAll("iframe");
        for (let iframe of iframes) {
          if (iframe.contentWindow === event.source) {
            const height = event.data["datawrapper-height"] + "px";
            iframe.style.height = height;
          }
        }
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div>
      <iframe
        title="Ward Map"
        aria-label="Map"
        id="datawrapper-chart-PF010"
        src="https://datawrapper.dwcdn.net/PF010/1/"
        scrolling="no"
        frameBorder="0"
        style={{ width: "100%", minWidth: "100%", border: "none" }}
        height="694"
        data-external="1"
      ></iframe>
    </div>
  );
};

export default WardMap;



