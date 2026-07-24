export class DownloadService {
  static downloadPDF(): void {
    const link = document.createElement('a')
    link.href = '/Alvaro_Hernandez_Gil_CV_ES.pdf'
    link.download = 'Alvaro_Hernandez_Gil_CV_ES.pdf'
    link.click()
  }

  static downloadHTML(): void {
    const link = document.createElement('a')
    link.href = '/cv-alvaro-hernandez.html'
    link.download = 'cv-alvaro-hernandez.html'
    link.click()
  }

  static openHTML(): void {
    window.open('/cv-alvaro-hernandez.html', '_blank')
  }
}
