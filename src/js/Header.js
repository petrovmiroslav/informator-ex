import React from 'react';
import LinksSection from './linksSection';
import Logo from './logo';
import CatalogAndSearch from './CatalogAndSearch';
import Account from './Account';


export default function Header (props) {
  return (
    <section className='header'>
      <LinksSection/>
      <section className='header__navSection'>
        <Logo/>
        <CatalogAndSearch/>
        <Account/>
      </section>
    </section>
  );
}