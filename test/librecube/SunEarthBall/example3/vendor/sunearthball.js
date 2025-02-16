var renderer	= new THREE.WebGLRenderer({
  antialias	: true
});
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
renderer.shadowMapEnabled	= true

var updateFcts	= [];
var scene	= new THREE.Scene();
var camera	= new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 100 );
camera.position.z = 1.5;

var light	= new THREE.AmbientLight( 0x888888 )
scene.add( light )
// var light	= new THREE.DirectionalLight( 'white', 1)
// light.position.set(5,5,5)
// light.target.position.set( 0, 0, 0 )
// scene.add( light )

var light	= new THREE.DirectionalLight( 0xcccccc, 1 )
light.position.set(5,5,5)
scene.add( light )
light.castShadow	= true
light.shadowCameraNear	= 0.01
light.shadowCameraFar	= 15
light.shadowCameraFov	= 45

light.shadowCameraLeft	= -1
light.shadowCameraRight	=  1
light.shadowCameraTop	=  1
light.shadowCameraBottom= -1
// light.shadowCameraVisible	= true

light.shadowBias	= 0.001
light.shadowDarkness	= 0.2

light.shadowMapWidth	= 1024*2
light.shadowMapHeight	= 1024*2


//////////////////////////////////////////////////////////////////////////////////
//		added starfield							//
//////////////////////////////////////////////////////////////////////////////////


var starSphere	= THREEx.Planets.createStarfield()
scene.add(starSphere)

//////////////////////////////////////////////////////////////////////////////////
//		comment								//
//////////////////////////////////////////////////////////////////////////////////


var mesh	= THREEx.Planets.createSun()
var mesh1	= THREEx.Planets.createEarth()
mesh.position.set(1, 0, 0)
mesh1.position.set(0, 0, 0)
scene.add(mesh)
scene.add(mesh1)
location.hash	= type

var initialType	= location.hash.substr(1)	|| 'Earth'
switchValue(initialType)


//////////////////////////////////////////////////////////////////////////////////
//		Camera Controls							//
//////////////////////////////////////////////////////////////////////////////////
var mouse	= {x : 0, y : 0}
document.addEventListener('mousemove', function(event){
  mouse.x	= (event.clientX / window.innerWidth ) - 0.5
  mouse.y	= (event.clientY / window.innerHeight) - 0.5
}, false)
updateFcts.push(function(delta, now){
  camera.position.x += (mouse.x*5 - camera.position.x) * (delta*3)
  camera.position.y += (mouse.y*5 - camera.position.y) * (delta*3)
  camera.lookAt( scene.position )
})


//////////////////////////////////////////////////////////////////////////////////
//		render the scene						//
//////////////////////////////////////////////////////////////////////////////////
updateFcts.push(function(){
  renderer.render( scene, camera );
})

//////////////////////////////////////////////////////////////////////////////////
//		loop runner							//
//////////////////////////////////////////////////////////////////////////////////
var lastTimeMsec= null
requestAnimationFrame(function animate(nowMsec){
  // keep looping
  requestAnimationFrame( animate );
  // measure time
  lastTimeMsec	= lastTimeMsec || nowMsec-1000/60
  var deltaMsec	= Math.min(200, nowMsec - lastTimeMsec)
  lastTimeMsec	= nowMsec
  // call each update function
  updateFcts.forEach(function(updateFn){
    updateFn(deltaMsec/1000, nowMsec/1000)
  })
})
