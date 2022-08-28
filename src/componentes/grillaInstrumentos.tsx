import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { deleteInstrumentoXId, getInstrumentosJSON } from "./FuncionesApi";
import Instrumento from "./Instrumento";
import { Navigation } from "./Navigation";

export const GrillaInstrumentos = () => {
    
    //Variable instrumentos que se actualizará mediante la función setInstrumentos y 
    //recibe como argumento un array de instrumentos
    const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
      
    //función getInstrumentos que guarda en instrumentos un array de Instrumentos, estos instrumentos se reciben desde el 
    //método 'getInstrumentosJSON' ubicado en 'funciones.ts'
    //Acto seguido le paso los datos a 'setInstrumentos'
        const getInstrumentos = async () => {
        let datos:Instrumento[] = await getInstrumentosJSON();
        setInstrumentos(datos);
      } 
     
  
      //Uso el Hook 'useEffect'. Se ejecuta cuando se termina de renderizar la pantalla
      //llama al método 'getInstrumentos()'
      useEffect(() => {
        getInstrumentos();
      }, []);

      const deleteInstrumento = async (idInstrumento:number) => {
        await deleteInstrumentoXId(idInstrumento);
        window.location.reload();
      }
  
      
      return (
          <>
          <Navigation></Navigation> {/* Usa el nav de arriba definido en 'Navigation.tsx' */}
          <Container fluid>
            <br/>
            <Button href={'/formulario/0'} variant="outline-primary">Nuevo</Button>
            < Row>
                <Col md={0}>
                <b>ID</b>
                </Col>
                <Col md={2}>
                <b>Instrumento</b>
                </Col>
                <Col md={0}>
                <b>Marca</b>
                </Col>
                <Col md={0}>
                <b>Modelo</b>
                </Col>
                {/* <Col md={0}>
                <b>Imagen</b>
                </Col> */}
                <Col md={0}>
                <b>Precio</b>
                </Col>
                <Col md={0}>
                <b>Costo Envío</b>
                </Col>
                <Col md={0}>
                <b>Cantidad Vendida</b>
                </Col>
                <Col md={3}>
                <b>Descripción</b>
                </Col> 
                <Col md={0}>
                <b>Modificar</b>
                </Col>
                <Col md={0}>
                <b>Eliminar</b>
                </Col>
            </Row>
          {instrumentos.map((instrumento:Instrumento) => 
            <Row key={instrumento.id}>
                <Col md={0}>
                {instrumento.id}
                </Col>
                <Col md={2}>
                {instrumento.instrumento}
                </Col>
                <Col md={0}>
                {instrumento.marca}
                </Col>
                <Col md={0}>
                {instrumento.modelo}
                </Col>
                {/* <Col md={0}>
                {instrumento.imagen}
                </Col> */}
                <Col md={0}>
                {instrumento.precio}
                </Col>
                <Col md={0}>
                {instrumento.costoEnvio}
                </Col>
                <Col md={0}>
                {instrumento.cantidadVendida}
                </Col>
                <Col md={3}>
                {instrumento.descripcion}
                </Col>
                <Col md={0}>
                <Button variant="outline-warning" href={'/formulario/' + instrumento.id}>Modificar</Button>
                </Col>
                <Col md={0}>
                <Button variant="outline-danger" onClick={(e) => deleteInstrumento(instrumento.id)}>Eliminar</Button>
                </Col>
            </Row>
               )}
          </Container>
        </>
    )
}


            
            
            
            
            
            
            
            
            
            
            
            {/* <Container fluid="md">
                <Row>  
                 {instrumentos.map((instrumento:Instrumento) => 
                  <ItemInstrumento key={instrumento.id} id={instrumento.id} nombre={instrumento.instrumento} marca={instrumento.marca}
                     modelo={instrumento.modelo} precio={instrumento.precio} costoEnvio={instrumento.costoEnvio} cantidadVendida={instrumento.cantidadVendida}
                     imagen={instrumento.imagen} descripcion={instrumento.descripcion}></ItemInstrumento>
                 )}
                </Row>
            </Container>
          </>
      )
  }
  
   */}