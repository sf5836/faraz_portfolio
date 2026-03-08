import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiCheckCircle, FiGithub } from 'react-icons/fi'
import { personal } from '../../data/portfolioData'
import { EMAIL_CONFIG } from '../../utils/emailConfig'
import { fadeInLeft, fadeInRight } from '../../utils/animations'

function FloatingInput({ label, name, type = 'text', value, onChange, onBlur, error, textarea }) {
  const hasValue = value && value.length > 0
  const Tag = textarea ? 'textarea' : 'input'

  return (
    <div className="relative">
      <Tag
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        rows={textarea ? 5 : undefined}
        className={`w-full bg-bg-elevated border rounded-xl px-4 pt-6 pb-3 text-white caret-accent-cyan outline-none transition-all duration-200 resize-none ${
          error
            ? 'border-red-500/60 focus:border-red-500/80'
            : 'border-white/[0.08] focus:border-accent-cyan/40 focus:shadow-[0_0_0_3px_rgba(0,245,196,0.08)]'
        }`}
      />
      <label
        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
          hasValue
            ? 'top-1.5 text-xs text-accent-cyan'
            : 'top-4 text-base text-text-muted'
        }`}
      >
        {label}
      </label>
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [copied, setCopied] = useState(false)

  const validateForm = () => {
    const errs = {}
    if (!formData.name.trim()) errs.name = 'This field is required'
    if (!formData.email.trim()) {
      errs.email = 'This field is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email'
    }
    if (!formData.subject.trim()) errs.subject = 'This field is required'
    if (!formData.message.trim()) errs.message = 'This field is required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    if (!value.trim()) {
      setErrors((prev) => ({ ...prev, [name]: 'This field is required' }))
    } else if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setErrors((prev) => ({ ...prev, [name]: 'Please enter a valid email' }))
    }
  }

  const handleSubmit = async () => {
    if (!validateForm()) return
    setStatus('loading')

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: EMAIL_CONFIG.TO_EMAIL,
      reply_to: formData.email,
    }

    try {
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAIL_CONFIG.PUBLIC_KEY
      )
      setStatus('success')
      toast.success("Message sent! I'll reply within 24 hours. 🚀", {
        style: { background: '#13131a', color: '#e8e8f0', border: '1px solid rgba(0,245,196,0.2)' },
        iconTheme: { primary: '#00f5c4', secondary: '#0a0a0c' },
        duration: 5000,
      })
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' })
        setStatus('idle')
      }, 3000)
    } catch {
      setStatus('error')
      toast.error('Oops! Something went wrong. Please try emailing directly.', {
        style: { background: '#13131a', color: '#e8e8f0', border: '1px solid rgba(244,63,142,0.2)' },
      })
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const contactItems = [
    { icon: FiMail, label: 'Email', value: personal.email, action: copyEmail, actionLabel: copied ? 'Copied! ✓' : 'Copy' },
    { icon: FiPhone, label: 'Phone', value: personal.phone },
    { icon: FiMapPin, label: 'Location', value: 'Gojra, Punjab, Pakistan 🇵🇰' },
    { icon: FiLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/dawoodahmad777', href: personal.linkedin },
    { icon: FiCheckCircle, label: 'Status', value: 'Open to Internships & Projects', isStatus: true },
  ]

  const buttonText = {
    idle: 'Send Message 🚀',
    loading: 'Sending...',
    success: 'Sent Successfully! ✓',
    error: 'Failed to send. Try again.',
  }

  const buttonBg = {
    idle: 'linear-gradient(135deg, #00f5c4, #a855f7)',
    loading: 'linear-gradient(135deg, #00f5c4, #a855f7)',
    success: '#22c55e',
    error: '#ef4444',
  }

  return (
    <section id="contact" className="section-pad">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs text-accent-cyan tracking-[0.2em]">
            06 / CONTACT
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold text-white mt-3 leading-tight">
            Let's Build<br />
            Something <span className="gradient-text">Incredible</span>
          </h2>
          <p className="text-text-muted font-body mt-4">
            Have an idea? I'd love to hear it. 👋
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — Contact Info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="space-y-0">
              {contactItems.map(({ icon: Icon, label, value, action, actionLabel, href, isStatus }, i) => (
                <div
                  key={label}
                  className="flex items-start gap-4 py-5 border-b border-white/5"
                >
                  <Icon
                    size={24}
                    className={isStatus ? 'text-green-400 mt-0.5' : 'text-accent-cyan mt-0.5'}
                  />
                  <div className="flex-1">
                    <span className="font-mono text-xs text-text-muted uppercase block">
                      {label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-white hover:text-accent-cyan transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="font-body text-white flex items-center gap-2">
                        {value}
                        {isStatus && (
                          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        )}
                      </span>
                    )}
                  </div>
                  {action && (
                    <button
                      onClick={action}
                      className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded cursor-pointer hover:bg-accent-cyan/20 transition-colors mt-3"
                    >
                      {actionLabel}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex gap-3 mt-8">
              {[
                { icon: FiGithub, href: personal.github },
                { icon: FiLinkedin, href: personal.linkedin },
                { icon: FiMail, href: `mailto:${personal.email}` },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="w-[50px] h-[50px] rounded-full border border-white/[0.08] flex items-center justify-center text-text-muted hover:border-accent-cyan/40 hover:text-accent-cyan transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-5"
          >
            <FloatingInput
              label="Your Name *"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name}
            />
            <FloatingInput
              label="Your Email *"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
            />
            <FloatingInput
              label="Subject *"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.subject}
            />
            <FloatingInput
              label="Your Message *"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.message}
              textarea
            />

            <button
              onClick={handleSubmit}
              disabled={status === 'loading'}
              className="w-full py-4 rounded-xl font-semibold text-bg-primary transition-all duration-300 hover:brightness-110 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
              style={{ background: buttonBg[status] }}
            >
              {status === 'loading' && (
                <span className="inline-block w-4 h-4 border-2 border-bg-primary/30 border-t-bg-primary rounded-full animate-spin mr-2 align-middle" />
              )}
              {buttonText[status]}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
