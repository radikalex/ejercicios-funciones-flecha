// 1. Funciones flecha

// Convierte la siguiente función en una función flecha:
function saludar() {
    return "Hola";
}
const saludar_flecha = () => "Hola";
console.log(saludar_flecha());

// Convierte la siguiente función en una función flecha en línea:
function division(a, b) {
    return a / b;
}
const division_flecha = (a, b) => a / b;
console.log(division_flecha(7, 3));

// Convierte la siguiente función en una función flecha:
function miNombre(nombre) {
    return `Mi nombre es ${nombre}`;
}
const miNombre_flecha = (nombre) => `Mi nombre es ${nombre}`;
console.log(miNombre_flecha("Alex"));

// Convierte las siguientes funciones en funciones flecha:
function test2() {
    console.log("Función test 2 ejecutada.");
}
const test2_flecha = () => console.log("Función test 2 ejecutada.");
test2_flecha();

function test1(callback) {
    callback();
}
const test1_flecha = (callback) => callback();
test1_flecha(test2_flecha);


// 2. Foreach

// Utiliza la siguiente array para resolver los próximos ejercicios: 

let gente = [{
        nombre: "Jamiro",
        edad: 45,
    },
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Paco",
        edad: 34,
    },
    {
        nombre: "Pepe",
        edad: 14,
    },
    {
        nombre: "Pilar",
        edad: 24,
    },
    {
        nombre: "Laura",
        edad: 24,
    },
    {
        nombre: "Jenny",
        edad: 10,
    },
];

// Crea un array con la gente mayor de 25 años y muéstralo por consola.
const arrayMayor25 = [];
gente.forEach((persona) => {
    if (persona.edad > 25)
        arrayMayor25.push(persona)
})
console.log(arrayMayor25);

// Crea un array con la gente que empieza por J. 
const arrayEmpiezaJ = [];
gente.forEach((persona) => {
    if (persona.nombre[0] === 'J')
        arrayEmpiezaJ.push(persona)
})
console.log(arrayEmpiezaJ);


// 3. Map

// Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola.
const mapArrayMayor25 = gente.map((persona) => {
    if (persona.edad > 25) {
        return persona;
    }
});
console.log(mapArrayMayor25);

// Crea un array con la gente que empieza por J. 
const mapArrayEmpiezaJ = gente.map((persona) => {
    if (persona.nombre[0] == "J") {
        return persona;
    }
});
console.log(mapArrayEmpiezaJ);

// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
const numbers = [4, 5, 6, 7, 8, 9, 10];
const arrayNumbersElevados = numbers.map((number) => number ** number);
console.log(arrayNumbersElevados);


// 4. Filter

// Crea un segundo array que devuelva los impares
const numbersFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersImpares = numbersFilter.filter((number) => number % 2);
console.log(numbersImpares);

// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:
const foodList = [{
        name: 'Tempeh',
        isVeggie: true
    },
    {
        name: 'Cheesbacon burguer',
        isVeggie: false
    },
    {
        name: 'Tofu burguer',
        isVeggie: true
    },
    {
        name: 'Entrecot',
        isVeggie: false
    }
];
/* [
    'Que rico Tempeh me voy a comer!',
    'Que rica Tofu burguer me voy a comer!'
   ]
*/
const arrayVegano = foodList.filter((comida) => comida.isVeggie).map((comida) => `Que rico ${comida.name} me voy a comer!`);
console.log(arrayVegano);

// 5. Reduce
// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:
const numeros = [39, 2, 4, 25, 62];
// Salida--> 483600
const arrayMultiplicacion = numeros.reduce((a, b) => a * b, 1);
console.log(arrayMultiplicacion);




// EXTRAS

// Map
// Dado el siguiente array, crear un segundo array que forme frases como en el ejemplo accediendo a las propiedades del objeto proporcionado:
const staff = [{
        name: "Pepe",
        role: "The Boss",
        hobbies: ["leer", "ver pelis"],
    },
    {
        name: "Ana",
        role: "becaria",
        hobbies: ["nadar", "bailar"],
    },
    {
        name: "Luis",
        role: "programador",
        hobbies: ["dormir", "comprar"],
    },
    {
        name: "Carlos",
        role: "secretario",
        hobbies: ["futbol", "queso"],
    },
];
// Resultado esperado
/*
    [
    'Pepe es TheBoss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Ana es becaria y le gusta nadar y bailar',
    'Carlos es secretario y le gusta fútbol y queso'
    ]
*/
const arrayFraseStaff = staff.map((trabajador) => `${trabajador.name} es ${trabajador.role} y le gusta ${trabajador.hobbies[0]} y ${trabajador.hobbies[1]}`)
console.log(arrayFraseStaff);

//   Dado el siguiente array, generar un segundo array que consiga generar de salida el resultado esperado:
const foodListExtra = ["Pizza", "Ramen", "Paella", "Entrecot"];
//Resultado esperado
/* [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella',
    'Aunque no como carne, el Entrecot es sabroso'
    ]
*/
const arrayMapComida = foodListExtra.map((comida) => {
    switch (comida) {
        case "Pizza":
            return "Como soy de Italia, amo comer Pizza";
        case "Ramen":
            return "Como soy de Japón, amo comer Ramen";
        case "Paella":
            return "Como soy de Valencia, amo comer Paella";
        case "Entrecot":
            return "Aunque no como carne, el Entrecot es sabroso";
        default:
            console.log("Movida, aqui hay un problema con " + comida);
    }
});
console.log(arrayMapComida);



//   Filter
//   Dado el siguiente array, devolver un array con los nombres de los elementos que valgan más de 300 euros
const inventory = [{
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
];
/*
  [
    'TV Samsung,',
    'Viaje a Cancún'
  ]
*/
const productosMasDe300 = inventory.filter((objeto) => objeto.price > 300).map((objeto) => objeto.name)
console.log(productosMasDe300);

//   Reduce
//   Concatena todos los elementos del array con reduce para que devuelva una sola frase
const sentenceElements = [
    'Me',
    'llamo',
    /* Tu nombre aquí! */
    'Alex',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];
const frase = sentenceElements.reduce((a, b) => a +" "+ b);
console.log(frase);

// Resultado--> 'Me llamo XX y quiero sentir la fuerza con javascript'