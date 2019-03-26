$(document).ready(function(){
  $("#contactBtn").click(function(){
  $("#contact").slideDown();
  $("#home").slideUp();
  $("#aboutUs").slideUp();
  $("#product").slideUp();
  });
});

$(document).ready(function(){
    $("#productBtn").click(function(){
    $("#product").slideDown();
    $("#home").slideUp();
    $("#aboutUs").slideUp();
    $("#contact").slideUp();
    });
  });

  $(document).ready(function(){
    $("#homeBtn").click(function(){
    $("#home").slideDown();  
    $("#contact").slideUp();
    $("#aboutUs").slideUp();
    $("#product").slideUp();
    });
  });

  $(document).ready(function(){
    $("#aboutBtn").click(function(){
    $("#aboutUs").slideDown();
    $("#home").slideUp();
    $("#contact").slideUp();
    $("#product").slideUp();
    
    });

  });

  $(document).ready(function(){
    $("#submitBtn").click(function(){
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var gender = document.getElementById('gender').value;
      var number = document.getElementById('number').value;
      console.log(number)
      if(name === ''){
        alert("Please Type You Name In To Contact Use");
      }
      else{
        if(email.indexOf('@') == -1 || email.indexOf('.com') === -1){
          alert('Please Enter the correct Email format ex: test@test.com')
        }
        else{
          if(gender === ''){
            alert('Please Pick A Gender');
          }
          else{
            if(number === ''){
              alert('Please Enter A Contact Number To Reach You')
            }
            else{
              alert("Successfully Submitted.")
            }
          }
        }
      }
      
        
    });
  });
