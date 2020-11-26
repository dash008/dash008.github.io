import * as THREE from 'https://unpkg.com/three@0.122.0/build/three.module.js';


export class Mundo{

	constructor(){
	this.camara = new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,0.1,1000);
    this.camara.position.set(0,0,5);
    this.escena = new THREE.Scene();
    this.escena.background = new THREE.Color(0xbd65d8);
    this.renderizador = new THREE.WebGLRenderer( { antialias: true } );
    this.renderizador.setPixelRatio( window.devicePixelRatio );
    this.renderizador.setSize( window.innerWidth, window.innerHeight );
    //---- agrego el canvas al mundo
    document.body.appendChild( this.renderizador.domElement );
	}

	iluminar(){
		var light = new THREE.AmbientLight( 0x404040 ); // soft white light
    	this.escena.add( light );

    	var puntual = new THREE.PointLight( 0xffffff, 1, 100 );
    	puntual.position.set( 1, 1.5, 1.2 );
    	this.escena.add( puntual );
	}

	dibujar(){
		this.renderizador.render(this.escena,this.camara);
	}
}