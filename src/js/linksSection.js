import React from 'react';

export default function LinksSection (props) {
  return (
    <div className='header__linksSection'>
      <div className='header__links'>
        <a className='header__link' href='#' rel='noopener noreferrer'>Реестры</a>
        <a className='header__link' href='#' rel='noopener noreferrer'>Услуги и тарифы</a>
        <a className='header__link' href='#' rel='noopener noreferrer'>Вопросы и ответы</a>
        <a className='header__link' href='#' rel='noopener noreferrer'>О сервисе</a>
        <a className='header__link' href='#' rel='noopener noreferrer'>Полезные статьи</a>
        <a className='header__link' href='#' rel='noopener noreferrer'>Партнерам</a>
        <a className='header__link' href='#' rel='noopener noreferrer'>Контакты</a>
      </div>
      <a className='header__link header__link--howToUse' href='#' rel='noopener noreferrer'>Как пользоваться сервисом</a>
    </div>
  );
}