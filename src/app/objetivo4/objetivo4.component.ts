import { Component } from '@angular/core';
interface productoSeleccionado{
  titulo: string;
  precio: number;
  tipoEnvio: string;
  imagen: string;
  id: string;
}
@Component({
  selector: 'app-objetivo4',
  templateUrl: './objetivo4.component.html',
  styleUrls: ['./objetivo4.component.scss']
})
export class Objetivo4Component {
  encontrado = false;
  productoSelect: productoSeleccionado = {
    titulo:"",
    precio:0,
    tipoEnvio:"",
    imagen:"",
    id:""
  };
  productos = [
    {
      titulo: "git gud",
      precio: 60,
      tipoEnvio: "domicilio",
      imagen: "https://images.squarespace-cdn.com/content/v1/546cbac5e4b03b91fa856973/1608853318501-6KJLVQLRJ1JLNCAJ3N2Z/PXL_20201224_230800390.jpg?format=2500w",
      id:"1"
    },
    {
      titulo: "tainted keeper",
      precio: 50,
      tipoEnvio: "punto de venta",
      imagen: "https://pbs.twimg.com/media/Fg_EgncX0AE-cD2.jpg",
      id:"2"
    },
    {
      titulo: "saffron witch custom",
      precio: 30,
      tipoEnvio: "urgente",
      imagen: "https://img.itch.zone/aW1nLzI2NDI3MDEuZ2lm/original/X0K5ku.gif",
      id:"3"
    },
    {
      titulo: "super meat boy",
      precio: 45,
      tipoEnvio: "estandar",
      imagen: "https://media.vandalimg.com/common/1200x800/2009115219.jpg",
      id:"4"
    },
    {
      titulo: "terraria hero",
      precio: 90,
      tipoEnvio: "pesados",
      imagen: "https://as01.epimg.net/meristation/imagenes/2021/05/17/reportajes/1621238220_786885_1621238307_noticia_normal.jpg",
      id:"5"      
    },
    {
      titulo: "Mochila",
      precio: 260,
      tipoEnvio: "domicilio",
      imagen: "https://cdn.shopify.com/s/files/1/0459/6485/3404/products/5b4242e2a93dab388c3c1fd06dae47232a11cf138d1c49e4a86d7c92e5802ba1_1000x1000.jpg?v=1654032998",
      id:"6"
    },
    {
      titulo: "Estrella",
      precio: 160,
      tipoEnvio: "punto de venta",
      imagen: "https://media.tenor.com/KUNqaIRkkyIAAAAM/sta.gif",
      id:"7"
    },
    {
      titulo: "Stardew valley",
      precio: 140,
      tipoEnvio: "urgente",
      imagen: "https://www.4dados.es/wp-content/uploads/2022/02/stardew-valley.png",
      id:"8"
    },
    {
      titulo: "Flor de fuego",
      precio: 130,
      tipoEnvio: "estandar",
      imagen: "https://mario.wiki.gallery/images/4/44/Artwork_-_FIRE_FLOWER.svg",
      id:"9"
    },
    {
      titulo: "Martillo",
      precio: 150,
      tipoEnvio: "pesados",
      imagen: "https://mario.wiki.gallery/images/thumb/b/b5/BoomerangFlowerMK8.png/1200px-BoomerangFlowerMK8.png",
      id:"10"      
    }
  ]
  mostrarSeleccionado(producto:productoSeleccionado){
    console.log(producto);
    this.productoSelect = {
      titulo: producto.titulo,
      precio: producto.precio,
      tipoEnvio: producto.tipoEnvio,
      imagen: producto.imagen,
      id: producto.id
    };
    this.encontrado = true;
    console.log("Valor del producto seleccionado...");
    console.log(this.productoSelect);
  }
}
