# Restricción de Automatización de Navegador (No Playwright / No Browser Subagent sin autorización)

1. **Prohibición estricta de navegación automática no solicitada:**
   - Queda terminantemente prohibido utilizar herramientas de subagentes de navegador (`browser_subagent`, Playwright, automatizaciones de navegador o emuladores) sin que el usuario lo haya solicitado o autorizado de manera explícita y previa.
   - Las verificaciones visuales y de funcionamiento las realiza directamente el usuario en su entorno local (`http://127.0.0.1:...`).
   - Jamás bloquear el flujo de desarrollo ni ejecutar pruebas de navegador en segundo plano por iniciativa propia.
