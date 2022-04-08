import "./style.css";
import toast, { Toaster } from "react-hot-toast";
import LogoHeader from "../../assets/logoHeader.svg";

const Header = ({
  showProducts,
  inputValue,
  setInputValue,
  filteredProducts,
}) => {
  return (
    <header>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ style: { fontFamily: "Inter" } }}
      />
      <img className="logoHeader" src={LogoHeader} alt=""></img>
      <div className="inputContainer">
        <input
          className="inputHeader"
          placeholder="Digitar pesquisa"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        ></input>
        <button
          type="submit"
          className="buttonHeader"
          onClick={() => {
            showProducts(inputValue);
            inputValue !== "" && toast.success(`Resultado para: ${inputValue}`);
          }}
        >
          Pesquisar
        </button>
      </div>
    </header>
  );
};

export default Header;
