class Item {
    constructor(nombre, precio, imagen) {
      this.nombre = nombre;
      this.precio = precio;
      this.imagen = imagen;}}
 
 
      const carbon = new Item("carbon", 200, "carbon.png");
  const asado = new Item("asado", 150, "asado.png");
  const provoleta = new Item("provoleta", 100, "provoleta.png");
  const carrito = [];
  
  let Dinero = 1500;
  
  const elDinero = document.querySelector("#Dinero span");
  elDinero.innerText = Dinero; 
  const elCarrito = document.getElementById("carrito");
  
  
  
  
  function comprar(itemDelJuego) {
    if (Dinero - itemDelJuego.precio >= 0) {
      carrito.push(itemDelJuego);
      Dinero -= itemDelJuego.precio; 
      actualizarHTML();
    } else {
      alert(`No tenés el dinero suficiente para comprar ${itemDelJuego.nombre}.`);}}
  
  
  
      function vender(nombreDelItem) {
    const itemEncontrado = carrito.find((item) => item.nombre == nombreDelItem);
    if (itemEncontrado) {
      Dinero += itemEncontrado.precio;
      const indice = carrito.indexOf(itemEncontrado);
      carrito.splice(indice, 1);
      actualizarHTML();} }
  
  
  
  
      function actualizarHTML() {
    elCarrito.innerHTML = "";
      for (const itemDelJuego of carrito) {
      const li = `
             <li onclick="vender('${itemDelJuego.nombre}')">
        <img src="img/${itemDelJuego.imagen}" alt="${itemDelJuego.imagen}" /> </li>`;
    elCarrito.innerHTML += li;}
    elDinero.innerText = Dinero;}