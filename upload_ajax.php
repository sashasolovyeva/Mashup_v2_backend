<?php
  // the $_FILES superglobal contains a listing of all files that are being send in from the client
  $f = $_FILES['filename'];

  // make sure we have a file to work with
  if ( $f ) {

    // we only want to allow image uploads, so let's enforce that by looking at the MIME type of the incoming file

    // assume the file type is unknown
    $filetype = 'unknown';
    if ($f['type'] === 'image/jpeg') {
      $filetype = 'jpg';
    }
    else if ($f['type'] === 'image/png') {
      $filetype = 'png';
    }
    else if ($f['type'] === 'image/gif') {
      $filetype = 'gif';
    }

    // bad file type
    if ($filetype === 'unknown') {
      print "filetype";
      exit();
    }

    // good file type
    else {
      // create a filename using the current time on the server (you could also use uniqid() to generate a unique filename, but the time is nice because it gives you the ability easily sort the files by the time uploaded) -- you could also use both techniques to ensure the filename is unique (i.e. two people upload at the exact same time)
      $t = time();
      $u = uniqid();
      $filename = $t . '_' . $u . '.' . $filetype;

      // store the file for the user in their own folder
      $filepath = "backgrounds/".$filename;
      move_uploaded_file($f['tmp_name'], $filepath);

      print "$filepath";
      exit();
    }
  }

  // no file selected
  else {
    print "nofile";
    exit();
  }

?>
