<template>
    <head>
    <meta charset="UTF-8">
    <title>Hotel ...</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>

    <header>
        <h2>Hotel ...<br>Kontaktformular</h2>
    </header>

    <div class="container mt-4">

        <form action="antwort_formular.php" method="post" class="p-4 border rounded shadow-sm bg-light">

            <!-- Name -->
            <div class="mb-3">
                <label for="name" class="form-label">Name:</label>
                <input type="text" id="name" name="nn" class="form-control" placeholder="Mustermann, Max" maxlength="40">
            </div>

            <!-- Straße -->
            <div class="mb-3">
                <label for="street" class="form-label">Straße:</label>
                <input type="text" id="street" name="street" class="form-control" placeholder="Musterstraße" maxlength="40">
            </div>

            <!-- PLZ, Ort -->
            <div class="mb-3">
                <label for="city" class="form-label">PLZ, Ort:</label>
                <input type="text" id="city" name="city" class="form-control" placeholder="22222, Musterstadt" maxlength="40">
            </div>

            <!-- Telefonnummer -->
            <div class="mb-3">
                <label for="telp" class="form-label">Telefon- oder Mobilnummer:</label>
                <input type="tel" id="telp" name="tel_number" class="form-control" placeholder="+49 172 6629675" maxlength="40">
            </div>

            <!-- E-Mail -->
            <div class="mb-3">
                <label for="em" class="form-label">E-Mailadresse:</label>
                <input type="email" id="em" name="mail" class="form-control"
                    placeholder="max.mustermann@gmail.com"
                    pattern="^[^@\s]+@[^@\s]+\.[^@\s]+$" maxlength="40">
            </div>

            <!-- Geburtsdatum -->
            <div class="mb-3">
                <label for="da" class="form-label">Geburtsdatum:</label>
                <input type="date" id="da" name="birth_date" class="form-control">
            </div>

            <!-- Stelle auswählen -->
            <div class="mb-3">
                <label class="form-label">Angehende Stelle auswählen:</label>

                <div class="form-check">
                    <input type="radio" name="stelle" id="r1" value="Praktikum" class="form-check-input">
                    <label for="r1" class="form-check-label">Praktikum</label>
                </div>

                <div class="form-check">
                    <input type="radio" name="stelle" id="r2" value="Werkstudent" class="form-check-input">
                    <label for="r2" class="form-check-label">Werkstudent</label>
                </div>

                <div class="form-check">
                    <input type="radio" name="stelle" id="r3" value="Vollzeit_Stelle" class="form-check-input">
                    <label for="r3" class="form-check-label">Vollzeit Stelle</label>
                </div>
            </div>

            <!-- Abteilung -->
            <div class="mb-3">
                <label for="abteilung" class="form-label">Abteilung auswählen:</label>
                <select name="abteilung" id="abteilung" class="form-select">
                    <option value="--" selected>--</option>
                    <option value="Küche">Küche</option>
                    <option value="Service">Service</option>
                    <option value="Management">Management</option>
                    <option value="Marketing">Marketing</option>
                </select>
            </div>

            <!-- Newsletter -->
            <div class="mb-3">
                <label class="form-label">Newsletter zu Jobangeboten:</label>

                <div class="form-check">
                    <input type="checkbox" name="extra" id="c1" value="Ja" class="form-check-input">
                    <label for="c1" class="form-check-label">Ja, ich möchte interessante Jobangebote erhalten</label>
                </div>

                <div class="form-check">
                    <input type="checkbox" name="extra" id="c2" value="Nein" class="form-check-input">
                    <label for="c2" class="form-check-label">Nein</label>
                </div>
            </div>

            <!-- Motivationsschreiben -->
            <div class="mb-3">
                <label for="txt" class="form-label">Ihr Motivationsschreiben:</label>
                <textarea name="txt" id="txt" class="form-control" rows="6" maxlength="2500"
                    placeholder="Hier Ihre Nachricht eingeben ..."></textarea>
            </div>

            <!-- Buttons -->
            <div class="d-flex gap-3">
                <button type="submit" class="btn btn-primary px-4">Absenden</button>
                <button type="reset" class="btn btn-secondary px-4">Abbrechen</button>
            </div>

        </form>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>