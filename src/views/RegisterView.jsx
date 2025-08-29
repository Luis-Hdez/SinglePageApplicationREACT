import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Esquema de validación con Yup
const schema = yup.object({
  nombre: yup
    .string()
    .required('El nombre es obligatorio')
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede tener más de 50 caracteres')
    .matches(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'El nombre solo puede contener letras'),
  
  email: yup
    .string()
    .required('El email es obligatorio')
    .email('Ingresa un email válido')
    .lowercase('El email debe estar en minúsculas'),
  
  password: yup
    .string()
    .required('La contraseña es obligatoria')
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, 
      'La contraseña debe contener al menos una mayúscula, una minúscula y un número'),
  
  confirmPassword: yup
    .string()
    .required('Confirma tu contraseña')
    .oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),
  
  fechaNacimiento: yup
    .date()
    .required('La fecha de nacimiento es obligatoria')
    .max(new Date(), 'La fecha no puede ser futura')
    .test('edad', 'Debes ser mayor de 13 años', function(value) {
      const today = new Date();
      const birthDate = new Date(value);
      const age = today.getFullYear() - birthDate.getFullYear();
      return age >= 13;
    }),
  
  genero: yup
    .string()
    .required('Selecciona tu género'),
  
  terminosCondiciones: yup
    .boolean()
    .oneOf([true], 'Debes aceptar los términos y condiciones')
});

export const RegisterView = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange' // Validación en tiempo real
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      // Simular llamada a API
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Datos enviados:", data);
      alert("¡Registro exitoso! 🎉 Bienvenido a Kodigo Music");
      reset(); // Limpiar formulario
    } catch (error) {
      alert("Error en el registro. Intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <h1 className="register-title">Únete a Kodigo Music</h1>
          <p className="register-subtitle">Crea tu cuenta y descubre música increíble</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="register-form">
          
          {/* Campo Nombre */}
          <div className="form-group">
            <label className="form-label">Nombre completo</label>
            <div className="input-wrapper">
              <input
                type="text"
                className={`form-input ${errors.nombre ? 'input-error' : ''}`}
                placeholder="Ingresa tu nombre completo"
                {...register("nombre")}
              />
            </div>
            {errors.nombre && (
              <span className="error-message">
                <i className="bi bi-exclamation-circle error-icon"></i>
                {errors.nombre.message}
              </span>
            )}
          </div>

          {/* Campo Email */}
          <div className="form-group">
            <label className="form-label">Correo electrónico</label>
            <div className="input-wrapper">
              <input
                type="email"
                className={`form-input ${errors.email ? 'input-error' : ''}`}
                placeholder="nombre@ejemplo.com"
                {...register("email")}
              />
            </div>
            {errors.email && (
              <span className="error-message">
                <i className="bi bi-exclamation-circle error-icon"></i>
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Campo Contraseña */}
          <div className="form-group">
            <label className="form-label">Contraseña</label>
            <div className="input-wrapper password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                className={`form-input ${errors.password ? 'input-error' : ''}`}
                placeholder="Crea una contraseña segura"
                {...register("password")}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={togglePasswordVisibility}
                aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {showPassword ? (
                  <i className="bi bi-eye-slash"></i>
                ) : (
                  <i className="bi bi-eye"></i>
                )}
              </button>
            </div>
            {errors.password && (
              <span className="error-message">
                <i className="bi bi-exclamation-circle error-icon"></i>
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Campo Confirmar Contraseña */}
          <div className="form-group">
            <label className="form-label">Confirmar contraseña</label>
            <div className="input-wrapper password-wrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className={`form-input ${errors.confirmPassword ? 'input-error' : ''}`}
                placeholder="Confirma tu contraseña"
                {...register("confirmPassword")}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={toggleConfirmPasswordVisibility}
                aria-label={showConfirmPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              >
                {showConfirmPassword ? (
                  <i className="bi bi-eye-slash"></i>
                ) : (
                  <i className="bi bi-eye"></i>
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <span className="error-message">
                <i className="bi bi-exclamation-circle error-icon"></i>
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          {/* Campo Fecha de Nacimiento */}
          <div className="form-group">
            <label className="form-label">Fecha de nacimiento</label>
            <div className="input-wrapper">
              <input
                type="date"
                className={`form-input ${errors.fechaNacimiento ? 'input-error' : ''}`}
                {...register("fechaNacimiento")}
              />
            </div>
            {errors.fechaNacimiento && (
              <span className="error-message">
                <i className="bi bi-exclamation-circle error-icon"></i>
                {errors.fechaNacimiento.message}
              </span>
            )}
          </div>

          {/* Campo Género */}
          <div className="form-group">
            <label className="form-label">Género</label>
            <div className="input-wrapper">
              <select
                className={`form-select ${errors.genero ? 'input-error' : ''}`}
                {...register("genero")}
              >
                <option value="">Selecciona tu género</option>
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
              </select>
            </div>
            {errors.genero && (
              <span className="error-message">
                <i className="bi bi-exclamation-circle error-icon"></i>
                {errors.genero.message}
              </span>
            )}
          </div>

          {/* Términos y Condiciones */}
          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                className="form-checkbox"
                {...register("terminosCondiciones")}
              />
              <span className="checkmark"></span>
              <span className="checkbox-text">
                Acepto los <a href="#" className="link">Términos y Condiciones</a> y la <a href="#" className="link">Política de Privacidad</a>
              </span>
            </label>
            {errors.terminosCondiciones && (
              <span className="error-message">
                <i className="bi bi-exclamation-circle error-icon"></i>
                {errors.terminosCondiciones.message}
              </span>
            )}
          </div>

          {/* Botón de envío */}
          <button 
            type="submit" 
            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="spinner"></div>
                Creando cuenta...
              </>
            ) : (
              'Crear cuenta'
            )}
          </button>
        </form>

        <div className="register-footer">
          <p>¿Ya tienes una cuenta? <a href="#" className="link">Inicia sesión</a></p>
        </div>
      </div>
    </div>
  )
}
