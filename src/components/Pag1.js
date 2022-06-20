import React, { useState } from "react";
import './Formulario.css';
import { CajaForm } from "./ElementForm";
import { ComponentInput, Desplegable2 } from "./input";

const Reclamos1 = () => {
    const [nombre, cambiarNombre] = useState({ campo: '', valido: null });
    const [aPaterno, cambiarApeParterno] = useState({ campo: '', valido: null });
    const [aMaterno, cambiarApeMaterno] = useState({ campo: '', valido: null });
    const [domicilio, cambiarDomicilio] = useState({ campo: '', valido: null });
    const [departamento, cambiarDepartamento] = useState({ campo: '', valido: null });
    const [provincia, cambiarProvincia] = useState({ campo: '', valido: null });
    const [distrito, cambiarDistrito] = useState({ campo: '', valido: null });
    const [dni, cambiarDni] = useState({ campo: '', valido: null });
    const [telfijo, cambiarTelFijo] = useState({ campo: '', valido: null });
    const [celular, cambiarCelular] = useState({ campo: '', valido: null });
    const [correo, cambiarCorreo] = useState({ campo: '', valido: null });


    const expresiones = {
        nombre: /^[a-zA-ZA-ÿ\s]{1,40}$/, // Letrasyespacios,pueden llevar acentos.
        aPaterno: /^[a-zA-ZA-ÿ\s]{1,40}$/, // Letrasyespacios,pueden llevar acentos.
        aMaterno: /^[a-zA-ZA-ÿ\s]{1,40}$/, // Letrasyespacios,pueden llevar acentos.
        domicilio: /^[a-zA-Z0-9-ÿ\s\_\-]{1,500}$/, // Letras, numeros, guion y guion_bajo
        departamento: /^[a-zA-ZA-ÿ\s]{1,40}$/, // Letrasyespacios,pueden llevar acentos.
        provincia: /^[a-zA-ZA-ÿ\s]{1,40}$/, // Letrasyespacios,pueden llevar acentos.
        distrito: /^[a-zA-ZA-ÿ\s]{1,40}$/, // Letrasyespacios,pueden llevar acentos.
        dni: /^.{4,11}$/, // 4 a 11 digitos.  
        telfijo: /^\d{7,14}$/, // 7 a 14 numeros.
        celular: /^\d{7,14}$/, // 7 a 14 numeros.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,


        // cambiar los cajaForm de cada uno :v
    }
    return (
        <div>
            <main>
                <div>
                    <CajaForm action="">
                        <ComponentInput
                            estado={nombre}
                            cambiarEstado={cambiarNombre}
                            tipo="text"
                            label="Nombre"
                            placeholder="Nombres"
                            name="nombre"
                            leyendaError="Formato Inválido"
                            expresionRegular={expresiones.nombre}
                        />
                        <ComponentInput
                            estado={aPaterno}
                            cambiarEstado={cambiarApeParterno}
                            tipo="text"
                            label="Apellido Paterno"
                            placeholder="Apellido Paterno"
                            name="aPaterno"
                            leyendaError="Formato Inválido"
                            expresionRegular={expresiones.aPaterno}
                        />
                        <ComponentInput
                            estado={aMaterno}
                            cambiarEstado={cambiarApeMaterno}
                            tipo="text"
                            label="Apellido Materno"
                            placeholder="Apellido Materno"
                            name="aMaterno"
                            leyendaError="Formato Inválido"
                            expresionRegular={expresiones.aMaterno}
                        />
                    </CajaForm>
                </div>
                <div>
                    <CajaForm>
                        <ComponentInput
                            estado={domicilio}
                            cambiarEstado={cambiarDomicilio}
                            tipo="text"
                            label="Domicilio"
                            placeholder="Domicilio"
                            name="domicilio"
                            leyendaError="Formato de Dirección Inválida"
                            expresionRegular={expresiones.domicilio}
                        />
                    </CajaForm>
                </div>
                <div>
                    <CajaForm>
                        <ComponentInput
                            estado={departamento}
                            cambiarEstado={cambiarDepartamento}
                            tipo="text"
                            label="Departamento"
                            placeholder="Departamento"
                            name="departamento"
                            leyendaError="Formato Inválido"
                            expresionRegular={expresiones.departamento}
                        />
                        <ComponentInput
                            estado={provincia}
                            cambiarEstado={cambiarProvincia}
                            tipo="text"
                            label="Provincia"
                            placeholder="Provincia"
                            name="provincia"
                            leyendaError="Formato Inválido"
                            expresionRegular={expresiones.provincia}
                        />
                        <ComponentInput
                            estado={distrito}
                            cambiarEstado={cambiarDistrito}
                            tipo="text"
                            label="Distrito"
                            placeholder="Distrito"
                            name="distrito"
                            leyendaError="Formato Inválido"
                            expresionRegular={expresiones.distrito}
                        />
                        <Desplegable2 label="Preferencia de Contacto" />
                        <ComponentInput
                            estado={dni}
                            cambiarEstado={cambiarDni}
                            tipo="number"
                            label="Número de Documento"
                            placeholder="Doc. de Identidad"
                            name="dni"
                            leyendaError="Número de Identidad Inválido"
                            expresionRegular={expresiones.dni}
                        />
                    </CajaForm>
                    </div>
                <div>
                    <CajaForm>                       
                        <ComponentInput
                            estado={telfijo}
                            cambiarEstado={cambiarTelFijo}
                            tipo="number"
                            label="Teléfono Fijo"
                            placeholder="Teléfono Fijo"
                            name="telfijo"
                            leyendaError="Formato Inválido"
                            expresionRegular={expresiones.telfijo}
                        />
                        <ComponentInput
                            estado={celular}
                            cambiarEstado={cambiarCelular}
                            tipo="number"
                            label="Celular"
                            placeholder="Celular"
                            name="celular"
                            leyendaError="Formato Inválido"
                            expresionRegular={expresiones.celular}
                        />
                        <ComponentInput
                        estado={correo}
                        cambiarEstado={cambiarCorreo}
                        tipo="email"
                        label="Correo Electrónico"
                        placeholder="ejemplo@gmail.com"
                        name="correo"
                        leyendaError="Correo Inválido"
                        expresionRegular={expresiones.correo}
                    /> 
                    </CajaForm>
                </div>
            </main>
        </div>
    );
}

export default Reclamos1;