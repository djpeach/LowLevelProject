import { Group, BoxGeometry, MeshBasicMaterial, Mesh } from 'three';
import Flower from './Flower/Flower.js';
import BasicLights from './Lights.js';

export default class SeedScene extends Group {
  constructor() {
    super();
    const flower = new Flower();
    const lights = new BasicLights();

    this.flower = flower;

    this.add(flower, lights);

    const geometry = new BoxGeometry(3, .5, 3);
    const material = new MeshBasicMaterial( { color: 0x593704 } );
    const cube = new Mesh( geometry, material );
    this.add( cube );
  }

  update(timeStamp) {
    // this.rotation.y = timeStamp / 10000;
    this.flower.update()
  }
}
