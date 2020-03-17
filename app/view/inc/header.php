<!DOCTYPE html>
<html lang="pt-br" dir="ltr">
<head>
    <meta charset="utf-8">
    <title><?php print $SITE['name']; ?></title>
    <!-- CSS -->
    <?php
    $this->asset([
        '/css/master.css',
        '/css/extra.css'
    ]);
    ?>
</head>
<body>
