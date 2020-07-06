<template>
    <div>
        <h1 class="topic">Cennik</h1>
        <div class="mainGrid">
            <div class="box">
                <h2 class="box-title">Podstawowy</h2>
                <p class="box-desc">
                   3 wizyty</p> <br>
                <p class="box-price">
                    149 zł
                </p>
                <button class="button" type="button">Wybierz</button>
            </div>

            <div class="box box-main">
                <h2 class="box-title">VIP</h2>
                <p class="box-desc">
                   12 wizyt<br>
                   Ważne cały rok!</p> 
                <p class="box-price">
                    399 zł
                </p>
                <button class="button button-main" type="button">Wybierz</button>
            </div>

            <div class="box">
                <h2 class="box-title">Pośredni</h2>
                <p class="box-desc">
                   6 wizyt</p> <br>
                <p class="box-price">
                    249 zł
                </p>
                <button class="button" type="button">Wybierz</button>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: "Price"
}
</script>

<style scoped>
.topic {
    padding-top: 30px;
    margin: auto;
    text-align: center;
    max-width: 400px;
    margin-bottom: 40px;
    color: #FF5858;
    font-size: 50px;
    }

.mainGrid {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    display: grid;
    max-width: 1000px;
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
}

.box {
    min-height: 500px;
    border: 4px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 15%;
    position: relative;
}

.box-main {
    background-color: black;
    color: white;
    min-height: 550px;
    box-shadow: -40px 0 45px -35px rgba(0, 0, 0, 0.3), 40px 0 45px -35px rgba(0, 0, 0, 0.3);
    z-index: 100;
}

.box-main::before {
    width: 95%;
    height: 97%;
    content: '';
    position: absolute;
    border: 4px solid white;
}

.box-main::after {
    top: 1.5%;
    width: 40%;
    min-width: 45px;
    height: 30px;
    content: 'Najpopularniejszy!';
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
    background-color: white;
    position: absolute;
}

.box-title,
.box-price {
    font-size: 35px;
    font-weight: bold; 
}

.box-title {
    margin: 0 0 20px;
}

.box-price {
    margin: 30px 0;
}

.box-desc {
    font-size: 15px;
    margin-bottom: 20px;
}

.button {
    padding: 8px 25px;
    font-family: 'Fira Code', 'sans-serif';
    font-weight: bold;
    border: none;
    color: black;
    border-radius: 8px;
    background-image:linear-gradient(to right, #CC2E50, #FF5858);
    box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
    transition: 0.4s ease-out;
    cursor: pointer;
    margin-bottom: 10px;
}

.button:hover {
    box-shadow: 5px 5px rgba(0, 0, 0, 0.6);
}

.button-main {
    color: white;
    z-index: 10;
    font-size: 20px;
    box-shadow: 3px 3px rgba(255, 255, 255, 0.4);
}

.button-main:hover {
    box-shadow: 5px 5px rgba(255, 255, 255, 0.6);
}

@media only screen and (max-width: 500px) {
    .mainGrid {
        margin-left: auto;
        margin-right: auto;
        display: flex;
        max-width: 300px;
        align-items: center;
        flex-direction: column;
    }
    .box {
        min-height: 200px;
        min-width: 260px;
    }

    .box-main {
        min-height: 350px;
        min-width: 300px;
    }

    .box-title {
        margin: 0;
        margin-bottom: 5px;
    }

    .box-price {
        margin: 0;
        margin-bottom: 10px;
    }

    .box-desc {
        font-size: 15px;
        margin-bottom: 10px;
    }
}
</style>
