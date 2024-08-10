import { Card, Container, Grid, Group, px, SimpleGrid, Skeleton, Stack, Text, useMantineTheme } from "@mantine/core";
import classes from './menu_home.module.css';

const BASE_HEIGHT = 400;
const getNewHeight = (children: number, spacing: number) => BASE_HEIGHT / children - spacing * ((children - 1) / children);
const carImage = (alto: number, link:string, imagen:string, titulo:string) => (
    <Card p="lg" shadow="lg" className={classes.card} radius="md" component="a" href={link} target="_blank" h={alto}>
        <div className={classes.image} style={{backgroundImage:'url('+imagen+')',}} />
        <div className={classes.overlay} />
        <div className={classes.content}><div><Text size="lg" className={classes.title} fw={500}>{titulo}</Text></div></div>
    </Card>
);

export default function MenuHome() {
    const theme = useMantineTheme();
    const BASE_SPACING = theme.spacing.md;
    return (
        <Grid grow visibleFrom="xs">
          <Grid.Col span={{base:12, xs:4, md:4, lg:1}}>
              {carImage(BASE_HEIGHT,'#','/media/menu_home/descendientes.png','Descendientes')}
          </Grid.Col>
          <Grid.Col span={{base:12, xs:4, md:4, lg:1}}>
              <Stack>
                  {carImage(getNewHeight(2, px(BASE_SPACING) as number),'#','/media/menu_home/armas.png','Armas')}
                  {carImage(getNewHeight(2, px(BASE_SPACING) as number),'#','/media/menu_home/material_mejora.png','Material de mejora')}
              </Stack>
          </Grid.Col>
          <Grid.Col span={{base:12, xs:4, md:4, lg:1}}>
            {carImage(BASE_HEIGHT,'#','/media/menu_home/modulos.png','Modulo')}
          </Grid.Col>
          <Grid.Col span={{base:12, xs:4, md:6, lg:1}}>
            {carImage(BASE_HEIGHT,'#','/media/menu_home/componentes_externos.png','Componentes externos')}
          </Grid.Col>
          <Grid.Col span={{base:12, xs:4, md:6, lg:1}}>
              <Stack>
                  <SimpleGrid cols={2} spacing="sm">
                    {carImage(getNewHeight(2, px(BASE_SPACING) as number),'#','/media/menu_home/material_vital.png','Material vital')}
                    {carImage(getNewHeight(2, px(BASE_SPACING) as number),'#','/media/menu_home/material_basico.png','Materiales basicos')}
                  </SimpleGrid>
                  {carImage(getNewHeight(2, px(BASE_SPACING) as number),'#','/media/menu_home/material_amorfo.png','Material amorfo')}
              </Stack>
          </Grid.Col>
        </Grid>
    )
}