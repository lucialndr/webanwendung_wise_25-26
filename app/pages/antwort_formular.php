<!doctype html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Eingaben:</title>
</head>
<body>

    <?php
    $nn = $_POST["nn"];
    $street = $_POST["street"];
    $city = $_POST["city"];
    $tel_number = $_POST["tel_number"];
    $mail = $_POST["mail"];
    $birth_date = $_POST["birth_date"];
    $stelle = $_POST["stelle"];
    $abteilung = $_POST["abteilung"];
    $extra = $_POST["extra"];
    $txt = $_POST["txt"];
    ?>

    <h2>Vielen Dank für ihre Eingaben!<br></h2>

    <p><strong>Name:</strong> <?= $nn ?></p>
    <p><strong>Straße:</strong> <?= $street ?></p>
    <p><strong>PLZ, Ort:</strong> <?= $city ?></p>
    <p><strong>Telefonnummer</strong> <?= $tel_number ?></p>
    <p><strong>E-Mailadresse:</strong> <?= $mail ?></p>
    <p><strong>Geburtsdatum</strong> <?= $birth_date ?></p>
    <p><br><strong>Folgende Stelle streben sie an:</strong> <?= $stelle ?></p>
    <p><strong>Für folgende Abteilung interessieren sie sich:</strong> <?= $abteilung ?></p>
    <p><strong>Newsletter bestellen:</strong> <?= $extra ?></p>
    <p><strong>Ihr Motivationsschreiben:</strong> <?= $txt ?></p>
    
</body>