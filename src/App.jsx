import { useEffect, useRef, useState } from "react";
import { skins } from "./workSkins";
import "./App.css";

function App() {
  const [baseSkin, setBaseSkin] = useState(skins[0]);
  const [html, setHtml] = useState(skins[0].html);
  const [css, setCss] = useState(skins[0].css);
  const styleRef = useRef(null);

  useEffect(() => {
    if (styleRef.current) {
      styleRef.current.textContent = css;
    }
  }, [css]);

  function handleBaseSkinChange(title) {
    const newSkin = skins.find((skin) => skin.title === title);
    setBaseSkin(newSkin);
    setHtml(newSkin.html);
    setCss(newSkin.css);
  }

  return (
    <div className="app">
      <div className="preview-panel">
        <h2 className="panel-label">Preview</h2>
        <style ref={styleRef}>{css}</style>
        <div className="preview-container">
          <div className="preview-content" id="workskin">
            <p>
              Xue Yang presses a hand to the cut on his shoulder, and his
              fingers come back sticky with blood. “Fuck,” he mutters. But he
              doesn&rsquo;t get time to dwell on the way his heart is racing or
              his lips are tingling, because there&rsquo;s a depressingly
              familiar yell of recognition followed by pounding footsteps.
            </p>
            <p>And just like that, he&rsquo;s on the run again.</p>
            {/* biome-ignore lint: kinda have to here */}
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <p>
              It takes two weeks before he cracks. Two weeks of close calls and
              crawling through the pollution-clogged arteries of the capital
              only to come to the bitter realisation that Jin Guangshan
              isn&rsquo;t going to give up on killing him. And after that,
              it&rsquo;s another week of lurking in a district of the city he
              knows Song Lan sometimes passes through before he finds him.
              Buying produce, of all fucking things.
            </p>
          </div>
        </div>
      </div>
      <div className="editor-panel">
        <div class="selector">
          <select
            value={baseSkin.title}
            onChange={(e) => handleBaseSkinChange(e.target.value)}
          >
            {skins.map((skin) => (
              <option key={skin.title} value={skin.title}>
                {skin.title}
              </option>
            ))}
          </select>
        </div>
        <div className="editor-group">
          <label htmlFor="html" className="panel-label">
            HTML of the divider element
          </label>
          <textarea
            id="html"
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            spellCheck={false}
          />
        </div>
        <div className="editor-group">
          <label htmlFor="css" className="panel-label">
            CSS
          </label>
          <textarea
            id="css"
            value={css}
            onChange={(e) => setCss(e.target.value)}
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
