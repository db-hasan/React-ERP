<?php
include "../config.php";

$data = json_decode(file_get_contents("php://input"), true);

$brand = $data[ 'input_brand' ]; // imput from

$sql = "INSERT INTO brand(brand_name) VALUES ('$brand')";

if(mysqli_query($con, $sql)){
    echo json_encode(array('message' => 'brand Inserted', 'status' => true));
}else{
    echo json_encode(array('message' => 'brand not Inserted', 'status' => false));
}
?>