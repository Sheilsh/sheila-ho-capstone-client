// import { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";

// const supabase = createClient(
//   "https://hvqlcpbonjimlpuzfodu.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2cWxjcGJvbmppbWxwdXpmb2R1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMzOTQ1ODEsImV4cCI6MTk5ODk3MDU4MX0.Yx0jfPGaga7VsTE93_dV7ogjJCnaXrY3HqGPt_ilS-o"
// );

// function History() {
//   const [countries, setCountries] = useState([]);

//   useEffect(() => {
//     getCountries();
//   }, []);

//   async function getCountries() {
//     const { data } = await supabase.from("users").select();
//     setCountries(data);
//   }

//   return (
//     <ul>
//       {countries.map((country) => (
//         <li key={country.id}>{country.full_name}</li>
//       ))}
//     </ul>
//   );
// }

// export default History;
