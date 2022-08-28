import { useState, useEffect } from "react";
import { Container, Row, Col, ListGroup, Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getInstrumentoXId } from "./FuncionesApi";
import Instrumento from "./Instrumento";
import { Navigation } from "./Navigation";

export const DetalleInstrumento = () => {

    const { idInstrumento } = useParams();
    const [instrumento, setInstrumento] = useState<Instrumento>();

    let instrumentoId: number = 0;

    const getInstrumento = async () => {
        let instrumentoSelect: Instrumento = await getInstrumentoXId(Number(instrumentoId));
        setInstrumento(instrumentoSelect);
    }

    useEffect(() => {
        if (idInstrumento) {
            instrumentoId = parseInt(idInstrumento);
        }
        getInstrumento();
    }, []);

    var costEnvio: string;
    if (instrumento?.costoEnvio == "G") {
        costEnvio = "Envío gratis a todo el país";
    }
    else {
        costEnvio = "$ " + instrumento?.costoEnvio;
    }


    return (
        <>
            <Navigation></Navigation>
            <Container>
                <Row>
                    <Col>
                        <br /><img alt="instrumento" className="minAltoImg" src={instrumento?.imagen} />
                    </Col>

                    <Col>
                        <Row>
                            <Col><h4>{instrumento?.cantidadVendida + " vendidos"}</h4></Col>
                        </Row>
                        <Row>
                            <Col><h1>{instrumento?.instrumento}</h1></Col>
                        </Row>
                        <Row>
                            <Col><h2>$ {instrumento?.precio}</h2></Col>
                        </Row>
                        <Row>
                            <Col><h4>{"Marca: " + instrumento?.marca}</h4></Col>
                        </Row>
                        <Row>
                            <Col><h4>{"Modelo: " + instrumento?.modelo}</h4></Col>
                        </Row>
                        <Row>

                            <Col><h4>{"Costo envío: " + costEnvio}</h4></Col>
                        </Row>

                    </Col>
                </Row>

                <Row>
                    <Col><Nav.Link href="/"><h3>Volver</h3></Nav.Link></Col>
                </Row>
            </Container>



        </>
    )



}