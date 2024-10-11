import { Box, calc, Container, Flex, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SideNav from './SideNav'
import TopNav from './TopNav'
import SideDrawer from './SideDrawer'

const DashboardLayout = ({ title, children }) => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
        <Flex>
            <Box
                display={{
                    base: "none",
                    lg: "flex"
                }}>
                <SideNav></SideNav>
            </Box>
            <SideDrawer isOpen={isOpen} onClose={onClose}></SideDrawer>
            <Box flexGrow={1}>
                <TopNav title={title} onOpen={onOpen}></TopNav>
                <Container px="4" maxWidth="65rem" mt="2.5" h={'calc(100vh - 88px)'} overflowX={'hidden'} overflowY={'auto'}>{children}</Container>
            </Box>
        </Flex>
    )
}

export default DashboardLayout