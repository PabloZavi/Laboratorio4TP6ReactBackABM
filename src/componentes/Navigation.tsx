import { useState } from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export const Navigation = () => {

  const navigate = useNavigate();
  
  const [termino, setTermino] = useState<string>("");
  
  const changeHandler = async(e:any) => {
    await setTermino(e.target.value);
  }

  const buscar = async () => {
    navigate('buscar/' + termino);
    window.location.reload();
  }

  const handleKeyDown = (e:any) => {
    if (e.key === 'Enter'){
      buscar();
    }
  }

    return (
        <>
            <Navbar bg="primary" variant="dark">
              <Nav className="mr-auto">
                
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/dondeestamos">Dónde estamos</Nav.Link>
                <Nav.Link href="/">Productos</Nav.Link>
                <Nav.Link href="/grilla">Grilla Instrumentos</Nav.Link>
                </Nav>
              <Form>
                <tr>
                  <td><FormControl type="text" placeholder="Search" defaultValue={termino} onChange={changeHandler} onKeyDown={handleKeyDown} className="mr-sm-2" /></td>
                  <td><Button variant="outline-light" onClick={buscar}>Search</Button></td>
                </tr>
                
                
              </Form>
            </Navbar>
        </>
    )
}