import React from 'react';
import { SCHOOL_LOGOS } from '../../config/assets';
import { SCHOOL } from '../../config/school';
import { Action, CtaBand, Mark, PageHero, Row, SplitSection } from '../../components/ui/site';

const REASONS = [
  {
    title: 'A balanced education',
    text: 'English mastery and Quranic teaching are given equal care, by the same school, in the same day.',
  },
  {
    title: 'An early start',
    text: 'Children join at age 3½, so the foundations in language, number and values are laid early.',
  },
  {
    title: 'Modern classrooms',
    text: 'Smart classrooms, an LMS and ERP systems keep lessons current and parents informed.',
  },
  {
    title: 'Values that last',
    text: 'A nurturing, value-driven environment that raises responsible citizens, not only good students.',
  },
];

const About = () => {
  return (
    <>
      <PageHero
        eyebrow="About the school"
        title={
          <>
            Rooted in a village. <Mark>Raised for the world.</Mark>
          </>
        }
      >
        <p className="nl-lead">
          New Leaf School stands in Vettukad, Puthucode, in Palakkad district. Under the banner of
          Heavens Preschool, it carries children from kindergarten to high school with an education
          that joins English and the Quran.
        </p>
      </PageHero>

      <section className="nl-sec">
        <div className="nl-wrap flex flex-wrap items-center gap-x-20 gap-y-12">
          <div className="mx-auto max-w-[480px] flex-[1_1_340px]">
            <img
              src={SCHOOL_LOGOS.SCHOOL_HERO}
              alt="The New Leaf School building"
              className="block h-[clamp(360px,40vw,560px)] w-full rounded-b-[28px] rounded-t-full object-cover object-[12%_100%]"
            />
          </div>
          <div className="flex min-w-0 flex-[999_1_460px] flex-col gap-5">
            <h2 className="nl-h2">How we think about education.</h2>
            <p className="nl-lead">
              Our core work is a blend of English and Quranic education, supported by smart
              classrooms, a learning management system and school ERP tools. Technology is the
              platform. Moral values and essential skills are the point.
            </p>
            <p className="text-moss">
              We want every student to leave as a confident, capable person who contributes to the
              community they came from, and who can hold their own anywhere knowledge and skill are
              what count.
            </p>
            <blockquote className="mt-2 rounded-[20px] bg-ink px-7 py-6 font-heading text-2xl font-bold leading-tight text-white">
              “Read in the name of Lord who created.”
              <span className="mt-2 block font-body text-sm font-semibold tracking-[0.04em] text-zest">
                The words on our crest
              </span>
            </blockquote>
          </div>
        </div>
      </section>

      <section className="nl-sec bg-ink text-white">
        <div className="nl-wrap flex flex-col gap-11">
          <h2 className="nl-h2 max-w-[720px]">Why families choose New Leaf.</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
            {REASONS.map((reason) => (
              <div key={reason.title} className="flex flex-col gap-2.5 rounded-3xl bg-leaf-deep p-7">
                <h3 className="nl-h3 text-zest">{reason.title}</h3>
                <p className="text-mist">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SplitSection
        title="Vision, mission, objective."
        lead="The three statements every decision at the school is measured against."
      >
        <Row title="Vision" first>
          To provide an education that transforms students through rigorous coursework and an
          understanding of the needs of society and industry, and to collaborate with academic and
          research institutes around the world to strengthen education and research.
        </Row>
        <Row title="Mission">
          To spread the teachings of truth and values in the light of proper education, to promote
          value-based knowledge and social development, and to inculcate sincere love and respect
          for each and every individual.
        </Row>
        <Row title="Objective">
          To give children quality English and Quranic education from age 3½, instil strong moral
          values and essential skills, and use advanced technology to prepare each student to excel
          and to contribute to their community and beyond.
        </Row>
      </SplitSection>

      <section className="nl-sec bg-paper">
        <div className="nl-wrap flex flex-col gap-11">
          <div className="flex max-w-[680px] flex-col gap-3">
            <h2 className="nl-h2">
              {SCHOOL.leadership.length > 0 ? 'The people who lead the school.' : 'Who runs the school.'}
            </h2>
            {SCHOOL.leadership.length > 0 && (
              <p className="nl-lead">Parents should know who is responsible for their child's day.</p>
            )}
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
            {SCHOOL.leadership.map((person) => (
              <div key={person.name} className="flex flex-col gap-3.5 rounded-3xl bg-white p-5">
                {person.photo && (
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="h-[220px] w-full rounded-b-xl rounded-t-full object-cover"
                  />
                )}
                <h3 className="font-heading text-[1.375rem] font-extrabold">{person.name}</h3>
                <p className="-mt-2 text-moss-light">{person.role}</p>
              </div>
            ))}
            <div className="flex max-w-[520px] flex-col justify-center gap-4 rounded-3xl bg-white p-7">
              <img
                src={SCHOOL_LOGOS.HUMAN_CARE}
                alt="Run by Human Care Foundation"
                className="h-12 w-full max-w-[260px] object-contain object-left"
              />
              <p className="text-moss">
                New Leaf School and Heavens Preschool are both run by Human Care Foundation
                {SCHOOL.foundedYear ? `, which founded New Leaf in ${SCHOOL.foundedYear}` : ''}.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand
        title="The best way to know us is to visit."
        text="We are in Vettukad, Puthucode, and the office is open Monday to Saturday."
      >
        <Action to="/contact" variant="zest">
          Book a school visit
        </Action>
      </CtaBand>
    </>
  );
};

export default About;
