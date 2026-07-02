export default function counter() {
  return {
    year: 0,
    team: 0,
    participant: 0,

    started: false,

    init() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.started) {
              this.started = true;

              this.startAnimation();
            }
          });
        },
        {
          threshold: 0.5,
        },
      );

      observer.observe(this.$el);
    },

    startAnimation() {
      this.animate("year", 2025, 1500);

      this.animate("team", 50, 1200);

      this.animate("participant", 100, 1800);
    },

    animate(property, target, duration) {
      let start = 0;

      const startTime = performance.now();

      const update = (currentTime) => {
        const progress = Math.min((currentTime - startTime) / duration, 1);

        this[property] = Math.floor(progress * target);

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          this[property] = target;
        }
      };

      requestAnimationFrame(update);
    },
  };
}
