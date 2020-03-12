<?php
namespace App\Controller;

use Demolidor\Controller;

class IndexController extends Controller{
    function index(){
        $data=[
            'msg'=>'hello world'
        ];
        print $this->view("index",$data);
    }
}
?>
