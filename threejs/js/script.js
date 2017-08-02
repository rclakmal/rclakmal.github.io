var scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000),
    renderer = new THREE.WebGLRenderer({alpha: true}),
    sol, tierra, luna;
console.log("Version 4");
var fov = camera.fov, zoom = 1.0, inc = -0.01;
function renderScene() {
    tierra.animate();
    sol.animate();
    luna.animate();
    requestAnimationFrame(renderScene);
    renderer.render(scene, camera);
}
document.body.addEventListener( 'mousewheel', mousewheel, false );
document.body.addEventListener( 'DOMMouseScroll', mousewheel, false ); // firefox
function mousewheel( e ) {
    var d = ((typeof e.wheelDelta != "undefined")?(-e.wheelDelta):e.detail);
    d = 100 * ((d>0)?1:-1);

    var cPos = camera.position;
    if (isNaN(cPos.x) || isNaN(cPos.y) || isNaN(cPos.y))
      return;

    var r = cPos.x*cPos.x + cPos.y*cPos.y;
    var sqr = Math.sqrt(r);
    var sqrZ = Math.sqrt(cPos.z*cPos.z + r);


    var nx = cPos.x + ((r==0)?0:(d * cPos.x/sqr));
    var ny = cPos.y + ((r==0)?0:(d * cPos.y/sqr));
    var nz = cPos.z + ((sqrZ==0)?0:(d * cPos.z/sqrZ));

    if (isNaN(nx) || isNaN(ny) || isNaN(nz))
      return;

    cPos.x = nx;
    cPos.y = ny;
    cPos.z = nz;
}

function main() {
    renderer.setClearColor(0x000000, 0.0);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Eventos del raton
    MOUSE.initialize("#canvas");

    // Añadir cámara
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 20;
    camera.lookAt(scene.position);

    // Añadir luz
    var luzCamara = new Luz(0x555555, camera.position.x, camera.position.y, camera.position.z, true, "ambient");
    luzCamara.model(scene);

    // Modelo
    sol = new Astro(109, "res/sol.jpg", 0, 0, 0.002, false, true);
    sol.model();

    tierra = new Astro(1, "res/tierra.jpg", 6, 0.001, 0.005, false, false);
    tierra.model();

    luna = new Astro(1/ 6, "res/luna.jpg", 1, 0.01, 0, true, false);
    luna.model();

    scene.add(sol.get());
    sol.addSatelite(tierra.get());
    tierra.addSatelite(luna.get());
    $("#canvas").append(renderer.domElement);

    renderScene();
}

main();
