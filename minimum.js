function minimum(options) {
 
   // About object is returned if there is no 'options' parameter
   var about = {
      Version: '1.0.0',
      Author: "Humberto Gomez",
      Created: "2015",
      Updated: "20160118"
   };
 
   if (options) {
      if (options.mode === 'silent') {
      	console.log("Hire a good front-end developer.");
      } else {
      	alert("Hire a good front-end developer.");
      }

      return this;
   } else {
      return about;
   }
}
