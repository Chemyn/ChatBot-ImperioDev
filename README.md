# ChatBot ImperioDev - Impi 🚀

Bienvenido al repositorio oficial del **Chatbot Impi**, el asistente virtual de [ImperioDev](https://imperiodev.net).
Este plugin de WordPress proporciona un chat flotante "flow-based" (árbol de decisiones) diseñado para guiar a los clientes potenciales y redirigirlos a WhatsApp con mensajes pre-configurados.

## 📋 Características

*   **Sin Costo de API**: Funciona 100% con JavaScript en el navegador del cliente. No requiere OpenAI ni Google Gemini.
*   **Árbol de Decisiones**: Flujos predefinidos para Sitios Web, E-commerce, Apps y Preguntas Frecuentes.
*   **Integración WhatsApp**: Redirección inteligente a la API de WhatsApp con mensajes personalizados según la consulta del usuario.
*   **Diseño Premium**: Interfaz moderna, responsiva y con animaciones suaves.
*   **Manejo de Inactividad**: Detecta si el usuario deja de interactuar y pregunta si sigue ahí.

## 🛠️ Instalación

1.  Descarga este repositorio.
2.  Sube la carpeta `ChatBot` a tu directorio `/wp-content/plugins/` en WordPress.
3.  Activa el plugin **"Custom Flow Chatbot"** desde el panel de administración.
4.  ¡Listo! El botón de chat aparecerá en el footer de tu sitio.

##  Changelog

### [2.0.0] - 2026-01-16
*   **Refactor Total**: Cambio de arquitectura de "AI-Based" a "Rule-Based" (Impi Flow).
*   **Nuevo Persona**: Implementada la personalidad "Impi" (tono juvenil, entusiasta).
*   **Nuevos Flujos**:
    *   Flujo de creación de Sitios Web (Landing/Corp/Portafolio).
    *   Flujo de E-commerce (Etapa/Tamaño).
    *   Flujo de Desarrollo de Apps (Móvil/Escritorio/Híbrido).
*   **Integración**: Enlaces directos a `wa.me` con textos contextuale.
*   **UI**: Actualización de colores a azul corporativo (#2563eb) y botones de opciones.
*   **Fix**: Eliminada dependencia de APIs externas (Gemini/OpenAI) para evitar errores de cuota.

### [1.2.0] - 2026-01-16
*   Intento de integración con Google Gemini API.
*   Panel de configuración de claves API.

### [1.0.0] - 2026-01-16
*   Versión inicial "Dummy".
*   Estructura básica de plugin WordPress.
