<template>
    <div class="main contactMain">
        <h1 class="topic">Kontakt</h1>
            <p class="contactItems">
                Poniedziałek - Piątek: <br>
                <i>9:00 - 20:00</i><br>
                Sobota: <br>
                <i>12:00 - 18:00</i>
                <br><br>
                Możesz się skontaktować przez: <br>
                <i>Telefon: +48 123 456 789</i> <br>
                <i>E-mail: example@example.com</i> 
                <br><br>
                Lub odwiedzić mnie na miejscu! <br>
                Adres:
                <i>ul. Piotrkowska 1, 91-415 Łódź</i>
            </p>

        <GmapMap class="map"
            :center="{ lat:51.75, lng:19.45 }"
            :zoom="11"
        ></GmapMap>
    </div>
</template>

<script>
export default {
    name: "Contact"
}
</script>

<style scoped>
.main {
    background-color: #333;
}

.topic {
    padding-top: 30px;
    margin: auto;
    text-align: center;
    max-width: 700px;
    margin-bottom: 40px;
    color: #FF5858;
    font-size: 50px;
    }

.contactMain {
    text-align: center;
    font-family: 'Montserrat', 'sans-serif';
    color: white;
    margin-top: 80px;
    padding-top: 1px;
    padding-bottom: 15px;
}

.contactItems {
    font-weight: bold;
    font-family: 'Montserrat', 'sans-serif';
    font-size: 18px;
}

.map {
    width: 700px; 
    height: 500px; 
    margin: 32px auto;
}

@media only screen and (max-width: 500px) {
    .map {
        width: 300px;
        height: 300px;
    }
}
</style>
