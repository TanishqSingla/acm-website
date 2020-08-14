var rand = 1;
setInterval(() => {
  if (rand === 4) {
    rand = 1;
  }
  document.body.style.setProperty("--img", `url(/images/img-${rand}.jpg)`);
  rand++;
}, 10000);
