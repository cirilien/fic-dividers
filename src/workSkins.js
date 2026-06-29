export const skins = [
  {
    title: "Full Disclosure",
    html: "<hr />",
    css: `#workskin hr {
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
}`,
  },
  {
    title: "so bring me the dawn",
    html: "<hr />",
    css: `#workskin hr {
  position: relative;
  max-width: 300px;
  margin: 2.5em auto;
  height: 1px;
  border: 0;
  overflow: visible;
}

#workskin hr:before {
  content: "";
  position: absolute;
  top: -3px;
  left: 5%;
  right: -5%;
  width: 90%;
  height: 1px;
  background-image: linear-gradient(to right, transparent, currentColor, transparent);
}

#workskin hr:after {
  content: "";
  position: absolute;
  top: 3px;
  left: -5%;
  right: 5%;
  width: 90%;
  height: 1px;
  background-image: linear-gradient(to right, transparent, currentColor, transparent);
}`,
  },
  {
    title: "a gorgeous, broken gift",
    html: `<hr class="one" />
<hr class="two" />
<hr class="three" />
<hr class="four" />
<hr class="five" />
<hr class="six" />
    `,
    css: `#workskin hr {
  margin: 50px auto;
  line-height: 20px;
  position: relative;
  outline: 0;
  border: 0;
  text-align: center;
  opacity: 0.8;
  height: 1px;
  background: currentColor;
  overflow: visible;
}

#workskin hr::before {
  content: "☽ ⋅";
  position: absolute;
  left: -25px;
  width: 25px;
  height: 20px;
  top: -11px;
}

#workskin hr::after {
  content: "⋅ ☾";
  position: absolute;
  right: -25px;
  width: 25px;
  height: 20px;
  top: -11px;
}

#workskin hr.one {
  width: 200px;
}

#workskin hr.two {
  width: 150px;
}

#workskin hr.three {
  width: 80px;
}

#workskin hr.four {
  width: 40px;
}

#workskin hr.five {
  width: 30px;
}

#workskin hr.six {
  width: 0px;
}`,
  },
];
