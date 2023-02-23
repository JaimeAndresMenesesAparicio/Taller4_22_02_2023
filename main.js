// 1.	Pregunto si quiere el huevo frito.
// Si me dice que si, lo frio, si me dice que no, lo hago hervido.
// Una vez cocinado le pregunto si quiere sal en el huevo.
// Si me dice que no lo sirvo en el Plato. Si me dice que si le hecho sal y después lo sirvo en el plato.

let frito = confirm("Desea el huevo frito?\n\t\tSelecciona Aceptar si desea el huevo frito\n\t\tSelecciona Cancelar si desea el huevo cocido");
let sal = confirm("Desea el huevo con sal?\n\t\tSelecciona Aceptar si desea sal\n\t\tSelecciona Cancelar si no desea sal");
if(frito == true && sal == true)
{
    alert("El huevo pedido fue frito, con sal y servido en el plato");
}
else
{
    if(frito == true && sal == false)
    {
        alert("El huevo pedido fue frito, sin sal y servido en el plato")
    }
    else
    {
        if(frito == false && sal == true)
        {
        alert("El huevo pedido fue cocido, con sal y servido en el plato");
        }
        else
        {
            if(frito == false && sal == false)
            {
            alert("El huevo pedido fue cocidoo, sin sal y servido en el plato")
            }
        }
    }
}
