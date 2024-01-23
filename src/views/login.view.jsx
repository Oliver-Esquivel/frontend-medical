// Login.jsx
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { routeApi } from '../routes/route';
import '../styles/login.style.css'
import { AuthContext } from '../context/AuthProvider';
import doc from '../images/doctor_icono.png'
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Login = () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const { setIsAutenticated } = useContext(AuthContext);

  const redirectToExamenPage = () => {
    navigate('/examen', { replace: true });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch(`${routeApi}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: user,
          password
        })
      });

      const json = await res.json()
      console.log(json)
      if (res.ok) {
        setIsAutenticated(true);
        redirectToExamenPage();
      }
    } catch (error) {
      console.error('Error en la solicitud fetch:', error);
    }
  }

  return (
    <div className="doc_img">
      <div className="login_container">
        <div className="form_container">
          <img src={doc} alt="" className='user' />
          <div className="form_data">
            <Formik
              initialValues={{ email: '', password: '' }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Email requerido';
                }
                if (!values.password) {
                  errors.password = 'Password requerido';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setUser(values.email);
                setPassword(values.password);
                handleSubmit();
                setSubmitting(false);
              }}
            >
              <Form>
                <label htmlFor="email" className='email'>Email:</label>
                <Field type="email" name="email" id="user" className="form-control login_data" placeholder='user' />
                <ErrorMessage name="email" component="div" className="error" />

                <label htmlFor="password" className='password'>Password</label>
                <Field type="password" name="password" id="password" className="form-control login_data" placeholder='password' />
                <ErrorMessage name="password" component="div" className="error" />

                <button type="submit" className='button'>Iniciar sesión</button>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
