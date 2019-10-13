

  <script type="text/javascript">

  $(document).ready(function(){
  
    //automated window generated number
    let cpRandom = Math.floor(Math.random() * 100) + 20;
    $("#cpRandom").html(cpRandom);
  
  
  
  // auto generated character numbers
  
  let char1= Math.floor(Math.random() * 10) + 2;
  
  let char2= Math.floor(Math.random() * 10) + 2;
  
  let char3= Math.floor(Math.random() * 10) + 2;
  
  let char4= Math.floor(Math.random() * 10) + 2;
  
  let char5 = Math.floor(Math.random() * 10) + 2;
  
  
  
  //scores
  
  let userScore=0;
  
  let wins=0;
  
  let looses=0; 
  
    //wins v. losses
  
  function win(){
  wins ++; 
    
  $("#wins").html(wins);
  
} 
  
  function loss(){
  looses ++;
  
  $("#looses").html(looses);
  
  
  }
  
  
  //Clicks on different images
  
  
  $("#userScore").html(userScore);
  
  $("#char1").on("click", function() {
      userScore = userScore + char1;
      
      $('#userScore').text(userScore); 
            
          if (userScore == cpRandom){
            wins();
          }
          else if (userScore > cpRandom){
            looses();
          }   
    });  
  
    $("#char2").on("click", function() {
      userScore = userScore + char2;
      
      $('#userScore').text(userScore); 
            
          if (userScore == cpRandom){
            wins();
          }
          else if (userScore > cpRandom){
            looses();
          }   
    });  
  
  
  $("#char3").on("click", function() {
      userScore = userScore + char3;
      
      $('#userScore').text(userScore); 
            
          if (userScore == cpRandom){
            wins();
          }
          else if (userScore > cpRandom){
            looses();
            $("#looses").html(looses);
  
          }   
    });  
  
    $("#char4").on("click", function() {
      userScore = userScore + char4;
      
      $('#userScore').text(userScore); 
            
          if (userScore == cpRandom){
            wins();
          }
          else if (userScore > cpRandom){
            looses();
          }   
    });  
  
    $("#char5").on("click", function() {
      userScore = userScore + char5;
      
      $('#userScore').text(userScore); 
            
          if (userScore == cpRandom){
            wins();
          }
          else if (userScore > cpRandom){
            looses();
          }   
    });  
  
  
  
  
  
  });
  
  </script>