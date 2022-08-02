/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const Login = () => {
    return (
        <div className="container-login">
            <img src="/icons/logo.svg" alt="Logo Fiap" className="logo"/>
            <form>
                <div className="input">
                    <img src="/icons/mail.svg" alt="Informe seu login" />
                    <input type="text" placeholder="Login"/>
                </div>
                <div className="input">
                    <img src="/icons/lock.svg" alt="Informe sua senha" />
                    <input type="password" placeholder="Senha"/>
                </div>
                <button>Login</button>
            </form>
        </div>
    );
}