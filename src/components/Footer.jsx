import React from 'react'

const Footer = () => {
  return (
    <div className='container'>
        <footer className='row row-col-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top'>
          <div className='col mb-3'>
            <a className=''>
              <img src='img/my_logo.jpg' className='bi me-2' width={80} height={80}>
              </img>
            </a>
            <p>
              КМЗ - Купи Масло Здесь
            </p>
            </div>
            <div className='col mb-3'>

            </div>
            <div className='col mb-4'>
              <h5>О моторном масле</h5>
              <ul className='nav flex-column'>
                <li className='nav-item mb-3'>
                  <a className='nav-link p-0 text-muted'>Синтетическое</a>
                </li>
                <li className='nav-item mb-3'>
                <a className='nav-link p-0 text-muted'>Касторовое</a>
                </li>
              </ul>
            </div>
            <div className='col mb-4'>
              <h5>О производителях масла</h5>
              <ul className='nav flex-column'>
                <li className='nav-item mb-3'>
                  <a className='nav-link p-0 text-muted'>Хорошие</a>
                </li>
                <li className='nav-item mb-3'>
                <a className='nav-link p-0 text-muted'>Тоже хорошие, но</a>
                </li>
              </ul>
            </div>
        </footer>
    </div>
  )
}

export default Footer