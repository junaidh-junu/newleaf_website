import React from 'react';
import { SCHOOL } from '../../config/school';
import { Action, CtaBand, Mark, PageHero, Row, SplitSection } from '../../components/ui/site';

const STAGES = [
  {
    name: 'Heavens Preschool',
    range: 'From age 3½',
    text: 'Play-based learning, creative arts, first letters and numbers, and first words of the Quran.',
  },
  {
    name: 'Primary',
    range: SCHOOL.grades.primary,
    text: 'Strong foundations in reading, writing and number, with curiosity and good habits built in.',
  },
  {
    name: 'Upper primary',
    range: SCHOOL.grades.upperPrimary,
    text: 'Subjects deepen, independent study begins, and students take on more responsibility.',
  },
  {
    name: 'High school',
    range: SCHOOL.grades.highSchool,
    text: 'Rigorous coursework and exam preparation for whatever comes next.',
  },
];

const ACTIVITIES = [
  ['Karate', 'bg-[#FFF3D6]'],
  ['Abacus', 'bg-zest-soft'],
  ['Art training', 'bg-[#FBDDEC]'],
  ['Sports and games', 'bg-[#DFE3F3]'],
  ["Students' garden", 'bg-zest-soft'],
  ['Library hours', 'bg-[#FFF3D6]'],
];

const quranItems = ['Quran reading and recitation', 'Islamic studies and moral values', SCHOOL.hifz].filter(Boolean);

const englishItems = [
  'English language and literature',
  'Mathematics, science and social studies',
  'Computer education in the lab',
  SCHOOL.board,
].filter(Boolean);

const Academics = () => {
  return (
    <>
      <PageHero
        eyebrow="Academics"
        title={
          <>
            Two strands of learning, <Mark>woven into one day.</Mark>
          </>
        }
      >
        <p className="nl-lead">
          Every student follows an English-medium curriculum and a Quranic curriculum together, from
          the first year of preschool to the last year of high school.
        </p>
      </PageHero>

      <section className="nl-sec">
        <div className="nl-wrap grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
          <article className="flex flex-col gap-4 rounded-[28px] bg-ink p-6 text-white lg:p-11">
            <p className="nl-eyebrow text-zest">Strand one</p>
            <h2 className="font-heading text-[clamp(1.875rem,3.4vw,2.75rem)] font-extrabold leading-[1.05]">
              Quranic education
            </h2>
            <p className="text-mist">
              Taught in dedicated prayer areas, with time set aside in the timetable every day.
              Students learn to read, understand and live by what they study.
            </p>
            <ul className="mt-2 flex flex-col">
              {quranItems.map((item) => (
                <li key={item} className="border-t border-leaf-line py-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="flex flex-col gap-4 rounded-[28px] bg-zest-soft p-6 lg:p-11">
            <p className="nl-eyebrow text-[#0C5A2E]">Strand two</p>
            <h2 className="font-heading text-[clamp(1.875rem,3.4vw,2.75rem)] font-extrabold leading-[1.05]">
              English-medium academics
            </h2>
            <p className="text-[#1F3A2B]">
              All core subjects are taught in English in smart classrooms, with lessons, homework
              and progress tracked on the school's learning management system.
            </p>
            <ul className="mt-2 flex flex-col">
              {englishItems.map((item) => (
                <li key={item} className="border-t border-[#B5CC85] py-3">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {SCHOOL.daySchedule.length > 0 && (
        <SplitSection
          className="!pt-0"
          title="A day at New Leaf."
          lead="How the two strands fit into one school day."
        >
          <ol className="flex flex-col border-b border-rule">
            {SCHOOL.daySchedule.map((slot, index) => (
              <li
                key={`${slot.time}-${slot.label}`}
                className={`flex flex-wrap gap-x-8 gap-y-1 py-[18px] ${
                  index === 0 ? 'border-t-2 border-ink' : 'border-t border-rule'
                }`}
              >
                <span className="flex-[0_0_120px] font-bold text-leaf">{slot.time}</span>
                <strong className="flex-[1_1_280px]">{slot.label}</strong>
              </li>
            ))}
          </ol>
        </SplitSection>
      )}

      <section className="nl-sec !pt-0">
        <div className="nl-wrap flex flex-col gap-11">
          <div className="flex max-w-[680px] flex-col gap-3">
            <h2 className="nl-h2">The journey, stage by stage.</h2>
            <p className="nl-lead">A child can join at age 3½ and stay with us all the way through.</p>
          </div>
          <ol className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
            {STAGES.map((stage, index) => (
              <li key={stage.name} className="flex flex-col gap-2.5 rounded-3xl border border-rule-soft p-7">
                <span className="font-heading text-[2.75rem] font-extrabold leading-none text-leaf">
                  {index + 1}
                </span>
                <h3 className="nl-h3">{stage.name}</h3>
                {stage.range && <p className="font-semibold text-moss-light">{stage.range}</p>}
                <p className="text-moss">{stage.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <SplitSection
        className="bg-paper"
        title="How progress is tracked."
        lead="No child should fall behind unnoticed, and no parent should have to guess."
      >
        <Row title="Continuous assessment" wide first>
          Regular, low-pressure checks through the term show where each student stands and what
          needs another look.
        </Row>
        <Row title="Parents in the loop" wide>
          Progress reports and parent meetings, backed by the LMS and ERP, keep families informed
          through the year.
        </Row>
        <Row title="Individual support" wide>
          Teachers know each child's talents and gaps, and plan extra help or extra stretch
          accordingly.
        </Row>
      </SplitSection>

      <section className="nl-sec">
        <div className="nl-wrap flex flex-col gap-9">
          <div className="flex max-w-[680px] flex-col gap-3">
            <h2 className="nl-h2">Beyond the timetable.</h2>
            <p className="nl-lead">Part of every week is spent away from the desk.</p>
          </div>
          <ul className="flex flex-wrap gap-3">
            {ACTIVITIES.map(([name, tint]) => (
              <li key={name} className={`rounded-full px-6 py-3.5 font-heading text-[1.375rem] font-bold ${tint}`}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="See a lesson for yourself."
        text="Visit during school hours and sit in on a class with your child."
      >
        <Action to="/contact" variant="zest">
          Book a school visit
        </Action>
      </CtaBand>
    </>
  );
};

export default Academics;
