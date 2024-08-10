'use client'
import { AppShell, Burger, Group, UnstyledButton, Image, useMantineTheme, Drawer, SimpleGrid, Card, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import Link from 'next/link';
import classes from './main.module.css';
import MenuXS from '../components/menus/menuxs';

  
export function MainLayout({ children }: { children: React.ReactNode; }) {
  const [drawer, { toggle:cambiar, close:cerrar }] = useDisclosure();
  const theme = useMantineTheme();
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true } }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
            <Burger opened={drawer} onClick={cambiar} size="sm" />
            <Group justify="space-between" style={{ flex: 1 }}>
                <Image radius="md" src="/media/Logo.webp" h={30} />
            </Group>
        </Group>
      </AppShell.Header>

      <Drawer opened={drawer} onClose={cerrar} title="Menu">
        <MenuXS />
      </Drawer>

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}