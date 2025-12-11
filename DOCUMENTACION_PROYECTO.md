# 📋 Documentación Completa - Proyecto Terra Canada

## 📑 Tabla de Contenidos
1. [Descripción General](#descripción-general)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Funcionalidades Principales](#funcionalidades-principales)
4. [Librerías y Dependencias](#librerías-y-dependencias)
5. [Arquitectura y Patrones](#arquitectura-y-patrones)
6. [Componentes Principales](#componentes-principales)
7. [Servicios](#servicios)
8. [Modelos de Datos](#modelos-de-datos)

---

## 🎯 Descripción General

**Terra Canada** es una aplicación web empresarial desarrollada con **Angular 21** que funciona como un panel de administración integral para la gestión de tarjetas, financieros, equipos y documentos. La aplicación incluye características avanzadas como:

- ✅ Sistema de autenticación y autorización
- ✅ Dashboard interactivo con estadísticas en tiempo real
- ✅ Gestión de tarjetas de crédito
- ✅ Módulo de análisis financiero
- ✅ Sistema de eventos y documentos
- ✅ Soporte multiidioma (Español, Inglés, Francés)
- ✅ Tema claro/oscuro
- ✅ Chat de IA integrado
- ✅ Server-Side Rendering (SSR) con Express

---

## 📁 Estructura del Proyecto

```
terra-canada/
├── src/
│   ├── app/
│   │   ├── core/                          # Servicios y guards centrales
│   │   │   ├── guards/
│   │   │   │   └── auth.guard.ts         # Guard de autenticación
│   │   │   └── services/
│   │   │       ├── auth.service.ts       # Servicio de autenticación
│   │   │       ├── dashboard.service.ts  # Servicio del dashboard
│   │   │       ├── theme.service.ts      # Servicio de temas
│   │   │       └── translation.service.ts # Servicio de traducciones
│   │   │
│   │   ├── features/                      # Módulos de funcionalidades
│   │   │   ├── auth/
│   │   │   │   └── login/                # Componente de login
│   │   │   ├── dashboard/                # Dashboard principal
│   │   │   ├── equipo-tarjetas/          # Gestión de equipos y tarjetas
│   │   │   ├── financieros-bancaria/     # Financieros - Cuenta bancaria
│   │   │   ├── financieros-tarjetas/     # Financieros - Tarjetas
│   │   │   ├── analisis/                 # Módulo de análisis
│   │   │   ├── eventos/                  # Gestión de eventos
│   │   │   ├── documentos/               # Gestión de documentos
│   │   │   ├── tarjetas/                 # Gestión de tarjetas
│   │   │   └── configuracion/            # Configuración de la aplicación
│   │   │
│   │   ├── shared/                        # Componentes y utilidades compartidas
│   │   │   ├── components/
│   │   │   │   ├── ai-chat/              # Componente de chat IA
│   │   │   │   ├── layout/               # Componentes de layout
│   │   │   │   ├── sidebar/              # Barra lateral de navegación
│   │   │   │   ├── top-header/           # Encabezado superior
│   │   │   │   ├── stat-card/            # Tarjeta de estadísticas
│   │   │   │   └── recent-activity/      # Actividad reciente
│   │   │   ├── models/
│   │   │   │   ├── auth.model.ts         # Modelos de autenticación
│   │   │   │   ├── dashboard.model.ts    # Modelos del dashboard
│   │   │   │   └── translations.model.ts # Modelos de traducciones
│   │   │   ├── pipes/
│   │   │   │   └── translate.pipe.ts     # Pipe de traducción
│   │   │   └── constants/                # Constantes de la aplicación
│   │   │
│   │   ├── app.ts                        # Componente raíz
│   │   ├── app.routes.ts                 # Rutas de la aplicación
│   │   ├── app.config.ts                 # Configuración de Angular
│   │   ├── app.config.server.ts          # Configuración SSR
│   │   ├── app.routes.server.ts          # Rutas SSR
│   │   ├── app.scss                      # Estilos del componente raíz
│   │   └── app.spec.ts                   # Tests del componente raíz
│   │
│   ├── main.ts                           # Punto de entrada de la aplicación
│   ├── main.server.ts                    # Punto de entrada SSR
│   ├── server.ts                         # Configuración del servidor Express
│   ├── index.html                        # HTML principal
│   └── styles.scss                       # Estilos globales
│
├── public/                               # Archivos estáticos públicos
├── documentacion/                        # Documentación adicional
├── angular.json                          # Configuración de Angular CLI
├── tsconfig.json                         # Configuración de TypeScript
├── package.json                          # Dependencias del proyecto
└── README.md                             # README del proyecto
```

---

## 🎨 Funcionalidades Principales

### 1. **Autenticación y Autorización**
- Sistema de login con validación de credenciales
- Guardias de ruta para proteger páginas autenticadas
- Gestión de sesiones de usuario
- Credenciales de prueba:
  - **Usuario**: administrador
  - **Contraseña**: admin123

### 2. **Dashboard Principal**
- Visualización de estadísticas clave:
  - Número de usuarios activos
  - Pagos pendientes
  - Estado de tarjetas
  - Eficiencia del sistema
- Gráficos de tendencias
- Actividad reciente con detalles de transacciones

### 3. **Gestión de Tarjetas**
- **Equipo - Tarjetas**: Administración de tarjetas por equipo
- **Tarjetas**: Gestión individual de tarjetas de crédito
- **Financieros - Tarjetas**: Análisis financiero de tarjetas

### 4. **Módulo Financiero**
- **Cuenta Bancaria**: Gestión de cuentas bancarias
- **Tarjetas**: Seguimiento de transacciones de tarjetas
- Reportes financieros

### 5. **Análisis y Reportes**
- Módulo de análisis avanzado
- Visualización de datos
- Generación de reportes

### 6. **Gestión de Eventos**
- Calendario de eventos
- Registro de eventos importantes

### 7. **Gestión de Documentos**
- Almacenamiento y gestión de documentos
- Procesamiento de archivos

### 8. **Configuración**
- Preferencias de usuario
- Configuración de la aplicación
- Ajustes de tema y idioma

### 9. **Chat de IA**
- Componente de chat integrado en la aplicación
- Disponible en todas las páginas

### 10. **Soporte Multiidioma**
- Español (es) - Idioma por defecto
- Inglés (en)
- Francés (fr)
- Selector de idioma en el encabezado

### 11. **Tema Claro/Oscuro**
- Alternancia entre tema claro y oscuro
- Persistencia de preferencia en localStorage
- Estilos completamente personalizados para ambos temas

---

## 📦 Librerías y Dependencias

### **Dependencias de Producción**

#### Framework y Core
| Librería | Versión | Descripción |
|----------|---------|-------------|
| `@angular/core` | ^21.0.0 | Framework principal de Angular |
| `@angular/common` | ^21.0.0 | Módulos comunes de Angular |
| `@angular/compiler` | ^21.0.0 | Compilador de Angular |
| `@angular/forms` | ^21.0.0 | Módulo de formularios reactivos |
| `@angular/platform-browser` | ^21.0.0 | Plataforma para navegadores |
| `@angular/platform-server` | ^21.0.0 | Plataforma para servidor (SSR) |
| `@angular/router` | ^21.0.0 | Sistema de enrutamiento |
| `@angular/ssr` | ^21.0.0 | Server-Side Rendering |

#### UI y Diseño
| Librería | Versión | Descripción |
|----------|---------|-------------|
| `primeng` | ^21.0.1 | Librería de componentes UI avanzados |
| `primeicons` | ^7.0.0 | Iconos para PrimeNG |

#### Utilidades
| Librería | Versión | Descripción |
|----------|---------|-------------|
| `rxjs` | ~7.8.0 | Programación reactiva con Observables |
| `tslib` | ^2.3.0 | Librería de utilidades TypeScript |

#### Backend/Servidor
| Librería | Versión | Descripción |
|----------|---------|-------------|
| `express` | ^5.1.0 | Framework web para Node.js (SSR) |

### **Dependencias de Desarrollo**

| Librería | Versión | Descripción |
|----------|---------|-------------|
| `@angular/build` | ^21.0.0 | Builder de Angular |
| `@angular/cli` | ^21.0.0 | CLI de Angular |
| `@angular/compiler-cli` | ^21.0.0 | Compilador CLI de Angular |
| `@types/express` | ^5.0.1 | Tipos de TypeScript para Express |
| `@types/node` | ^20.17.19 | Tipos de TypeScript para Node.js |
| `typescript` | ~5.9.2 | Lenguaje TypeScript |
| `vitest` | ^4.0.8 | Framework de testing (alternativa a Karma) |
| `jsdom` | ^27.1.0 | Implementación DOM para Node.js (testing) |

### **Resumen de Tecnologías CSS y Diseño**

| Tecnología | Descripción |
|-----------|-------------|
| **SCSS** | Preprocesador CSS utilizado en todo el proyecto |
| **CSS Grid** | Para layouts complejos |
| **Flexbox** | Para alineación y distribución de elementos |
| **CSS Variables** | Para temas dinámicos |
| **Gradientes CSS** | Para fondos y efectos visuales |
| **Media Queries** | Para diseño responsivo |
| **PrimeNG Components** | Componentes UI profesionales |
| **PrimeIcons** | Conjunto de iconos SVG |

---

## 🏗️ Arquitectura y Patrones

### **Patrón de Arquitectura: Standalone Components**
Angular 21 utiliza componentes standalone, lo que significa:
- No se requieren módulos NgModule
- Cada componente declara sus propias dependencias
- Mejor tree-shaking y optimización

### **Patrón de Servicios**
- Servicios inyectables con `providedIn: 'root'`
- Uso extensivo de RxJS Observables
- BehaviorSubjects para estado reactivo

### **Patrón de Guardias**
- Guard de autenticación (`authGuard`) en rutas protegidas
- Verificación de estado de autenticación antes de acceder a rutas

### **Patrón de Componentes Compartidos**
- Componentes reutilizables en la carpeta `shared/components`
- Pipes personalizados para transformación de datos
- Modelos de datos centralizados

### **Gestión de Estado**
- RxJS Observables para flujos de datos
- BehaviorSubjects para estado compartido
- Suscripciones en componentes con OnInit/OnDestroy

### **Internacionalización (i18n)**
- Servicio de traducción centralizado
- Pipe personalizado para traducción en templates
- Soporte para 3 idiomas (ES, EN, FR)

### **Tematización**
- Servicio de tema para cambiar entre claro/oscuro
- Persistencia en localStorage
- Estilos SCSS con variables CSS

---

## 🧩 Componentes Principales

### **Componentes Compartidos (Shared)**

#### 1. **SidebarComponent**
- Navegación lateral con menú
- Muestra usuario actual
- Botón de logout
- Indicadores de notificaciones (badges)
- Responsive y colapsable

#### 2. **TopHeaderComponent**
- Encabezado superior con búsqueda
- Selector de idioma
- Notificaciones
- Botones de acción (tema, fullscreen)
- Información del usuario

#### 3. **StatCardComponent**
- Tarjeta de estadísticas
- Muestra valor, título e icono
- Indicadores de tendencia (up/down)
- Colores personalizables

#### 4. **RecentActivityComponent**
- Tabla de actividad reciente
- Filtrado y ordenamiento
- Información de transacciones
- Estados visuales

#### 5. **AiChatComponent**
- Chat flotante de IA
- Disponible en todas las páginas
- Interfaz conversacional

#### 6. **LayoutComponent**
- Componente contenedor principal
- Integra sidebar y header
- Gestiona el layout general

### **Componentes de Características (Features)**

#### **LoginComponent**
- Formulario de autenticación
- Validación de campos
- Manejo de errores
- Toggle de visibilidad de contraseña

#### **DashboardComponent**
- Página principal después del login
- Muestra estadísticas y actividad
- Integra componentes compartidos

#### **Otros Componentes de Features**
- EquipoTarjetasComponent
- FinancierosBancariaComponent
- FinancierosTarjetasComponent
- AnalisisComponent
- EventosComponent
- DocumentosComponent
- TarjetasComponent
- ConfiguracionComponent

---

## 🔧 Servicios

### **1. AuthService**
**Ubicación**: `src/app/core/services/auth.service.ts`

**Responsabilidades**:
- Gestión de autenticación
- Validación de credenciales (mock)
- Manejo de sesiones de usuario
- Observables de estado de autenticación

**Métodos principales**:
```typescript
login(credentials: LoginRequest): Observable<AuthResponse>
logout(): void
getCurrentUser(): User | null
isAuthenticated(): boolean
```

**Credenciales de prueba**:
- Usuario: `administrador`
- Contraseña: `admin123`

---

### **2. DashboardService**
**Ubicación**: `src/app/core/services/dashboard.service.ts`

**Responsabilidades**:
- Carga de datos del dashboard
- Gestión de items del menú
- Datos de estadísticas y actividades

**Métodos principales**:
```typescript
getDashboardData(): Observable<DashboardData | null>
getMenuItems(): Observable<MenuItem[]>
```

**Datos que proporciona**:
- Estadísticas (usuarios, pagos, tarjetas, eficiencia)
- Actividades recientes
- Items del menú de navegación

---

### **3. ThemeService**
**Ubicación**: `src/app/core/services/theme.service.ts`

**Responsabilidades**:
- Gestión de temas (claro/oscuro)
- Persistencia de preferencias
- Control de pantalla completa

**Métodos principales**:
```typescript
setTheme(theme: Theme): void
getTheme(): Theme
toggleTheme(): void
toggleFullscreen(): void
```

**Temas soportados**: `'light' | 'dark'`

---

### **4. TranslationService**
**Ubicación**: `src/app/core/services/translation.service.ts`

**Responsabilidades**:
- Gestión de idiomas
- Traducción de textos
- Persistencia de preferencia de idioma

**Métodos principales**:
```typescript
setLanguage(language: Language): void
getLanguage(): Language
translate(key: TranslationKey): string
translate$(key: TranslationKey): Observable<string>
getTranslations(): typeof TRANSLATIONS[Language]
```

**Idiomas soportados**: `'es' | 'en' | 'fr'`

---

## 📊 Modelos de Datos

### **1. AuthModel** (`auth.model.ts`)
```typescript
interface LoginRequest {
  username: string;
  password: string;
}

interface AuthResponse {
  token: string;
  user: User;
}

interface User {
  id: string;
  username: string;
  email: string;
  role: string;
  name: string;
}
```

### **2. DashboardModel** (`dashboard.model.ts`)
```typescript
interface StatCard {
  id: string;
  title: string;
  value: number | string;
  icon: string;
  color: string;
  trend?: number;
  trendDirection?: 'up' | 'down';
  unit?: string;
}

interface Activity {
  id: string;
  date: string;
  time: string;
  user: string;
  action: string;
  amount?: number;
  currency?: string;
  status: 'pagado' | 'pendiente' | 'completado';
}

interface MenuItem {
  id: string;
  label: string;
  icon: string;
  route: string;
  badge?: number;
  children?: MenuItem[];
  translationKey?: string;
}

interface DashboardData {
  stats: StatCard[];
  activities: Activity[];
}
```

### **3. TranslationsModel** (`translations.model.ts`)
- Contiene todas las traducciones para los 3 idiomas
- Estructura: `TRANSLATIONS[language][key]`
- Incluye claves para menú, labels, mensajes, etc.

---

## 🎨 Estilos Globales

### **Archivo Principal**: `src/styles.scss`

**Características**:
- Reset CSS global
- Tipografía base (Segoe UI, Roboto, Helvetica)
- Gradiente de fondo principal
- Estilos de scrollbar personalizados
- Tema oscuro completo con variables CSS
- Estilos para componentes principales:
  - `.top-header`
  - `.sidebar`
  - `.dashboard-content`
  - `.stat-card`
  - `.recent-activity`

**Colores principales**:
- Verde azulado: `#2d7a7a`, `#4a9b9b`
- Gris oscuro: `#1a1a1a`, `#2d2d2d`
- Blanco/Gris claro: `#e0e0e0`, `#f1f1f1`

---

## 🚀 Comandos Principales

```bash
# Desarrollo
npm start              # Inicia servidor de desarrollo (puerto 4200)
ng serve              # Alternativa: inicia servidor de desarrollo

# Build
npm run build         # Compila para producción
ng build              # Alternativa: compila para producción

# Testing
npm test              # Ejecuta tests con Vitest
ng test               # Alternativa: ejecuta tests

# Watch
npm run watch         # Compila en modo watch

# SSR
npm run serve:ssr:terra-canada  # Ejecuta servidor SSR
```

---

## 📝 Notas Importantes

1. **Autenticación Mock**: El sistema de autenticación es simulado con credenciales hardcodeadas para desarrollo.

2. **SSR Habilitado**: El proyecto está configurado con Server-Side Rendering usando Express.

3. **Standalone Components**: Todos los componentes son standalone, sin módulos NgModule.

4. **Responsive Design**: La aplicación es completamente responsiva con media queries.

5. **Persistencia**: Tema e idioma se guardan en localStorage.

6. **RxJS**: Uso extensivo de Observables y operadores RxJS para programación reactiva.

7. **TypeScript Strict**: Configuración estricta de TypeScript para mayor seguridad de tipos.

---

## 📚 Recursos Adicionales

- [Documentación oficial de Angular](https://angular.dev)
- [PrimeNG Documentation](https://primeng.org)
- [RxJS Documentation](https://rxjs.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)

---

**Última actualización**: Diciembre 2025
**Versión del proyecto**: 0.0.0
**Versión de Angular**: 21.0.0
