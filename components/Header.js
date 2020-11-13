import { Navigation } from './Nav'

export const Header = () => {

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__circle">
          <h2 className="header__circle-text">
            Monssieur tshirt
          </h2>
        </div>
        <div>
          <h1 className="header__title">Monsieur T-Shirt</h1>
          <p>
            E-commerce, Mode, Publicité Bordeaux
          </p>
          <button
            type="button"
            className="header__btn"
          >
            Suivre
          </button> 
          <span>+ ME RAJOUTER AU POOL</span>
        </div>
      </div>
      <Navigation />
    </header>
  )
}
