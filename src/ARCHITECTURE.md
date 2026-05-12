# Arquitectura DDD - Portafolio Álvaro Hernández

## Estructura de Carpetas

```
src/
├── domain/                    # Capa de Dominio (Lógica de Negocio Pura)
│   ├── entities/              # Entidades de negocio (Portfolio, Project, Experience)
│   └── services/              # Servicios de dominio (lógica pura sin dependencias)
│
├── application/               # Capa de Aplicación (Casos de Uso)
│   ├── cv/                    # Servicios de aplicación para CV
│   └── portfolio/             # Servicios de aplicación para Portfolio
│
├── infrastructure/            # Capa de Infraestructura (Detalles Técnicos)
│   ├── config/                # Configuración de la aplicación
│   └── download/              # Servicios de descarga (PDF, HTML)
│
├── presentation/              # Capa de Presentación (UI)
│   ├── components/            # Componentes reutilizables
│   ├── pages/                 # Páginas principales
│   ├── styles/                # CSS y estilos
│   └── assets/                # Imágenes, íconos
│
├── shared/                    # Código Compartido
│   └── utils/                 # Utilidades genéricas
│
└── index.html                 # Entry point
```

## Principios Aplicados

### Domain-Driven Design (DDD)
- **Domain**: Contiene la lógica de negocio pura sin dependencias externas
- **Application**: Orquesta el dominio para casos de uso específicos
- **Infrastructure**: Implementa detalles técnicos (API, descargas, BD)
- **Presentation**: Interfaz de usuario

### Arquitectura Limpia
- **Independencia de Frameworks**: El dominio no depende de frameworks
- **Testable**: Cada capa puede testearse independientemente
- **Mantenible**: Separación clara de responsabilidades
- **Escalable**: Fácil agregar nuevas funcionalidades

## Cómo Navegar

1. **Si buscas lógica de negocio**: Mira en `domain/`
2. **Si buscas funcionalidad de usuario**: Mira en `application/`
3. **Si buscas cómo se descarga**: Mira en `infrastructure/download/`
4. **Si buscas componentes UI**: Mira en `presentation/`
5. **Si buscas utilidades**: Mira en `shared/`

## CV Descargable

El CV está disponible en dos formatos:
El CV está disponible en dos formatos:

- **PDF**: `src/presentation/assets/Alvaro_Hernandez_Gil_CV_ES.pdf` (moved into presentation assets)
- **HTML**: `presentation/pages/cv-alvaro-hernandez.html`

Las descargas y apertura de ambos formatos están gestionadas por `DownloadService` en `src/infrastructure/download/download-service.js`,
que usa rutas centralizadas definidas en `src/infrastructure/config/app-config.js` (`AppConfig.cv`).

Nota: `src/portfolio.html` carga estos servicios como scripts globales (no módulos) y enlaza los botones del UI a los métodos `DownloadService.downloadPDF()` y `DownloadService.downloadHTML()`.
Esto evita bloqueos por política de mismo origen al abrir `portfolio.html` directamente desde `file://` en navegadores que restringen importaciones de módulos locales.
