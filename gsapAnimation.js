let tl = gsap.timeline({repeat: 0})

// gsap.to('.logo', 2, {x: 400})

// tl.set('.header', {opacity: 1}, 2)
// tl.addLabel('header')
// tl.fromTo('.logo', 0.5, {x: -300, y: -75}, {x:0})
// tl.to('.logo', 1, {y: 0})
// tl.fromTo('.desktop', 0.5, {x: 500, y: -50}, {x:0}, '-=1.5')
// tl.to('.desktop', 1, {y: 0}, '-=1')
// tl.fromTo('.blur', 3, {opacity: 0}, {opacity: 1}, 'header')
// tl.fromTo('.info', 1, {x: -1500}, {x: 0}, 'header')


installMediaQueryWatcher("(min-width: 786px)", function(matches) {
  
    if (matches) {
      tl.set('.header', {opacity: 1}, 2)
      tl.addLabel('header')
      tl.fromTo('.logo', 0.5, {x: -300, y: -75}, {x:0}, '-=1')
      tl.to('.logo', 1, {y: 0})
      tl.fromTo('.desktop', 0.5, {x: 500, y: -50}, {x:0}, '-=1.5')
      tl.to('.desktop', 1, {y: 10}, '-=1')
      tl.fromTo('.blur', 3, {opacity: 0}, {opacity: 1}, 'header')
      tl.fromTo('.info', 1, {x: -1500}, {x: 0}, 'header')
      // tl.fromTo('.arrows', 3, {opacity: 0}, {opacity: 1}, '-=5')
      tl.fromTo('.social', 2, {bottom: -100, left: -50, scale: 0}, {bottom: 0, left: 0,scale:1})
      tl.fromTo('.arrows', 2, {opacity: 0}, {opacity:1}, '-=2')
    } else {
        tl.fromTo('.logo', 2, {x:-150, opacity:0, scale: 0.6}, {x:0, y:0, opacity:1, scale: 1})
    }
  });
  
  function installMediaQueryWatcher(mediaQuery, layoutChangedCallback) {
    var mql = window.matchMedia(mediaQuery);
    mql.addListener(function (e) { return layoutChangedCallback(e.matches); });
    layoutChangedCallback(mql.matches);
  }