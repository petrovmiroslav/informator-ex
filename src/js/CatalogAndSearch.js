import React from 'react';

export default function CatalogAndSearch (props) {
    return (
      <section className='header__catalogAndSearch catalogAndSearch'>
        <div className='catalogAndSearch__searchRadius'>
          <div className='catalogAndSearch__catalog'>
            <span className='catalogAndSearch__catalogText'>Каталог</span>
            <button className='hamburgerButton button'>
              <div className='hamburgerButton__line'></div>
              <div className='hamburgerButton__line'></div>
              <div className='hamburgerButton__line hamburgerButton__line--bottom'></div>
            </button>
          </div>
          <div className='catalogAndSearch__searchSeparator'></div>
          <form className='catalogAndSearch__searchForm  form'>
            <legend className="visuallyhidden">Поиск по лотам</legend>
            <input className="searchForm__searchInput input" type="text" name="searchInput" placeholder="Поиск по лотам"></input>
            <input className="visuallyhidden" type="submit" name="submit" id="searchSubmit" onClick={e => e.preventDefault()}>
            </input>
            <label className="searchForm__searchSubmit button" htmlFor="searchSubmit">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.85809 0C12.198 0 15.7162 3.51711 15.7162 7.85568C15.7162 9.63866 15.122 11.2829 14.1208 12.6013L19.6866 18.1718C20.1048 18.5904 20.1044 19.2686 19.6857 19.6867C19.267 20.1048 18.5885 20.1044 18.1703 19.6858L12.6052 14.1165C11.2864 15.1174 9.64163 15.7114 7.85809 15.7114C3.51819 15.7114 0 12.1942 0 7.85568C0 3.51711 3.51819 0 7.85809 0ZM7.85809 2.14234C4.70181 2.14234 2.14309 4.70027 2.14309 7.85568C2.14309 11.0111 4.70181 13.569 7.85809 13.569C11.0144 13.569 13.5731 11.0111 13.5731 7.85568C13.5731 4.70027 11.0144 2.14234 7.85809 2.14234Z" fill="#13B17C"/>
              </svg>
            </label>
          </form>
        </div>
      </section>
    );
}