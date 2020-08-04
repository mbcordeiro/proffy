import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'

function TeacherItem() {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/55818513?s=460&u=20b00b19981de2d48883d8ad159db9db2ad06f4a&v=4" alt="Matheus Cordeiro"/>
                <div>
                    <strong>Matheus Cordeiro</strong>
                    <span>Matemática</span>
                </div>
            </header>
            <p>
                texto
                <br/><br/>
                texto
            </p>
            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={ whatsappIcon } alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
    </article>
    )
}

export default TeacherItem