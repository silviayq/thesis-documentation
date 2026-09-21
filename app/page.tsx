'use client';

import { useState } from 'react';

const weeks = ['week-1', 'week-2', 'week-3', 'week-4', 'week-5'];

export default function Home() {
  const [activeWeek, setActiveWeek] = useState('week-1');

  return (
    <main className="archive-page">
      <header className="archive-header">
        <div>
          <p className="eyebrow">THESIS ARCHIVE / 2026</p>
          <h1>thesis documentation</h1>
        </div>
        <p className="header-note">Select a folder to open an entry.</p>
      </header>

      <section className="filing-cabinet" aria-label="Weekly documentation folders">
        <div className="folder-tabs" role="tablist" aria-label="Weekly entries">
          {weeks.map((week, index) => (
            <button
              key={week}
              className={`folder-tab ${activeWeek === week ? 'is-active' : ''}`}
              type="button"
              role="tab"
              aria-selected={activeWeek === week}
              aria-controls={`${week}-panel`}
              onClick={() => setActiveWeek(week)}
            >
              Week {index + 1}
            </button>
          ))}
        </div>

        <div className="cabinet-body">
          <div className="cabinet-label">THESIS DOCUMENTATION / INDEX</div>

          {activeWeek === 'week-1' && (
            <article id="week-1-panel" className="week-panel" role="tabpanel">
              <p className="week-label">Week 1</p>
              <h2>A paper prototype brainstorm</h2>
              <ul>
                <li>A CD player game</li>
                <li>A choice-making game — a bunch of cards with choices on them that lead to different endings</li>
              </ul>
              <figure>
                <img src="/images/week-1-brainstorm.jpg" alt="Brainstorming ideas written on green sticky notes" />
                <figcaption>Paper prototype brainstorm.</figcaption>
              </figure>
            </article>
          )}

          {activeWeek === 'week-2' && (
            <article id="week-2-panel" className="week-panel" role="tabpanel">
              <p className="week-label">Week 2</p>
              <h2>Paper prototype</h2>
              <h3>PET PLAYER</h3>

              <div className="text">
                <p>My project is called <strong>PET PLAYER</strong>. It is a cooperative game designed for a human and a dog to play together as two different players.</p>
                <p>The main idea is that humans and dogs should not be forced to use the same interface. The human side has a CD player, an LCD screen, and game controls, because humans can understand instructions, tracks, and abstract game rules. The dog side only has large interaction pads with light and sound feedback, so the dog can interact through touching, approaching, or choosing between different zones.</p>
                <p>The game is structured like different tracks on a CD. In each track, the dog creates a signal by interacting with one of the pads, and the human has to observe, remember, or respond to the dog&apos;s action. As they progress, their actions gradually build a shared sound or musical track.</p>
                <p>The goal is not to train the dog to obey the human. I want to explore what happens when the human also has to pay attention to the dog&apos;s choices and treat the dog as Player Two.</p>
              </div>

              <div className="gallery">
                <figure><img src="/images/week-2-prototype-1.jpg" alt="Top view of the PET PLAYER paper prototype" /></figure>
                <figure><img src="/images/week-2-prototype-2.jpg" alt="Front view of the PET PLAYER paper prototype" /></figure>
                <figure><img src="/images/week-2-prototype-3.jpg" alt="Close view of a person holding the PET PLAYER paper prototype" /></figure>
                <figure><img src="/images/week-2-prototype-4.jpg" alt="A person holding the PET PLAYER paper prototype" /></figure>
              </div>

              <div className="checklist">
                <h3>Design Values Checklist</h3>
                <div className="checklist-item checklist-question"><h4>How Might We...</h4><p>How might I make a game that is genuinely fun?</p></div>
                <div className="checklist-item"><h4>THEME</h4><div><p>I like making things that I personally find interesting or funny, even if they might seem a little meaningless or absurd.</p><p>For example, I once turned one of my friends into the main character of a dating sim just to surprise him. In my chicken game, I realized that the funniest part was not really raising the chicken or even the twist at the end. It was the moment when I was wearing the headset, physically picking up the chicken, and showing it to my friends.</p><p>I think a game can be fun because of one specific moment. Sometimes the most memorable part is not the main mechanic or the message, but a strange, silly, or seemingly pointless interaction that unexpectedly becomes meaningful.</p></div></div>
                <div className="checklist-item"><h4>POINT OF VIEW</h4><div><p>Most of my previous projects have been designed from a human point of view, but in my first prototype, I started thinking about the dog as the player.</p><p>I find this shift in perspective really interesting. I also often imagine what it would feel like to be a dog, a bird, a cat, or even something completely fictional, like a dragon or a god.</p><p>I think changing perspective can create new kinds of interaction and help me imagine different ways of experiencing a game.</p></div></div>
                <div className="checklist-item"><h4>PERCEPTION</h4><div><p>I am especially interested in experiences that combine virtual and physical elements.</p><p>I feel that when digital feedback is connected to real objects, movement, sound, or physical interaction, the experience can become more immersive and memorable.</p></div></div>
                <div className="checklist-item"><h4>CONTEXT</h4><div><p>Honestly, I still like the idea of making whatever I feel curious about at the moment.</p><p>I once made a Tamagotchi-like game using an M5Stick and added real physical feedback to it. Looking back, I realized that I actually make a lot of pet-like or character-based games.</p><p>I have created several different kinds of virtual pets, including a girl who smokes, a desktop pet, and other small interactive characters. I seem to be naturally drawn to designing things that feel alive, responsive, or emotionally present.</p></div></div>
                <div className="checklist-item"><h4>EMOTIONS</h4><div><p>I am interested in a kind of dry or dark humor, mixed with a retro feeling.</p><p>I like experiences that can feel playful, strange, nostalgic, or slightly uncomfortable at the same time.</p></div></div>
                <div className="checklist-item"><h4>INSPIRATION</h4><div><p>I am inspired by games from around the 2000s, retro digital aesthetics, virtual pets, strange game mechanics, and social issues.</p><p>I am especially interested in projects that look playful or nostalgic on the surface but can also connect to something more serious underneath.</p></div></div>
              </div>
            </article>
          )}

          {['week-3', 'week-4', 'week-5'].includes(activeWeek) && (
            <article id={`${activeWeek}-panel`} className="week-panel empty-panel" role="tabpanel">
              <p className="week-label">{activeWeek.replace('-', ' ')}</p>
              <h2>Documentation coming soon.</h2>
              <p>This folder is ready for the next entry.</p>
            </article>
          )}
        </div>
      </section>
    </main>
  );
}
