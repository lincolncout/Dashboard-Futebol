"use client";
import * as styles from "./styles.scss";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const customStyles = {
  // Representa o campo principal onde o usuário clica para abrir o menu.
  control: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#f3f3f3" : "white",
    borderColor: state.isFocused ? "#4CAF50" : "#ccc",
    boxShadow: state.isFocused ? "0 0 5px #4CAF50" : "none",
    "&:hover": {
      borderColor: "#4CAF50",
    },
    fontSize: "30spx", // Tamanho do texto no campo selecionado
    padding: "5px",
    whiteSpace: "nowrap",
    wordWrap: "break-word",
  }),
  // Representa cada item da lista dentro do dropdown.
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#4CAF50" : "white",
    color: state.isSelected ? "white" : "black",
    "&:hover": {
      backgroundColor: "#81c784",
      color: "white",
    },
    fontSize: "20px",
    whiteSpace: "normal", // Permite múltiplas linhas caso o texto seja grande
    wordWrap: "break-word",
  }),
  // Representa o dropdown completo (a caixa que aparece quando você clica no campo).
  menu: (provided) => ({
    ...provided,
    borderRadius: "5px",
    // width: "auto", // Ajusta automaticamente para o tamanho do texto
    minWidth: "200px", // Define um tamanho mínimo para evitar cortes
    // boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  }),
  // Representa o texto da opção selecionada no campo principal.
  singleValue: (provided) => ({
    ...provided,
    fontSize: "20px",
    whiteSpace: "normal", // Evita truncamento com "..."
    overflow: "visible",
    textOverflow: "clip",
  }),
};

export default function Header() {
  return (
    <header>
      <Select styles={customStyles} options={options} />
      <Select options={options} />
      <Select options={options} />
      <Select options={options} />
      <Select options={options} />
    </header>
  );
}
