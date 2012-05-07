<?php
    ob_clean();
    session_start();
    if($_SESSION  != null)
    {
        header("Location:/viona/views/admin/index.php");
    }
?>
<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
    <!--<link rel="shortcut icon" type="image/x-icon" href="sales/images/favicon.ico">
    <link href="css/login.css" rel="stylesheet" type="text/css" />
    <script src="../jquery/jquery.js" type="text/javascript"></script>
    <script src="scripts/GetParameter.js" type="text/javascript"></script>
    <script src="scripts/login.js" type="text/javascript"></script>-->
    <link href="/viona/css/login.css" rel="stylesheet" type="text/css" />
</head>
<body>
    <div id="section">
	    <div id='body' class="container">
		    <div class="login-form">
           	    <form id='logins' method='POST'  action="/viona/Application/admin/login.php" name="login" >
				    <h1>Masuk</h1>
				    <div class='formloginbody'>
					    <label for='username'>Email</label> <br/>
					    <input type='text' name='Username' class='input' style='width:21em;' autocapitalize='off' tabindex='1' required='required'/>
					    <br />
					    <label for='password'>Kata Sandi</label><br/>
					    <input type='password' name='Password' class='input' style='width:21em;' autocapitalize='off' tabindex='2' required='required'/>
					    <br/>
					    <input type='checkbox' name='RememberMe' class='remember' value="True"/> 
                                            <label id='labelRemember'>Biarkan saya tetap masuk</label>
					    <p><input type='submit' value='Masuk'/></p>
                                            <label id='error'></label>
			</div>
                    </form>
		    </div>
	    </div>
      </div>
   </body>
</html>