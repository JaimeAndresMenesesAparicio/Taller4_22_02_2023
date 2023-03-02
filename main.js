// 2.	3 usuarios entran a una heladería a comprar un helado, pero hay un problema:
//  los precios no están al lado de cada estante con su respectivo helado.
//  “Ellos quieren comprar el helado más caro que puedan con la plata que tienen.
// Miguel tiene $1.000 
// Carlos tiene $2.000 
// Manuel tiene $500 
// Los precios de helados son los siguientes:
// Bonais: $400
// Palito de helado de agua: $1.000 
// Palito de helado de crema: $2.200
// Bombón helado con arequipe: $1.500
// Bombón helado con chispas de chocolate: $2.500
// Bombón helado con fresas: $2.800
// Medio litro de helado: $ 2.000

// El programa tiene que pedir el ingreso de su dinero y el nombre de cliente
// Si hay más de un helado con el mismo precio o por de bajo de precio del usuario mostrar las opciones disponibles
// El programa también tiene que poder dar los vueltos de su compra con su factura
var dinero = [];
var nombre = [];
var precios = [["Bonais",400],["Palito de helado de agua",1000],["Bombón helado con arequipe",1500],["Medio litro de helado",2000],["Palito de helado de crema",2200],["Bombón helado con chispas de chocolate",2500],["Bombón helado con fresas",2800]];
for (let i = 1; i < 4; i++){
dinero.push( Number ( prompt (`Ingrese el dinero del usuario ${i}:`)));
nombre.push( prompt (`Ingrese el nombre del usuario ${i}:`));}
var helado = [];
for(i = 0; i < dinero.length; i++){
    let preciomaximo = 0;
    console.log(` El usuario ${nombre[i]} tiene las opciones : \n `);
    for(let a = 0; a <precios.length; a++){
         if(dinero[i]>=precios[a][1]){
            preciomaximo= a;
            console.log(precios[a]);
         }        
}
helado.push({Nombre: nombre[i], Helado: precios[preciomaximo][0], Precio: precios[preciomaximo][1], Vueltos: dinero[i]-precios[preciomaximo][1]});
}
console.log(`Lo que compraron los usuarios fue los siguiente: `)
console.table(helado);
