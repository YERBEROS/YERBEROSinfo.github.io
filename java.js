// Función para traducir el contenido visible
function translateContent() {
    const activeSection = document.querySelector('.section.active');
    if (!activeSection) return;

    const translations = {
        // Traducciones específicas de cada sección
        'Acerca de Nosotros': 'About Us',
        'Productos': 'Products',
        'Libro': 'Book',
        'Contáctanos': 'Contact Us',
        'Preguntas Frecuentes': 'Frequently Asked Questions',
        '"Descubre el poder de las plantas medicinales"': '"Discover the Power of Medicinal Plants"',
        // Traducciones de preguntas frecuentes
        '¿Qué aprenderé en este libro?': 'What will I learn in this book?',
        'Aprenderás sobre las propiedades medicinales de las plantas.': 'You will learn about the medicinal properties of plants.',
        '¿Qué información incluye este libro de herbolaria?': 'What information does this herbalism book include?',
        'El libro contiene descripciones detalladas de plantas medicinales, sus usos terapéuticos, propiedades, formas de preparación y posibles contraindicaciones.': 
        'The book contains detailed descriptions of medicinal plants, their therapeutic uses, properties, preparation methods, and possible contraindications.',
        '¿Cómo puedo adquirir el libro a través de WhatsApp?': 'How can I purchase the book through WhatsApp?',
        'Es muy sencillo. Solo envíanos un mensaje al número [número de WhatsApp] con la palabra clave "Herbolaria", y uno de nuestros asesores te ayudará con el proceso de compra.': 
        'It is very simple. Just send us a message at [WhatsApp number] with the keyword "Herbolaria," and one of our advisors will assist you with the purchase process.',
        '¿Es adecuado para principiantes en el tema de herbolaria?': 'Is it suitable for beginners in herbalism?',
        'Sí, el libro está diseñado tanto para principiantes como para quienes ya tienen conocimientos básicos sobre plantas medicinales.': 
        'Yes, the book is designed for both beginners and those with basic knowledge of medicinal plants.',
        '¿Incluye recetas para preparar remedios caseros?': 'Does it include recipes for preparing home remedies?',
        'Sí, encontrarás recetas fáciles de seguir para preparar tés, ungüentos, infusiones y más.': 
        'Yes, you will find easy-to-follow recipes to prepare teas, ointments, infusions, and more.',
        '¿Es seguro usar las plantas medicinales que se mencionan?': 'Is it safe to use the medicinal plants mentioned?',
        'Aunque el libro ofrece orientación basada en fuentes confiables, siempre se recomienda consultar a un profesional de la salud antes de usar cualquier remedio herbal, especialmente si estás embarazada, lactando o tomando medicamentos.': 
        'While the book provides guidance based on reliable sources, it is always recommended to consult a healthcare professional before using any herbal remedy, especially if you are pregnant, nursing, or taking medication.',
        '¿Está disponible en formato digital?': 'Is it available in digital format?',
        'Sí, el libro está disponible tanto en formato PDF.': 'Yes, the book is available in PDF format.',
        
        // Traducción de botones
        '¡Haz clic aquí para saber más!': 'Click here to learn more!'
    };

    // Traducir todos los textos visibles dentro de la sección activa
    const elements = activeSection.querySelectorAll('h2, h4, p, li, button');
    elements.forEach(element => {
        const text = element.innerText.trim();
        if (translations[text]) {
            element.innerText = translations[text];
        }
    });

    // Traducir los botones fuera de las secciones activas (de la zona de Contacto)
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        const text = button.innerText.trim();
        if (translations[text]) {
            button.innerText = translations[text];
        }
    });
}

// Botón de traducción con alternancia entre idiomas
let isTranslated = false;
document.getElementById('translate-btn').addEventListener('click', () => {
    isTranslated = !isTranslated;
    translateContent(); // Traducir la sección activa
    document.getElementById('translate-btn').innerText = isTranslated ? 'Volver al Español' : 'Translate';
});

// Función para alternar el menú desplegable en dispositivos móviles
const menuToggleButton = document.getElementById('menu-toggle');
const navbarLinks = document.getElementById('navbar-links');

menuToggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    const menuList = document.querySelector('.menu-list');
    menuList.classList.toggle('show');
});
