# 🏔️ Plan de Implementación - Cabaña Quinta El Cielo

## 📋 Resumen
Transformaremos completamente el sitio actual en una landing page moderna para "Cabaña Quinta El Cielo", aprovechando la infraestructura existente (Astro, Tailwind, DB) pero con nuevo diseño y contenido.

## 🎯 Objetivo
Crear una landing page profesional con sistema de reservas, autenticación y valoraciones para una cabaña en Sierra de Arteaga.

## 🎨 Paleta de Colores
```
- Verde bosque: #2D5016
- Azul nocturno: #0F1E3D
- Dorado atardecer: #D4A574
- Blanco hueso: #FAF7F2
```

## 📦 Stack Técnico
- **Framework:** Astro 5+ (output: 'server')
- **Base de datos:** Astro DB (SQLite local) + Turso (producción)
- **Estilos:** Tailwind CSS
- **Iconos:** lucide-astro
- **Tipografía:** Onest Variable
- **Autenticación:** Better-Auth o Lucia
- **Validación:** Zod + Astro Actions

## 🗃️ Schema de Base de Datos

### User
- id, email (unique), passwordHash, name, createdAt

### Session
- id, userId, expiresAt

### Booking
- id, userId, planType ('planta_baja' | 'completa')
- checkIn, checkOut, guests, totalPrice
- status ('pending' | 'confirmed' | 'cancelled')
- createdAt

### Review
- id, userId, bookingId
- rating (1-5), comment, createdAt

## 📁 Estructura de Carpetas
```
src/
├── components/
│   ├── ui/          # Button, Card, Badge, Input
│   ├── sections/    # Hero, Amenities, Gallery, Reviews, Booking
│   └── islands/     # Componentes interactivos
├── layouts/
│   └── Layout.astro # Layout principal con Onest
├── pages/
│   ├── index.astro
│   ├── login.astro
│   ├── register.astro
│   ├── mis-reservas.astro
│   └── api/         # Endpoints
├── lib/
│   ├── auth.ts      # Lógica de sesiones
│   └── db.ts        # Helpers de Astro DB
db/
├── config.ts        # Schema de tablas
└── seed.ts          # Datos iniciales
```

## 🧱 Estructura de la Landing Page

### 1. Header/Navbar (sticky)
- Logo "Quinta El Cielo" con ícono Mountain
- Links: Inicio, La Cabaña, Amenidades, Galería, Valoraciones, Reservar
- Dropdown de usuario (si hay sesión)

### 2. Hero Section
- Imagen full-screen (montaña/cielo estrellado)
- Título: "Cabaña Quinta El Cielo"
- Subtítulo: "A 3,550m sobre el nivel del mar · Sierra de Arteaga"
- CTAs: "Reservar ahora" y "Ver galería"

### 3. Sobre la Cabaña
- 4 tarjetas: Capacidad, Altitud, Vista, Acceso

### 4. Habitaciones y Amenidades
- Planta Alta: Edén, Cielo, Nubes
- Amenidades generales (grid con iconos)

### 5. Planes y Precios
- Planta Baja: $5,499 MXN
- Cabaña Completa: $8,500 MXN

### 6. Galería
- Grid masonry con lightbox

### 7. Valoraciones
- Promedio + reseñas
- Formulario si tiene reserva pasada

### 8. Reservar
- Calendario de fechas
- Selector de plan
- Cálculo automático

### 9. Ubicación
- Mapa embebido
- Indicaciones

### 10. Footer
- Logo, redes sociales, contacto

## 📄 Páginas Adicionales

### /login
- Formulario email + password
- Link a registro

### /register
- Formulario completo
- Validación con Zod

### /mis-reservas (protegida)
- Lista de reservas del usuario
- Opción de cancelar

## ⚡ Orden de Implementación

1. **Configuración base** (15 min)
   - Instalar Onest
   - Actualizar Tailwind config
   - Actualizar Layout.astro

2. **Componentes estáticos** (30 min)
   - Navigation
   - Hero
   - Features
   - Footer

3. **Secciones de contenido** (30 min)
   - Rooms/Amenities
   - Pricing
   - Gallery
   - Location

4. **Sistema de autenticación** (20 min)
   - Actualizar schema DB
   - Login/Register pages
   - Session management

5. **Sistema de reservas** (25 min)
   - Booking form
   - Calendar component
   - API endpoints

6. **Valoraciones** (15 min)
   - Review system
   - Display reviews

7. **Testing y optimización** (10 min)
   - Performance
   - SEO
   - Responsive

## ✅ Requisitos No Funcionales

- Lighthouse: 95+ en todas las métricas
- Mobile-first responsive
- Accesibilidad AA
- SEO con JSON-LD
- Mínimo JavaScript

## 🚀 Comandos

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Base de datos
npm run astro db:push

# Producción (con Turso)
ASTRO_DB_REMOTE_URL=libsql://xxx.turso.io
ASTRO_DB_APP_TOKEN=xxx
```

## 📝 Notas de Implementación

- Usar islas de Astro solo donde sea necesario
- Mantener el resto estático para máximo rendimiento
- Validar todos los formularios con Zod
- Usar Astro Actions para forms
- Implementar lazy loading en imágenes
- Optimizar con el script de imágenes existente