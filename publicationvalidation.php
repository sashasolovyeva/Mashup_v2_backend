<?php

$name = $_POST['name'];
$comment = $_POST['comment'];
$imgUrl = $_POST['imgURL'];

$name = trim($name);

if($name != null && $comment != "Write a comment about your creative process here!"){
  $name_array = str_split($name);

  for($i = 0; $i < sizeof($name_array); $i++){

    if(preg_match('/^[a-z0-9.,!?:; ]+$/i', $name_array[$i])){
      $edited_name .= $name_array[$i];
    } else {
      array_splice($name_array, $i, 1);
      $i -= 1;
    }

  }
  $filedata = file_get_contents('data/imagegal.json');
  $data = json_decode($filedata, true);
  $data[] = [
    "filename" => $imgUrl,
    "name" => $edited_name,
    "comment" => $comment
  ];
  $filedata = json_encode($data);
  file_put_contents('data/imagegal.json', $filedata);

  print "<p>Your image was added successfully! Check in the <a href='imagegallery.php' class='savelink'>gallery</a></p>";
  setcookie('set_name', $name);
  exit();

} else if ($name == null) {
  print "Invalid username!";
  exit();
} else if ($comment == "Write a comment about your creative process here!"){
  print "Please write a comment!";
  exit();
}



 ?>
