<script setup lang="ts">
import * as THREE from 'three';
import WebGl from 'three/addons/capabilities/WebGl.js';
const scene = new THREE.Scene(); // 场景
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 ); // 相机 (视角，宽高比，近截面，远截面)
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const renderer = new THREE.WebGLRenderer(); // 渲染器
renderer.setSize( window.innerWidth, window.innerHeight);

document.body.appendChild( renderer.domElement );

// 创建几何体
const geometry = new THREE.BoxGeometry(); // 创建一个立方体几何对象
const material = new THREE.MeshBasicMaterial( { color: 0x00ffff } ); // 材质
const cube = new THREE.Mesh( geometry, material ); // 立方体
scene.add( cube ); // 将立方体添加到场景中
camera.position.z = 5; // 设置相机位置

// 创建线条
const lineMaterial = new THREE.LineBasicMaterial( { color: 0x0000ff } ); // 线条材质

const points = []; // 存储顶点坐标的数组
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );

const lineGeometry = new THREE.BufferGeometry().setFromPoints( points ); // 创建一个缓冲几何体
const line = new THREE.Line( lineGeometry, lineMaterial ); // 创建线条
scene.add( line );

function animate() {
    requestAnimationFrame( animate );
    // cube.rotation.x += 0.01; // x轴上的角度
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
}
if (WebGl.isWebGLAvailable()) {
    animate()
} else {
    alert(WebGl.getWebGLErrorMessage());
}
</script>

<template>
    <div class="three-container" />
</template>