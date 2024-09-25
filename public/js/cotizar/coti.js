document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('cotizadorForm');
    const musicaCheckbox = document.getElementById('musicaCheckbox');
    const musicaOptions = document.getElementById('musicaOptions');
    const musicaSelect = document.getElementById('musicaSelect');
    const musicaDetails = document.getElementById('musicaDetails');
    const decoracionCheckbox = document.getElementById('decoracionCheckbox');
    const decoracionOptions = document.getElementById('decoracionOptions');
    const decoracionSelect = document.getElementById('decoracionSelect');
    const decoracionDetails = document.getElementById('decoracionDetails');
    const buffetCheckbox = document.getElementById('buffetCheckbox');
    const buffetOptions = document.getElementById('buffetOptions');
    const buffetSelect = document.getElementById('buffetSelect');
    const buffetDetails = document.getElementById('buffetDetails');
    const numInvitadosInput = document.getElementById('numInvitados');
    const cotizarButton = document.getElementById('cotizarButton');
    const totalCotizacion = document.getElementById('totalCotizacion');

    const musica = {
        comunion: {
            nombre: "Música para Primeras Comuniones (Religiosa y Alegre)",
            canciones: [
                '"Alegría" - Varios artistas (versión tradicional de música religiosa)',
                '"Aquí Estoy Señor" - Canción religiosa',
                '"Tú eres mi Dios" - Canción religiosa',
                '"Gracias Señor" - Canción religiosa',
                '"Te Alabaré" - Varios artistas',
                '"En Tu Presencia" - Canción religiosa',
                '"El Pan de Vida" - Canción religiosa',
                '"Un Cielo Nuevo" - Canción religiosa',
                '"Que Grande es Dios" - Varios artistas',
                '"Santo, Santo es el Señor" - Canción religiosa'
            ]
        },
        babyshower: {
            nombre: "Música para Baby Showers (Suave, Alegre y Familiar)",
            canciones: [
                '"Isn\'t She Lovely" - Stevie Wonder',
                '"Can\'t Help Falling in Love" - Elvis Presley',
                '"Sweet Child O\' Mine" - Guns N\' Roses (versión suave)',
                '"Lullaby" - Dixie Chicks',
                '"Forever Young" - Rod Stewart',
                '"Baby Mine" - Alison Krauss (de Dumbo)',
                '"You Are the Sunshine of My Life" - Stevie Wonder',
                '"Beautiful Boy (Darling Boy)" - John Lennon',
                '"Count on Me" - Bruno Mars',
                '"Somewhere Over the Rainbow" - Israel Kamakawiwo\'ole'
            ]
        },
        quinceaneros: {
            nombre: "Música para Quinceañeros (Pop, Baladas y Música Latina)",
            canciones: [
                '"Vivir Mi Vida" - Marc Anthony',
                '"Bailando" - Enrique Iglesias ft. Sean Paul, Descemer Bueno, Gente de Zona',
                '"Héroe" - Enrique Iglesias',
                '"Danza Kuduro" - Don Omar ft. Lucenzo',
                '"Échame la Culpa" - Luis Fonsi & Demi Lovato',
                '"Perfect" - Ed Sheeran',
                '"Despacito" - Luis Fonsi ft. Daddy Yankee',
                '"La Bicicleta" - Carlos Vives & Shakira',
                '"Bésame Mucho" - Consuelo Velázquez (versión moderna)',
                '"Mi Gente" - J Balvin, Willy William'
            ]
        },
        juvenil: {
            nombre: "Música para Fiesta Juvenil (Hip-Hop y Electrónica)",
            canciones: [
                '"Sicko Mode" - Travis Scott',
                '"Savage Love" - Jawsh 685 x Jason Derulo',
                '"One Dance" - Drake ft. Wizkid & Kyla',
                '"HUMBLE." - Kendrick Lamar',
                '"Roses" - SAINt JHN',
                '"Dance Monkey" - Tones and I'
            ]
        },
        bodas: {
            nombre: "Música para Bodas (Romántica y Clásica)",
            canciones: [
                '"A Thousand Years" - Christina Perri',
                '"Perfect" - Ed Sheeran',
                '"All of Me" - John Legend',
                '"At Last" - Etta James',
                '"Canon in D" - Johann Pachelbel',
                '"Marry You" - Bruno Mars'
            ]
        },
        cumpleanos: {
            nombre: "Música para Fiesta de Cumpleaños (Pop y Dance)",
            canciones: [
                '"Uptown Funk" - Mark Ronson ft. Bruno Mars',
                '"Can\'t Stop the Feeling!" - Justin Timberlake',
                '"Shape of You" - Ed Sheeran',
                '"Blinding Lights" - The Weeknd',
                '"Levitating" - Dua Lipa ft. DaBaby',
                '"Party Rock Anthem" - LMFAO'
            ]
        }
    };

    const decoraciones = {
        princesas: {
            nombre: "Decoración de Princesas",
            costo: "300,000 COP",
            tema: "Inspirada en cuentos de hadas y reinos encantados, ideal para cumpleaños infantiles o eventos temáticos de princesas.",
            elementos: {
                arcos: "Arcos decorativos con tonos pastel (rosa, lila y dorado) y fondos temáticos con imágenes de castillos, coronas y personajes de princesas.",
                centrosMesa: "Centros de mesa con coronas, varitas mágicas, y flores artificiales en colores suaves.",
                globos: "Globos en forma de estrellas, corazones y princesas, en tonos rosa y dorado, con algunas opciones con helio.",
                detalles: "Bandas decorativas con imágenes de princesas, caminos de mesa y servilletas temáticas."
            },
            ambiente: "Crea un ambiente mágico y elegante, con un enfoque en la feminidad y el glamour típico de los cuentos de hadas."
        },
        floral: {
            nombre: "Decoración Floral",
            costo: "150,000 COP",
            tema: "Basado en un estilo natural y romántico, perfecto para eventos como bodas, baby showers o eventos primaverales.",
            elementos: {
                arcos: "Arcos decorados con arreglos florales frescos o artificiales, en una gama de colores que puede incluir rosas, lilas, blancos y verdes.",
                centrosMesa: "Jarrones con arreglos florales variados, que pueden incluir rosas, margaritas, lirios o peonías, dependiendo de la temporada.",
                globos: "Opcionalmente, se pueden incorporar globos decorativos en tonos pastel o metálicos que complementen el esquema floral.",
                detalles: "Caminos de mesa con estampados florales, servilletas a juego y pequeños detalles como pétalos de flores esparcidos en las mesas."
            },
            ambiente: "Crea un ambiente fresco y elegante, con un enfoque en la belleza natural y la sofisticación."
        },
        hadas: {
            nombre: "Decoración Temática Hadas",
            costo: "150,000 COP",
            tema: "Enfocado en la magia y el encanto de las criaturas míticas, ideal para fiestas de cumpleaños infantiles o eventos de fantasía.",
            elementos: {
                arcos: "Arcos y fondos decorados con imágenes de hadas, bosques encantados y elementos mágicos, en colores como verde, morado y dorado.",
                centrosMesa: "Centros de mesa con figuras de hadas, varitas mágicas y pequeños detalles como glitter y flores artificiales.",
                globos: "Globos en forma de estrellas, mariposas y hadas, con colores brillantes y metálicos.",
                detalles: "Caminos de mesa con estampados de hadas, servilletas y platos temáticos con motivos mágicos."
            },
            ambiente: "Crea un ambiente encantado y lúdico, con un enfoque en la magia y la fantasía."
        },
        neon: {
            nombre: "Decoración Temática Neón",
            costo: "150,000 COP",
            tema: "Vibrante y moderna, ideal para fiestas juveniles, eventos nocturnos o temáticos de los años 80.",
            elementos: {
                arcos: "Arcos y fondos con luces neón y colores brillantes como rosa, verde, azul y amarillo. Puede incluir efectos de luz fluorescente o pintura neón.",
                centrosMesa: "Centros de mesa con elementos que brillan bajo luz negra, como flores neón y decoraciones de acrílico brillante.",
                globos: "Globos en colores neón y con efectos brillantes, algunas opciones pueden ser globos de LED.",
                detalles: "Caminos de mesa con diseños neón, platos y servilletas con colores vibrantes y efectos de fluorescencia."
            },
            ambiente: "Crea un ambiente energético y moderno, ideal para una fiesta divertida y llamativa."
        }
    };

    const buffets = {
        mediterraneo: {
            nombre: "Buffet Mediterráneo para Evento Corporativo",
            principales: "Ensalada griega, hummus con pita, falafel, tzatziki, brochetas de pollo marinadas en yogurt.",
            acompañamientos: "Tabulé, aceitunas y queso feta.",
            pan: "Pan de pita y focaccia.",
            postres: "Baklava, yogur griego con miel y frutas frescas.",
            bebidas: "Agua mineral, jugo de granada y vino blanco.",
            costo: "$60,000 - $90,000 COP por persona"
        },
        mexicano: {
            nombre: "Buffet Mexicano para Fiesta Familiar",
            principales: "Tacos de carne asada, pollo al pastor, vegetarianos con frijoles y vegetales.",
            acompañamientos: "Guacamole, salsa fresca, frijoles refritos y arroz mexicano.",
            pan: "Tortillas de maíz y harina.",
            postres: "Churros, flan, y tres leches.",
            bebidas: "Agua de horchata, jugo de jamaica y cerveza mexicana.",
            costo: "$50,000 - $70,000 COP por persona"
        },
        brunch: {
            nombre: "Buffet de Brunch para Reunión Social",
            principales: "Huevos revueltos, quiches variados (vegetariano, jamón y queso), salchichas de desayuno.",
            acompañamientos: "Ensalada de frutas, croissants, y bagels con queso crema y salmón.",
            pan: "Pan de campo, muffins y panes variados.",
            postres: "Pancakes con sirope, brownies, y tartaletas de frutas.",
            bebidas: "Café, té, jugo de naranja y mimosa.",
            costo: "$45,000 - $65,000 COP por persona"
        },
        internacional: {
            nombre: "Buffet Internacional para Boda Elegante",
            principales: "Carpaccio de res, rollos de sushi, pasta al pesto y salmón a la parrilla.",
            acompañamientos: "Ensalada Caesar, risotto de champiñones, y vegetales al vapor.",
            pan: "Panes artesanales y focaccia.",
            postres: "Macarons, tiramisú, y tartas de frutas.",
            bebidas: "Vino tinto y blanco, champán, y agua con gas.",
            costo: "$80,000 - $120,000 COP por persona"
        },
        vegano: {
            nombre: "Buffet Vegano para Evento Comunitario",
            principales: "Hamburguesas veganas, lasaña de vegetales, y curry de garbanzos.",
            acompañamientos: "Ensalada de quinoa, hummus con palitos de vegetales, y tabulé.",
            pan: "Pan integral y pan de pita.",
            postres: "Brownies veganos, helado de coco, y frutas frescas.",
            bebidas: "Agua, jugo de manzana y té helado.",
            costo: "$40,000 - $60,000 COP por persona"
        }
    };

    const preciosMusica = {
        comunion: 500000,
        babyshower: 400000,
        quinceaneros: 700000,
        juvenil: 600000,
        bodas: 800000,
        cumpleanos: 500000
    };

    const preciosDecoracion = {
        princesas: 300000,
        floral: 150000,
        hadas: 150000,
        neon: 150000
    };

    const preciosBuffet = {
        mediterraneo: 75000,
        mexicano: 60000,
        brunch: 55000,
        internacional: 100000,
        vegano: 50000
    };

    const costoInvitado = 5000;

    musicaCheckbox.addEventListener('change', function() {
        musicaOptions.style.display = this.checked ? 'block' : 'none';
    });

    decoracionCheckbox.addEventListener('change', function() {
        decoracionOptions.style.display = this.checked ? 'block' : 'none';
    });

    buffetCheckbox.addEventListener('change', function() {
        buffetOptions.style.display = this.checked ? 'block' : 'none';
    });

    musicaSelect.addEventListener('change', function() {
        const selectedMusica = musica[this.value];
        if (selectedMusica) {
            musicaDetails.innerHTML = `
                <h5>${selectedMusica.nombre}</h5>
                <ul>
                    ${selectedMusica.canciones.map(cancion => `<li>${cancion}</li>`).join('')}
                </ul>
            `;
        } else {
            musicaDetails.innerHTML = '';
        }
    });

    decoracionSelect.addEventListener('change', function() {
        const selectedDecoracion = decoraciones[this.value];
        if (selectedDecoracion) {
            decoracionDetails.innerHTML = `
                <h5>${selectedDecoracion.nombre}</h5>
                <p><strong>Costo:</strong> ${selectedDecoracion.costo}</p>
                <p><strong>Tema:</strong> ${selectedDecoracion.tema}</p>
                <h5>Elementos:</h5>
                <ul>
                    <li><strong>Arcos y Backdrops:</strong> ${selectedDecoracion.elementos.arcos}</li>
                    <li><strong>Centros de Mesa:</strong> ${selectedDecoracion.elementos.centrosMesa}</li>
                    <li><strong>Globos:</strong> ${selectedDecoracion.elementos.globos}</li>
                    <li><strong>Detalles Adicionales:</strong> ${selectedDecoracion.elementos.detalles}</li>
                </ul>
                <p><strong>Ambiente:</strong> ${selectedDecoracion.ambiente}</p>
            `;
        } else {
            decoracionDetails.innerHTML = '';
        }
    });

    buffetSelect.addEventListener('change', function() {
        const selectedBuffet = buffets[this.value];
        if (selectedBuffet) {
            buffetDetails.innerHTML = `
                <h5>${selectedBuffet.nombre}</h5>
                <p><strong>Platos Principales:</strong> ${selectedBuffet.principales}</p>
                <p><strong>Acompañamientos:</strong> ${selectedBuffet.acompañamientos}</p>
                <p><strong>Pan:</strong> ${selectedBuffet.pan}</p>
                <p><strong>Postres:</strong> ${selectedBuffet.postres}</p>
                <p><strong>Bebidas:</strong> ${selectedBuffet.bebidas}</p>
                <p><strong>Costo Estimado:</strong> ${selectedBuffet.costo}</p>
            `;
        } else {
            buffetDetails.innerHTML = '';
        }
    });

    function calcularTotal() {
        let total = 0;

        if (musicaCheckbox.checked && musicaSelect.value) {
            total += preciosMusica[musicaSelect.value];
        }

        if (decoracionCheckbox.checked && decoracionSelect.value) {
            total += preciosDecoracion[decoracionSelect.value];
        }

        if (buffetCheckbox.checked && buffetSelect.value) {
            total += preciosBuffet[buffetSelect.value];
        }

        const numInvitados = parseInt(numInvitadosInput.value) || 0;
        total += numInvitados * costoInvitado;

        return total;
    }

    cotizarButton.addEventListener('click', function(e) {
        e.preventDefault();
        if (validateForm()) {
            const total = calcularTotal();
            totalCotizacion.textContent = `Total de la cotización: ${total.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}`;
            totalCotizacion.style.display = 'block';
        }
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (validateForm()) {
            const total = calcularTotal();
            console.log('Formulario enviado:', new FormData(form));
            console.log('Total de la cotización:', total);
            alert(`Formulario enviado con éxito! Total de la cotización: ${total.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}`);
            form.reset();
            musicaOptions.style.display = 'none';
            musicaDetails.innerHTML = '';
            decoracionOptions.style.display = 'none';
            decoracionDetails.innerHTML = '';
            buffetOptions.style.display = 'none';
            buffetDetails.innerHTML = '';
            totalCotizacion.style.display = 'none';
        }
    });

    function validateForm() {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = 'red';
            } else {
                field.style.borderColor = '';
            }
        });

        if (!isValid) {
            alert('Por favor, complete todos los campos requeridos.');
        }

        return isValid;
    }
});