import ImageGallery from '../components/ImageGallery';

export default function Home() {
  return (
    <main className="container">
      {/* ——— photo strip ——— */}
      <ImageGallery />

      {/* ——— bio ——— */}
      <section className="section bio">
        <h2>Bio</h2>
        <p>
          Hi, I'm Paul Romer. I love building things and solving problems.
        </p>
      </section>

      {/* ——— résumé ——— */}
      <section className="section resume">
        <h2>Resume</h2>

        {/* education */}
        <article className="edu">
          <h3>Education</h3>
          <div className="timeline">
            <p className="degree">
              Bachelor of Science in Software Development
            </p>
            <p>Bellevue University — 2023 · Present</p>
            <ul>
              <li>GPA 3.751</li>
              <li>
                Relevant coursework: Python, Java, Database Systems&nbsp;(MySQL),
                HTML, CSS, JavaScript
              </li>
            </ul>
          </div>
        </article>

        {/* work experience */}
        <article className="work">
          <h3>Work Experience</h3>
          <p className="ext‑link">
            <a
              href="https://www.linkedin.com/in/paul-romer"
              target="_blank"
              rel="noreferrer"
            >
              Visit LinkedIn for more detail
            </a>
          </p>
          <br />

          <div className="timeline">
            <div className="job">
              <h4>High Net Worth Service Associate II</h4>
              <p className="sub">Fidelity Investments — Nov 2022 · Present</p>
              <ul>
                <li>
                  Efficient problem resolution and education for
                  High‑Net‑Worth clients&nbsp;($500 k+)
                </li>
                <li>Frequent use of 9 + tools to accomplish client goals</li>
                <li>
                  Regularly move large dollar amounts with high accuracy and
                  efficiency
                </li>
              </ul>
            </div>

            <div className="job">
              <h4>High Net Worth Service Associate</h4>
              <p className="sub">
                Fidelity Investments — Oct 2020 · Nov 2022
              </p>
              <ul>
                <li>
                  Efficient problem resolution and education for
                  High‑Net‑Worth clients
                </li>
              </ul>
            </div>

            <div className="job">
              <h4>Customer Relationship Associate</h4>
              <p className="sub">
                Fidelity Investments — Oct 2019 · Oct 2020
              </p>
              <ul>
                <li>
                  Helped clients feel confident, make clear decisions, and get
                  the most from Fidelity’s tools
                </li>
              </ul>
            </div>
          </div>
        </article>

        {/* skills */}
        <article className="skills">
          <h3>Skills</h3>
          <div className="skill‑grid">
            <ul>
              <li>Programming: Java, Python, JavaScript</li>
              <li>Database: MySQL</li>
            </ul>
            <ul>
              <li>Web: HTML, CSS</li>
              <li>Tools: Git, GitHub</li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
}