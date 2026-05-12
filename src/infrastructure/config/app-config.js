/**
 * Configuration Module
 * Centraliza configuración de rutas y recursos
 * Nota: exportado como global `window.AppConfig` para compatibilidad con `file://` (evita bloqueos CORS al usar ES modules localmente)
 */

window.AppConfig = {
  // URLs de CV
  cv: {
    pdf: 'presentation/assets/Alvaro_Hernandez_Gil_CV_ES.pdf',
    html: 'presentation/pages/cv-alvaro-hernandez.html'
  },

  // Información del Portfolio
  portfolio: {
    name: 'ÁLVARO.DEV',
    title: 'Cloud Architect & Tech Lead Portfolio',
    author: 'Álvaro Hernández Gil',
    email: 'alvarohernandezgil@gmail.com'
  },

  // Estadísticas
  stats: {
    yearsExperience: 15,
    projects: 50,
    technologies: 25
  },

  // Redes sociales (actualizar con enlaces reales)
  social: {
    linkedin: 'https://linkedin.com/in/alvarohernandezgil',
    github: 'https://github.com/alvarohernandez'
  }
};
/**
 * Helper global: getCVUrl(format)
 */
window.getCVUrl = function(format = 'html') {
  return window.AppConfig.cv[format] || window.AppConfig.cv.html;
};

/**
 * Helper global: getPortfolioInfo()
 */
window.getPortfolioInfo = function() {
  return window.AppConfig.portfolio;
};
