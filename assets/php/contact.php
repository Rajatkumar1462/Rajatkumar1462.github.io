<?php
if($_POST["message"]) {
    mail("rajatleuva1462@gmail.com", "Form to email message", $_POST["message"], "From: leuva.rajatkumar.6@ldce.ac.in");
}
?>