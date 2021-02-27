import {Group, SpotLight, SpotLightHelper} from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import MODEL from './Flower.glb';

export default class Flower extends Group {
  constructor() {
    const loader = new GLTFLoader();

    super();

    this.name = 'flower';
    const spotLight = new SpotLight( 0xffffff );
    this.spotLight = spotLight;
    spotLight.position.set(1, 4, 0)
    spotLight.angle = .6;
    spotLight.distance = 6;
    spotLight.power = 10;
    this.deg = 0

    this.add( spotLight );
    this.add(new SpotLightHelper(this.spotLight))

    loader.load(MODEL, (gltf)=>{
      this.add(gltf.scene);
    });
  }

  update() {
    this.deg += .01;
    if (this.deg > 180) this.deg = 1;
    // this.rotation.y += .01
    this.spotLight.position.x = Math.sin(this.deg);
    this.spotLight.position.z = Math.cos(this.deg);
    this.spotLight.rotation.y -= .01
    // this.spotLight.angle += .01
    // this.spotLight.position.y -= .01;
  }
}
