import {check, validationResult} from "express-validator"
import Usuario from "../models/Usuario.js"

const formularioLogin = (req, res) => {
    res.render('auth/login', {
      pagina: "Iniciar Sesion"
    })
  }
  
  const formularioRegistro = (req, res) => {
    res.render('auth/registro', {
      pagina: "Crear Cuenta"
    })
  }

  const registrar = async (req, res) => {
    // validation
    await check("nombre").notEmpty().withMessage("El nombre no puede ir vacio").run(req)
    await check("email").isEmail().withMessage("Eso no parece un email").run(req)
    await check("password").isLength({min: 6} ).withMessage("El passwor debe ser al menos 6 caracteres").run(req)
    await check("repetir_password").equals("password").withMessage("Los passwords debe ser iguales").run(req)

    let result = validationResult(req)

    // Verificar que el resultado este vacio
    

    res.json(result.array())

    const usuario = await Usuario.create(req.body)

    res.json(usuario)
  }
  
  const formularioOlvidePassword = (req, res) => {
    res.render('auth/olvide-password', {
      pagina: "Recupera tu acceso a Bienes Raices"
    })
  }
  
  export {
    formularioLogin,
    formularioRegistro,
    registrar,
    formularioOlvidePassword
  }