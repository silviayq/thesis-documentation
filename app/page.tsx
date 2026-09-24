'use client';

import { useRef, useState } from 'react';

const weeks = ['week-1', 'week-2', 'week-3', 'week-4', 'week-5'];

export default function Home() {
  const [activeWeek, setActiveWeek] = useState('week-1');
  const reader = useRef<HTMLDialogElement>(null);

  function openWeek(week: string) {
    setActiveWeek(week);
    reader.current?.showModal();
    if (reader.current) reader.current.scrollTop = 0;
    document.body.classList.add('reading');
  }

  function closeWeek() {
    reader.current?.close();
  }

  return (
    <main className="archive-page">
      <header className="sr-only">
        <p>Silvia Zhang</p>
        <h1>thesis documentation</h1>
      </header>

      <section className="filing-cabinet" aria-label="Weekly documentation folders">
        <img className="cabinet-art" src="/images/archive-cabinet.png" alt="Silvia Zhang — thesis documentation. An illustrated paper archive with five weekly folders." width="1121" height="1403" fetchPriority="high" />
        <div className="folder-layers" aria-hidden="true">
          {weeks.map((week) => <img key={week} className={`folder-layer layer-${week}`} src="/images/archive-cabinet.png" alt="" width="1121" height="1403" draggable={false} />)}
        </div>
        <nav className="folder-tabs" aria-label="Weekly entries">
          {weeks.map((week, index) => (
            <button
              key={week}
              className={`folder-hotspot ${week}`}
              type="button"
              aria-label={`Open week${index + 1}`}
              aria-haspopup="dialog"
              onClick={() => openWeek(week)}
            >
              <span className="sr-only">week{index + 1}</span>
            </button>
          ))}
        </nav>
      </section>
      <nav className="mobile-folders" aria-label="Open a weekly folder">
        {weeks.map((week, index) => <button key={week} onClick={() => openWeek(week)}>week{index + 1}</button>)}
      </nav>

      <dialog ref={reader} className="entry-reader" aria-labelledby="reader-title" onClose={() => document.body.classList.remove('reading')} onClick={(event) => { if (event.target === event.currentTarget) closeWeek(); }}>
        <div className="reader-paper">
          <header className="reader-header">
            <p id="reader-title">Silvia Zhang / {activeWeek.replace('-', '')}</p>
            <button className="close-folder" onClick={closeWeek} autoFocus>Close folder</button>
          </header>

          {activeWeek === 'week-1' && (
            <article id="week-1-panel" className="week-panel">
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
            <article id="week-2-panel" className="week-panel">
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

          {activeWeek === 'week-3' && (
            <article id="week-3-panel" className="week-panel">
              <p className="week-label">Week 3</p>
              <h2>Prototype2</h2>
              <div className="text">
                <p>The Last Meal is a Mixed Reality experience that combines virtual gameplay with physical interaction. The player begins by choosing a chicken dish in a simulated restaurant, but instead of receiving the meal, they are asked to take care of a virtual chick.</p>
                <p>Through feeding, petting, and spending time with the chick, the player gradually forms an emotional connection with it. At the end, the player must make a final choice: keep the chicken or leave it behind.</p>
              </div>
              <video className="prototype-video" controls preload="metadata" playsInline aria-label="The Last Meal playtest video">
                <source src="/videos/last-meal-playtest.m4v" type="video/mp4" />
                Your browser does not support this video.
              </video>
              <section className="playtest-feedback" aria-labelledby="playtest-feedback-title">
                <h3 id="playtest-feedback-title">Playtest Feedback</h3>
                <ul>
                  <li>I love this game</li>
                  <li>Idea is crazy and I love to play this game I feel like I can play it all day</li>
                  <li>Ui is so adorable and also I love 3D character</li>
                  <li>I want to give some feedback but this is soooo nice for me</li>
                  <li>I want to see the chick first after see chicken moment</li>
                  <li>Make the water interactive / movable.</li>
                  <li>Allow the player to pick up the bowl.</li>
                  <li>The chicken gets very angry when picked up from its nest.</li>
                  <li>Allow the player to pick up and throw the chicken.</li>
                </ul>
              </section>
            </article>
          )}

          {['week-4', 'week-5'].includes(activeWeek) && (
            <article id={`${activeWeek}-panel`} className="week-panel empty-panel">
              <p className="week-label">{activeWeek.replace('-', ' ')}</p>
              <h2>Documentation coming soon.</h2>
              <p>This folder is ready for the next entry.</p>
            </article>
          )}
        </div>
      </dialog>
    </main>
  );
}
