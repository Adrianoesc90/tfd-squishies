import { Card, SimpleGrid, Text } from "@mantine/core";
import classes from './menuxs.module.css';

const BASE_HEIGHT_XS = 150;
const carImageXS = (alto: number, link:string, imagen:string, titulo:string) => (
    <Card p="lg" shadow="lg" className={classes.card} radius="md" component="a" href={link} target="_blank" h={alto}>
        <div className={classes.image} style={{backgroundImage:'url('+imagen+')',}} />
        <div className={classes.overlay} />
        <div className={classes.content}><div><Text size="lg" className={classes.title} fw={500}>{titulo}</Text></div></div>
    </Card>
);

export default function MenuXS() {
    return (
        <SimpleGrid cols={1}>
            {carImageXS(BASE_HEIGHT_XS,'#','/media/menu_home/xs/descendientes.png','Descendientes')}
            {carImageXS(BASE_HEIGHT_XS,'#','/media/menu_home/xs/armas.png','Armas')}
            {carImageXS(BASE_HEIGHT_XS,'#','/media/menu_home/xs/material_mejora.png','Material de mejora')}
            {carImageXS(BASE_HEIGHT_XS,'#','/media/menu_home/xs/modulos.png','Modulo')}
            {carImageXS(BASE_HEIGHT_XS,'#','/media/menu_home/xs/componentes_externos.png','Componentes externos')}
            {carImageXS(BASE_HEIGHT_XS,'#','/media/menu_home/xs/material_vital.png','Material vital')}
            {carImageXS(BASE_HEIGHT_XS,'#','/media/menu_home/xs/material_basico.png','Materiales basicos')}
            {carImageXS(BASE_HEIGHT_XS,'#','/media/menu_home/xs/material_amorfo.png','Material amorfo')}
        </SimpleGrid>
    )
}