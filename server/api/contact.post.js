export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { name, email, subject, message } = body

    // Validación básica
    if (!name || !email || !subject || !message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Todos los campos son requeridos'
      })
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Email no válido'
      })
    }

    // Aquí puedes integrar con tu servicio de email preferido
    // Por ejemplo: Nodemailer, SendGrid, Resend, etc.
    
    // Simulación de envío de email
    console.log('Nuevo mensaje de contacto:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    })

    // En un entorno real, aquí enviarías el email a pablooalcaldegarcia@gmail.com
    // Ejemplo con Nodemailer:
    /*
    const nodemailer = require('nodemailer')
    
    const transporter = nodemailer.createTransporter({
      // Configuración de tu proveedor de email
    })
    
    await transporter.sendMail({
      from: email,
      to: 'pablooalcaldegarcia@gmail.com',
      subject: `Contacto Portfolio: ${subject}`,
      html: `
        <h3>Nuevo mensaje desde tu portfolio</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `
    })
    */

    return {
      success: true,
      message: 'Mensaje enviado correctamente'
    }

  } catch (error) {
    console.error('Error en contact API:', error)
    
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Error interno del servidor'
    })
  }
})