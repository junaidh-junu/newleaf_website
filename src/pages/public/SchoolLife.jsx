import React, { useEffect, useMemo, useState } from 'react';
import { getEvents, getGallery, getPosts } from '../../services/supabase';
import { SITE } from '../../config/site';
import { Mark, PageHero } from '../../components/ui/site';

const published = (rows) => (rows || []).filter((row) => row.is_published !== false);

const day = (value) => new Date(value).toLocaleDateString('en-IN', { day: '2-digit' });
const month = (value) => new Date(value).toLocaleDateString('en-IN', { month: 'short' });
const fullDate = (value) =>
  new Date(value).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
const time = (value) => new Date(value).toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit' });

const pill = (active) =>
  `min-h-[44px] rounded-full border-2 border-ink px-[18px] text-[0.97rem] font-semibold capitalize transition-colors ${
    active ? 'bg-ink text-white' : 'bg-white text-ink hover:bg-paper'
  }`;

const Empty = ({ dark = false, children }) => (
  <p
    className={`rounded-3xl border border-dashed px-6 py-10 text-center ${
      dark ? 'border-leaf-line text-mist' : 'border-rule text-moss'
    }`}
  >
    {children}
  </p>
);

const SchoolLife = () => {
  const [events, setEvents] = useState([]);
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showPast, setShowPast] = useState(false);
  const [category, setCategory] = useState('all');
  const [openPost, setOpenPost] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    let cancelled = false;
    Promise.allSettled([getEvents(), getPosts(), getGallery()]).then(([e, p, g]) => {
      if (cancelled) return;
      if (e.status === 'fulfilled') setEvents(published(e.value));
      if (p.status === 'fulfilled') setPosts(published(p.value));
      if (g.status === 'fulfilled') setPhotos(published(g.value));
      setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!lightbox) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  const shownEvents = useMemo(() => {
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);
    const upcoming = events.filter((event) => new Date(event.event_date) >= startOfToday);
    const past = events.filter((event) => new Date(event.event_date) < startOfToday).reverse();
    return showPast ? past : upcoming;
  }, [events, showPast]);

  const categories = useMemo(
    () => ['all', ...new Set(photos.map((photo) => photo.category).filter(Boolean))],
    [photos]
  );
  const shownPhotos = category === 'all' ? photos : photos.filter((photo) => photo.category === category);

  return (
    <>
      <PageHero
        eyebrow="School life"
        title={
          <>
            What is happening <Mark>on campus.</Mark>
          </>
        }
      >
        <p className="nl-lead">
          Dates for the diary, news from the classrooms and photographs from the school year, posted
          by our staff.
        </p>
      </PageHero>

      <section id="events" className="nl-sec">
        <div className="nl-wrap flex flex-wrap gap-x-20 gap-y-10">
          <div className="flex max-w-[380px] flex-[1_1_300px] flex-col gap-4">
            <h2 className="nl-h2">{showPast ? 'Past events.' : 'Coming up.'}</h2>
            <p className="nl-lead">Parents are welcome at every event unless we say otherwise.</p>
            <div role="group" aria-label="Filter events" className="mt-2 flex flex-wrap gap-2">
              <button type="button" aria-pressed={!showPast} className={pill(!showPast)} onClick={() => setShowPast(false)}>
                Upcoming
              </button>
              <button type="button" aria-pressed={showPast} className={pill(showPast)} onClick={() => setShowPast(true)}>
                Past
              </button>
            </div>
          </div>
          <div className="min-w-0 flex-[999_1_520px]">
            {loading ? (
              <Empty>Loading events…</Empty>
            ) : shownEvents.length === 0 ? (
              <Empty>
                {showPast ? 'No past events to show yet.' : 'No upcoming events are scheduled right now. Check back soon.'}
              </Empty>
            ) : (
              <ul className="flex flex-col border-b border-rule">
                {shownEvents.map((event, index) => (
                  <li
                    key={event.id}
                    className={`flex flex-wrap items-center gap-x-7 gap-y-4 py-6 ${
                      index === 0 ? 'border-t-2 border-ink' : 'border-t border-rule'
                    }`}
                  >
                    <div
                      className={`flex h-24 flex-[0_0_88px] flex-col items-center justify-center rounded-b-xl rounded-t-[44px] leading-[1.1] ${
                        index === 0 && !showPast ? 'bg-leaf text-white' : 'bg-zest-soft text-ink'
                      }`}
                    >
                      <span className="font-heading text-[2rem] font-extrabold">{day(event.event_date)}</span>
                      <span className="text-[0.8125rem] font-bold uppercase tracking-[0.08em]">
                        {month(event.event_date)}
                      </span>
                    </div>
                    <div className="flex flex-[1_1_320px] flex-col gap-1">
                      <h3 className="nl-h3">{event.title}</h3>
                      <p className="text-moss-light">
                        {[fullDate(event.event_date), time(event.event_date), event.location]
                          .filter(Boolean)
                          .join(' · ')}
                      </p>
                      <p className="text-moss">{event.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      <section id="news" className="nl-sec bg-ink text-white">
        <div className="nl-wrap flex flex-col gap-11">
          <div className="flex max-w-[680px] flex-col gap-3">
            <h2 className="nl-h2">News and achievements.</h2>
            <p className="text-[1.1875rem] leading-[1.55] text-mist">
              Results, competitions and moments we are proud of.
            </p>
          </div>
          {loading ? (
            <Empty dark>Loading news…</Empty>
          ) : posts.length === 0 ? (
            <Empty dark>No news has been posted yet.</Empty>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
              {posts.map((post) => {
                const isOpen = openPost === post.id;
                const isLong = post.content.length > 180;
                return (
                  <article key={post.id} className="flex flex-col gap-2.5 rounded-3xl bg-leaf-deep p-7">
                    {post.image_url && (
                      <img src={post.image_url} alt="" className="mb-2 h-44 w-full rounded-2xl object-cover" />
                    )}
                    <p className="text-sm font-bold uppercase tracking-[0.08em] text-zest">
                      {fullDate(post.created_at)}
                    </p>
                    <h3 className="nl-h3">{post.title}</h3>
                    <p className="whitespace-pre-line text-mist">
                      {isOpen || !isLong ? post.content : `${post.content.slice(0, 180).trimEnd()}…`}
                    </p>
                    {isLong && (
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenPost(isOpen ? null : post.id)}
                        className="mt-auto inline-flex min-h-[44px] items-center self-start font-bold text-white hover:text-zest"
                      >
                        {isOpen ? 'Show less' : 'Read more →'}
                      </button>
                    )}
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section id="gallery" className="nl-sec">
        <div className="nl-wrap flex flex-col gap-9">
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
            <div className="flex max-w-[680px] flex-col gap-3">
              <h2 className="nl-h2">Gallery.</h2>
              <p className="nl-lead">Photographs from classrooms, the playground and school events.</p>
            </div>
            {categories.length > 2 && (
              <div role="group" aria-label="Filter photos" className="flex flex-wrap gap-2">
                {categories.map((name) => (
                  <button
                    key={name}
                    type="button"
                    aria-pressed={category === name}
                    className={pill(category === name)}
                    onClick={() => setCategory(name)}
                  >
                    {name}
                  </button>
                ))}
              </div>
            )}
          </div>
          {loading ? (
            <Empty>Loading photos…</Empty>
          ) : shownPhotos.length === 0 ? (
            <Empty>Photos from the school year will appear here.</Empty>
          ) : (
            <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-5">
              {shownPhotos.map((photo, index) => (
                <figure key={photo.id} className="flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={() => setLightbox(photo)}
                    aria-label={`View photo: ${photo.title}`}
                    className={`block overflow-hidden ${
                      index % 2 === 0 ? 'rounded-b-2xl rounded-t-[160px]' : 'rounded-2xl'
                    }`}
                  >
                    <img
                      src={photo.image_url}
                      alt={photo.title}
                      loading="lazy"
                      className="h-80 w-full object-cover transition-transform duration-300 hover:scale-[1.03]"
                    />
                  </button>
                  <figcaption className="font-semibold">{photo.title}</figcaption>
                </figure>
              ))}
            </div>
          )}
          <p className="text-moss">
            More photos on{' '}
            <a href={SITE.instagramHref} className="font-bold text-leaf underline hover:text-ink">
              Instagram {SITE.instagramHandle}
            </a>
          </p>
        </div>
      </section>

      {lightbox && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-ink/95 p-5"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox.image_url}
            alt={lightbox.title}
            className="max-h-[78vh] max-w-full rounded-2xl object-contain"
            onClick={(event) => event.stopPropagation()}
          />
          <p className="max-w-[720px] text-center text-white">
            <strong>{lightbox.title}</strong>
            {lightbox.description ? ` · ${lightbox.description}` : ''}
          </p>
          <button type="button" autoFocus onClick={() => setLightbox(null)} className="nl-btn nl-btn-white">
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default SchoolLife;
