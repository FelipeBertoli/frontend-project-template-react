import React from 'react';
import './style.css'
import IconButton from '../buttons/IconButton';
import { Logo } from '../../ComponentsModule';
import NavLink from '../links/NavLink';

export default function ClassicHeader({
  headerActionList,
  headerBorderStyle = 'none',
  headerItemAlign = 'spacing',
  headerIconButtonColor = 'primary',
  headerIconButtonSize = 'sm',
  headerIconButtonStyle = 'solid',
  headerIconButtonVariant = 'contained',
  headerNavList,
  headerNavItemVariant = 'text',
  headerNavItemFont = 'heading',
  showHeaderShadow = true
}) {

  const headerClasses = `header ${headerBorderStyle} ${headerNavItemVariant} ${showHeaderShadow ? 'header-shadow' : ''} ${headerNavItemVariant === 'full' && 'full-nav'}`;

  return (
    <div className={headerClasses}>
      <Logo width="200px" setPadding={`${headerNavItemVariant === 'full' && true}`}/>
      <div className={`header-toolbar header-flex ${headerItemAlign}`}>
        {headerNavList && (
          <nav className="header-nav header-flex">
            {headerNavList.map((index) => {
              return (
                <NavLink key={index} variant={headerNavItemVariant} textFont={headerNavItemFont}/>
              )
            })}
          </nav>
        )}
        {headerActionList && (
          <div className="header-actions header-flex">
            {headerActionList.map((actionNav, index) => (
              <IconButton key={index} action={() => window.open(actionNav.link)} icon={actionNav.icon} iconStyle={headerIconButtonStyle} color={headerIconButtonColor} size={headerIconButtonSize} type={headerIconButtonVariant} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
