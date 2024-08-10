import { Container } from "@mantine/core";
import { MainLayout } from "../../layouts/main";
import classes from './index.module.css';
import MenuXS from "../../components/menus/menuxs";
import MenuHome from "../../components/menus/menu_home";

export default function Home() {
  return (
    <MainLayout>
      <Container fluid visibleFrom='xs'>
        <MenuHome />
      </Container>
      <Container fluid hiddenFrom='xs'>
        <MenuXS />
      </Container>
    </MainLayout>
  );
}
