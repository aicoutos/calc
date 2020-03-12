<?php
require_once './vendor/autoload.php';
$root=getcwd();
require_once './src/Kernel.php';
$db=require_once './src/Model.php';
use Demolidor\Model;

$Model=new Model($root);
return $Model->db->pdo;
