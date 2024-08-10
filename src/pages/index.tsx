import { Card, Container, Grid, Group, px, SimpleGrid, Skeleton, Stack, Text, useMantineTheme } from "@mantine/core";
import { MainLayout } from "../../layouts/main";
import classes from './index.module.css';
import MenuXS from "../../components/menus/menuxs";
import MenuHome from "../../components/menus/menu_home";

const BASE_HEIGHT = 400;
const BASE_HEIGHT_XS = 150;
const getNewHeight = (children: number, spacing: number) => BASE_HEIGHT / children - spacing * ((children - 1) / children);
const carImage = (alto: number, link:string, imagen:string, titulo:string) => (
    <Card p="lg" shadow="lg" className={classes.card} radius="md" component="a" href={link} target="_blank" h={alto}>
        <div className={classes.image} style={{backgroundImage:'url('+imagen+')',}} />
        <div className={classes.overlay} />
        <div className={classes.content}><div><Text size="lg" className={classes.title} fw={500}>{titulo}</Text></div></div>
    </Card>
);
const carImageXS = (alto: number, link:string, imagen:string, titulo:string) => (
  <Card p="lg" shadow="lg" className={classes.card} radius="md" component="a" href={link} target="_blank" h={alto}>
      <div className={classes.imageXS} style={{backgroundImage:'url('+imagen+')',}} />
      <div className={classes.overlay} />
      <div className={classes.content}><div><Text size="lg" className={classes.title} fw={500}>{titulo}</Text></div></div>
  </Card>
);

export default function Home() {
  const theme = useMantineTheme();
  const BASE_SPACING = theme.spacing.md;
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
