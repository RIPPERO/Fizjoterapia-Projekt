<template>
    <div>
        <div>
        <img src="https://media.istockphoto.com/photos/portrait-of-young-smiling-caucasian-man-with-crossed-arms-wearing-picture-id1171169107" alt="Przykładowe zdj" class="photo">
        </div>
            <div class="main">
            <h1 class="topic">O mnie</h1>
            <h4 class="text">
                Nazywam się Jan Kowalski. Jestem fizjoterapeutą od 3 lat. 
                Na co dzień współpracuję z wieloma zadowolonymi klientami.
                Posiadam centrum rehabilitacyjne w Łodzi.
                Oferuję szeroką gamę usług. Pracuję z osobami w każdym wieku. 
                Sprawia mi to ogromną przyjemność oraz czuję się spełniony.
            </h4>

            <input v-model="message" placeholder="3-znakowy kod" class="input" maxlength="3">
            <button class="button" @click="showModal = true"><b>Podaj kod zniżkowy</b></button>
            

            <!-- Fade -->
            <transition name="fade" appear>
                <div class="modal-ov" v-if="showModal" @click="showModal = false"></div>
            </transition>
            
            <!-- Slide -->
            <transition name="slide" appear>
                <div class="modal" v-if="showModal && message === '500'">
                    <h2>Gratulacje! Udało Ci się zdobyć zniżkę w wysokości 20% na pierwszą wizytę!</h2>
                    <button class="button" @click="showModal = false">Zamknij</button>
                </div>

                <div class="modal" v-else-if="showModal && message !== '500' ">
                    <h2>Nieprawidłowy kod!</h2>
                    <button class="button" @click="showModal = false">Zamknij</button>
                </div>
                </transition>

                <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </div>   
    </div>
</template>

<script>
export default {
    name: "About",
    data() {
        return {
            showModal: false,
            message: ''
        }
    }
}
</script>

<style scoped>
.main {
    background-color: #333;
}

.photo {
    position: relative;
    left: 0;
    top: 0;
    width: 40%;
    height: auto;
    margin: 10px;
    border-radius: 10px;
}

.topic {
    color: #FF5858;
    padding-top: 10px;
    margin-bottom: 20px;
    font-size: 50px;
}

.text {
    color: white;
    padding: 6px;
    margin: 20px;
}

.input {
    padding: 10px;
}

.button {
    appearance: none;
    outline: none;
    display: inline-block;
    border: none;
    border-radius: 8px;
    background-image:linear-gradient(to right, #CC2E50, #FF5858);
    color: #fff;
    cursor: pointer;
    padding: 10px 30px;
    font-size: 15px;
    font-weight: 600;
    box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
    transition: 0.4s ease-out;
    margin: 15px;
}

.button:hover {
    box-shadow: 5px 5px rgba(0, 0, 0, 0.6);
}

.modal-ov {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 98;
    background-color: rgba(0, 0, 0, 0.3);
}

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    width: 100%;
    max-width: 400px;
    background-color: #FFF;
    border-radius: 16px;
    padding: 25px; 
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform .5s;
}

.slide-enter,
.slide-leave-to {
    transform: translateY(-50%) translateX(100vw);
}
</style>
