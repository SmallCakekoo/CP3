import RootApp from "./root/RootApp";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import LetterContainer from "./components/LetterContainer";
import ColorContainer from "./components/ColorContainer";
import MenuPage from "./pages/MenuPage";
import LetterPage from "./pages/LetterPage";
import ColorPage from "./pages/ColorsPage";
import BoardPage from "./pages/BoardPage";

customElements.define("root-app", RootApp);
customElements.define("login-form", LoginForm);
customElements.define("register-form", RegisterForm);
customElements.define("letter-container", LetterContainer);
customElements.define("colors-container", ColorContainer);
customElements.define("menu-page", MenuPage);
customElements.define("letter-page", LetterPage);
customElements.define("color-page", ColorPage);
customElements.define("board-page", BoardPage);
