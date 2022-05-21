<?php 

$name = $_POST['name'];
$phone = $_POST['phone'];/* ЗДЕСЬ ПЕРЕДАЁМ В СОЗДАННЫЕ ПЕРЕМЕННЫЕ ДАННЫЕ ИЗ ИНПУТОВ С СООТВЕТСТВУЮЩИМИ NAME=" " */
$email = $_POST['email'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;                            /* ЗАПУСКАЕМ PHP-СКРИПТ */
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();         /* СОЗДАНИЕ ПОЧТЫ */                               // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'Alexrostowskiy@gmail.com';                 // Наш логин
$mail->Password = '236riga420dr1';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('Alexrostowskiy@gmail.com', 'Pulse');   // От кого письмо 
$mail->addAddress('xebesa4813@cupbest.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $phone . '<br>
	E-mail: ' . $email . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>