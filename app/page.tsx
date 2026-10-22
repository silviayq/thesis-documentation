'use client';

import { useRef, useState } from 'react';
import { cabinetArtwork } from '../lib/cabinet-art';

const weeks = ['week-1', 'week-2', 'week-3', 'week-4', 'week-5'];
const folderNames: Record<string, string> = { 'week-1': 'week1', 'week-2': 'Prototype1', 'week-3': 'Prototype2', 'week-4': 'Prototype3', 'week-5': 'Prototype4' };

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
        <div className="cabinet-art" role="img" aria-label="Silvia Zhang — thesis documentation. An illustrated paper archive with five weekly folders." dangerouslySetInnerHTML={{ __html: cabinetArtwork }} />
        <nav className="folder-tabs" aria-label="Weekly entries">
          {weeks.map((week) => (
            <button
              key={week}
              className={`folder-hotspot ${week}`}
              type="button"
              aria-label={`Open ${folderNames[week]}`}
              aria-haspopup="dialog"
              onClick={() => openWeek(week)}
            >
              <span className="sr-only">{folderNames[week]}</span>
            </button>
          ))}
        </nav>
      </section>
      <nav className="mobile-folders" aria-label="Open a weekly folder">
        {weeks.map((week) => <button key={week} onClick={() => openWeek(week)}>{folderNames[week]}</button>)}
      </nav>

      <dialog ref={reader} className="entry-reader" aria-labelledby="reader-title" onClose={() => document.body.classList.remove('reading')} onClick={(event) => { if (event.target === event.currentTarget) closeWeek(); }}>
        <div className="reader-paper">
          <header className="reader-header">
            <p id="reader-title">Silvia Zhang / {folderNames[activeWeek]}</p>
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
              <h2>Prototype1</h2>
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
              <section className="prototype-updates" aria-labelledby="prototype-2-updates-title">
                <h3 id="prototype-2-updates-title">Further Updates</h3>
                <div className="text">
                  <p>I added an NFC interaction that lets the player tap a dish to enter the game. I also added pressure sensors to the knife and fork. When the player picks up the cutlery, the chick feels uneasy.</p>
                </div>
                <iframe className="youtube-video" src="https://www.youtube-nocookie.com/embed/e-wvGKPSDHQ?start=1" title="The Last Meal — updated prototype video" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                <p className="video-link"><a href="https://www.youtube.com/watch?v=e-wvGKPSDHQ&amp;t=1s" target="_blank" rel="noopener noreferrer">Watch the updated prototype on YouTube</a></p>
              </section>
            </article>
          )}

          {activeWeek === 'week-4' && (
            <article id="week-4-panel" className="week-panel">
              <p className="week-label">Week 4</p>
              <h2>Prototype3</h2>
              <h3>Description</h3>
              <div className="text prototype-description">
                <p>I made a virtual sheep game on M5StickS3, a small programmable device manufactured by M5Stack. It has a color screen, buttons, Wi-Fi, and a rechargeable battery. I developed the game running on it rather than the hardware.</p>
                <p>The device connects to the internet once a day at a set time to synchronize its clock, and the sheep sleeps on a schedule tied to real-world time. I wanted to try a pet that could be carried around and have a place in someone&apos;s daily routine.</p>
                <p>I have not developed a larger story for this game yet. Its main focus is companionship through a small device and a pet that is sometimes asleep when the player wants to interact.</p>
              </div>
              <div className="gallery">
                <figure><img src="/images/week-4-prototype-1.jpg" alt="Handheld virtual pet prototype showing a sheep" loading="lazy" /></figure>
                <figure><img src="/images/week-4-prototype-2.jpg" alt="Decorated virtual pet prototype resting on a cup lid" loading="lazy" /></figure>
              </div>
              <section className="playtest-feedback" aria-labelledby="week-4-feedback-title">
                <h3 id="week-4-feedback-title">Playtest Feedback:</h3>
                <div className="text">
                  <p>Diff from other pet game<br />more weird<br />other ways to feed</p>
                  <p>Upside down to a evil vesion<br />attacking and fight back<br />assets scarier</p>
                  <p>a cleaner theme<br />use place holder is fine</p>
                </div>
              </section>
              <figure><img src="/images/week-4-feedback.jpg" alt="Handwritten notes about creating a different pet game or interactive toy" loading="lazy" /></figure>
            </article>
          )}

          {activeWeek === 'week-5' && (
            <article id="week-5-panel" className="week-panel">
              <p className="week-label">Week 5</p>
              <h2>Prototype4</h2>
              <h3>Concept Drawing</h3>
              <figure><img src="/images/prototype-4-concept-drawing.png" alt="Concept drawing of a dog returning colored balls to a ball-launching device while a person uses the elements in a game on a large screen" loading="lazy" /></figure>
              <div className="text concept-description">
                <p>A ball-launching device connected to a game on a television or projector. I am considering balls in five colors. The dog would retrieve a ball, and the owner would help it bring the ball to a return opening. A camera at that opening would identify the color. Once the device had registered two returns, those colors would give the human player two elements for a battle against a computer opponent, which would also have two elements. An advantage system between the elements would determine the outcome. I am also considering letting the person choose how to use or order the two elements before the battle begins. This would give the owner a decision to make with whatever the dog brings back.</p>
              </div>
              <h3>Playtest</h3>
              <video className="prototype-video" controls preload="metadata" playsInline aria-label="Prototype4 puppy playtest video">
                <source src="/videos/puppy-playtest.mp4" type="video/mp4" />
                Your browser does not support this video.
              </video>
            </article>
          )}
        </div>
      </dialog>
    </main>
  );
}
