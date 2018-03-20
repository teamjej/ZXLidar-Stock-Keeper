document.addEventListener("deviceready", onDeviceReady, false);
//NEED TO ADD BACKENDLESS KEYS


function updateDisplay() {
	$("#launched").text("Application launched: " + launched_count);
}


// device APIs are available
    function onDeviceReady() {
	
	updateDisplay();  
	alert("device ready");
    
        /*Login Page */
     $( "#loginButton" ).click(function() {
        
        console.log("button clicked")
         
        var username = $('#email').val();
        var password = $('#password').val();
        
        function userLoggedIn( user )
        {
            console.log( "user has logged in" + user);
            location.href="#homePage";
        }
 
        console.log( username + ", " + password );
         Backendless.UserService.login( username, password, true )
            .then( userLoggedIn )
            .catch( gotError );
     });
        
        
    /*Register Page */
    $( "#register" ).click(function() {
        console.log("button clicked")
        var email = $("#emailReg").val();
        var name = $("#nameReg").val();
        var password = $("#passwordReg").val();
        
    function userRegistered( user )
        {
            console.log( "user has been registered" );
            location.href="#loginPage";
        }
 
        var user = new Backendless.User();
        user.email = email;
        user.name = name;
        user.password = password;
 
        Backendless.UserService.register( user ).then( userRegistered ).catch( gotError );
        
    });
        
        
    /* Forgot PWD Page */
    $("#ForgpassBut").click(function(){
        console.log("forgot password button clicked");
        var emailRestPwd= $("#emailPass").val(); //user email here
            
        function passwordRecoverySent()
        {
            console.log( "an email with a link to restore password has been sent to the user" );
            location.href="#loginPage";
        }

         Backendless.UserService.restorePassword(emailRestPwd)
         .then( passwordRecoverySent )
        .catch( gotError );
            
        });
        
    }
