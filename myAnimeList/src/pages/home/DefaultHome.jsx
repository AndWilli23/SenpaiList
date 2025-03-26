import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./defaultHome.css" 
import google from "./assens/pesquisa.png" 
import facebook from "./assens/facebook.png" 
import { Link} from "react-router-dom";


const DefaultHome = () => {

    const [isNewUser, setIsNewUser] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState("")
    const [userInfo, setUserInfo ] = useState({
        email: "",
        password: ""
    })

    const handleNewUser = () => { 
       setIsNewUser(!isNewUser)
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleUserInfo = (event) => {
        const {name, value} = event.target;

        setUserInfo((prev) => ({...prev, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isNewUser && confirmPassword !== userInfo.password) {
            alert("As senhas não coincidem!");
            return;
        }
        
        console.log("Dados enviados:", userInfo);
    };

    return(
        <div className="container-principal">
            <div className="w-100 d-flex justify-content-center position-absolute align-items-center top-50 start-50 translate-middle">
                <div className="container-left bg-dark pt-5  shadow-lg" >
                    <h1 className="text-center titulo-principal mb-5">Seja bem-vindo ao SenpaiList!</h1>
                    <p className="text-center p-3">Explore, busque, descubra e fique por dentro do que está em alta no mundo dos Animes e Mangás, tudo em um só lugar!</p>
                </div>
                <div className="container-rigth bg-light  shadow-lg">
                    <div>
                        {isNewUser ? (
                            <h2 className="text-dark text-center mt-4 titulo-Login">Cadastra-se</h2>
                        ):( 
                            <h2 className="text-dark text-center mt-4 titulo-Login">Log-in</h2>
                        )}
                        <ul className="d-flex gap-5 justify-content-center p-0 mt-4">
                            <li className="item-icon bg-light">
                                <button>
                                    <img src={google} alt="" />
                                </button>
                            </li>
                            <li className="item-icon">
                                <button>
                                    <img src={facebook} alt="" />
                                </button>
                            </li>
                            <li className="item-icon bg-black">
                                <button>
                                    <i className="bi bi-apple icon"></i>
                                </button>
                            </li>
                        </ul>
                    </div>

                    <fieldset className="d-flex flex-column justify-content-center ">
                        <Form onSubmit={handleSubmit} className="mx-5 my-3">
                        {isNewUser ? (
                            <>
                                <Form.Group className="mb-3" controlId="Email">
                                    <Form.Label className="text-dark">E-mail: </Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="email@exemplo.com"
                                        value={userInfo.email}
                                        onChange={handleUserInfo}
                                        required>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="password">
                                    <Form.Label className="text-dark">Senha: </Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Digite sua senha: "
                                        value={userInfo.password}
                                        onChange={handleUserInfo}
                                        required>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="" controlId="confirmPassword">
                                    <Form.Label className="text-dark">Confirme a senha: </Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="confirmPassword"
                                        placeholder="Digite sua senha novamente"
                                        value={confirmPassword}
                                        onChange={handleConfirmPassword}
                                        required>
                                    </Form.Control>
                                </Form.Group>
                            </>
                            ) : (
                            <>
                                <Form.Group className="mb-3" controlId="Email">
                                    <Form.Label className="text-dark">E-mail: </Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="email@exemplo.com"
                                        value={userInfo.email}
                                        onChange={handleUserInfo}
                                        required>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group className="" controlId="password">
                                    <Form.Label className="text-dark">Senha: </Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Digite sua senha: "
                                        value={userInfo.password}
                                        onChange={handleUserInfo}
                                        required>
                                    </Form.Control>
                                </Form.Group>
                            </>
                            )}
                            {isNewUser ? (
                                <div className="d-flex justify-content-center mb-4 mt-3">
                                    <Button type="submit" variant="outline-primary" style={{paddingLeft: "8rem", paddingRight: "8rem"}}>Cadastra-se</Button>
                                </div>
                            ) : (
                                <div className="d-flex justify-content-center mb-5 mt-3">
                                    <Button type="submit" variant="outline-primary" style={{paddingLeft: "8rem", paddingRight: "8rem"}}><Link style={{textDecoration: "none"}} to={"/Home"}>log-in</Link></Button>
                                </div>
                            )}
                        </Form>   
                    </fieldset>
                    
                    {!isNewUser ? (
                        <div className="text-center">
                            <p className="text-black">Ainda não cadastrado?<button className="btn btn-link p-0 pb-1 ps-1 border-0" onClick={handleNewUser}> Cadastre-se aqui!</button></p>
                        </div>
                    ) : (
                        <div className="text-center">
                            <p className="text-black">Já está cadastrado?<button className="btn btn-link  p-0 pb-1 ps-1 border-0" onClick={handleNewUser}> Faça o Log-in!</button></p>
                        </div>   
                    )}
                </div>
            </div>
        </div>
    )
}

export default DefaultHome