<?php
require __DIR__.'/vendor/autoload.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

use Demolidor\Kernel;

$Demolidor=new Kernel();
$Demolidor->setRoot(__DIR__);
if($Demolidor->isOn()){
    $Demolidor->autoRouting();
}else{
    die("maintenance mode");
}
