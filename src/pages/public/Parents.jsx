import React from 'react';
import { SCHOOL } from '../../config/school';
import { SITE } from '../../config/site';
import { Action, CtaBand, Mark, PageHero } from '../../components/ui/site';

const askOffice = (
  <>
    Ask the office on{' '}
    <a href={SITE.phoneHref} className="font-bold text-leaf underline hover:text-ink">
      {SITE.phoneDisplay}
    </a>
    .
  </>
);

const DarkRow = ({ label, value }) => (
  <div className="flex justify-between gap-4 border-t border-leaf-line py-3.5">
    <dt className="text-mist-dim">{label}</dt>
    <dd className="text-right font-bold">{value}</dd>
  </div>
);

const Parents = () => {
  const { timings, calendar, fees, transport, uniform, bookList, documents } = SCHOOL;

  return (
    <>
      <PageHero
        eyebrow="For parents"
        title={
          <>
            Everything you need, <Mark>in one place.</Mark>
          </>
        }
      >
        <p className="nl-lead">
          Timings, term dates, fees and transport. Marks, attendance and homework are on the parent
          portal.
        </p>
        <Action href={SITE.parentPortalHref}>Parent portal login</Action>
      </PageHero>

      <section id="timings" className="nl-sec scroll-mt-24">
        <div className="nl-wrap grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          <div className="flex flex-col gap-4 rounded-[28px] bg-ink p-6 text-white lg:p-10">
            <h2 className="font-heading text-[2rem] font-extrabold leading-tight">School timings</h2>
            <dl className="flex flex-col">
              {timings.preschool && <DarkRow label="Heavens Preschool" value={timings.preschool} />}
              {timings.school && <DarkRow label="New Leaf School" value={timings.school} />}
              <DarkRow label="Office" value={`${SITE.officeDays}, ${SITE.officeHours}`} />
              <DarkRow label="Sunday" value="Closed" />
            </dl>
          </div>
          <div className="flex flex-col gap-4 rounded-[28px] bg-paper p-6 lg:p-10">
            <h2 className="font-heading text-[2rem] font-extrabold leading-tight">
              Academic calendar{calendar.year ? ` ${calendar.year}` : ''}
            </h2>
            {calendar.items.length > 0 ? (
              <dl className="flex flex-col">
                {calendar.items.map((item) => (
                  <div key={item.label} className="flex justify-between gap-4 border-t border-rule py-3.5">
                    <dt className="text-moss">{item.label}</dt>
                    <dd className="text-right font-bold">{item.date}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="text-moss">
                Term dates, exams and holidays are shared with parents on the portal and through
                the office.
              </p>
            )}
            {calendar.pdf ? (
              <Action href={calendar.pdf} variant="outline" className="self-start">
                Download calendar (PDF)
              </Action>
            ) : (
              <Action to="/school-life#events" variant="outline" className="self-start">
                See upcoming events
              </Action>
            )}
          </div>
        </div>
      </section>

      <section id="fees" className="nl-sec scroll-mt-24 !pt-0">
        <div className="nl-wrap flex flex-wrap gap-x-20 gap-y-10">
          <div className="flex max-w-[420px] flex-[1_1_320px] flex-col gap-4">
            <h2 className="nl-h2">Fees.</h2>
            <p className="nl-lead">
              {fees.length > 0
                ? 'Published in full, so there are no surprises.'
                : 'The office shares the current fee structure for each class when you enquire.'}
            </p>
          </div>
          <div className="min-w-0 flex-[999_1_480px] overflow-x-auto">
            {fees.length > 0 ? (
              <table className="w-full min-w-[460px] border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-ink text-sm uppercase tracking-[0.08em]">
                    <th scope="col" className="py-3.5 pr-4">Stage</th>
                    <th scope="col" className="px-4 py-3.5">Admission fee</th>
                    <th scope="col" className="py-3.5 pl-4">Term fee</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((row) => (
                    <tr key={row.stage} className="border-b border-rule">
                      <th scope="row" className="py-[18px] pr-4 font-bold">{row.stage}</th>
                      <td className="px-4 py-[18px]">{row.admission}</td>
                      <td className="py-[18px] pl-4">{row.term}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="flex flex-wrap gap-3 border-t-2 border-ink pt-7">
                <Action href={SITE.whatsappHref}>Ask on WhatsApp</Action>
                <Action href={SITE.phoneHref} variant="outline">
                  Call {SITE.phoneDisplay}
                </Action>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="transport" className="nl-sec scroll-mt-24 bg-paper">
        <div className="nl-wrap grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-5">
          <div className="flex flex-col gap-2.5 rounded-3xl bg-white p-7">
            <h2 className="font-heading text-[1.625rem] font-extrabold">Transport</h2>
            <p className="text-moss">School buses run with experienced drivers and route management.</p>
            {transport.routes ? (
              <p className="font-semibold">Routes: {transport.routes}</p>
            ) : (
              <p className="text-moss">For routes and pick-up points: {askOffice}</p>
            )}
            {transport.fee && <p className="font-semibold">Bus fee: {transport.fee}</p>}
          </div>
          <div className="flex flex-col gap-2.5 rounded-3xl bg-white p-7">
            <h2 className="font-heading text-[1.625rem] font-extrabold">Uniform and books</h2>
            <p className="text-moss">What your child needs on the first day, and where to get it.</p>
            {uniform && <p className="font-semibold">{uniform}</p>}
            {bookList && <p className="font-semibold">{bookList}</p>}
            {!uniform && !bookList && (
              <p className="text-moss">The list for each class is given at admission. {askOffice}</p>
            )}
          </div>
          {documents.length > 0 && (
            <div className="flex flex-col gap-2.5 rounded-3xl bg-white p-7">
              <h2 className="font-heading text-[1.625rem] font-extrabold">School documents</h2>
              <p className="text-moss">Recognition and policy documents, open to every parent.</p>
              {documents.map((doc) => (
                <a key={doc.href} href={doc.href} className="font-bold text-leaf underline hover:text-ink">
                  {doc.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBand
        title="Need to reach a teacher?"
        text="Message the office and we will pass it to the right person the same day."
      >
        <Action href={SITE.whatsappHref} variant="zest">
          Chat on WhatsApp
        </Action>
        <Action href={SITE.phoneHref} variant="outline-white">
          Call {SITE.phoneDisplay}
        </Action>
      </CtaBand>
    </>
  );
};

export default Parents;
