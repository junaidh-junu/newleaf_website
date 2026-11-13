import React, { useState } from 'react';
import { SITE } from '../../config/site';
import { Mark, PageHero } from '../../components/ui/site';

const EMPTY_FORM = {
  name: '',
  phone: '',
  email: '',
  child: '',
  dob: '',
  stage: 'Heavens Preschool',
  message: '',
};

const STAGES = ['Heavens Preschool', 'Primary', 'Upper primary', 'High school', 'General question'];

const STEPS = [
  {
    title: 'Enquire',
    text: 'Send the form below or call us. We will answer your questions and agree a time to visit.',
  },
  {
    title: 'Visit',
    text: 'See the classrooms, meet the teachers and bring your child along for a short, friendly conversation.',
  },
  {
    title: 'Enrol',
    text: 'Complete the application with previous school records, if any. The office will confirm fees and documents.',
  },
];

const FAQS = [
  {
    q: 'At what age can my child join?',
    a: 'From age 3½, starting in Heavens Preschool. Older children can join New Leaf School at the stage that fits them, up to high school.',
  },
  {
    q: 'What language is the school taught in?',
    a: 'English is the medium of instruction for academic subjects. Quranic education runs alongside it every day.',
  },
  {
    q: 'Is school transport available?',
    a: 'Yes. The school runs its own transport with experienced drivers. Ask the office about the route nearest you.',
  },
  {
    q: 'How is my child kept safe?',
    a: 'The campus is covered by CCTV and supervised by trained staff, with first-aid facilities, filtered drinking water and child-friendly washrooms.',
  },
  {
    q: 'What are the fees?',
    a: 'The office will share the current fee structure for your child’s class when you enquire.',
  },
];

const labelClass = 'text-[0.97rem] font-semibold';
const asideHeading = 'text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-zest';

const Contact = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contact', ...formData }).toString(),
      });
      if (!response.ok) throw new Error('Form submission failed');
      setFormData(EMPTY_FORM);
      setStatus('sent');
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Admissions and contact"
        title={
          <>
            Start with <Mark>a visit.</Mark>
          </>
        }
      >
        <p className="nl-lead">
          Tell us about your child and when you would like to come. We reply within 24 hours, or you
          can call the office directly.
        </p>
      </PageHero>

      <section className="nl-pad py-14 lg:py-24">
        <div className="nl-wrap flex flex-col gap-9">
          <h2 className="nl-h2">How admission works.</h2>
          <ol className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
            {STEPS.map((step, index) => (
              <li key={step.title} className="flex flex-col gap-2 border-t-2 border-ink pt-5">
                <span className="font-heading text-[2.75rem] font-extrabold leading-none text-leaf">
                  {index + 1}
                </span>
                <h3 className="nl-h3">{step.title}</h3>
                <p className="text-moss">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="enquire" className="nl-pad scroll-mt-24 pb-16 lg:pb-28">
        <div className="nl-wrap flex flex-wrap gap-6">
          <div className="min-w-0 flex-[999_1_520px] rounded-[28px] bg-paper p-6 lg:p-11">
            {status === 'sent' ? (
              <div role="status" className="flex flex-col items-start gap-4 py-6">
                <h2 className="font-heading text-[2rem] font-extrabold leading-tight">
                  Thank you. Your enquiry is with the office.
                </h2>
                <p className="nl-lead">
                  We will call or email you within 24 hours, {SITE.officeDays}.
                </p>
                <button type="button" onClick={() => setStatus('idle')} className="nl-btn nl-btn-outline">
                  Send another
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="hidden">
                  <label>
                    Leave this empty <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>
                <h2 className="font-heading text-[2rem] font-extrabold leading-tight">Admission enquiry</h2>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="f-name" className={labelClass}>Parent's name</label>
                    <input id="f-name" name="name" type="text" required autoComplete="name" value={formData.name} onChange={handleChange} className="nl-field" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="f-phone" className={labelClass}>Phone number</label>
                    <input id="f-phone" name="phone" type="tel" required autoComplete="tel" value={formData.phone} onChange={handleChange} className="nl-field" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="f-email" className={labelClass}>
                      Email <span className="font-normal text-moss-light">(optional)</span>
                    </label>
                    <input id="f-email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} className="nl-field" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="f-child" className={labelClass}>Child's name</label>
                    <input id="f-child" name="child" type="text" required value={formData.child} onChange={handleChange} className="nl-field" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="f-dob" className={labelClass}>Child's date of birth</label>
                    <input id="f-dob" name="dob" type="date" required value={formData.dob} onChange={handleChange} className="nl-field" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="f-stage" className={labelClass}>Admission for</label>
                    <select id="f-stage" name="stage" value={formData.stage} onChange={handleChange} className="nl-field">
                      {STAGES.map((stage) => (
                        <option key={stage}>{stage}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="f-msg" className={labelClass}>Your message</label>
                  <textarea id="f-msg" name="message" rows={5} required value={formData.message} onChange={handleChange} className="nl-field resize-y py-3.5 leading-normal" />
                  <span className="text-[0.9375rem] text-moss-light">
                    A day that suits you for a visit is helpful.
                  </span>
                </div>
                {status === 'error' && (
                  <p role="alert" className="rounded-xl border-[1.5px] border-[#A4262C] bg-white px-4 py-3 text-[#8A1C22]">
                    Your enquiry could not be sent. Please try again, or call {SITE.phoneDisplay}.
                  </p>
                )}
                <button type="submit" disabled={status === 'sending'} className="nl-btn nl-btn-green self-start disabled:opacity-60">
                  {status === 'sending' ? 'Sending…' : 'Send enquiry'}
                </button>
              </form>
            )}
          </div>

          <aside className="flex flex-[1_1_320px] flex-col gap-7 rounded-[28px] bg-ink p-6 text-white lg:p-11">
            <div className="flex flex-col items-start gap-1.5">
              <h2 className={asideHeading}>Call</h2>
              <a href={SITE.phoneHref} className="font-heading text-3xl font-extrabold leading-tight hover:text-zest">
                {SITE.phoneDisplay}
              </a>
              <p className="text-mist-dim">
                {SITE.officeDays}, {SITE.officeHours}. Closed Sundays.
              </p>
              <a href={SITE.whatsappHref} className="nl-btn nl-btn-white mt-2.5 min-h-[48px]">
                Chat on WhatsApp
              </a>
            </div>
            <div className="flex flex-col items-start gap-1.5">
              <h2 className={asideHeading}>Email</h2>
              <a href={`mailto:${SITE.email}`} className="font-semibold underline [overflow-wrap:anywhere] hover:text-zest">
                {SITE.email}
              </a>
            </div>
            <div className="flex flex-col items-start gap-1.5">
              <h2 className={asideHeading}>Visit</h2>
              <p className="text-lg leading-normal">
                New Leaf School
                <br />
                {SITE.addressLines[0]}
                <br />
                {SITE.addressLines[1]}
              </p>
              <a href={SITE.mapsHref} target="_blank" rel="noreferrer" className="nl-btn nl-btn-zest mt-2.5 min-h-[48px]">
                Get directions
              </a>
            </div>
            <div className="flex flex-col items-start gap-1.5">
              <h2 className={asideHeading}>Follow</h2>
              <a href={SITE.instagramHref} className="text-lg font-semibold underline hover:text-zest">
                Instagram {SITE.instagramHandle}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="nl-sec bg-paper">
        <div className="nl-wrap flex flex-wrap gap-x-20 gap-y-10">
          <div className="flex max-w-[400px] flex-[1_1_300px] flex-col gap-4">
            <h2 className="nl-h2">Questions parents ask.</h2>
            <p className="nl-lead">If yours is not here, call the office.</p>
          </div>
          <div className="flex min-w-0 flex-[999_1_480px] flex-col border-b border-rule">
            {FAQS.map((faq, index) => (
              <details
                key={faq.q}
                open={index === 0}
                className={`py-2 ${index === 0 ? 'border-t-2 border-ink' : 'border-t border-rule'}`}
              >
                <summary className="flex min-h-[52px] cursor-pointer items-center font-heading text-[1.375rem] font-bold">
                  {faq.q}
                </summary>
                <p className="mb-4 max-w-[640px] text-moss">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
