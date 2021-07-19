<!doctype html>
<html>
  <head>
    <meta charset="utf-8" content="width=device-width, initial-scale=1" name="viewport" />

    <link rel="stylesheet" type="text/css" href="stylesheet.css">
    <link rel="stylesheet" href="https://use.typekit.net/lkh8jvi.css">
    <title>mash up like the masters</title>

    <link rel="apple-touch-icon" sizes="144x144" href="favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png">
    <link rel="manifest" href="favicons/site.webmanifest">
    <link rel="mask-icon" href="favicons/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">

  </head>

  <body>
  <h1 class="mobile_text">Sorry, Mash-up like the masters is not supported on a mobile device :(</h1>

  <div class="desktop">

    <header>
      <div style="width:100%;">
        <h1 class="main_title">Mash up like the masters</h1>
        <p class="instructions">This is a gallery of the collages created and submitted by the users. Enjoy!
        </p>
      </div>

      <a id="backtocollaging" href="/">&lt; back to collaging</a>
    </header>


    <div class="gallery">
      <?php
      $filedata = file_get_contents('data/imagegal.json');
      $data = json_decode($filedata, true);

      for ($i = count($data) - 1; $i >= 0; $i--){
        $pic = $data[$i]["filename"];
        $name = $data[$i]["name"];
        $comment = $data[$i]["comment"];
        print "<div>";
        print "<img src='". $pic . "' width='400px'>";
        print "<h3>by ". $name . "</h3>";
        print "<p>" . $comment . "</p>";
        print "</div>";
      }

       ?>
    </div>

  </div>
  </body>
</html>
