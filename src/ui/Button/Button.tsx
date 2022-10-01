import { ButtonWrap } from "./styled";
interface ButtonProps {
  children: string;
}

const Button = ({ children }: ButtonProps) => {
  return <ButtonWrap>{children}</ButtonWrap>;
};

export default Button;

// const words = ["dog", "the", "answer"];
// const letters = "g";

// const filterWords = words.filter((w) => {
//   const dataFound = letters.split("").filter((l) => w.includes(l)).length; // [] true/false
//   return dataFound;
// });
