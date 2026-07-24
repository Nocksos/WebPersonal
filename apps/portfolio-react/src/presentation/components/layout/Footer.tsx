export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-outline-variant bg-surface-container-lowest">
      <div className="flex flex-col md:flex-row justify-between items-center py-8 px-5 md:px-16 max-w-[1200px] mx-auto gap-6">
        <div>
          <span className="font-grotesk font-bold text-secondary text-base">ÁLVARO.DEV</span>
          <p className="font-mono text-[10px] text-on-surface-variant mt-1">
            © {currentYear} · CLOUD ARCHITECTURE & LEADERSHIP
          </p>
        </div>
        <div className="flex gap-8">
          <a
            href="https://github.com/alvarohernandezgil"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-on-surface-variant hover:text-secondary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/alvarohernandezgil/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-on-surface-variant hover:text-secondary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:alvarohernandezgil@gmail.com"
            className="font-mono text-xs text-on-surface-variant hover:text-secondary transition-colors"
          >
            contacto
          </a>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <span className="font-mono text-[10px] text-on-surface-variant tracking-tighter">
            STATUS: TODOS LOS SISTEMAS OPERATIVOS
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
