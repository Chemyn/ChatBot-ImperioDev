<?php
/**
 * Plugin Name: Custom Flow Chatbot
 * Description: A rule-based support chatbot for WordPress.
 * Version: 2.1.0
 * Author: ImperioDev
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

class Custom_Flow_Chatbot
{

    public function __construct()
    {
        // Enqueue scripts and styles
        add_action('wp_enqueue_scripts', array($this, 'enqueue_assets'));

        // Add chat widget to footer
        add_action('wp_footer', array($this, 'render_chat_widget'));
    }

    public function enqueue_assets()
    {
        // Enqueue CSS
        wp_enqueue_style('cac-style', plugin_dir_url(__FILE__) . 'assets/css/chat-style.css', array(), '2.0.0');

        // Enqueue JS
        wp_enqueue_script('cac-script', plugin_dir_url(__FILE__) . 'assets/js/chat-script.js', array('jquery'), '2.0.0', true);
    }

    public function render_chat_widget()
    {
        ?>
        <div id="cac-chat-container">
            <!-- Chat Button -->
            <button id="cac-toggle-btn" aria-label="Open Chat">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            </button>

            <!-- Chat Window -->
            <div id="cac-chat-window" class="hidden">
                <div class="cac-header">
                    <div class="cac-title">
                        <span class="cac-status-dot"></span>
                        <h3>Atención al Cliente</h3>
                    </div>
                    <button id="cac-close-btn">&times;</button>
                </div>

                <div id="cac-messages-body">
                    <!-- Los mensajes se cargarán vía JS -->
                </div>
            </div>
        </div>
        <?php
    }
}

new Custom_Flow_Chatbot();
