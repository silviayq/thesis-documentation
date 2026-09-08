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
            <img src="/images/week-2-prototype-1.jpg" alt="Top view of the PET PLAYER paper prototype" />
          </figure>
          <figure>
            <img src="/images/week-2-prototype-2.jpg" alt="Front view of the PET PLAYER paper prototype" />
          </figure>
          <figure>
            <img src="/images/week-2-prototype-3.jpg" alt="Close view of a person holding the PET PLAYER paper prototype" />
          </figure>
          <figure>
            <img src="/images/week-2-prototype-4.jpg" alt="A person holding the PET PLAYER paper prototype" />
          </figure>
        </div>

        <div className="checklist">
          <h3>Design Values Checklist</h3>

          <div className="checklist-item">
            <h4>How Might We...</h4>
            <p>
              How might we design a cooperative game that allows humans and
              dogs to participate as two different but equal players, using
              interfaces that respond to their different ways of perceiving and
              interacting with the world?
            </p>
          </div>

          <div className="checklist-item">
            <h4>THEME</h4>
            <p>
              The project explores cross-species communication and cooperation
              between humans and dogs. Instead of asking dogs to simply follow
              human commands, the game creates situations where humans also
              need to observe and respond to the dog&apos;s choices.
            </p>
          </div>

          <div className="checklist-item">
            <h4>POINT OF VIEW</h4>
            <p>
              The project is designed from a more dog-centered perspective
              rather than treating the dog as an object to train.
            </p>
            <p>
              The human and dog see two different interfaces. The human
              receives written instructions and game information, while the dog
              interacts through physical position, touch, sound, light, and
              movement.
            </p>
            <p>
              The project asks the human to adapt to the dog, instead of
              expecting the dog to always adapt to human systems.
            </p>
          </div>

          <div className="checklist-item">
            <h4>PERCEPTION</h4>
            <p>
              The human side uses a CD player interface with an LCD screen,
              physical buttons, tracks, and simple graphic feedback.
            </p>
            <p>
              The dog side is more sensory and physical: large touch zones,
              simple light changes, sound, movement, and spatial differences.
            </p>
          </div>

          <div className="checklist-item">
            <h4>CONTEXT</h4>
            <p>The main audience is dog owners and their dogs.</p>
            <p>
              The project could exist as a home game device or as an interactive
              installation where a human and dog play together for a short
              session.
            </p>
            <p>
              People interact with it because they want to play with their pet
              in a different way and learn more about how their dog communicates,
              chooses, and responds.
            </p>
          </div>

          <div className="checklist-item">
            <h4>EMOTIONS</h4>
            <p>
              I want the experience to create: curiosity, playfulness,
              attentiveness, connection.
            </p>
          </div>

          <div className="checklist-item">
            <h4>INSPIRATION</h4>
            <p>The project is inspired by:</p>
            <ul>
              <li>
                CleverPet: especially its large dog-friendly interaction pads
                and use of immediate light/sound feedback.
              </li>
              <li>
                Sony Discman, Aiwa CD players, translucent consumer electronics,
                and Y2K product design.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
