<?php
include "../config.php";

$data = json_decode(file_get_contents("php://input"), true);
$brand_id = $_GET['id'];

$sql = "DELETE FROM brand WHERE brand_id = {$brand_id}";

if(mysqli_query($con, $sql)){
	echo json_encode(array('message' => 'Meal Information Deleted.', 'status' => true));
}else{
 	echo json_encode(array('message' => 'Meal Information not Deleted.', 'status' => false));
}
?>