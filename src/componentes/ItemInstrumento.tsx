
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap"


type InstrumentoParams = {
    id: number;
    nombre: string;
    marca: string;
    modelo: string;
    imagen: string;
    precio: string;
    costoEnvio: string;
    cantidadVendida: string;
    descripcion: string;
}



export const ItemInstrumento = (args : InstrumentoParams) => {
    var costEnvio:string;
    if(args.costoEnvio=="G"){
         costEnvio = "Envío gratis a todo el país";
    }
    else{
        costEnvio = "Costo de envío: $ " + args.costoEnvio;
    }
    
    return (
        <div className="card mb-4">
        <div className="row no-gutters">
            <div className="col-md-2">
            <a href={"http://localhost:3000/instrumento/"+ args.id}><img src={args.imagen.toLowerCase()} className="card-img" alt="..."></img></a>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h2 className="card-title">{args.nombre}</h2>
                <h3 className="card-text">$ {args.precio}</h3>
                <h4 className="card-text">{costEnvio}</h4>
                
                <h5 className="card-text">{args.cantidadVendida} vendidos</h5>
                <br></br><br></br><br></br>
            </div>
            </div>
        </div>
        </div>
        
    )
}