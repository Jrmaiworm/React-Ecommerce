
import Body from "./components/Body/index";
import Footer from "./components/Footer/index";
import { LogoHeader } from "./styledComponents/LogoHeader/styles";
import GlobalStyle from "./styles/global";


function App() {

  return (
    <>
      <LogoHeader />
      <Body />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
