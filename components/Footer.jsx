import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer style={{ background: '#000', padding: '2rem', color: 'white', display: 'flex', flexDirection: 'column', gap: '2rem'}}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
        <div>
          <p style={{ fontSize: '20px', marginBottom: '10px'}}>Liens</p>
          <p style={{ fontSize: '20px'}}>
          <Link style={{ color: '#fff'}} href='/'>Accueil</Link>
          </p>
          <p style={{ fontSize: '20px'}}>
            <Link style={{ color: '#fff'}} href='/legalnotice'>Règle du jeu</Link>
          </p>
        </div>
        <div>
          <div style={{ fontSize: '20px', display: 'flex', flexDirection: 'column'}}>
            <p style={{ fontSize: '20px', marginBottom: '10px'}}>Nous Contactez</p>
            Numero de telephone:
            <Link style={{ color: '#fff'}} href='tel:+2120671050786'>(+212) 0671050786</Link>
            Gmail:
            <Link style={{ color: '#fff'}} href='mailto:nassimtiptop@gmail.com'>nassimtiptop@gmail.com</Link>
          </div>
        </div>
      </div>
      <div style={{ padding: '2rem 0 0', borderTop: '1px solid white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '20px'}}>
      <p>Projet étudiant ief2i digital school </p>
      <p>Mention légal @2022 </p>
      </div>
    </footer>
  )
}

export default Footer