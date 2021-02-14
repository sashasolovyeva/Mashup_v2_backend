<?php

include ('config.php');

$img = $_POST['imgBase64'];
$img = str_replace('data:image/png;base64,', '', $img);
$img = str_replace(' ', '+', $img);
$fileData = base64_decode($img);

$t = time();
$u = uniqid();

$fileName = 'savedsketches/'. $t . '_' . $u . '.png';
file_put_contents($fileName, $fileData);


print '<img width="100%" height="auto" src="' . $fileName . '">';

file_put_contents($path.'/data/imagefilenames.txt', $fileName."\n", FILE_APPEND);

?>
