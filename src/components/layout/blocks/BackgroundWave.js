import React, {Component} from 'react';
import * as THREE from 'three';
import circle from './circle.svg';


const SEPARATION = 150, AMOUNTX = 50, AMOUNTY = 35;

class BackgroundWave extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 100, height: 100 };
    this.myRef = React.createRef();
    this.particles = [];
    this.count = 0;
  }

  componentDidMount() {
    this.oldWillMount();
    this.oldDidMount();

  }

  oldWillMount = () => {
    this.initCamera();
    this.initCamera();
    this.scene = new THREE.Scene();
    const spriteMap = new THREE.TextureLoader().load(circle);
    const spriteMaterial = new THREE.SpriteMaterial({color: 0xffffff, map: spriteMap});

    let particles = this.particles;

    let i = 0;

    for ( let ix = 0; ix < AMOUNTX; ix ++ ) {
      for ( let iy = 0; iy < AMOUNTY; iy ++ ) {
        let particle = particles[ i ++ ] = new THREE.Sprite( spriteMaterial );
        particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
        particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
        this.scene.add(particle);
      }
    }

    this.initRenderer(window.devicePixelRatio);
  }

  oldDidMount = () => {
    this.initRenderer(window.devicePixelRatio);
    this.myRef.current.appendChild(this.renderer.domElement);
    this.resetDimensions();
    this.onAnimate();
  }

  initRenderer = (devicePixelRatio) => {
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.state.width, this.state.height);
  }

  initCamera = () => {
    this.camera = new THREE.PerspectiveCamera(75, this.state.width / this.state.height, 1, 10000);
    this.camera.position.z = 10000;
  }

  resetDimensions = () => {
    let width = window.innerWidth;
    let height = window.innerHeight / 3;

    this.setState({
      width: width,
      height: height
    }, () => {
      this.updateCamera(width, height);
      this.updateRenderer(width, height);
    });
  }

  updateCamera = (width, height) => {
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  }

  updateRenderer = (width, height) => {
    this.renderer.setSize(width, height);
  }

  onAnimate = () => {
    window.requestAnimationFrame(this.onAnimate);
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
      <div className='background-wave' ref={this.myRef} />
    )
  }
}

export default BackgroundWave;
