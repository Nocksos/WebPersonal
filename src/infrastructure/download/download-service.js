/**
 * Download Service
 * Gestiona descargas de CV en diferentes formatos (PDF, HTML)
 * Implementado como global `window.DownloadService` para compatibilidad local (file://)
 */

class DownloadServiceClass {
  /**
   * Descarga CV en formato PDF
   * @param {string} filename - Nombre del archivo PDF
   */
  static downloadPDF(filename = 'Alvaro_Hernandez_Gil_CV_ES.pdf') {
    const link = document.createElement('a');
    // Usa la ruta centralizada en window.AppConfig
    link.href = (window.AppConfig && window.AppConfig.cv && window.AppConfig.cv.pdf) ? window.AppConfig.cv.pdf : `presentation/assets/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /**
   * Descarga CV en formato HTML
   * @param {string} filename - Nombre del archivo HTML
   */
  static downloadHTML(filename = 'cv-alvaro-hernandez.html') {
    const link = document.createElement('a');
    link.href = (window.AppConfig && window.AppConfig.cv && window.AppConfig.cv.html) ? window.AppConfig.cv.html : `presentation/pages/${filename}`;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  /**
   * Abre CV en nueva pestaña (sin descargar)
   * @param {string} format - 'pdf' o 'html'
   */
  static openCVInNewTab(format = 'html') {
    if (format === 'pdf') {
      window.open((window.AppConfig && window.AppConfig.cv && window.AppConfig.cv.pdf) ? window.AppConfig.cv.pdf : `presentation/assets/Alvaro_Hernandez_Gil_CV_ES.pdf`, '_blank');
    } else {
      window.open((window.AppConfig && window.AppConfig.cv && window.AppConfig.cv.html) ? window.AppConfig.cv.html : `presentation/pages/cv-alvaro-hernandez.html`, '_blank');
    }
  }

  /**
   * Obtiene URL del CV
   * @param {string} format - 'pdf' o 'html'
   * @returns {string} URL del CV
   */
  static getCVUrl(format = 'html') {
    if (window.AppConfig && window.AppConfig.cv) return window.AppConfig.cv[format] || window.AppConfig.cv.html;
    return (format === 'pdf') ? `presentation/assets/Alvaro_Hernandez_Gil_CV_ES.pdf` : `presentation/pages/cv-alvaro-hernandez.html`;
  }
}

// Expose global
window.DownloadService = DownloadServiceClass;
