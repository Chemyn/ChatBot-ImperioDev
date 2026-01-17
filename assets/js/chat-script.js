jQuery(document).ready(function ($) {
    const $toggleBtn = $('#cac-toggle-btn');
    const $chatWindow = $('#cac-chat-window');
    const $closeBtn = $('#cac-close-btn');
    const $messagesBody = $('#cac-messages-body');
    const $input = $('#cac-user-input'); // Usaremos esto para "Rescue Commands" si decides habilitar input de texto
    const $sendBtn = $('#cac-send-btn');

    // --- CONFIGURACIÓN DE IMPI (ÁRBOL DE DECISIONES) ---
    const chatFlow = {
        'start': {
            text: "¡Hola! Qué onda, soy Impi, tu asistente inteligente en ImperioDev. 🚀 Estoy aquí para ayudarte a que tu proyecto digital despegue hoy mismo.<br><br>Dime, ¿en qué puedo apoyarte hoy? (Elige una opción):",
            options: [
                { label: "🌐 Sitio Web", next: 'web_intro' },
                { label: "🛒 Tienda Online (E-commerce)", next: 'ecommerce_intro' },
                { label: "📱 App Móvil / Escritorio", next: 'app_intro' },
                { label: "❓ Preguntas Frecuentes", next: 'faq_menu' },
                { label: "📩 Hablar con humano", next: 'human_contact' }
            ]
        },

        // --- 2. FLUJO SITIO WEB ---
        'web_intro': {
            text: "¡Súper! Un sitio web es el centro de mando de tu marca. 🚀 Para darte la mejor recomendación, ¿cuál es el objetivo principal?",
            options: [
                { label: "Vender (Landing Page)", next: 'web_status' },
                { label: "Presencia Corporativa", next: 'web_status' },
                { label: "Portafolio", next: 'web_status' },
                { label: "Blog / Contenido", next: 'web_status' },
                { label: "🏠 Volver al Inicio", next: 'start' }
            ]
        },
        'web_status': {
            text: "¿Ya tienes un sitio que quieras renovar o empezamos este viaje desde cero? 📄✨",
            options: [
                { label: "Empezamos desde cero", next: 'web_trans_new' },
                { label: "Rediseño (Glow up)", next: 'web_trans_redesign' },
                { label: "⬅️ Regresar", next: 'web_intro' }
            ]
        },
        'web_trans_new': {
            text: "¡Me encanta la visión! Para aterrizar los detalles técnicos y darte un presupuesto, haz clic aquí: 👇",
            options: [
                {
                    label: "📲 Chatear por WhatsApp",
                    url: "https://wa.me/526623440716?text=%C2%A1Hola%21%20Vengo%20de%20parte%20de%20Impi.%20%F0%9F%9A%80%20Me%20interesa%20crear%20o%20mejorar%20un%20sitio%20web%20con%20ImperioDev.%20%C2%BFMe%20podr%C3%ADan%20dar%20m%C3%A1s%20informaci%C3%B3n%3F"
                },
                { label: "✅ Finalizar chat", next: 'goodbye' },
                { label: "🏠 Volver al Inicio", next: 'start' }
            ]
        },
        'web_trans_redesign': {
            text: "¡Me encanta la visión! Para aterrizar los detalles técnicos y darte un presupuesto, haz clic aquí: 👇",
            options: [
                {
                    label: "📲 Chatear por WhatsApp",
                    url: "https://wa.me/526623440716?text=%C2%A1Hola%21%20Vengo%20de%20parte%20de%20Impi.%20%F0%9F%9A%80%20Me%20interesa%20crear%20o%20mejorar%20un%20sitio%20web%20con%20ImperioDev.%20%C2%BFMe%20podr%C3%ADan%20dar%20m%C3%A1s%20informaci%C3%B3n%3F"
                },
                { label: "✅ Finalizar chat", next: 'goodbye' },
                { label: "🏠 Volver al Inicio", next: 'start' }
            ]
        },


        // --- 3. FLUJO E-COMMERCE ---
        'ecommerce_intro': {
            text: "¡Excelente visión! 💰 Una tienda online es como una sucursal que nunca duerme. ¿En qué etapa está tu negocio?",
            options: [
                { label: "Voy a empezar", next: 'ecommerce_size' },
                { label: "Ya vendo, quiero plataforma", next: 'ecommerce_size' },
                { label: "Necesito arreglos", next: 'ecommerce_size' },
                { label: "🏠 Volver al Inicio", next: 'start' }
            ]
        },
        'ecommerce_size': {
            text: "¿Cuántos productos planeas manejar aproximadamente?",
            options: [
                { label: "Menos de 20", next: 'ecommerce_final' },
                { label: "De 20 a 100", next: 'ecommerce_final' },
                { label: "¡Más de 100!", next: 'ecommerce_final' },
                { label: "⬅️ Regresar", next: 'ecommerce_intro' }
            ]
        },
        'ecommerce_final': {
            text: "¡Entendido! Tenemos las herramientas exactas para que empieces a facturar. Hablemos por WhatsApp para los detalles: 👇",
            options: [
                {
                    label: "📲 Chatear por WhatsApp",
                    url: "https://wa.me/526623440716?text=%C2%A1Qu%C3%A9%20tal%21%20Me%20gustar%C3%ADa%20platicar%20con%20un%20experto%20sobre%20una%20tienda%20en%20l%C3%ADnea%20para%20mi%20negocio.%20Vengo%20de%20platicar%20con%20Impi."
                },
                { label: "✅ Finalizar chat", next: 'goodbye' },
                { label: "🏠 Volver al Inicio", next: 'start' }
            ]
        },

        // --- 4. FLUJO APPS ---
        'app_intro': {
            text: "¡Wow, eso suena a un proyecto de alto nivel! 🚀 ¿Qué tipo de software tienes en mente?",
            options: [
                { label: "App Móvil (iOS/Android)", next: 'app_feature' },
                { label: "Software de Escritorio", next: 'app_feature' },
                { label: "Ambos (Híbrido)", next: 'app_feature' },
                { label: "🏠 Volver al Inicio", next: 'start' }
            ]
        },
        'app_feature': {
            text: "¿Y cuál sería la función estrella de tu app? (Ej: Inventarios, pedidos, red social...)",
            options: [
                { label: "Gestión / Admin", next: 'app_final' },
                { label: "Ventas / Pedidos", next: 'app_final' },
                { label: "Social / Comunidad", next: 'app_final' },
                { label: "Otra", next: 'app_final' },
                { label: "⬅️ Regresar", next: 'app_intro' }
            ]
        },
        'app_final': {
            text: "¡Ese proyecto tiene mucho potencial! 🛠️ Para definir la arquitectura y tiempos, mándanos un mensaje: 👇",
            options: [
                {
                    label: "📲 Chatear por WhatsApp",
                    url: "https://wa.me/526623440716?text=%C2%A1Hola%21%20Estoy%20interesado%20en%20desarrollar%20una%20App%20con%20ImperioDev.%20Vengo%20del%20chatbot%20y%20me%20gustar%C3%ADa%20aterrizar%20los%20detalles%20t%C3%A9cnicos."
                },
                { label: "✅ Finalizar chat", next: 'goodbye' },
                { label: "🏠 Volver al Inicio", next: 'start' }

            ]
        },

        // --- 5. PREGUNTAS FRECUENTES ---
        'faq_menu': {
            text: "¡Claro! Aquí te respondo lo que más nos preguntan:",
            options: [
                { label: "¿Qué hacen?", next: 'faq_what' },
                { label: "¿Tiempos?", next: 'faq_time' },
                { label: "¿Mantenimiento?", next: 'faq_maint' },
                { label: "¿Ubicación?", next: 'faq_loc' },
                { label: "¿Costos?", next: 'faq_cost' },
                { label: "🏠 Volver al Inicio", next: 'start' }
            ]
        },
        'faq_what': {
            text: "Hacemos de todo: Web (WordPress/WooCommerce), Apps móviles y de escritorio con Flutter. ¡Si tiene código, lo hacemos!",
            options: [{ label: "⬅️ Otra duda", next: 'faq_menu' }, { label: "🏠 Inicio", next: 'start' }]
        },
        'faq_time': {
            text: "Landing pages en 1-2 semanas; proyectos grandes dependen de la complejidad. ¡Pero siempre volamos! ⏱️",
            options: [{ label: "⬅️ Otra duda", next: 'faq_menu' }, { label: "🏠 Inicio", next: 'start' }]
        },
        'faq_maint': {
            text: "¡Claro! No te soltamos la mano. Cuidamos que todo esté rápido y seguro. 🤝",
            options: [{ label: "⬅️ Otra duda", next: 'faq_menu' }, { label: "🏠 Inicio", next: 'start' }]
        },
        'faq_loc': {
            text: "Orgullosamente de Hermosillo, Sonora 🌵, pero trabajamos con clientes de todo el mundo.",
            options: [{ label: "⬅️ Otra duda", next: 'faq_menu' }, { label: "🏠 Inicio", next: 'start' }]
        },
        'faq_cost': {
            text: "Cada proyecto es único. Hablemos 5 minutos para darte un presupuesto justo.",
            options: [{ label: "⬅️ Otra duda", next: 'faq_menu' }, { label: "📩 Cotizar", next: 'human_contact' }, { label: "🏠 Inicio", next: 'start' }]
        },

        // --- CONTACTO HUMANO ---
        'human_contact': {
            text: "¡Entendido! A veces nada supera el toque humano. Haz clic abajo para hablar directamente con el equipo:",
            options: [
                {
                    label: "📲 Iniciar chat en WhatsApp",
                    url: "https://wa.me/526623440716?text=%C2%A1Hola%21%20Necesito%20ayuda%20t%C3%A9cnica%20o%20tengo%20una%20duda%20general%20sobre%20los%20servicios%20de%20ImperioDev."
                },
                { label: "🏠 Volver al Inicio", next: 'start' },
                { label: "⬅️ Volver", next: 'start' }
            ]
        },

        // --- MENSAJES ESPECIALES ---
        'inactivity': {
            text: "¡Psst! ¿Sigues por ahí? 🤔 No quisiera que tu proyecto se quede en pausa. Si estás listo para seguir, solo elige una opción o escribe 'Hola'. ¡Aquí sigo pendiente! ✨",
            options: [
                { label: "🙋‍♂️ Aquí sigo", next: 'start' },
                { label: "👋 Finalizar", next: 'goodbye' }
            ]
        },
        'goodbye': {
            text: "¡Fue un gusto saludarte! Estaré por aquí si decides iniciar un nuevo proyecto. ¡Nos vemos pronto en el mundo digital! 🌐👋",
            options: [
                { label: "Reiniciar Impi", next: 'start' }
            ]
        }
    };

    // --- VARIABLES DE ESTADO ---
    let hasInitialized = false;
    let inactivityTimer;
    const INACTIVITY_LIMIT = 300000; // 5 minutos en milisegundos

    function toggleChat() {
        $chatWindow.toggleClass('hidden');
        if (!$chatWindow.hasClass('hidden')) {
            if (!hasInitialized) {
                startChat();
                hasInitialized = true;
            }
            resetInactivityTimer();
        } else {
            clearTimeout(inactivityTimer);
        }
    }

    $toggleBtn.on('click', toggleChat);
    $closeBtn.on('click', toggleChat);

    function startChat() {
        $messagesBody.empty();
        renderStep('start');
    }

    function renderStep(stepKey) {
        const step = chatFlow[stepKey];
        if (!step) return;

        showTypingIndicator();

        setTimeout(() => {
            removeTypingIndicator();
            appendBotMessage(step.text);
            if (step.options && step.options.length > 0) {
                renderOptions(step.options);
            }
            resetInactivityTimer();
        }, 600);
    }

    function appendBotMessage(text) {
        const html = `<div class="cac-message bot-message">${text}</div>`;
        $messagesBody.append(html);
        scrollToBottom();
    }

    function renderOptions(options) {
        const $optionsContainer = $('<div class="cac-options-container"></div>');

        options.forEach(opt => {
            const $btn = $(`<button class="cac-option-btn">${opt.label}</button>`);

            $btn.on('click', function () {
                resetInactivityTimer();
                // Deshabilitar botones anteriores
                $(this).parent().find('button').prop('disabled', true).css('opacity', '0.6');
                $(this).css('background', '#2563eb').css('color', 'white');

                // Acción
                if (opt.url) {
                    window.open(opt.url, '_blank');
                    appendBotMessage("Abriendo WhatsApp... 🚀");
                    // Opcional: Cerrar chat o mostrar despedida
                    setTimeout(() => renderStep('goodbye'), 2000);
                } else if (opt.next) {
                    renderStep(opt.next);
                }
            });

            $optionsContainer.append($btn);
        });

        $messagesBody.append($optionsContainer);
        scrollToBottom();
    }

    function showTypingIndicator() {
        const html = `
            <div id="cac-typing" class="cac-message bot-message" style="width: fit-content;">
                <span class="typing-dots">...</span>
            </div>
        `;
        $messagesBody.append(html);
        scrollToBottom();
    }

    function removeTypingIndicator() {
        $('#cac-typing').remove();
    }

    function scrollToBottom() {
        $messagesBody.animate({ scrollTop: $messagesBody[0].scrollHeight }, 300);
    }

    // --- LÓGICA DE INACTIVIDAD ---
    function resetInactivityTimer() {
        clearTimeout(inactivityTimer);
        // Solo contar si el chat está abierto
        if (!$chatWindow.hasClass('hidden')) {
            inactivityTimer = setTimeout(() => {
                renderStep('inactivity');
            }, INACTIVITY_LIMIT);
        }
    }
});
