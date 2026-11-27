# Canales de comunicación y CTAs activos

**Estado:** Approved
**Fecha:** 2026-11-27
**Objetivo:** Conectar los canales de comunicación del landing (WhatsApp y formulario de contacto vía EmailJS) y reemplazar los placeholders "Muy pronto" con CTAs funcionales de WhatsApp y modal de contacto.

---

## Alcance

### Dentro

- Conectar `WhatsAppButton` y `ContactModal` en `App.tsx`
- Reemplazar `<span class="hero__soon">Muy pronto</span>` en `Hero` con dos CTAs: WhatsApp y abrir modal
- Reemplazar `<span class="cta-final__soon">Muy pronto</span>` en `CtaFinal` con los mismos dos CTAs
- Conectar el formulario de `ContactModal` a EmailJS
- Reemplazar el placeholder `+57XXXXXXXXXX` con el número real `+57 3002391674`
- Agregar variables de entorno para las keys de EmailJS
- Instalar dependencia `@emailjs/browser`

### Fuera

- Cambios de copy en secciones distintas a Hero y CtaFinal (Servicios, Pricing, HowItWorks, etc.)
- Creación de páginas `/terminos` y `/privacidad`
- Rediseño visual de los CTAs o de los componentes existentes
- Integración con analytics o tracking de conversiones

---

## Modelo de datos

No se introducen nuevas estructuras de datos persistentes.

Variables de entorno nuevas en `.env` (y documentadas en `.env.example`):

```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

El número de WhatsApp se guarda como constante en `WhatsAppButton.tsx` (no en `.env`, porque ya es público y el botón flotante siempre lo muestra).

---

## Plan de implementación

1. **Instalar dependencia**
   ```
   npm install @emailjs/browser
   ```

2. **Actualizar `WhatsAppButton.tsx`**
   - Cambiar `WHATSAPP_URL` a `'https://wa.me/573002391674'`
   - Añadir parámetro `?text=` con mensaje pre-armado: `Hola, quiero empezar a facturar con Contia`

3. **Crear `.env.example`** con las tres variables `VITE_EMAILJS_*` vacías (documentación)
   - Agregar `.env` al `.gitignore` si no está ya

4. **Conectar `ContactModal` a EmailJS**
   - En `handleSubmit`, reemplazar `console.log` por `emailjs.send(serviceId, templateId, payload, publicKey)`
   - Manejar loading state (deshabilitar botón mientras envía) y error state (mostrar mensaje de fallo)
   - Las keys se leen de `import.meta.env.VITE_EMAILJS_*`

5. **Levantar estado del modal en `App.tsx`**
   - Agregar `const [isContactOpen, setIsContactOpen] = useState(false)`
   - Renderizar `<ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />`
   - Renderizar `<WhatsAppButton />`
   - Pasar `onOpenContact={() => setIsContactOpen(true)}` a `Hero` y `CtaFinal`

6. **Actualizar `Hero.tsx`**
   - Recibir prop `onOpenContact: () => void`
   - Reemplazar `<span className="hero__soon">Muy pronto</span>` con:
     - Botón primario: link a WhatsApp (`href="https://wa.me/573002391674?text=..."`, `target="_blank"`)
     - Botón secundario: `<button onClick={onOpenContact}>Escríbenos</button>`

7. **Actualizar `CtaFinal.tsx`**
   - Recibir prop `onOpenContact: () => void`
   - Reemplazar `<span className="cta-final__soon">Muy pronto</span>` con los mismos dos CTAs

8. **Verificar build** (`npm run build`) sin errores de tipos ni warnings

---

## Criterios de aceptación

- [ ] El botón flotante de WhatsApp abre `wa.me/573002391674` con el mensaje pre-armado
- [ ] El Hero muestra dos CTAs: uno de WhatsApp y uno que abre el modal de contacto
- [ ] El CtaFinal muestra los mismos dos CTAs
- [ ] El modal de contacto se abre y cierra correctamente desde ambas secciones
- [ ] El formulario llama a EmailJS al enviar; en éxito muestra el estado de confirmación; en error muestra un mensaje de fallo
- [ ] El botón "Enviar" se deshabilita mientras la petición está en vuelo
- [ ] `npm run build` completa sin errores ni warnings de TypeScript
- [ ] `.env` no se sube a git; `.env.example` documenta las tres variables

---

## Decisiones tomadas y descartadas

| Decisión | Alternativa descartada | Razón |
|---|---|---|
| EmailJS (client-side) | Resend con backend | No hay endpoint servidor; EmailJS permite arrancar sin infraestructura adicional |
| CTA doble (WhatsApp + modal) | CTA único (solo WhatsApp o solo modal) | El usuario quiere dar ambas opciones de contacto en Hero y CtaFinal |
| Número hardcodeado en el componente | Variable de entorno `VITE_WA_NUMBER` | El número de WhatsApp es público; meterlo en env agrega complejidad sin beneficio de seguridad |
| Levantar estado del modal en App.tsx | Estado local en cada sección | Hero y CtaFinal comparten el mismo modal; levantarlo evita duplicar lógica |

---

## Riesgos identificados

- **Keys de EmailJS expuestas en el bundle**: la `publicKey` de EmailJS es de naturaleza pública por diseño (similar a una API key de analytics). Se mitiga limitando el dominio autorizado en el dashboard de EmailJS a `contia.app` (o el dominio del landing en producción).
- **Spam en el formulario**: sin reCAPTCHA, el formulario puede recibir envíos automatizados. Mitigación mínima: habilitar la protección anti-spam nativa de EmailJS en la configuración del template.
