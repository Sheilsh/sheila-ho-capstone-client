// import React, { useEffect } from "react";
// import { useState } from "react";
// import "./Parking.scss";

// import car from "../../assets/images/transport.png";

// export default function ParkingSpot({ id, number, availableSpots, onSelect }) {
//   const [selected, setSelected] = useState("");
//   const isAvailable = availableSpots.find((spot) => spot.id === id);

//   const handleSelectParking = () => {
//     if (isAvailable) {
//       setSelected(id);
//       onSelect(id, number);
//     }
//   };

//   return (
//     <div className="parking__spot">
//       {isAvailable ? (
//         <p className="parking__spotstatus">Available</p>
//       ) : (
//         <p className="parking__spotstatus parking__spotstatus--booked">
//           Booked
//         </p>
//       )}
//       <div className="parking__visuals">
//         {isAvailable ? (
//           <div
//             className="parking__spotfield"
//             onClick={handleSelectParking}
//             number={number}
//           >
//             <p className="parking__number">{number}</p>
//           </div>
//         ) : (
//           <p
//             className="parking__spotfield"
//             onClick={handleSelectParking}
//             number={number}
//           >
//             <img className="parking__carimg" src={car} alt="car image" />
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import "./Parking.scss";
import car from "../../assets/images/transport.png";

export default function ParkingSpot({
  id,
  number,
  availableSpots,
  selectedSpot,
  onSelect,
}) {
  // const [selected, setSelected] = useState(false);

  const isAvailable = availableSpots.some(
    (spot) => spot.spot_number === number
  );

  // const handleSelectParking = () => {
  //   if (isAvailable) {
  //     setSelected(true);
  //     onSelect({ id, number });
  //   }
  // };

  const handleSelectParking = () => {
    if (isAvailable) {
      onSelect({ id, number });
    }
  };

  return (
    <div className="parking__spot">
      {isAvailable ? (
        <p className="parking__spotstatus">Available</p>
      ) : (
        <p className="parking__spotstatus parking__spotstatus--booked">
          Booked
        </p>
      )}
      {/* <div className="parking__visuals">
        {isAvailable ? (
          <div
            className={`parking__spotfield ${
              selected ? "parking__spotfield--selected" : ""
            }`}
            onClick={handleSelectParking}
          >
            <p className="parking__number">{number}</p>
          </div>
        ) : (
          <div
            className={`parking__spotfield ${
              selected ? "parking__spotfield--selected" : ""
            }`}
            onClick={handleSelectParking}
          >
            <img className="parking__carimg" src={car} alt="car image" />
          </div>
        )}
      </div> */}
      <div
        className={`parking__visuals parking__spotfield ${
          selectedSpot === id ? "parking__spotfield--selected" : ""
        }`}
        onClick={handleSelectParking}
      >
        {isAvailable ? (
          <p className="parking__number">{number}</p>
        ) : (
          <img className="parking__carimg" src={car} alt="car image" />
        )}
      </div>
    </div>
  );
}
