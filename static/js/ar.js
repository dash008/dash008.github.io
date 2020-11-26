import * as THREE from 'https://unpkg.com/three@0.122.0/build/three.module.js';
import {Mundo} from './mundo.js';
import {GLTFLoader} from'https://unpkg.com/three@0.122.0/examples/jsm/loaders/GLTFLoader.js'

var mundo;
var cube;

function iniciar(){
    mundo = new Mundo();
    mundo.iluminar();

    var loader = new GLTFLoader();

    loader.load('../static/models/Combat Knife Game Asset.glb',function(gltf){
    	mundo.escena.add(gltf.scene);

    });

}

function crearCajaDePrueba(){
    var geometry = new THREE.BoxBufferGeometry( 1, 1, 1 );
    var material = new THREE.MeshStandardMaterial( {color: 0x00ff00} );
    cube = new THREE.Mesh( geometry, material );
    mundo.escena.add( cube );
}



function animacion(){
    requestAnimationFrame(animacion);
    cube.rotation.y += 0.05;
    cube.rotation.x += 0.01;
    cube.rotation.z += 0.02;
    mundo.dibujar();
}

iniciar();
crearCajaDePrueba();
animacion();
