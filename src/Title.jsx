import React, { useEffect} from "react";

export default function Title() {

   useEffect(() => {
     document.title = "MeepleTown";  
   }, []);

   return (
     <div className="Title">
     </div>
   );
}