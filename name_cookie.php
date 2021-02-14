<?php
// check if the cookie is set

if(isset($_COOKIE['set_name'])){
  $set_name = $_COOKIE['set_name'];
  print $set_name;
  exit();
}

?>
