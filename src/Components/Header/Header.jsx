import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { HeaderStyle, StyleLink, Ul, Img } from "./style";

export default function Header() {
    return (
      <HeaderStyle>
        {/* <img src="src\assets\images\logo.png" alt="logomarca" /> */}
        <Img src={logo} alt="logomarca" />
        <nav>
          <Ul>
            <li>
              <StyleLink to="/">Home</StyleLink>
            </li>
            <li>
              <StyleLink to="/novidades">Novidades</StyleLink>
            </li>
            <li>
              <StyleLink to="/sobre">Sobre</StyleLink>
            </li>
          </Ul>
        </nav>
      </HeaderStyle>
    );
}