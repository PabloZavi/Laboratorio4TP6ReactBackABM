import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getInstrumentosJSON, getInstrumentosXBusqueda } from "./FuncionesApi";

import Instrumento from "./Instrumento";
import { ItemInstrumento } from "./ItemInstrumento";
import { Navigation } from "./Navigation";

export const Productos = () => {
    
  
  const {termino} = useParams();

    //Variable instrumentos que se actualizará mediante la función setInstrumentos y 
    //recibe como argumento un array de instrumentos
    const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);
      
    //función getInstrumentos que guarda en instrumentos un array de Instrumentos, estos instrumentos se reciben desde el 
    //método 'getInstrumentosJSON' ubicado en 'funciones.ts'
    //Acto seguido le paso los datos a 'setInstrumentos'
        const getInstrumentos = async () => {
          if(termino && termino!=""){
            let datos:Instrumento[] = await getInstrumentosXBusqueda(termino);
            setInstrumentos(datos);
          }
          else{
            let datos:Instrumento[] = await getInstrumentosJSON();
            setInstrumentos(datos);
          }
        
      } 
     
  
      //Uso el Hook 'useEffect'. Se ejecuta cuando se termina de renderizar la pantalla
      //llama al método 'getInstrumentos()'
      useEffect(() => {
        getInstrumentos();
      }, []);
  
      
      return (
          <>
          <Navigation></Navigation> {/* Usa el nav de arriba definido en 'Navigation.tsx' */}
            <Container fluid="md">
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
  
  