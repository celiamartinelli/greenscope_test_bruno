import Image from "next/image";
import "./SolutionSection.css";

export default function SolutionSection() {
  return (
    <section className="solution">
      <h1>All your ESG journey needs in one platform</h1>
      <nav>
        <ul>
          <li>
            <button type="btn">ESG Data Solution</button>
          </li>
          <li>
            <button type="btn">Carbon Assessment</button>
          </li>
          <li>
            <button type="btn">CSRD</button>
          </li>
          <li>
            <button type="btn">Impact Analysis & Compliance</button>
          </li>
        </ul>
      </nav>

      <section>
        <div>
          <div>
            <h2>ESG Data Solution</h2>
            <div>
              <tag>Mots clé associé</tag>
              <tag>Mots clé associé</tag>
            </div>
          </div>
          <div>
            <p>
              Automatically collect data, launch campaigns, establish quality
              processes, and build an organization that mirrors your own, all
              within our platform. Benchmark best practices, set scoring rules,
              and track performance with custom dashboards.
            </p>
          </div>
        </div>
        <div>
          <Image
            src="/assets/solutions/group-esg.svg"
            alt="placeholder"
            width={492}
            height={380}
          />
          <button type="cta">
            Learn more
            <Image
              src="/arrow-right-solid.svg"
              alt="arrow-right-solid"
              width={16}
              height={16}
            />
          </button>
        </div>
      </section>
    </section>
  );
}
