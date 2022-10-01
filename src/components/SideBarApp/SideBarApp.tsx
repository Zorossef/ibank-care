import { useEffect, memo, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/Logo";
import Logout from "../../assets/icons/Logout";
import { MenuList } from "../../modelTypes/menuType";
import { getMenuListAction } from "../../redux/actions/menuActions";
import { useAppDispatch, useAppSelector } from "../../redux/hooks-redux";
import menuSelector from "../../redux/selectors/menuSelector";
import ItemElement from "./ItemElement";
import {
  BottomSection,
  Container,
  MenuSection,
  TopSection,
  GeneralItem,
  Title,
  ListItem,
  Divider,
  IconWrap,
} from "./style";

const SideBarApp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch: (obj: any) => void = useAppDispatch();
  const { menuList } = useAppSelector(menuSelector(location.pathname));
  useEffect(() => {
    dispatch(getMenuListAction());
    // dispatch(setSelectedItem(location.pathname));
  }, []);
  const navigaTo = useCallback((url: string) => {
    navigate(url);
  }, []);
  return (
    <Container>
      <TopSection>
        <Logo />
      </TopSection>
      <MenuSection>
        {menuList.map((menu: MenuList, key: number) => (
          <GeneralItem key={key}>
            <Title>{menu.title}</Title>
            <ListItem>
              {menu.listItem.map((item, key: number) => {
                return <ItemElement key={key} item={item} onClick={navigaTo} />;
              })}
            </ListItem>

            <Divider />
          </GeneralItem>
        ))}

        {/* <OtherItem>
          <TitleOther>Other</TitleOther>
          <ListItem>
            <Item>Help & Support</Item>
          </ListItem>
        </OtherItem> */}
      </MenuSection>
      <BottomSection>
        <IconWrap>
          <Logout />
        </IconWrap>
        Log Out
      </BottomSection>
    </Container>
  );
};

export default memo(SideBarApp);
