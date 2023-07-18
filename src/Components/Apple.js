// import React, { useState } from "react";
// import { useGeolocated, GeolocatedConfig } from "react-geolocated";

// const Location = () => {
//   const [permissionStatus, setPermissionStatus] = useState("");

//   const askForLocationPermission = () => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           // Permission granted, handle the position data here
//           setPermissionStatus("Permission granted!");
//           console.log("Latitude:", position.coords.latitude);
//           console.log("Longitude:", position.coords.longitude);
//         },
//         (error) => {
//           // Permission denied or error occurred
//           setPermissionStatus("Permission denied or error occurred");
//           console.error(error);
//         }
//       );
//     } else {
//       setPermissionStatus("Geolocation is not available in your browser");
//     }
//   };

//   const { coords, isGeolocationAvailable, isGeolocationEnabled, getPosition } =
//     useGeolocated({
//       positionOptions: {
//         enableHighAccuracy: false,
//       },
//       userDecisionTimeout: 5000,
//     });

//   return !isGeolocationAvailable ? (
//     <div>Your browser does not support Geolocation</div>
//   ) : !isGeolocationEnabled ? (
//     <div>Geolocation is not enabled
//       <button onClick={askForLocationPermission}>Ask for Permission</button>
//       {permissionStatus && <p>{permissionStatus}</p>}
//     </div>
//   ) : coords ? (
//     <table>
//       <tbody>
//         <tr>
//           <td>latitude</td>
//           <td>{coords.latitude}</td>
//         </tr>
//         <tr>
//           <td>longitude</td>
//           <td>{coords.longitude}</td>
//         </tr>
//         <tr>
//           <td>altitude</td>
//           <td>{coords.altitude}</td>
//         </tr>
//         <tr>
//           <td>heading</td>
//           <td>{coords.heading}</td>
//         </tr>
//         <tr>
//           <td>speed</td>
//           <td>{coords.speed}</td>
//         </tr>
//       </tbody>
//     </table>
//   ) : (
//     <div>
//       Getting the location data&hellip;
//       <h1>Location Permission</h1>
    
//     </div>
//   );
// };

// export default Location;
