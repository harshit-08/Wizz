import React from 'react'
import '../styles/login.css'
import logo from '../images/wizz.PNG'
import Paragraph from './Paragraph'
import Button from './Button'
// import { connect } from 'react-redux'


function Login({ loginHandler }) {



    return (
        <>

            <div className="login">
                <div className="login__wrapper">
                    <div className="login__header">
                        <img src={logo} alt="logo" className="login__header__logo" />
                    </div>
                    <div className="login__signIn">
                        <Paragraph text="Sign in" style="login__signIn__text" />
                        <Paragraph text="Click on the button below to Sign in using Google" style="login__signIn__desc" />
                        <Button text="Sign in" style="login__signIn__btn" onClick={loginHandler} />
                    </div>
                    <div>
                        <div className="login__signUp">
                            <Paragraph text="Don't have an Account ? " style="login__signUp__p1" />
                            <Paragraph text="Sign up" style="login__signUp__p2" />
                        </div>
                        {/* <div className="login__footer">
                            <div className="login__footer_circle"></div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>

    )
}

export default Login
