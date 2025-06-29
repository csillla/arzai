
const firstWave = document.getElementById("firstWave");
const secondWave = document.getElementById("secondWave");

let latestScroll = 0;
let ticking = false;

window.addEventListener("scroll", () => {
  latestScroll = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      // Speed multipliers for parallax effect
      const speedFirst = 0.4;  // slower
      const speedSecond = 1.50; // faster

      firstWave.style.transform = `translateY(${-latestScroll * speedFirst}px)`;
      secondWave.style.transform = `translateY(${-latestScroll * speedSecond}px)`;

      ticking = false;
    });
    ticking = true;
  }
});




document.querySelectorAll('.topic').forEach(topic => {
  topic.addEventListener('click', () => {

    const topicExpl = topic.querySelector('.topicExpl');
    topicExpl.classList.toggle('displayNone')

    const arrow = topic.querySelector('.arrow');
    arrow.classList.toggle('rotateArrow');
    
  });
});




const menu = document.getElementById('nav');
menu.addEventListener('click', () => {
  const navDrop = document.querySelector('.dropNav');
  navDrop.classList.toggle('closed');
})



window.addEventListener('scroll', () => {
  const scrollY = window.scrollY; 

  const nav = document.getElementById('nav');
  const location = document.getElementById('currentLocation');
  const navLocation = document.querySelectorAll('.navLocation');

  const intro = document.querySelector('.overlapIntro');
  const shedule = document.getElementById('shedule');
  const infos = document.getElementById('infos');
  const signup = document.getElementById('signUp');

  const trigger1 = intro.offsetTop - window.innerHeight * 0.5;
  const trigger2 = shedule.offsetTop - window.innerHeight * 0.5;
  const trigger3 = infos.offsetTop - window.innerHeight * 0.5;
  const trigger4 = signup.offsetTop - window.innerHeight * 0.5;

  const trigger5 = intro.offsetTop - window.innerHeight * 0.05;
  const trigger6 = shedule.offsetTop - window.innerHeight * 0.05;
  const trigger7 = infos.offsetTop - window.innerHeight * 0.05;
  const trigger8 = signup.offsetTop - window.innerHeight * 0.05;

  if (scrollY > trigger1 && scrollY < trigger2) {
    location.textContent = 'ABOUT';
  } else if (scrollY > trigger2 && scrollY < trigger3) {
    location.textContent = 'TOPICS';
  } else if (scrollY > trigger3 && scrollY < trigger4) {
    location.textContent = 'INFORMATIONS';
  } else if (scrollY > trigger4) {
    location.textContent = 'SIGN UP';
  } else {
    location.textContent = 'HOME';
  }

  if (scrollY > trigger5 && scrollY < trigger6) {
    nav.style.backgroundColor = '#85b08f';
    nav.style.color = 'black';
    nav.style.border = '1px solid #00000088';
    navLocation.forEach((el) => {
      el.style.borderBottom = '1px solid #00000088';
    })
  } else if (scrollY > trigger6 && scrollY < trigger7) {
    nav.style.backgroundColor = '#d9d9d9';
    nav.style.color = '#48306c';
    nav.style.border = '1px solid #48306c88';
    navLocation.forEach((el) => {
      el.style.borderBottom = '1px solid #48306c88';
    })
  } else if (scrollY > trigger7 && scrollY < trigger8) {
    nav.style.backgroundColor = 'black';
    nav.style.color = 'white';
    nav.style.border = '1px solid #ffffff88';
    navLocation.forEach((el) => {
      el.style.borderBottom = '1px solid #ffffff88';
    })
  } else if (scrollY > trigger8) {
    nav.style.backgroundColor = '#3c2c52';
    nav.style.color = 'white';
    nav.style.border = '1px solid #ffffff88';
    navLocation.forEach((el) => {
      el.style.borderBottom = '1px solid #ffffff88';
    })
  } else {
    nav.style.backgroundColor = 'black';
    nav.style.color = 'white';
    nav.style.border = '1px solid #ffffff88';
    navLocation.forEach((el) => {
      el.style.borderBottom = '1px solid #ffffff88';
    })
  }
})



// gsap.registerPlugin(ScrollTrigger);

// const splitTypes = document.querySelectorAll('.textReveal');

// splitTypes.forEach((el) => {
//   const text = new SplitType(el, { types: 'words, chars' });

//   ScrollTrigger.create({
//     trigger: '.homeSection', // <- use the empty div!
//     start: 'top+=20vh top',    // <- trigger when 10vh of it has passed the top
//     toggleActions: 'play none none reverse',
//     onEnter: () => {

//       gsap.to(text.chars, {
//         opacity: 0,
//         duration: 0.05,
//         stagger: 0.002,
//         ease: 'power2.out',
//       });

//       gsap.to('.actionBtn', {
//         width: '0',
//         paddingLeft: 0,
//         paddingRight: 0,
//         color: 'transparent',
//         duration: 0.2,
//         ease: 'power2.out',
//       });

//     },
//     onLeaveBack: () => {
//       gsap.to(text.chars, {
//         opacity: 1,
//         duration: 0.05,
//         stagger: 0.002,
//         ease: 'power2.out',
//       });

//       gsap.to('.actionBtn', {
//         width: 'auto',
//         paddingLeft: '1.4rem',
//         paddingRight: '1.4rem',
//         color: 'white',
//         duration: 0.2,
//         ease: 'power2.out',
//       });
//     }
//   });
// });





// // Split into words
// document.querySelectorAll('.textClip').forEach((el) => {
//   const split = new SplitType(el, { types: 'words' });

//   // Animate words down (out of view)
//   gsap.to(split.words, {
//     yPercent: 100, // Drops word downward
//     duration: 0.8,
//     stagger: 0.12,
//     ease: "power2.out",
//     opacity: 0.1,
//     scrollTrigger: {
//       trigger: ".overlapIntro",
//       start: 'top bottom',    // <- trigger when 10vh of it has passed the top
//       toggleActions: 'play none none reverse',
//       scrub: false,
//       markers: false,
//     }
//   });
// });








// const splitTypesIntro = document.querySelectorAll('.splitTypesIntro');
// splitTypesIntro.forEach((char, i) => {
//   const text = new SplitType(char, {types: 'words, chars'});
//   gsap.from(text.chars, {
//     scrollTrigger: {
//       trigger: char,
//       start: 'top 60%',
//       end: 'top 5%',
//       scrub: true,
//       markers: false,
//     },
//     opacity: 0.2,
//     stagger: 0.2,
//   })
// })



const lenis = new Lenis({
  // your config
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

ScrollTrigger.scrollerProxy(document.body, {
  scrollTop(value) {
    return arguments.length ? lenis.scrollTo(value) : lenis.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  pinType: document.body.style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => lenis.update());
ScrollTrigger.refresh();