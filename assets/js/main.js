
document.addEventListener('DOMContentLoaded', () => {
    const lazyElements = document.querySelectorAll('.lazy-bg');
    const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
    const bgUrl = entry.target.getAttribute('data-bg');
    entry.target.style.backgroundImage = `url('${bgUrl}')`;
    observer.unobserve(entry.target);
}
});
}, { rootMargin: '0px 0px 100px 0px' });
    lazyElements.forEach(el => observer.observe(el));
});

    // Inicialización de AOS
    document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000, once: true });
});

    // Navbar Scroll
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

    // Menú Móvil
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    menuToggle.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
});
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        mobileMenu.classList.add('hidden');
    });
});

    // Función validateInput
    function validateInput(input, errorElement, regex = null) {
    const value = input.value.trim();
    if (!value) {
    errorElement.classList.remove('hidden');
    return false;
} else if (regex && !regex.test(value)) {
    errorElement.classList.remove('hidden');
    return false;
} else {
    errorElement.classList.add('hidden');
    return true;
}
}

    // Validación para Contacto (contact-form)
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const formSuccess = document.getElementById('form-success');
    const formError = document.getElementById('form-error');
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const loadingClass = 'loading';
    const originalButtonText = submitButton.textContent;

    [nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener('input', () => {
        if (input.id === 'name') validateInput(input, nameError);
        if (input.id === 'email') validateInput(input, emailError, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        if (input.id === 'message') validateInput(input, messageError);
    });
});

    contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let isValid = true;
    [nameError, emailError, messageError, formSuccess, formError].forEach(el => el.classList.add('hidden'));

    isValid &= validateInput(nameInput, nameError);
    isValid &= validateInput(emailInput, emailError, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    isValid &= validateInput(messageInput, messageError);

    if (isValid) {
    submitButton.classList.add(loadingClass);
    submitButton.textContent = 'Enviando...';

    const formData = new FormData(contactForm);
    try {
    const response = await fetch('/.netlify/functions/form-submit', {
    method: 'POST',
    body: formData,
});
    if (response.ok) {
    formSuccess.classList.remove('hidden');
    contactForm.classList.add('hidden');
    setTimeout(() => {
    formSuccess.classList.add('hidden');
    contactForm.classList.remove('hidden');
    contactForm.reset();
    submitButton.classList.remove(loadingClass);
    submitButton.textContent = originalButtonText;
}, 3000);
} else {
    const errorText = await response.text(); // Obtener el mensaje de error de Netlify
    throw new Error(`Error en el envío: ${errorText || 'Error desconocido'}`);
}
} catch (error) {
    console.error('Error en AJAX:', error);
    formError.textContent = error.message || 'Hubo un error. Intenta de nuevo.';
    formError.classList.remove('hidden');
    setTimeout(() => {
    formError.classList.add('hidden');
    formError.textContent = 'Hubo un error. Intenta de nuevo.'; // Restaurar mensaje por defecto
}, 3000);
    submitButton.classList.remove(loadingClass);
    submitButton.textContent = originalButtonText;
}
}
});

    // Validación para Lead Magnet (lead-form)
    const leadForm = document.getElementById('lead-form');
    const leadEmail = document.getElementById('lead-email');
    const leadEmailError = document.getElementById('lead-email-error');
    const leadSuccess = document.getElementById('lead-success');
    const leadError = document.getElementById('lead-error');
    const leadSubmitButton = leadForm.querySelector('button[type="submit"]');
    const originalLeadButtonText = leadSubmitButton.textContent;

    leadEmail.addEventListener('input', () => validateInput(leadEmail, leadEmailError, /^[^\s@]+@[^\s@]+\.[^\s@]+$/));

    leadForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let isValid = true;
    [leadEmailError, leadSuccess, leadError].forEach(el => el.classList.add('hidden'));

    isValid &= validateInput(leadEmail, leadEmailError, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    if (isValid) {
    leadSubmitButton.classList.add(loadingClass);
    leadSubmitButton.textContent = 'Enviando...';

    const formData = new FormData(leadForm);
    try {
    const response = await fetch('/.netlify/functions/form-submit', {
    method: 'POST',
    body: formData,
});
    if (response.ok) {
    leadSuccess.classList.remove('hidden');
    leadForm.classList.add('hidden');
    setTimeout(() => {
    leadSuccess.classList.add('hidden');
    leadForm.classList.remove('hidden');
    leadForm.reset();
    leadSubmitButton.classList.remove(loadingClass);
    leadSubmitButton.textContent = originalLeadButtonText;
}, 3000);
} else {
    const errorText = await response.text();
    throw new Error(`Error en el envío: ${errorText || 'Error desconocido'}`);
}
} catch (error) {
    console.error('Error en AJAX:', error);
    leadError.textContent = error.message || 'Hubo un error. Intenta de nuevo.';
    leadError.classList.remove('hidden');
    setTimeout(() => {
    leadError.classList.add('hidden');
    leadError.textContent = 'Hubo un error. Intenta de nuevo.'; // Restaurar mensaje por defecto
}, 3000);
    leadSubmitButton.classList.remove(loadingClass);
    leadSubmitButton.textContent = originalLeadButtonText;
}
}
});

    // Validación para Plantilla (plantilla)
    const plantillaForm = document.querySelector('form[name="plantilla"]');
    const plantillaEmail = document.querySelector('form[name="plantilla"] input[name="email"]');
    const plantillaEmailError = document.getElementById('plantilla-email-error');
    const plantillaSuccess = document.getElementById('plantilla-success');
    const plantillaError = document.getElementById('plantilla-error');
    const plantillaSubmitButton = plantillaForm.querySelector('button[type="submit"]');
    const originalPlantillaButtonText = plantillaSubmitButton.textContent;

    plantillaEmail.addEventListener('input', () => validateInput(plantillaEmail, plantillaEmailError, /^[^\s@]+@[^\s@]+\.[^\s@]+$/));

    plantillaForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let isValid = true;
    [plantillaEmailError, plantillaSuccess, plantillaError].forEach(el => el.classList.add('hidden'));

    isValid &= validateInput(plantillaEmail, plantillaEmailError, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    if (isValid) {
    plantillaSubmitButton.classList.add(loadingClass);
    plantillaSubmitButton.textContent = 'Enviando...';

    const formData = new FormData(plantillaForm);
    try {
    const response = await fetch('/.netlify/functions/form-submit', {
    method: 'POST',
    body: formData,
});
    if (response.ok) {
    plantillaSuccess.classList.remove('hidden');
    plantillaForm.classList.add('hidden');
    setTimeout(() => {
    plantillaSuccess.classList.add('hidden');
    plantillaForm.classList.remove('hidden');
    plantillaForm.reset();
    plantillaSubmitButton.classList.remove(loadingClass);
    plantillaSubmitButton.textContent = originalPlantillaButtonText;
}, 3000);
} else {
    const errorText = await response.text();
    throw new Error(`Error en el envío: ${errorText || 'Error desconocido'}`);
}
} catch (error) {
    console.error('Error en AJAX:', error);
    plantillaError.textContent = error.message || 'Hubo un error. Intenta de nuevo.';
    plantillaError.classList.remove('hidden');
    setTimeout(() => {
    plantillaError.classList.add('hidden');
    plantillaError.textContent = 'Hubo un error. Intenta de nuevo.'; // Restaurar mensaje por defecto
}, 3000);
    plantillaSubmitButton.classList.remove(loadingClass);
    plantillaSubmitButton.textContent = originalPlantillaButtonText;
}
}
});

    // Validación para Checklist (checklist)
    const checklistForm = document.querySelector('form[name="checklist"]');
    const checklistEmail = document.querySelector('form[name="checklist"] input[name="email"]');
    const checklistEmailError = document.getElementById('checklist-email-error');
    const checklistSuccess = document.getElementById('checklist-success');
    const checklistError = document.getElementById('checklist-error');
    const checklistSubmitButton = checklistForm.querySelector('button[type="submit"]');
    const originalChecklistButtonText = checklistSubmitButton.textContent;

    checklistEmail.addEventListener('input', () => validateInput(checklistEmail, checklistEmailError, /^[^\s@]+@[^\s@]+\.[^\s@]+$/));

    checklistForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let isValid = true;
    [checklistEmailError, checklistSuccess, checklistError].forEach(el => el.classList.add('hidden'));

    isValid &= validateInput(checklistEmail, checklistEmailError, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    if (isValid) {
    checklistSubmitButton.classList.add(loadingClass);
    checklistSubmitButton.textContent = 'Enviando...';

    const formData = new FormData(checklistForm);
    try {
    const response = await fetch('/.netlify/functions/form-submit', {
    method: 'POST',
    body: formData,
});
    if (response.ok) {
    checklistSuccess.classList.remove('hidden');
    checklistForm.classList.add('hidden');
    setTimeout(() => {
    checklistSuccess.classList.add('hidden');
    checklistForm.classList.remove('hidden');
    checklistForm.reset();
    checklistSubmitButton.classList.remove(loadingClass);
    checklistSubmitButton.textContent = originalChecklistButtonText;
}, 3000);
} else {
    const errorText = await response.text();
    throw new Error(`Error en el envío: ${errorText || 'Error desconocido'}`);
}
} catch (error) {
    console.error('Error en AJAX:', error);
    checklistError.textContent = error.message || 'Hubo un error. Intenta de nuevo.';
    checklistError.classList.remove('hidden');
    setTimeout(() => {
    checklistError.classList.add('hidden');
    checklistError.textContent = 'Hubo un error. Intenta de nuevo.'; // Restaurar mensaje por defecto
}, 3000);
    checklistSubmitButton.classList.remove(loadingClass);
    checklistSubmitButton.textContent = originalChecklistButtonText;
}
}
});

    // Pop-up Descargable
    setTimeout(() => {
    document.getElementById('download-popup').classList.remove('hidden');
}, 10000); // Aparece después de 10 segundos

    window.addEventListener('scroll', () => {
    if (window.scrollY > document.body.offsetHeight * 0.5) {
    document.getElementById('download-popup').classList.remove('hidden');
}
});

    // Cerrar pop-up al hacer clic fuera
    document.querySelector('#download-popup').addEventListener('click', (e) => {
    if (e.target === document.getElementById('download-popup')) {
    document.getElementById('download-popup').classList.add('hidden');
}
});

    // Validación para el formulario del pop-up (popup)
    const popupForm = document.querySelector('form[name="popup"]');
    const popupEmail = document.querySelector('form[name="popup"] input[name="email"]');
    const popupEmailError = document.getElementById('popup-email-error');
    const popupSuccess = document.getElementById('popup-success');
    const popupError = document.getElementById('popup-error');
    const popupSubmitButton = popupForm.querySelector('button[type="submit"]');
    const originalPopupButtonText = popupSubmitButton.textContent;

    popupEmail.addEventListener('input', () => validateInput(popupEmail, popupEmailError, /^[^\s@]+@[^\s@]+\.[^\s@]+$/));

    popupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    let isValid = true;
    [popupEmailError, popupSuccess, popupError].forEach(el => el.classList.add('hidden'));

    isValid &= validateInput(popupEmail, popupEmailError, /^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    if (isValid) {
    popupSubmitButton.classList.add(loadingClass);
    popupSubmitButton.textContent = 'Enviando...';

    const formData = new FormData(popupForm);
    try {
    const response = await fetch('/.netlify/functions/form-submit', {
    method: 'POST',
    body: formData,
});
    if (response.ok) {
    popupSuccess.classList.remove('hidden');
    popupForm.classList.add('hidden');
    setTimeout(() => {
    popupSuccess.classList.add('hidden');
    popupForm.classList.remove('hidden');
    document.getElementById('download-popup').classList.add('hidden');
    popupForm.reset();
    popupSubmitButton.classList.remove(loadingClass);
    popupSubmitButton.textContent = originalPopupButtonText;
}, 3000);
} else {
    const errorText = await response.text();
    throw new Error(`Error en el envío: ${errorText || 'Error desconocido'}`);
}
} catch (error) {
    console.error('Error en AJAX:', error);
    popupError.textContent = error.message || 'Hubo un error. Intenta de nuevo.';
    popupError.classList.remove('hidden');
    setTimeout(() => {
    popupError.classList.add('hidden');
    popupError.textContent = 'Hubo un error. Intenta de nuevo.'; // Restaurar mensaje por defecto
}, 3000);
    popupSubmitButton.classList.remove(loadingClass);
    popupSubmitButton.textContent = originalPopupButtonText;
}
}
});

    // Scroll Top
    const scrollTop = document.getElementById('scroll-top');
    window.addEventListener('scroll', () => scrollTop.classList.toggle('hidden', window.scrollY < 200));
    scrollTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    function actualizarContadorLead() {
    const ofertaExpira = new Date('2025-03-10T23:59:59').getTime();
    const ahora = new Date().getTime();
    const diferencia = ofertaExpira - ahora;

    if (diferencia <= 0) {
    document.getElementById('contador-lead').innerHTML = '¡Últimas horas!';
    return;
}

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('contador-lead').innerHTML = `${dias}d ${horas}h ${minutos}m`;
}

    setInterval(actualizarContadorLead, 1000);
    actualizarContadorLead();