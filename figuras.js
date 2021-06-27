// Código del Cuadrado
console.group('Cuadrado');
const ladoCuadrado = 5;
console.log('Lados del cuadrado miden: ' + ladoCuadrado + 'cm');

const perimetroCuadrado = ladoCuadrado * 4;
console.log('El perimetro del Cuadrado: ' + perimetroCuadrado + 'cm');

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('El area del cuadrado es: ' + areaCuadrado + 'cm2');
console.groupEnd()

// Código del triángulo
console.group('Triángulo');
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log('Los lados del triángulo miden: ' + ladoTriangulo1 + 'cm, ' + ladoTriangulo2 + 'cm ' + baseTriangulo + 'cm');

console.log('La altura de triángulo ' + alturaTriangulo + 'cm')

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log('El perimetro del Triángulo es: ' + perimetroTriangulo + 'cm')

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log('El área del triángulo mide: ' + areaTriangulo + 'cm^2');

console.groupEnd()

// Código del Circulo
console.group('Circulo');

// Radio
const radioCirculo = 4;
console.log('El radio del circulo mide: ' + radioCirculo + 'cm')

// Diametro
const diametroCirculo = radioCirculo * 2;
console.log('El diametro del circulo mide: ' + diametroCirculo);

// PI
const PI = Math.PI;
console.log('El Pi es: ' + PI)


//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log('El perimetro del circulo mide: ' + perimetroCirculo + 'cm')


// Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log('El área del circulo mide: ' + areaCirculo + 'cm^2')

console.groupEnd();

