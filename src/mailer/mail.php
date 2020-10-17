<?php 

$name = $_POST['yourname'];
$mobile = $_POST['tel'];
$email = $_POST['email'];
$message = $_POST['textarea'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'rakoth-gri@yandex.ru';                 // Наш логин
$mail->Password = '5agu7by5';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('rakoth-gri@yandex.ru', 'test.ninagalieva.ru');   // От кого письмо 
$mail->addAddress('galievi.f@yandex.ru');     // Add a recipient
$mail->addAddress('ninas-89@mail.ru');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');    // Add attachments
$mail->addAttachment('../img/1.jpg', 'NINA_GALIEVA.jpg');    // Optional name
$mail->isHTML(true);      // Set email format to HTML

$mail->Subject = 'Автоматическая обработка заявки на сайте test.ninagalieva.ru';
$mail->Body    = '
	Поступила заявка на сайте test.ninagalieva.ru <br>
	Имя: ' . $name . ' <br>
	Номер телефона: ' . $mobile . ' <br>
	E-mail: ' . $email . ' <br>
	Message: ' . $message . '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>