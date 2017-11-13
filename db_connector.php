<?php

  $con = mysql_connect('localhost','root','');
  $db = mysql_select_db('jobhaven');

  if($con){

    echo "";

  }else {

    die('Error.');
    
  }
?>
