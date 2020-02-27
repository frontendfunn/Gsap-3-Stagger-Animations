$(document).ready(function() {
  $('.wrapper').each(function(_, wrapper) {
    gsap.to(wrapper, {
      rotationX: '360deg',
      rotationY: '360deg',
      duration: 20,
      yoyo: true,
      repeat: -1,
      ease: 'none'
    });
    $(wrapper)
      .find('.side')
      .each(function(_, side) {
        var blocks = $(side).find('.block');
        var tl = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 0 });
        var ease = 'back.inOut(4)';
        var duration = 2;
        // from animation
        tl.from(blocks, {
          duration: duration,
          ease: ease,
          z: 50,
          stagger: {
            grid: [9, 9],
            from: 'center',
            amount: 0.75
          }
        });

        // to animation
        tl.to(blocks, {
          duration: duration,
          ease: ease,
          z: 50,
          stagger: {
            grid: [9, 9],
            from: 'center',
            amount: 0.75
          }
        });
        tl.play();
      });
  });
});
