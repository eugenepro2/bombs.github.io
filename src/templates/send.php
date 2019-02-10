<?php

$name = htmlspecialchars($_POST['name'], ENT_QUOTES);
$email = htmlspecialchars($_POST['email'], ENT_QUOTES);
$question = htmlspecialchars($_POST['question'], ENT_QUOTES);


$email_to  = 'info@bombsart.ru, dmitrykartye@gmail.com';
$headers   = "From: bombs@bobms.ru";
$subject   = "Новое письмо с bombs.ru";

$message  = "Имя: $name\r\nКомментарий: $question\r\n E-mail: $email";
mail($email_to, $subject, $message, $headers);