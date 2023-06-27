function setup() {
    createCanvas(900, 600, WEBGL);
    angleMode(DEGREES);
}

function draw() {
    background(125);
    normalMaterial(255);
    directionalLight(255, 255, 255, 0, 1, 1, 0 );

    // Plane
    push()
    translate(-width/3, -height/4);
    rotateX(frameCount);
    rotateY(frameCount);
    rotateZ(frameCount);
    plane(80, 80, 10);
    pop();

    // Cube
    push()
    translate(0, -height/4);
    rotateX(frameCount);
    rotateY(frameCount);
    rotateZ(frameCount);
    box(80);
    pop();

    // Cylinder
    push()
    translate(width/3, -height/4);
    rotateX(frameCount);
    rotateY(frameCount);
    rotateZ(frameCount);
    cylinder(50, 80, 50);
    pop();

    // Cone
    push()
    translate(-width/3, height/4);
    rotateX(frameCount);
    rotateY(frameCount);
    rotateZ(frameCount);
    cone(50, 80, 50);
    pop();

    // Donut (Torus)
    push()
    translate(0, height/4);
    rotateX(frameCount);
    rotateY(frameCount);
    rotateZ(frameCount);
    torus(50, 15, 30);
    pop();

    // Sphere
    push()
    translate(width/3, height/4);
    rotateX(frameCount);
    rotateY(frameCount);
    rotateZ(frameCount);
    sphere(50, 15, 30);
    pop();
}
