<?php
$name = $_POST['user_name'];
$tel = $_POST['user_tel'];
$email = $_POST['user_mail'];

$name = trim($name);
$tel = trim($tel);
$email = trim($email);

$data = $name . " осуществил заявку на расчет стоимости работ. Контактный номер телефона " . $tel . ". Адрес заказчика: " . $email ;
file_put_contents('mes.txt', $data . PHP_EOL, FILE_APPEND);

$homedir = mkdir("http://localhost/TeploKrov/consumer_" . $name, 0700); /* необходимо вставить свой путь*/

$filename = $_FILES['myFile']['name'];
$nameFile = $homedir . $_FILES["myFile"]["name"];
move_uploaded_file($_FILES["myFile"]["tmp_name"], $nameFile);
echo "You got it!";
?>
