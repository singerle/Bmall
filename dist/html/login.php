<?php
	$username = $_REQUEST["username"];
	$password = $_REQUEST["password"];
	$arr = ["lixin"=>"123456"];
	$keyArr = array_keys($arr);
	$flag = in_array($username,$keyArr);
	
	if($flag && $password === $arr[$username]){
		echo "1";
	}else{
		echo "0";
	}
?>