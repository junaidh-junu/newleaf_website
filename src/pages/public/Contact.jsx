import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
    preferredContact: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // Netlify Forms handles form submission automatically when the form has the data-netlify attribute
      // This is a fallback for additional processing if needed
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        })
      });

      if (response.ok) {
        setSubmitMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: 'general',
          message: '',
          preferredContact: 'email'
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📞',
      title: 'Phone',
      details: '9495065324',
      subtext: 'Main Office: Mon-Sat, 9AM-4PM IST'
    },
    {
      icon: '✉️',
      title: 'Email',
      details: 'newleafschoolpkd@gmail.com',
      subtext: 'We respond within 24 hours'
    },
    {
      icon: '📍',
      title: 'Address',
      details: 'Vettukad, Puthucode (PO), Palakkad, Kerala, India - 678687',
      subtext: 'Under the banner of Heavens Pre-School'
    },
    {
      icon: '🕰️',
      title: 'Office Hours',
      details: 'Monday - Saturday: 9:00 AM - 4:00 PM IST',
      subtext: 'Closed on Sundays'
    }
  ];

  const departments = [
    {
      name: 'Admissions & Enrollment',
      email: 'newleafschoolpkd@gmail.com',
      phone: '9495065324',
      description: 'New student enrollment, school tours, admission requirements, and prospectus requests'
    },
    {
      name: 'Academic Department',
      email: 'newleafschoolpkd@gmail.com',
      phone: '9495065324',
      description: 'Curriculum questions, academic support, English & Quranic education programs'
    },
    {
      name: 'Administration Office',
      email: 'newleafschoolpkd@gmail.com',
      phone: '9495065324',
      description: 'General inquiries, fees, transportation, and administrative matters'
    },
    {
      name: 'Technology & LMS Support',
      email: 'newleafschoolpkd@gmail.com',
      phone: '9495065324',
      description: 'Smart classroom support, LMS access, ERP systems, and technical assistance'
    }
  ];

  const faqs = [
    {
      question: 'What are your admission requirements?',
      answer: 'We welcome students of all backgrounds. Requirements include completed application, previous school records, and a brief interview.'
    },
    {
      question: 'Do you offer financial aid or scholarships?',
      answer: 'Yes, we offer need-based financial aid and merit scholarships. Contact our Business Office for more information.'
    },
    {
      question: 'What is your student-to-teacher ratio?',
      answer: 'We maintain a 15:1 student-to-teacher ratio to ensure personalized attention for every student.'
    },
    {
      question: 'Do you provide after-school care?',
      answer: 'Yes, we offer after-school programs until 6:00 PM, including homework help, enrichment activities, and sports.'
    },
    {
      question: 'How can I schedule a school tour?',
      answer: 'You can schedule a tour by calling our Admissions Office or using the contact form below. Tours are available Monday through Friday.'
    },
    {
      question: 'What safety measures do you have in place?',
      answer: 'We have comprehensive safety protocols including secure entry systems, emergency procedures, and trained safety personnel.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We're here to help and answer any questions you might have about New Leaf School
          </p>
          <div className="flex items-center justify-center space-x-4">
            <div className="text-4xl">📞</div>
            <div className="text-4xl">✉️</div>
            <div className="text-4xl">📏</div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us - choose what works best for you
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{info.title}</h3>
                <p className="text-gray-700 font-medium mb-2">{info.details}</p>
                <p className="text-sm text-gray-500">{info.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                {/* Hidden field for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Honeypot field for spam protection */}
                <div className="hidden">
                  <input name="bot-field" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="admissions">Admissions</option>
                      <option value="academics">Academic Questions</option>
                      <option value="tours">School Tour Request</option>
                      <option value="support">Student Support</option>
                      <option value="billing">Billing & Payments</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Please tell us how we can help you..."
                  />
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleInputChange}
                        className="mr-2 text-teal-600"
                      />
                      Email
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleInputChange}
                        className="mr-2 text-teal-600"
                      />
                      Phone
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full mt-8 py-4 px-6 rounded-lg font-semibold transition-colors ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                      : 'bg-teal-600 text-white hover:bg-teal-700'
                  }`}
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Message'}
                </button>

                {submitMessage && (
                  <div className={`mt-4 p-4 rounded-lg ${
                    submitMessage.includes('Thank you') 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {submitMessage}
                  </div>
                )}
              </form>
            </div>

            {/* Map and Additional Info */}
            <div>
              {/* Map Placeholder */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                <div className="h-64 bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <p className="text-gray-600">
                      Interactive map would be embedded here<br />
                      (Google Maps, MapBox, etc.)
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Our Campus</h3>
                  <p className="text-gray-600 mb-4">
                    Vettukad, Puthucode (PO)<br />
                    Palakkad, Kerala, India - 678687
                  </p>
                  <div className="space-y-2">
                    <a 
                      href="https://maps.app.goo.gl/NcFAqYgNrxWtUiZa7" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-800 font-medium block"
                    >
                      Get Directions →
                    </a>
                    <a 
                      href="https://share.google/PF8PCOunv7kNpPihA" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-teal-600 hover:text-teal-800 font-medium block"
                    >
                      View School Details →
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media & Additional Info */}
              <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-primary-800 mb-2">Stay Connected</h3>
                <p className="text-primary-700 mb-4">
                  Follow us on social media for updates and announcements:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-primary-600">
                    <span className="mr-2">📱</span>
                    <span className="text-primary-700">Instagram: @newleafacademy_2016</span>
                  </div>
                  <div className="flex items-center text-primary-600">
                    <span className="mr-2">📞</span>
                    <span className="text-primary-700">Emergency: 9495065324</span>
                  </div>
                </div>
                <p className="text-primary-600 text-sm mt-3">
                  Office hours: Monday - Saturday, 9:00 AM to 4:00 PM IST
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Department Contacts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out to the right department for faster assistance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{dept.name}</h3>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-teal-600">
                    <span className="mr-2">✉️</span>
                    <a href={`mailto:${dept.email}`} className="hover:underline">{dept.email}</a>
                  </div>
                  <div className="flex items-center text-teal-600">
                    <span className="mr-2">📞</span>
                    <a href={`tel:${dept.phone}`} className="hover:underline">{dept.phone}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about New Leaf School
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the next step in your child's educational journey. Schedule a tour or apply today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Tour
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;