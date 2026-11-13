import React from 'react';
import { Link } from 'react-router-dom';
import { SCHOOL_LOGOS } from '../../config/assets';
import { SITE } from '../../config/site';
import { Action, CtaBand, Mark, Row, SplitSection, VisitActions } from '../../components/ui/site';

const GLANCE = [
  { title: 'Age 3½', text: 'Admission starts here' },
  { title: 'KG to High School', text: 'One continuous journey' },
  { title: 'English medium', text: 'With daily Quranic study' },
  { title: 'Smart classrooms', text: 'Lessons and progress on our LMS' },
];

const CAMPUS = [
  {
    title: 'Learn',
    items: [
      ['Smart classrooms', 'connected to our LMS and ERP'],
      ['Computer lab', 'with high-speed internet'],
      ['Library', 'with books, digital resources and quiet study space'],
    ],
  },
  {
    title: 'Reflect',
    items: [
      ['Prayer areas', 'set aside for Quranic education'],
      ['Art and abacus rooms', 'for creativity and focus'],
    ],
  },
  {
    title: 'Play',
    items: [
      ['Playground and indoor sports', 'including karate training'],
      ["Students' garden", 'tended by the children themselves'],
    ],
  },
  {
    title: 'Stay safe',
    items: [
      ['CCTV and staff supervision', 'across the campus'],
      ['First aid, filtered water', 'and child-friendly washrooms'],
      ['School transport', 'with experienced drivers'],
    ],
  },
];

const quickLink =
  'inline-flex min-h-[48px] items-center rounded-full bg-paper px-5 font-semibold text-ink transition-colors hover:bg-zest-soft';

const Home = () => {
  return (
    <>
      <section className="nl-pad bg-paper pt-12 lg:pt-[88px]">
        <div className="nl-wrap flex flex-wrap items-end gap-x-16 gap-y-10">
          <div className="flex flex-[1_1_460px] flex-col gap-6 pb-10 lg:pb-[88px]">
            <p className="nl-eyebrow text-leaf">Vettukad, Puthucode · Palakkad, Kerala</p>
            <h1 className="font-heading text-[clamp(2.625rem,6.2vw,5.25rem)] font-extrabold leading-[0.98] tracking-[-0.03em]">
              Quran and English, <Mark>side by side</Mark> from age 3½.
            </h1>
            <p className="nl-lead max-w-[520px]">
              New Leaf School and Heavens Preschool take a child from the first day of kindergarten
              through high school, with one team, one campus and one set of values.
            </p>
            <div className="mt-1 flex flex-wrap gap-3">
              <Action to="/contact">Book a school visit</Action>
              <Action href={SITE.whatsappHref} variant="outline">
                Chat on WhatsApp
              </Action>
            </div>
          </div>
          <div className="relative mx-auto max-w-[540px] flex-[1_1_380px]">
            <img
              src={SCHOOL_LOGOS.SCHOOL_HERO}
              alt="The New Leaf School building in Vettukad"
              className="block h-[clamp(360px,44vw,600px)] w-full rounded-t-full object-cover object-[12%_100%]"
            />
            <p className="absolute bottom-9 left-0 max-w-[230px] rounded-2xl bg-ink px-5 py-4 font-heading text-lg font-bold leading-tight text-white sm:-left-3">
              “Read in the name of Lord who created.”
              <span className="mt-1.5 block font-body text-[0.8125rem] font-semibold tracking-[0.04em] text-zest">
                Our school motto
              </span>
            </p>
          </div>
        </div>
      </section>

      <section aria-label="At a glance" className="nl-pad bg-ink py-7 text-white">
        <div className="nl-wrap grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-x-8 gap-y-5">
          {GLANCE.map((item) => (
            <p key={item.title} className="text-base leading-snug text-mist-dim">
              <strong className="block font-heading text-2xl text-white">{item.title}</strong>
              {item.text}
            </p>
          ))}
        </div>
      </section>

      <section aria-label="For current parents" className="nl-pad border-b border-rule-soft py-7">
        <div className="nl-wrap flex flex-wrap items-center gap-x-5 gap-y-3">
          <h2 className="nl-eyebrow mr-3 text-moss-light">Already a parent?</h2>
          <Link to="/parents#timings" className={quickLink}>
            Timings and calendar
          </Link>
          <Link to="/parents#fees" className={quickLink}>
            Fees
          </Link>
          <Link to="/parents#transport" className={quickLink}>
            Transport
          </Link>
          <a
            href={SITE.parentPortalHref}
            className="inline-flex min-h-[48px] items-center rounded-full bg-ink px-5 font-semibold text-white transition-colors hover:bg-leaf"
          >
            Parent portal login
          </a>
        </div>
      </section>

      <section className="nl-sec">
        <div className="nl-wrap flex flex-col gap-11">
          <div className="flex max-w-[680px] flex-col gap-3">
            <h2 className="nl-h2">Two schools, one family.</h2>
            <p className="nl-lead">
              Children begin at Heavens Preschool and move up into New Leaf School without changing
              campus, friends or routine.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            <article className="flex flex-col gap-5 rounded-[28px] bg-[#FFF6DF] p-6 lg:p-10">
              <div className="flex items-center justify-between gap-4">
                <img
                  src={SCHOOL_LOGOS.HEAVENS}
                  alt="Heavens Preschool logo"
                  className="h-28 w-[150px] object-contain"
                />
                <div aria-hidden="true" className="flex items-end gap-3">
                  <span className="h-12 w-12 rounded-full bg-[#FDC453]" />
                  <span className="h-12 w-12 -rotate-[8deg] rounded-lg bg-[#E7278F]" />
                  <span className="hidden h-12 w-12 rotate-6 rounded-lg bg-[#6EC16E] sm:block" />
                  <span className="hidden h-0 w-0 border-x-[26px] border-b-[48px] border-x-transparent border-b-[#586BB6] sm:block" />
                </div>
              </div>
              <h3 className="font-heading text-3xl font-extrabold leading-tight">Heavens Preschool</h3>
              <p className="text-moss">
                Up above the world. The early years are spent learning through play, stories, colour
                and movement, so that school feels like a place a child wants to come back to.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="nl-chip bg-white">From age 3½</li>
                <li className="nl-chip bg-white">Play-based learning</li>
                <li className="nl-chip bg-white">Creative arts</li>
              </ul>
              <Link to="/academics" className="nl-link mt-auto">
                The preschool years →
              </Link>
            </article>
            <article className="flex flex-col gap-5 rounded-[28px] bg-paper p-6 lg:p-10">
              <img
                src={SCHOOL_LOGOS.NEW_LEAF_SCHOOL}
                alt="New Leaf School for Quran and English logo"
                className="h-28 w-[290px] max-w-full object-contain object-left"
              />
              <h3 className="font-heading text-3xl font-extrabold leading-tight">New Leaf School</h3>
              <p className="text-moss">
                For Quran and English. A full English-medium education taught alongside Quranic
                study, building strong academics and strong character in the same classroom.
              </p>
              <ul className="flex flex-wrap gap-2">
                <li className="nl-chip bg-zest-soft">Up to high school</li>
                <li className="nl-chip bg-zest-soft">English medium</li>
                <li className="nl-chip bg-zest-soft">Islamic studies</li>
              </ul>
              <Link to="/academics" className="nl-link mt-auto">
                The school years →
              </Link>
            </article>
          </div>
        </div>
      </section>

      <SplitSection
        className="!pt-0"
        title="What we are here to do."
        lead="A village school with a clear purpose: knowledge that is rooted in values, and values that are put to work."
      >
        <Row title="Vision" first>
          An education that transforms students through rigorous coursework and a real understanding
          of what society and industry need, strengthened by working with other institutions around
          the world.
        </Row>
        <Row title="Mission">
          To spread the teachings of truth and values in the light of proper education, promote
          value-based knowledge, and nurture sincere love and respect for every individual.
        </Row>
        <Row title="Objective">
          Quality English and Quranic education from age 3½, with strong moral values and practical
          skills taught through modern technology, so students are ready for a fast-changing world.
        </Row>
        <Link to="/about" className="nl-link">
          More about the school →
        </Link>
      </SplitSection>

      <section className="nl-sec bg-paper">
        <div className="nl-wrap flex flex-col gap-11">
          <div className="flex max-w-[680px] flex-col gap-3">
            <h2 className="nl-h2">A campus built around the school day.</h2>
            <p className="nl-lead">
              Calm, clean and green, with everything a child needs between the morning bell and the
              bus home.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
            {CAMPUS.map((group) => (
              <div key={group.title} className="flex flex-col gap-3.5 rounded-3xl bg-white p-7">
                <h3 className="nl-h3">{group.title}</h3>
                <ul className="flex flex-col gap-2.5 text-moss">
                  {group.items.map(([name, detail]) => (
                    <li key={name}>
                      <strong className="text-ink">{name}</strong> {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Come and see a school day."
        text={`Walk the classrooms, meet the teachers and ask us anything. The office is open ${SITE.officeDays}, ${SITE.officeHours}.`}
      >
        <VisitActions />
      </CtaBand>
    </>
  );
};

export default Home;
