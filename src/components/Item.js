// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import { useState } from "react";

export default function Item(props) {

  const [stock, setStock] = useState(props.stock);
  const [desactivar, setdesactivar] = useState({
    estaDesactivado: false,
    texto: "Comprar",
  });

  function comprar() {
    // Esta funcion siempre se va a ejecutar cuando se compre un item
    {
      props.addItem();
    }

    if (stock > 1) {
      setStock(stock - 1);
    } else if (stock === 1) {
      setStock(stock - 1);
      setdesactivar({ estaDesactivado: true, texto: "Sin stock" });
    }
  }

  return (
    <div className="producto">
      <h3>{props.nombre}</h3>
      <p>{props.descripcion}</p>
      <h5>En stock:{stock >= 1 ? stock : <span>agotado</span>}</h5>
      <button onClick={comprar} disabled={desactivar.estaDesactivado}>
        {desactivar.texto}
      </button>
    </div>
  );
}
