import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <div className="row">
        <div className="box1">
          <img className="Header_logo" src="https://www.ishtixonttb.uz/static/media/logo.88e4fc4ec30b64238978.jpg" alt="Header_logo" /></div>
        <div className="box2">
          <Link className="line" to='/'>Home</Link>
          <Link className="line" to='/leaders'>Shifokorlar</Link>
          <Link className="line" to='/departments'>Bo'limlar</Link>
          <Link className="line" to='/news'>Yangiliklar</Link>
          <Link className="line" to='/vacancy'>Bo'sh ish o'rni</Link>
          <Link className="line" to='/qvp'>Qvp</Link>
          <Link className="line" to='/contact'>Aloqa</Link>
        </div>
        <div className="box3">
        <select id="car" name="car" >
          <option value="uz">uz</option>
          <option value="ru">ru</option>
          <option value="en">en</option>
        </select>
      </div>

    </div >
    </>
  )
}

export default Header