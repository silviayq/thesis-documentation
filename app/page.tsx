export default function Home() {
  return (
    <main>
      <header>
        <h1>Thesis Documentation</h1>
        <nav aria-label="Weekly entries">
          <a href="#week-1">Week 1</a>
          <a href="#week-2">Week 2</a>
        </nav>
      </header>

      <section id="week-1">
        <p className="week-label">Week 1</p>
        <h2>A paper prototype brainstorm</h2>
        <ul>
          <li>A CD player game</li>
          <li>
            A choice-making game — a bunch of cards with choices on them that
            lead to different endings
          </li>
        </ul>

        <figure>
          <img
            src="/images/week-1-brainstorm.jpg"
            alt="Brainstorming ideas written on green sticky notes"
          />
          <figcaption>Paper prototype brainstorm.</figcaption>
        </figure>
      </section>

      <section id="week-2">
        <p className="week-label">Week 2</p>
        <h2>Paper prototype</h2>
        <h3>PET PLAYER</h3>

        <div className="text">
          <p>
            My project is called <strong>PET PLAYER</strong>. It is a
            cooperative game designed for a human and a dog to play together as
            two different players.
          </p>
          <p>
            The main idea is that humans and dogs should not be forced to use
            the same interface. The human side has a CD player, an LCD screen,
            and game controls, because humans can understand instructions,
            tracks, and abstract game rules. The dog side only has large
            interaction pads with light and sound feedback, so the dog can
            interact through touching, approaching, or choosing between
            different zones.
          </p>
          <p>
            The game is structured like different tracks on a CD. In each
            track, the dog creates a signal by interacting with one of the pads,
            and the human has to observe, remember, or respond to the dog&apos;s
            action. As they progress, their actions gradually build a shared
            sound or musical track.
          </p>
          <p>
            The goal is not to train the dog to obey the human. I want to
            explore what happens when the human also has to pay attention to the
            dog&apos;s choices and treat the dog as Player Two.
          </p>
        </div>

        <div className="gallery">
          <figure>
            <img src="/images/week-2-prototype-1.jpg" alt="A person holding the PET PLAYER paper prototype" />
          </figure>
          <figure>
            <img src="/images/week-2-prototype-2.jpg" alt="Close view of the CD player controls on the paper prototype" />
          </figure>
          <figure>
            <img src="/images/week-2-prototype-3.jpg" alt="Front view of the PET PLAYER paper prototype" />
          </figure>
          <figure>
            <img src="/images/week-2-prototype-4.jpg" alt="Top view of the PET PLAYER paper prototype" />
          </figure>
        </div>
      </section>
    </main>
  );
}
