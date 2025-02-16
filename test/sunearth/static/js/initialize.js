(function () {
    var global = this;

    var THREE = global.THREE,
        requestAnimationFrame = global.requestAnimationFrame;

    var renderer, scene, camera, controls, light, material;
    var mouse = new THREE.Vector2();

    var theMilkyWay, theSun, mercury, venus, earth, mars, asteroidBelt, jupiter, saturn, saturnRing, uranus, neptune;

    // planet/sun Size = 100,000km : 50 units (sun is ~696342km r = sunSize = 348.15)
    // AU = 150 mil km : 50 units
    // planet Orbit Radius = 1AU : 1AU (marcury is 0.4AU from sun = sunSize + (AU * 0.4))
    // planet Orbit Speed = 1km : 0.02 units

    var AU = 50;

    var milkyWaySize = 15000;

    var sunSize = 348.15;

    var earthSize = 3,
        earthOrbitRadius = sunSize + AU,
        earthOrbitAngle = getRandomArbitrary(0, 360),
        earthOrbitSpeed = 0.6,
        earthRotateSpeed = 0.05;




    var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight;


    init();
    animate();

    function init() {
        scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x000000, 0.00008);

        camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 100000);
        camera.position.z = 2000;

        controls = new THREE.TrackballControls(camera);
        controls.rotateSpeed = 1.0;
        controls.zoomSpeed = 1.2;
        controls.panSpeed = 0.8;
        controls.noZoom = false;
        controls.noPan = false;
        controls.staticMoving = true;
        controls.dynamicDampingFactor = 0.3;

        renderer = new THREE.WebGLRenderer();
        renderer.setSize(WIDTH, HEIGHT);
        document.body.appendChild(renderer.domElement);

        //ambient light
        //scene.add(new THREE.AmbientLight(0xaaaaaa));
        scene.add(new THREE.AmbientLight(0x222222));

        //sunlight?
        light = new THREE.PointLight(0xffffff, 1, 0);
        light.position.set(0, 0, 0);
        scene.add(light);


        //the Milky Way
        material = new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('static/img/milky-way.jpg'),
            side: THREE.DoubleSide
        });
        milkyWay = new THREE.Mesh(new THREE.SphereGeometry(milkyWaySize, 35, 35 ), material);
        scene.add(milkyWay);


        //the sun
        //SphereGeometry(size of sphere, higher the numeber the smoother the sphere and more processing)
        material = new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('static/img/sun.jpg'),
            side: THREE.DoubleSide
        });
        theSun = new THREE.Mesh(new THREE.SphereGeometry(sunSize, 35, 35 ), material);
        scene.add(theSun);


        //earth
        material = new THREE.MeshLambertMaterial({
            map: THREE.ImageUtils.loadTexture('static/img/earth.jpg'),
            shading: THREE.SmoothShading
        });
        earth = new THREE.Mesh(new THREE.SphereGeometry(earthSize, 15, 15), material);
        scene.add(earth);

        window.addEventListener('resize', onWindowResize, false);

        renderer.domElement.addEventListener('mousemove', onMouseMove);
    }

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerWidth;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerWidth );
    }

    function onMouseMove(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    }

    function animate() {
        requestAnimationFrame(animate);

        render();
    }


    function render() {
        controls.update();

        theSun.rotation.y += 0.001;

        //run earth's orbit around the Sun
        earthOrbitAngle -= earthOrbitSpeed;
        var radians = earthOrbitAngle * Math.PI / 180;
        earth.position.x = Math.cos(radians) * earthOrbitRadius;
        earth.position.z = Math.sin(radians) * earthOrbitRadius;
        earth.rotation.y += earthRotateSpeed;

        renderer.render( scene, camera );
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

}).call(this);
