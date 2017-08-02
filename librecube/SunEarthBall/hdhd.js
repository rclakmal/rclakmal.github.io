window.addEventListener("DOMContentLoaded", function(){
	var scene = new THREE.Scene();

	// Sun
	var sun = cube = new THREE.SphereGeometry(150, 30, 30);
	var sun_material = new THREE.MeshStandardMaterial( { color : 0xFF0000, opacity : 0.8, transparent : true } );
	var sunMesh = new THREE.Mesh( sun, sun_material);

	scene.add( sunMesh );

	// Particles
	var cos = Math.cos;
	var sin = Math.sin;
	var abs = Math.abs;
	var floor = Math.floor;
	var rand = THREE.Math.randFloat;
	var particles = new THREE.Geometry();

	for (i = 0; i < 100000; i ++)
	{
		var r = 160;
		var n = 500;
		var pos_x = 0;
		var pos_y = 0;
		var pos_z = 0;
		var theta = Math.random() * 2 * Math.PI;
		var phi   = Math.random() * 2 * Math.PI;
		var x = r * Math.sin(theta) * Math.cos(phi);
		var y = r * Math.sin(theta) * Math.sin(phi);
		var z = r * Math.cos(theta);
		var vertex = new THREE.Vector3(x, y, z);

		vertex.x += pos_x;
		vertex.y += pos_y;
		vertex.z += pos_z;
		particles.vertices.push( vertex );
	}

	var material01 = new THREE.PointsMaterial({
		size: 1,
		opacity: 0.1,
		transparent: true,
		color : 0xFF0000
	});

	var pointCloud01 = new THREE.Points( particles, material01 );

	scene.add( pointCloud01 );

	//Earth
	var earth = new THREE.Geometry();
	for (i = 0; i < 10000; i ++)
	{
		var r = 20;
		var n = 0;
		var pos_x = 0;
		var pos_y = 0;
		var pos_z = 0;
		var theta = Math.random() * 2 * Math.PI;
		var phi   = Math.random() * 2 * Math.PI;
		var x = r * Math.sin(theta) * Math.cos(phi)+100;
		var y = r * Math.sin(theta) * Math.sin(phi);
		var z = r * Math.cos(theta);
		var vertex = new THREE.Vector3(x, y, z);

		vertex.x += pos_x-300;
		vertex.y += pos_y;
		vertex.z += pos_z;
		earth.vertices.push( vertex );
	}

	var earth_material = new THREE.PointsMaterial({
		size: 1,
		opacity: 0.1,
		transparent: true,
		color : 0x0000FF
	});

	var pointCloud02 = new THREE.Points( earth, earth_material );
	scene.add( pointCloud02 );

	// scale
	all_scle = 1.5;
	scale_switch = 0;

	// Camera
	var width  = window.innerWidth;
	var height = window.innerHeight;
	var aspect = width / height;
	var camera_z = 500;
	var camera_z_switch = 0;
	var camera = new THREE.PerspectiveCamera( 70, aspect, 0.1, 1000 );

	camera.position.z = -300;
	camera.position.x = -300;
	camera.position.y = 0;
	camera.lookAt(sunMesh.position);

	//Light
	var directionalLight = new THREE.DirectionalLight( 0xffffff, 10 );
	directionalLight.position.set( 1, 1, 10 );
	scene.add( directionalLight );

	//Renderer
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize( width, height );
	renderer.setClearColor( 0x000000, 0.8 );
	document.body.appendChild( renderer.domElement );
	renderer.render( scene, camera );

	var render = function(){
		// Particles
		for ( i = 0; i < scene.children.length; i ++ ) {
			var object = scene.children[ i ];
			if ( object instanceof THREE.Points ) {
				object.rotation.y -= 0.005;
			}
		}

		sunMesh.rotation.x += 0.005;
		sunMesh.rotation.y += 0.02;

		renderer.render( scene, camera );
		requestAnimationFrame( render );

	}
	render();

	// Resize
	window.addEventListener( 'resize', onResize, false );
	function onResize() {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize( window.innerWidth, window.innerHeight );

	}
});
