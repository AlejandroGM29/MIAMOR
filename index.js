$(document).ready(function () {
    var audio = document.getElementById('audio');

    // Variables para almacenar las imágenes y sus efectos correspondientes
    var stages = [
        { image: './src/Raquel.jpg', effect: 'fireworks' },
        { image: './src/BarrioSinLuz+.png', effect: 'fireworks' },
        { image: './src/raquel 2.jpg', effect: 'hearts' },
        { image: './src/raquel 3.jpg', effect: 'moons' },
        { image: './src/cigarro.png', effect: 'smoke' },
        { image: './src/lugarBonito.jpg', effect: 'love_words' },
        { image: './src/monitosJuntos.png', effect: 'fireworks' },
        { image: './src/raquel 4.jpg', effect: 'hearts' },
        { image: './src/raquel 6.jpg', effect: 'fireworks' },
        { image: './src/raquel 7.jpg', effect: 'fireworks' },
        { image: './src/raquel 5.jpg', effect: 'hearts_love_words' }
    ];

    var stageDurations = [7, 3, 4, 4, 3, 4, 5, 4, 4, 3, 1]; // Duraciones en segundos para cada etapa

    var currentStage = 0;
    var pointInterval;  // Variable para almacenar el intervalo de los efectos

    // Evento que se dispara cuando se empieza a reproducir el audio
    audio.onplay = function () {
        $('#audioDiv').addClass('moveUp');
        $('#container').addClass('show');
        $('#divImg').css('animation-play-state', 'running'); // Iniciar animación de inclinación
        updateStage();
    };

    async function updateStage() {
        if (currentStage < stages.length) {
            $('#divImg').fadeOut(500, function () {
                clearInterval(pointInterval);
                $('.cascade').remove(); // Remueve cualquier corazón o luna en pantalla

                $('#divImg img').attr('src', stages[currentStage].image);
                setEffect(stages[currentStage].effect);

                // Detener la animación de inclinación en la última etapa
                if (currentStage === stages.length - 1) {
                    $('#divImg').css('animation', 'none'); // Detiene la animación
                }

                $('#divImg').fadeIn(500);
            });

            setTimeout(function () {
                currentStage++;
                updateStage();
            }, stageDurations[currentStage] * 1000);
        } else {
            await mostrarMensajeConDuracion("De verdad, eres la persona que más feliz me hace en este mundo.", 6 * 1000);
            await mostrarMensajeConDuracion("Desde que te conocí, hasta el día de hoy, nunca dejaste de hacerme feliz. Tengo demasiada suerte de estar contigo.", 10 * 1000);
            await mostrarMensajeConDuracion("Tu cara, tu sonrisa, tus ojitos... toda tú me pareces perfecta de pies a cabeza. Eres lo que siempre había estado buscando.", 10.5 * 1000);
            await mostrarMensajeConDuracion("Eres inteligente, bonita, capaz, fuerte, pero sobre todas las cosas, tienes un corazón muy hermoso en el que de verdad espero tener espacio para siempre.",12.5 * 1000);
            await mostrarMensajeConDuracion("Quiero que tus ojitos tan hermosos me miren siempre, que no tengas que mirar a nadie más nunca porque estás segura de elegirme a mí y a nadie más que a mí.", 12.5 * 1000);
            await mostrarMensajeConDuracion("Te amo, mujer, te amo con todo mi corazón y cada día que pasa lo hago más. Cada cosa nueva que aprendo sobre ti me hace estar muchísimo más enamorado que antes.", 13* 1000);
            await mostrarMensajeConDuracion("Eres hermosa, preciosa y te lo diré las veces que sea necesario, pero tienes los ojitos más bellos que me han visto en toda mi vida y por Dios, tus cachetes... amo tus cachetes.", 13.9 * 1000);
            await mostrarMensajeConDuracion("Te amo a ti, te amo con cada fibra de mi ser. Te amo como nunca había amado a nadie y eso que aún estamos conociéndonos. Verás que seguirá así por muchos años.", 13 * 1000);
            await mostrarMensajeConDuracion("Me quedo sin palabras para describirte todo lo que siento por ti. De verdad creo que no existen suficientes para expresar cómo me siento contigo.", 11.5 * 1000);
            await mostrarMensajeConDuracion("Pero espero que un 'te amo' sea suficiente para que entiendas que quiero hacerte feliz, que mi único objetivo que tú seas la mujer más feliz que existe, al igual que tú me haces el hombre más feliz.", 15.8 * 1000);
            await mostrarMensajeConDuracion("TE AMO MI NIÑA... FELIZ CUMPLEAÑOS", 4.5 * 1000);









        }
    }


    function mostrarMensajeConDuracion(mensaje, duracion) {
        return new Promise(resolve => {
            escribirMensaje(mensaje); // Mostrar el mensaje

            setTimeout(function () {
                $("#texto").fadeOut('slow', function () { // Desvanecer el mensaje hacia arriba al finalizar la duración
                    $(this).text("").show(); // Vaciar el contenido del div de texto y mostrarlo
                    resolve(); // Resolver la promesa después de que termine la animación de desvanecimiento
                });
            }, duracion);
        });
    }

    function escribirMensaje(mensaje) {
        $("#texto").text(""); // Vaciar el contenido del div de texto

        var i = 0;
        var intervalo = setInterval(function () {
            $("#texto").append(mensaje.charAt(i)); // Agregar un carácter del mensaje
            i++;
            if (i > mensaje.length) {
                clearInterval(intervalo); // Detener la animación cuando se haya escrito todo el mensaje
            }
        }, 80); // Intervalo de tiempo entre cada carácter (velocidad de escritura)
    }


    function setEffect(effect) {
        switch (effect) {
            case 'fireworks':
                startFireworks();
                break;
            case 'hearts':
                startHearts();
                break;
            case 'moons':
                startMoons();
                break;
            case 'smoke':
                startSmoke();
                break;
            case 'love_words':
                startLoveWords();
                break;
            case 'hearts_love_words':
                startHearts();
                startLoveWords();
                break;
        }
    }

    function startFireworks() {
        clearInterval(pointInterval);
        pointInterval = setInterval(createRandomPoint, 100);
    }

    function startHearts() {
        clearInterval(pointInterval);
        pointInterval = setInterval(createHeartPoint, 400); // Corazones brotan cada 300ms
    }

    function startMoons() {
        clearInterval(pointInterval);
        pointInterval = setInterval(createMoonPoint, 400); // Lunas brotan cada 300ms
    }


    function startSmoke() {
        clearInterval(pointInterval);
        pointInterval = setInterval(createSmokePoint, 100);
    }

    function startLoveWords() {
        clearInterval(pointInterval);
        pointInterval = setInterval(createLoveWordPoint, 500); // Palabras brotan cada 500ms
    }

    function createRandomPoint() {
        var $point = $('<div class="point"></div>');

        // Genera posiciones aleatorias dentro del viewport
        var posX = Math.random() * $('body').width();
        var posY = Math.random() * $('body').height();

        // Genera un color aleatorio en formato RGB o HSL
        var color = 'hsl(' + Math.random() * 360 + ', 100%, 50%)';

        $point.css({
            top: posY + 'px',
            left: posX + 'px',
            backgroundColor: color, // Asigna el color aleatorio
            width: '8px',  // Tamaño original
            height: '8px',

        });

        $('body').append($point);

        setTimeout(function () {
            $point.remove();
        }, 2000);
    }



    function createHeartPoint() {
        var $heart = $('<img class="cascade" src="./src/heart.png" alt="Heart">');

        var posX = Math.random() * $('body').width(); // Aparece en una posición horizontal aleatoria
        posX -= 35;
        $heart.css({
            left: posX + 'px',
            bottom: '300px' // Inicia en la parte inferior
        });

        $('body').append($heart);

        setTimeout(function () {
            $heart.remove();
        }, 2000); // Tiempo de vida reducido a 2 segundos para coincidir con la animación
    }

    function createMoonPoint() {
        var $moon = $('<img class="cascade" src="./src/moon.png" alt="Moon">');

        var posX = Math.random() * $('body').width(); // Aparece en una posición horizontal aleatoria
        posX -= 35;
        $moon.css({
            left: posX + 'px',
            bottom: '300px' // Inicia en la parte inferior
        });

        $('body').append($moon);

        setTimeout(function () {
            $moon.remove();
        }, 2000); // Tiempo de vida reducido a 2 segundos para coincidir con la animación
    }



    function createSmokePoint() {
        var $smoke = $('<img class="point" src="./src/smoke.png" alt="Smoke">');

        var posX = Math.random() * $('body').width();
        var posY = Math.random() * $('body').height();

        $smoke.css({
            top: posY + 'px',
            left: posX + 'px',
        });

        $('body').append($smoke);

        setTimeout(function () {
            $smoke.remove();
        }, 2000);
    }

    var loveWords = ["Te amo", "I love you", "Je t'aime", "Te quiero", "Ich liebe dich", "Ti amo", "Eu te amo", "Saranghae", "Aishiteru", "Ani ohev otach", "Jeg elsker deg", "Ich liebe dich", "Ya tebya lyublyu"];

    function createLoveWordPoint() {
        var randomWord = loveWords[Math.floor(Math.random() * loveWords.length)];
        var $word = $('<div class="love-word">' + randomWord + '</div>');

        var posX = Math.random() * $('body').width();
        var posY = Math.random() * $('body').height();

        $word.css({
            top: posY + 'px',
            left: posX + 'px',
        });

        $('body').append($word);

        setTimeout(function () {
            $word.remove();
        }, 8000); // Aumenta el tiempo de vida a 4 segundos
    }
    // Evento que se dispara cuando el audio se detiene o se pausa
    audio.onpause = function () {
        $('#audioDiv').removeClass('moveUp');
        $('#container').removeClass('show');
        stopAnimations();
    };

    function stopAnimations() {
        clearInterval(pointInterval);
        $('#divImg').css('animation-play-state', 'paused'); // Pausar animación de inclinación
    }
});
