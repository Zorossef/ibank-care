import { useRef, useState } from "react";
import ArrowDown from "../../assets/icons/ArrowDown";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import {
  Container,
  SelectWrap,
  SelectMenu,
  Title,
  OptionsList,
  Option,
} from "./style";
type ItemProps = {
  label: string;
  value: string;
};
interface PropsSelect {
  text: string;
  data: Array<ItemProps>;
  width?: string;
}
const Select = ({ text, data, width }: PropsSelect) => {
  const userDropdownRef = useRef<HTMLDivElement>(null);
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);
  const [valueSelected, setValueSelected] = useState<String>(text);
  const handleDisplayMenu = () => {
    return setDisplayMenu(!displayMenu);
  };
  useOnClickOutside(userDropdownRef, () => setDisplayMenu(false));
  return (
    <Container ref={userDropdownRef}>
      <SelectWrap>
        <SelectMenu onClick={() => handleDisplayMenu()}>
          <Title>{valueSelected}</Title>
          <ArrowDown />
        </SelectMenu>
        <OptionsList displayMenu={displayMenu}>
          {/* <Option onClick={() => setDisplayMenu(false)}>hello</Option> */}
          {data.map((item) => {
            return (
              <Option
                onClick={() => {
                  setValueSelected(item.label);
                  setDisplayMenu(false);
                }}
                selectedOption={item.label === valueSelected ? true : false}
              >
                {item.label}
                <input type="hidden" value={item.value} />
              </Option>
            );
          })}
        </OptionsList>
      </SelectWrap>
    </Container>
  );
};
export default Select;
