import './Navbar.css'
import Link from './Link'


function Navbar(){

  const x = 11;
  const img = 'vite';
  // const imgStyle ={
  //   height: '300px',
  //   borderRadius: '100%',
  // };
  
  return (
    <>
      <div className={`box rounded ${x < 10 ? "rotated" : ""}`}>

        x è {x}

      </div>
      <img className='immage-arrotondata' src={`/${img}.svg`} alt="" />
      <ul>
        <li>
          <Link>home</Link>
        </li>
        <li>
          <Link>contatti</Link>
        </li>
        <li>
          <Link>about</Link>
        </li>
        <li>
          <Link>iscriviti</Link>
        </li>
      </ul>
    </>
  )
}

export default Navbar