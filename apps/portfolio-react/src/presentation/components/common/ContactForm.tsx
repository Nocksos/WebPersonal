import { useState } from 'react'
import { ContactService, contactFormSchema } from '@/infrastructure/services/ContactService'

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    const formData = { name, email, subject, message }
    const result = contactFormSchema.safeParse(formData)

    if (!result.success) {
      const fieldErrors: { [key: string]: string } = {}
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          fieldErrors[issue.path[0].toString()] = issue.message
        }
      })
      setErrors(fieldErrors)
      return
    }

    setStatus('loading')
    try {
      await ContactService.sendForm(formData)
      setStatus('success')
      setName('')
      setEmail('')
      setSubject('')
      setMessage('')
      setTimeout(() => setStatus('idle'), 3000)
    } catch (error) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 px-5 md:px-16 max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column - Contact Details */}
        <div className="lg:col-span-5">
          <span className="font-mono text-xs text-secondary block mb-2 tracking-widest">
            {'// CONTACTO'}
          </span>
          <h2 className="font-grotesk font-semibold text-3xl md:text-4xl text-on-surface mb-4">
            Hablemos.
          </h2>
          <p className="font-geist text-sm text-on-surface-variant leading-relaxed mb-8">
            Disponible para proyectos freelance, posiciones a tiempo completo o simplemente charlar
            sobre tecnología. La respuesta media es &lt;24h.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:alvarohernandezgil@gmail.com"
              className="flex items-center gap-3 font-mono text-sm text-on-surface-variant hover:text-primary transition-colors group"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-primary"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              alvarohernandezgil@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/alvarohernandezgil/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-mono text-sm text-on-surface-variant hover:text-primary transition-colors group"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-primary"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              linkedin.com/in/alvarohernandezgil
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-mono text-sm text-on-surface-variant hover:text-primary transition-colors group"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-primary"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              github.com/alvarohernandezgil
            </a>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="bg-surface-container p-8 rounded-sm border border-outline-variant"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <label className="font-mono text-[10px] text-on-surface-variant tracking-widest block mb-2">
                  NOMBRE
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                  placeholder="Tu nombre"
                />
                {errors.name && (
                  <span className="text-red-400 text-[10px] font-mono mt-1 block">
                    {errors.name}
                  </span>
                )}
              </div>
              <div>
                <label className="font-mono text-[10px] text-on-surface-variant tracking-widest block mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <span className="text-red-400 text-[10px] font-mono mt-1 block">
                    {errors.email}
                  </span>
                )}
              </div>
            </div>
            <div className="mb-6">
              <label className="font-mono text-[10px] text-on-surface-variant tracking-widest block mb-2">
                ASUNTO
              </label>
              <input
                type="text"
                required
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="form-input"
                placeholder="¿De qué quieres hablar?"
              />
              {errors.subject && (
                <span className="text-red-400 text-[10px] font-mono mt-1 block">
                  {errors.subject}
                </span>
              )}
            </div>
            <div className="mb-8">
              <label className="font-mono text-[10px] text-on-surface-variant tracking-widest block mb-2">
                MENSAJE
              </label>
              <textarea
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="form-input resize-none"
                placeholder="Tu mensaje aquí..."
              />
              {errors.message && (
                <span className="text-red-400 text-[10px] font-mono mt-1 block">
                  {errors.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full grad-btn text-on-primary py-3.5 font-mono text-xs font-bold rounded-sm glow-btn hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              {status === 'loading' && (
                <svg
                  className="animate-spin h-4 w-4 text-on-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              )}
              {status === 'idle' && 'ENVIAR_MENSAJE →'}
              {status === 'loading' && 'ENVIANDO...'}
              {status === 'success' && '¡MENSAJE ENVIADO CON ÉXITO! ✓'}
              {status === 'error' && 'ERROR AL ENVIAR EL MENSAJE ✗'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
