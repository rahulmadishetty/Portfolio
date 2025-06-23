import { useRef, useState } from 'react'
import emailjs from 'emailjs-com'

export default function Contact() {
  const formRef = useRef(null)
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [statusMessage, setStatusMessage] = useState('')
  const [isSending, setIsSending] = useState(false)

  // Grab env variables from Vite's import.meta.env
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  // Validate form fields
  const validateForm = () => {
    let valid = true
    let tempErrors = {}

    if (!formData.from_name) {
      tempErrors.from_name = 'Name is required'
      valid = false
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.from_email || !emailRegex.test(formData.from_email)) {
      tempErrors.from_email = 'Valid email is required'
      valid = false
    }

    if (!formData.message) {
      tempErrors.message = 'Message is required'
      valid = false
    }

    setErrors(tempErrors)
    return valid
  }

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Handle form submission via EmailJS
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSending(true)
    setStatusMessage('')

    // Use emailjs.sendForm(...) to send the form data
    emailjs
      .sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(
        (result) => {
          console.log('EmailJS Result:', result.text)
          setStatusMessage("Thanks for your message! I'll get back to you soon.")
          setIsSending(false)
          // Reset form fields
          setFormData({ from_name: '', from_email: '', message: '' })
        },
        (error) => {
          console.error('EmailJS Error:', error.text)
          setStatusMessage('Something went wrong. Please try again later.')
          setIsSending(false)
        }
      )
  }

  return (
    <section id="contact" className="bg-accentlightest text-black py-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
      <div className="max-w-xl mx-auto">
        <form 
          ref={formRef} 
          onSubmit={handleSubmit} 
          className="space-y-4 bg-neutral-300 p-6 rounded-lg shadow"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="from_name">
              Name
            </label>
            <input
              className="w-full p-2 rounded bg-white border border-gray-600 text-black 
                         focus:outline-none focus:ring-1 focus:ring-secondary"
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Your Name"
            />
            {errors.from_name && <p className="text-red-500 text-xs mt-1">{errors.from_name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="from_email">
              Email
            </label>
            <input
              className="w-full p-2 rounded bg-white border border-gray-600 text-black 
                         focus:outline-none focus:ring-1 focus:ring-secondary"
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
            {errors.from_email && <p className="text-red-500 text-xs mt-1">{errors.from_email}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full p-2 rounded bg-white border border-gray-600 text-black 
                         focus:outline-none focus:ring-1 focus:ring-secondary"
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSending}
            className="w-full p-2 rounded-md bg-accentlight text-black font-medium 
                       hover:bg-accent transition-colors focus:outline-none"
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>

          {/* Status Message */}
          {statusMessage && (
            <p className="text-sm text-center mt-4 text-gray-300">
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}