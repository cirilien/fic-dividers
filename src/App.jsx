import { useEffect, useRef, useState } from "react";
import "./App.css";

const DEFAULT_HTML = "<hr />";

const DEFAULT_CSS = `#workskin hr {
  margin: 50px auto;
  line-height: 20px;
  position: relative;
  outline: 0;
  border: 0;
  text-align: center;
  height: 20px;
  opacity: 0.8;
  width: auto;
}

#workskin hr::before {
  content: "";
  background: linear-gradient(90deg, transparent 0%, currentColor 47%, transparent 47%, transparent 53%, currentColor 53%, transparent 100%);
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
}

#workskin hr::after {
  content: "◈";
  position: absolute;
  left: 50%;
  margin-left: -10px;
  width: 20px;
  height: 20px;
  text-align: center;
}`;

function App() {
  const [html, setHtml] = useState(DEFAULT_HTML);
  const [css, setCss] = useState(DEFAULT_CSS);
  const styleRef = useRef(null);

  useEffect(() => {
    if (styleRef.current) {
      styleRef.current.textContent = css;
    }
  }, [css]);

  return (
    <div className="app">
      <div className="preview-panel">
        <h2 className="panel-label">Preview</h2>
        <style ref={styleRef}>{css}</style>
        <div className="preview-container">
          <div class="preview-content" id="workskin">
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
