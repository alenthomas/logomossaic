import React, {Component} from 'react';
import * as THREE from 'three-canvas-renderer';

const PI2 = Math.PI * 2;
const SEPARATION = 150, AMOUNTX = 50, AMOUNTY = 35;

class BackgroundWave extends Component {
  constructor() {
    super();

    this.state = {height: 100, width: 100};

    this.particles = [];
    this.count = 0;

    this._onAnimate = this._onAnimate.bind(this);
    this.resetDimensions = this.resetDimensions.bind(this);
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.state.width / this.state.height,
      1,
      10000
    );

    this.camera.position.z = 10000;
  }

  updateCamera(width, height) {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  initRenderer(devicePixelRatio) {
    this.renderer = new THREE.CanvasRenderer();
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.state.width, this.state.height);
  }

  updateRenderer(width, height) {
    this.renderer.setSize(width, height);
  }

  componentWillMount() {
    this.initCamera();
    this.scene = new THREE.Scene();

    var material = new THREE.SpriteCanvasMaterial({
      color: 0xffffff,
      program: function ( context ) {
        context.beginPath();
        context.arc( 0, 0, 0.5, 0, PI2, true );
        context.fill();
      }
    });

    var particles = this.particles;

    var i = 0;

    for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
      for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
        var particle = particles[ i ++ ] = new THREE.Sprite( material );
        particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
        particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
        this.scene.add(particle);
      }
    }
  }

  componentDidMount() {
    this.initRenderer(window.devicePixelRatio);
    this.refs.canvasContainer.appendChild(this.renderer.domElement);

    window.addEventListener('resize', this.resetDimensions);

    this.resetDimensions();

    this._onAnimate();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resetDimensions);
  }

  resetDimensions() {
    let width = window.innerWidth;
    let height = window.innerHeight / 3;

    this.setState({
      width: width,
      height: height
    });

    this.updateCamera(width, height);
    this.updateRenderer(width, height);
  }

  _onAnimate() {
    requestAnimationFrame(this._onAnimate);

    this.camera.position.set(0, 355, 122);
    var i = 0;

    var particles = this.particles;

    for ( var ix = 0; ix < AMOUNTX; ix ++ ) {
      let positionY_XComponent = Math.sin((ix + this.count) * 0.3) * 50;
      let scaleX_XComponent = (Math.sin((ix + this.count) * 0.3) + 1) * 4;

      for ( var iy = 0; iy < AMOUNTY; iy ++ ) {
        var particle = particles[ i++ ];

        let positionY_YComponent = Math.sin((iy + this.count) * 0.5) * 50;
        let scaleX_YComponent = (Math.sin((iy + this.count) * 0.5) + 1) * 4

        particle.position.y = positionY_XComponent + positionY_YComponent;
        particle.scale.x = particle.scale.y = scaleX_XComponent + scaleX_YComponent;
      }
    }

    this.renderer.render(this.scene, this.camera);
    this.count += 0.1;
  }

  render() {
    return (
      <div className="background-wave" ref="canvasContainer"/>
    );
  }
}

export default BackgroundWave;
