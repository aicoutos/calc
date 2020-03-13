<?php
namespace App\Controller;

use Demolidor\Controller;

class CalcController extends Controller{
    function index(){
        $a=@$_GET['a'];
        $b=@$_GET['b'];
        $op=@$_GET['op'];//mul,add,sub,div
        if($this->validInput($a,$b,$op)){
            switch ($op) {
                case 'add':
                $result=bcadd($a,$b);
                break;
                case 'div':
                $result=bcdiv($a,$b);
                break;
                case 'mul':
                $result=bcmul($a,$b);
                break;
                case 'sub':
                $result=bcsub($a,$b);
                break;
            }
            if(strlen($result)>8){
                $this->json(['error'=>true]);
            }else{
                return $this->json([
                    'error'=>false,
                    'result'=>$result
                ]);
            }
        }else{
            $this->json(['error'=>true]);
        }
    }
    function validInput($a,$b,$op){
        if(
            is_numeric($a) AND
            is_numeric($b) AND
            strlen($a)<=8 AND
            strlen($b)<=8
        ){
            switch($op){
                case 'mul':
                case 'add':
                case 'sub':
                case 'div':
                return true;
                break;
                default:
                return false;
                break;
            }
        }else{
            false;
        }
    }
}
?>
