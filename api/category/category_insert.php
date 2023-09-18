<?php
include "../config.php";

$data = json_decode(file_get_contents("php://input"), true);

$category = $data[ 'input_category' ]; // imput from

$sql = "INSERT INTO category(category_name) VALUES ('$category')";

if(mysqli_query($con, $sql)){
    echo json_encode(array('message' => 'brand Inserted', 'status' => true));
}else{
    echo json_encode(array('message' => 'brand not Inserted', 'status' => false));
}
?>