export class AnimatedBackground {
  canvas;
  config = {
    number: 50,
    speed: 30,
    fireflies: [],
    fireflyShadow: 35,
  };
  core = {
    now: 0,
    delta: 0,
    then: 0,
    isRunning: false,
    animationFrame: undefined,
    debouncedReset: undefined,
    canvasBoundaries: {
      width: 0,
      height: 0,
    },
  };
  instance = null;

  getInstance() {
    if (!this.instance) {
      this.instance = new AnimatedBackground();
      return this.instance;
    }
    return this.instance;
  }

  init(canvas?) {
    if (!this.core.isRunning) {
      this.setCanvas(this.canvas || canvas);
      this.createFireflies();
      this.play();
      this.setupListeners();
    }
  }

  setCanvas(canvas) {
    this.canvas = canvas;
    this.canvas.ctx = this.canvas.getContext('2d');
    this.canvas.ctx.fillStyle = '#2AA1DD';
    this.canvas.ctx.lineWidth = 0.1;
    this.canvas.ctx.strokeStyle = '#2AA1DD';
    this.canvas.ctx.imageSmoothingEnabled = true;

    const canvasDimensions = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio;
    canvas.width = canvasDimensions.width * dpr;
    canvas.height = canvasDimensions.height * dpr;
    this.canvas.ctx.scale(dpr, dpr);
    canvas.style.width = `${canvasDimensions.width}px`;
    canvas.style.height = `${canvasDimensions.height}px`;
    this.core.canvasBoundaries.width = canvasDimensions.width;
    this.core.canvasBoundaries.height = canvasDimensions.height;
  }

  createFireflies() {
    for (let i = 0; i < this.config.number; i++) {
      const firefly = {
        x: 0.1 + Math.random() * this.core.canvasBoundaries.width,
        y: 0.1 + Math.random() * this.core.canvasBoundaries.height,
        vx: Math.random() * (Math.random() < 0.5 ? -1 : 1) * .5 * this.config.speed,
        vy: Math.random() * -.5 * this.config.speed,
        radius: Math.max(3, Math.random() * 7),
      };

      this.config.fireflies.push(firefly);
    }
  }

  play() {
    if (!this.core.isRunning) {
      this.core.isRunning = true;
      this.core.then = window.performance.now();
      this.frameLoop();
    }
  }

  frameLoop() {
    this.setDelta();
    this.update();
    this.render();
    this.core.animationFrame = window.requestAnimationFrame(this.frameLoop.bind(this));
  }

  setDelta() {
    this.core.now = window.performance.now();
    this.core.delta = (this.core.now - this.core.then) / 1000;
    this.core.then = this.core.now;
  }

  update() {
    this.moveFireflies();
  }

  render() {
    this.clearCanvas();
    this.renderGraphics();
  }

  moveFireflies() {
    for (let i = 0; i < this.config.number; i++) {
      let velocityX = this.config.fireflies[i].vx * this.core.delta;
      this.config.fireflies[i].x = this.config.fireflies[i].x + velocityX;

      let velocityY = this.config.fireflies[i].vy * this.core.delta;
      this.config.fireflies[i].y = this.config.fireflies[i].y + velocityY;


      if (this.config.fireflies[i].x > this.core.canvasBoundaries.width) {
        this.config.fireflies[i].x = 0;
      }
      else if (this.config.fireflies[i].x < 0) {
        this.config.fireflies[i].x = this.core.canvasBoundaries.width;
      }

      if (this.config.fireflies[i].y > this.core.canvasBoundaries.height) {
        this.config.fireflies[i].y = 0;
      }
      else if (this.config.fireflies[i].y < 0) {
        this.config.fireflies[i].y = this.core.canvasBoundaries.height;
      }
    }
  }

  renderGraphics() {
    for (let i = 0; i < this.config.number; i++) {
      const seed = Math.random() * 20;
      this.canvas.ctx.beginPath();
      this.canvas.ctx.fillStyle = '#fffda6';
      this.canvas.ctx.strokeStyle = '#fffda6';
      this.canvas.ctx.shadowColor = '#fffda6';
      this.canvas.ctx.shadowBlur = this.config.fireflyShadow - seed;
      this.canvas.ctx.arc(this.config.fireflies[i].x, this.config.fireflies[i].y, this.config.fireflies[i].radius, 0, Math.PI * 2, false);
      this.canvas.ctx.fill();
      this.canvas.ctx.imageSmoothingEnabled = true;
    }
  }

  clearCanvas() {
    if(this.canvas) {
      this.canvas.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  stop() {
    window.cancelAnimationFrame(this.core.animationFrame);
    this.core.isRunning = false;
  };

  async reset() {
    this.stop();
    this.config.fireflies = [];
    this.clearCanvas();
    this.canvas.removeAttribute('style');

    // Wrap in micro-task to avoid multiple re-renderings after resize
    await new Promise((resolve) => {
      this.setCanvas(this.canvas);
      this.createFireflies();
      this.renderGraphics();
      this.play();
      resolve(null);
    });
  };

  keydownListener(e) {
    if (e.which === 32 && e.target === document.body) { // Space
      this.init();
      e.preventDefault();
    }
    else if (e.which === 27) { // Escape
      this.stop();
    }
  }

  setupListeners() {
    this.core.debouncedReset = this.debounce(this.reset, 300);
    window.addEventListener('keydown', this.keydownListener.bind(this));
    window.addEventListener('resize', this.core.debouncedReset.bind(this));
  }

  destroy() {
    this.stop();
    this.clearCanvas();
    window.removeEventListener('keydown', this.keydownListener);
    window.removeEventListener('resize', this.core.debouncedReset);
  }

  debounce(fn, delay) {
    let debouncing;
    return () => {
      const context = this;
      const args = arguments;
      clearTimeout(debouncing);
      debouncing = setTimeout(() => fn.apply(context, args), delay);
    };
  }
}
