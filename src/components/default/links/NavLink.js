import React from 'react';
import './style.css';
import Icon from '../elements/Icon';

export default function NavLink({
    active, /*condição pra exibir se o link está ativo ou não*/
    iconStyle, 
    iconImage /*parâmetro de imagem do ícone*/,
    label = 'Item' /*parâmetro do texto do componente*/,
    borderRadius = 'small',
    link,
    variant = 'text',
    textFont = 'heading',
    color = 'black',
    size = 'small'
  }) 

  {
    return (
        <a className={`link nav-link text ${variant} ${color} ${active ? 'active' : ''} ${size} border-${borderRadius}`} href={link}>
            {iconImage && <Icon Image={iconImage} style={iconStyle}/>}
            <span className={`${textFont}`}>{label}</span>
            {origin = "menu" && <span className="tooltip">{label}</span>}
        </a>
    )
}
