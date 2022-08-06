/* eslint-disable @next/next/no-img-element */
import React from 'react';

export const Header = () => {
    return (
        <div className="container-header">
            <img src="/icons/logo.svg" alt="logo fiap" className="logo" />
            <button><span>+</span>Adicionar Tarefa</button>

            <div className='mobile'>
                <span>Olá ....</span>
                <img src="/icons/exit-mobile.svg" alt="sair" />
            </div>

            <div className='desktop'>
                <span>Olá ....</span>
                <img src="/icons/exit-desktop.svg" alt="sair" />
            </div>
        </div>
    )
}