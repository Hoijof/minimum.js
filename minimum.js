function minimum(options) {
 
   // About object is returned if there is no 'options' parameter
   var about = {
      Version: 0.1,
      Author: "Humberto Gomez",
      Created: "2015",
      Updated: "20150528"
   };
 
   if (options) {
      if (options.mode === 'silent') {
      	console.log("Hire a good FrontEnd Developer.");
      } else {
      	alert("Hire a good FrontEnd Developer.");
      }

      return this;
   } else {
      return about;
   }
};
