// import React, { useEffect, useState } from "react";
// import dayjs from "dayjs";
// import { getParking } from "../../utils/helpers";

// import BookingFormAction from "../BookingForm/BookingFormAction";
// import ParkingCarousel from "./ParkingCarousel";

// import Modal from "@mui/material/Modal";

// export default function ParkingList({
//   userData,
//   bookingData,
//   selectedDate,
//   handleParkingSpotSelection,
// }) {
//   const [parkingData, setParkingData] = useState([]);
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedSpot, setSelectedSpot] = useState(null);

//   useEffect(() => {
//     getParking().then((data) => {
//       setParkingData(data);
//     });
//   }, []);

//   const availableSpots = parkingData.filter((spot) => {
//     const isAvailable = !bookingData.find((booking) => {
//       const selectedDateStart = dayjs(selectedDate).startOf("day");
//       const selectedDateEnd = dayjs(selectedDate).endOf("day");
//       const bookingStart = dayjs(booking.start_datetime);
//       const bookingEnd = dayjs(booking.end_datetime);
//       const bookingSessionOver = dayjs().isAfter(bookingEnd);

//       return (
//         booking.spot_number === spot.spot_number &&
//         !bookingSessionOver &&
//         (bookingStart.isBetween(
//           selectedDateStart,
//           selectedDateEnd,
//           null,
//           "[]"
//         ) ||
//           bookingEnd.isBetween(
//             selectedDateStart,
//             selectedDateEnd,
//             null,
//             "[]"
//           ) ||
//           (bookingStart.isBefore(selectedDateStart) &&
//             bookingEnd.isAfter(selectedDateEnd)))
//       );
//     });
//     return isAvailable;
//   });

//   // const handleSelectSpot = (id, number) => {
//   //   setSelectedSpot([id, number]);
//   //   setOpenModal(true);
//   // };

//   return (
//     <section className="parking">
//       <div className="parking__wrapper">
//         <div className="parking__container">
//           <div className="parking__bookingcontain">
//             <div className="parking__subheader">
//               <h2 className="parking__title">Select Available Spot</h2>
//             </div>
//             <ParkingCarousel
//               parkingData={parkingData}
//               availableSpots={availableSpots}
//               // handleSelectSpot={handleSelectSpot}
//               handleSelectSpot={handleParkingSpotSelection}
//             />
//             {/* <div className="parking__cta">
//               <Modal open={openModal}>
//                 <div>
//                   <BookingFormAction
//                     userData={userData}
//                     spot={selectedSpot}
//                     date={selectedDate}
//                     onClose={() => setOpenModal(false)}
//                   />
//                 </div>
//               </Modal>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// ParkingList component
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { getParking } from "../../utils/helpers";
import ParkingCarousel from "./ParkingCarousel";

export default function ParkingList({
  bookingData,
  handleParkingSpotSelection,
}) {
  const [parkingData, setParkingData] = useState([]);
  const [selectedSpot, setSelectedSpot] = useState(null);

  useEffect(() => {
    getParking().then((data) => {
      setParkingData(data);
    });
  }, []);

  // const availableSpots = parkingData.filter((spot) => {
  //   const isAvailable = !bookingData.find((booking) => {
  //     const selectedDateStart = dayjs(selectedDate).startOf("day");
  //     const selectedDateEnd = dayjs(selectedDate).endOf("day");
  //     const bookingStart = dayjs(booking.start_datetime);
  //     const bookingEnd = dayjs(booking.end_datetime);
  //     const bookingSessionOver = dayjs().isAfter(bookingEnd);

  //     return (
  //       booking.spot_number === spot.spot_number &&
  //       !bookingSessionOver &&
  //       (bookingStart.isBetween(
  //         selectedDateStart,
  //         selectedDateEnd,
  //         null,
  //         "[]"
  //       ) ||
  //         bookingEnd.isBetween(
  //           selectedDateStart,
  //           selectedDateEnd,
  //           null,
  //           "[]"
  //         ) ||
  //         (bookingStart.isBefore(selectedDateStart) &&
  //           bookingEnd.isAfter(selectedDateEnd)))
  //     );
  //   });
  //   return isAvailable;
  // });

  const availableSpots = parkingData.filter((spot) => {
    const isAvailable = !bookingData.find((booking) => {
      const bookingEnd = dayjs(booking.end_datetime);
      const bookingSessionOver = dayjs().isAfter(bookingEnd);

      return booking.spot_number === spot.spot_number && !bookingSessionOver;
    });
    return isAvailable;
  });

  const handleSpotSelection = (spot) => {
    setSelectedSpot(spot);
    handleParkingSpotSelection(spot);
  };

  return (
    <div className="parking">
      <section className="parking__wrapper">
        <h2 className="parking__header">Beaches Location</h2>
        <div className="parking__container">
          <div className="parking__bookingcontain">
            <div className="parking__subheader">
              <h2 className="parking__title">Select Available Spot</h2>
            </div>
            <ParkingCarousel
              parkingData={parkingData}
              availableSpots={availableSpots}
              handleSelectSpot={handleSpotSelection}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
