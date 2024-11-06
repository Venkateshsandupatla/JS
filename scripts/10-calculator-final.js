let calculation = localStorage.getItem('calculation') || '';

      // Display the calcultion when the pafe first loads
      displayCalculation();

      function updateCalculation(value){
        
        calculation+=value;
        // Instead of showing it in console i want to display it
        //console.log(calculation);
        displayCalculation();
        localStorage.setItem('calculation', calculation);
      }

      // display calculation
      function displayCalculation(){
        document.querySelector(".js-calculation").innerHTML=calculation;

      }
      // to resuse the code
      // function saveCalculation(){
      //   localStorage.setItem('calculation',calculation);
      // }