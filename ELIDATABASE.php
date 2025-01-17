<?php
$servername="localhost";
$username="root";
$password="P@ssword123";
$dbname="login";

$con= mysqli_connect($servername,$username,$password,$dbname);
if(!$con){
    echo "error connecting: ".mysqli_error($con);
}
else{
    echo "connection succesful";
}

if(isset($_POST['submit']))
{
    $name=$_POST['name'];
    $email=$_POST['email'];
    $password=$_POST['password'];

    $insert="INSERT into form(name, email, password) values('$name','$email','$password')"
    if(mysqli_query($con,$insert)){
        echo"<script>window.open('open.html','_self')</script>";
    }
    else{
        echo "error".mysql_error($con);
    }
    mysqli_close($con);
}
?>