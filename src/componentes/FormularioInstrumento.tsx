import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom";
import { getInstrumentoXId, saveInstrumento } from "./FuncionesApi";
import Instrumento from "./Instrumento";
import { Navigation } from "./Navigation"

export const FormularioInstrumento = () => {

    const navigate = useNavigate();

    const {idInstrumento} = useParams();
    const [instrumento, setInstrumento] = useState<Instrumento>(new Instrumento());

    const getInstrumento = async () => {
        if(Number(idInstrumento) !== 0){
            let instrumentoSelect:Instrumento = await getInstrumentoXId(Number(idInstrumento));
            setInstrumento(instrumentoSelect);
        }else{
            let instrumentoSelect:Instrumento = new Instrumento();
            setInstrumento(instrumentoSelect);
        }
    }


    useEffect(() => {
        getInstrumento();
    }, []);

    const save = async () => {
        console.log(instrumento.instrumento);
        await saveInstrumento(instrumento);
        navigate('/grilla'); 
      }

    return (
        <>
            <Navigation></Navigation> {/* Usa el nav de arriba definido en 'Navigation.tsx' */}
            <div className="center">
                <Form className="form-control">
                    <Form.Group className="mb-3" controlId="formBasicInstrumento">
                        <Form.Label>Instrumento</Form.Label>
                        <Form.Control type="Text" placeholder="Ingrese el instrumento" defaultValue={instrumento?.instrumento} onChange={e => instrumento.instrumento = String(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicMarca">
                        <Form.Label>Marca</Form.Label>
                        <Form.Control type="Text" placeholder="Ingrese la marca" defaultValue={instrumento?.marca} onChange={e => instrumento.marca = String(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicModelo">
                        <Form.Label>Modelo</Form.Label>
                        <Form.Control type="Text" placeholder="Ingrese el modelo" defaultValue={instrumento?.modelo} onChange={e => instrumento.modelo = String(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicImagen">
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control type="Text" placeholder="Ingrese la ruta de la imagen" defaultValue={instrumento?.imagen} onChange={e => instrumento.imagen = String(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPrecio">
                        <Form.Label>Precio</Form.Label>
                        <Form.Control type="Text" placeholder="Ingrese el precio" defaultValue={instrumento?.precio} onChange={e => instrumento.precio = String(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCostoEnvio">
                        <Form.Label>Costo Envio</Form.Label>
                        <Form.Control type="Text" placeholder="Ingrese el costo de envío" defaultValue={instrumento?.costoEnvio} onChange={e => instrumento.costoEnvio = String(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCantidadVendida">
                        <Form.Label>Cantidad vendida</Form.Label>
                        <Form.Control type="Text" placeholder="Ingrese la cantidad vendida" defaultValue={instrumento?.cantidadVendida} onChange={e => instrumento.cantidadVendida = String(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDescripcion">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control type="Text" placeholder="Ingrese la descripción" defaultValue={instrumento?.descripcion} onChange={e => instrumento.descripcion = String(e.target.value)} />
                    </Form.Group>
                    <br />

                    <br /><br />
                    <Button onClick={save} variant="primary" type="button">
                        Guardar
                    </Button>
                </Form>
            </div>
        </>
    )


}