import logoImg from "../assets/logo.jpg"
import { Button } from "../UI/Button"
export const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>Food Order App</h1>
      </div>

      <nav>
        <Button textOnly> Cart (0)</Button>
      </nav>
    </header>
  )
}
