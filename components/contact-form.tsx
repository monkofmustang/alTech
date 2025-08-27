"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      // Show thank you message immediately
      toast.success(
        <div className="space-y-2">
          <p className="font-semibold">Thank you for reaching out!</p>
          <p className="text-sm">We've received your message and will get back to you within 24 hours.</p>
        </div>,
        {
          duration: 5000,
          position: "top-center",
        }
      )

      // Set success state
      setIsSuccess(true)

      // Clear the form fields by resetting the state
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })

      // Submit to Google Forms in the background
      const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdjLbUFRrhnXJFt66z8pxnJFLTi2PCyKTr8RB3i1AdeCGplOA/formResponse"
      const formDataToSubmit = new URLSearchParams()

      formDataToSubmit.append("entry.1690474917", data.get("firstName") as string)
      formDataToSubmit.append("entry.59678301", data.get("lastName") as string)
      formDataToSubmit.append("entry.1742911253", data.get("email") as string)
      formDataToSubmit.append("entry.1468134182", data.get("phone") as string)
      formDataToSubmit.append("entry.1187525200", data.get("company") as string)
      formDataToSubmit.append("entry.603664790", data.get("message") as string)

      // Submit to Google Forms
      fetch(formUrl, {
        method: "POST",
        body: formDataToSubmit,
        mode: "no-cors",
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }).catch(error => {
        console.error('Form submission error:', error)
      })

    } catch (error) {
      console.error('Form submission error:', error)
      toast.error(
        <div className="space-y-2">
          <p className="font-semibold">Oops! Something went wrong</p>
          <p className="text-sm">Please try again or contact us directly via email or phone.</p>
        </div>,
        {
          duration: 5000,
          position: "top-center",
        }
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  if (isSuccess) {
    return (
      <div className="text-center py-8 sm:py-12">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Message Sent Successfully!</h3>
        <p className="text-sm sm:text-base text-foreground/80 mb-6 sm:mb-8 px-4">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <Button
          onClick={() => setIsSuccess(false)}
          variant="outline"
          className="rounded-full touch-manipulation px-6 py-2 sm:px-8 sm:py-3"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName" className="text-sm sm:text-base">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            placeholder="John"
            className="text-sm sm:text-base py-2 sm:py-3 touch-manipulation"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName" className="text-sm sm:text-base">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            placeholder="Doe"
            className="text-sm sm:text-base py-2 sm:py-3 touch-manipulation"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm sm:text-base">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@example.com"
            className="text-sm sm:text-base py-2 sm:py-3 touch-manipulation"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm sm:text-base">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+1 (555) 000-0000"
            className="text-sm sm:text-base py-2 sm:py-3 touch-manipulation"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company" className="text-sm sm:text-base">Company</Label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your Company Name"
          className="text-sm sm:text-base py-2 sm:py-3 touch-manipulation"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm sm:text-base">Message</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Tell us about your project..."
          className="min-h-[120px] sm:min-h-[150px] text-sm sm:text-base py-2 sm:py-3 touch-manipulation resize-y"
        />
      </div>

      <Button type="submit" className="w-full py-3 sm:py-4 text-base sm:text-lg touch-manipulation" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}