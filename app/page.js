const pillars = [
  { title: 'Brotherhood', text: 'We gather to form real Catholic friendships marked by honesty, accountability, and shared pursuit of holiness.' },
  { title: 'Prayer', text: 'Every meeting begins with the Prayer to Saint Joseph and ends with intentions, the Our Father, and the Salve Regina.' },
  { title: 'Formation', text: 'We study virtue, apologetics, chastity, theology of the body, and the wisdom of the saints in a way that is practical and masculine.' },
  { title: 'Nature & Mission', text: 'We recover wonder through retreats, the outdoors, service, and a way of life that forms men for marriage, fatherhood, and vocation.' }
];

const rhythm = [
  'Opening Prayer to Saint Joseph',
  'Check-in round and spiritual accountability',
  'Formation topic discussion',
  'Prayer intentions',
  'Our Father',
  'Salve Regina'
];

const virtues = ['Prudence','Justice','Fortitude','Temperance','Humility','Generosity','Chastity','Meekness','Patience','Kindness','Diligence','Faith','Hope','Charity'];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <header className="topbar container">
          <div className="brand">Sons of Joseph</div>
          <nav>
            <a href="#mission">Mission</a>
            <a href="#formation">Formation</a>
            <a href="#retreats">Retreats</a>
            <a href="#support">Support</a>
          </nav>
        </header>

        <div className="heroContent container">
          <p className="eyebrow">Catholic formation for young men</p>
          <h1>Build lasting brotherhood. Deepen faith. Become the man God created you to be.</h1>
          <p className="lead">Sons of Joseph is a Catholic formation group rooted in prayer, virtue, study, nature, and devotion to Mary and Saint Joseph.</p>
          <div className="heroActions">
            <a className="button buttonPrimary" href="#support">Support the Mission</a>
            <a className="button buttonGhost" href="#mission">Learn More</a>
          </div>
        </div>
      </section>

      <section className="intro section container" id="mission">
        <div className="introCard">
          <p className="sectionLabel">Our mission</p>
          <h2>A brotherhood that forms men for Christ, family, and the Church.</h2>
          <p>Sons of Joseph is a formation group for young Catholic men, where we gather to build lasting brotherhood, deepen our relationship with Christ, and grow in knowledge of our faith. Through prayer, study, nature, and service, we strive to live our faith authentically, becoming the men God created us to be, rooted in virtue, chastity, and devotion to Mary and St. Joseph.</p>
        </div>
        <div className="quoteCard">
          <p className="sectionLabel">Why now</p>
          <p className="quote">Young men need a path that rejects both passivity and distortion: one that forms strength, purity, responsibility, and joy in Christ.</p>
        </div>
      </section>

      <section className="section mutedSection" id="formation">
        <div className="container">
          <p className="sectionLabel">The pillars</p>
          <h2 className="sectionTitle">Clear formation. Serious prayer. Real friendship.</h2>
          <div className="grid4">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="card">
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="split">
          <div>
            <p className="sectionLabel">Weekly rhythm</p>
            <h2>Meetings shaped by prayer, honesty, and formation.</h2>
            <ul className="checkList">
              {rhythm.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="featurePanel">
            <p className="sectionLabel">14-week formation path</p>
            <h3>Virtue at the center</h3>
            <p>The core formation cycle walks through the cardinal virtues, the capital virtues, and the theological virtues, giving men a concrete framework for real growth.</p>
            <div className="tags">
              {virtues.map((virtue) => <span key={virtue}>{virtue}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="imageBand" id="retreats">
        <div className="container bandContent">
          <div>
            <p className="sectionLabel light">Retreats & the outdoors</p>
            <h2>Formation that leaves the room and enters the wild.</h2>
            <p>Sons of Joseph is being built with a long-term vision for retreats in nature, where young men and married men can encounter silence, brotherhood, prayer, vocation, apologetics, and renewal.</p>
          </div>
          <div className="bandStats">
            <div><strong>Prayer</strong><span>Devotion to Mary and Saint Joseph</span></div>
            <div><strong>Study</strong><span>Apologetics, virtue, and theology</span></div>
            <div><strong>Nature</strong><span>Retreats, wonder, and restoration</span></div>
          </div>
        </div>
      </section>

      <section className="section container" id="support">
        <div className="supportBlock">
          <div>
            <p className="sectionLabel">Support the mission</p>
            <h2>Help build a home for serious Catholic formation.</h2>
            <p>Sons of Joseph is growing toward a future of retreats, mentorship, and deeper formation for Catholic men. Support can take the form of prayer, partnership, speaking, mentorship, or financial giving.</p>
          </div>
          <div className="supportActions">
            <a className="button buttonPrimary" href="mailto:hello@sonsofjoseph.org?subject=Support%20Sons%20of%20Joseph">Become a Supporter</a>
            <a className="button buttonSecondary" href="mailto:hello@sonsofjoseph.org?subject=Learn%20More%20About%20Sons%20of%20Joseph">Contact the Founder</a>
          </div>
        </div>
      </section>
    </main>
  );
}
