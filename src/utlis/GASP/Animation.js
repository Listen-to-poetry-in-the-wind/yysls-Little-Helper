import gsap from 'gsap';

export const onToRightEnter = (el, done) => {
  gsap.set(el, { autoAlpha: 0, scale: 0.8, xPercent: -100 });
  gsap
    .timeline({
      paused: true,
      onComplete() {
        done();
      },
    })
    .to(el, { autoAlpha: 1, xPercent: 0, duration: 0.25 })
    .to(el, { scale: 1, duration: 0.25 })
    .play();
};
export const onToRightLeave = (el, done) => {
  gsap.timeline({ paused: true, onComplete: done }).to(el, { scale: 0.8, duration: 0.2 }).to(el, { xPercent: 100, autoAlpha: 0, duration: 0.2 }).play();
};

export const onSettings = (dom) => {
  gsap.to(dom, {
    width: window.innerWidth * 0.6,
    height: window.innerHeight * 0.6,
    opacity: 1,
    duration: .5,
    ease: "expo.out"
  });
};
export const onCloseSettings = (dom) => {
  gsap.to(dom, {
    width: 0,
    height: 0,
    opacity: 0,
    duration: .5,
    ease: "expo.out"
  });
};