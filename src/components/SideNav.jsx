import React from 'react'
import { Box, HStack, Stack, Icon, Text, Heading } from '@chakra-ui/react'
import { RxDashboard } from "react-icons/rx"
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom"

const SideNav = () => {
    const navLinks = [
        {
            icon: RxDashboard,
            text: "Dashboard",
            link: "/",
        },
        {
            icon: GrTransaction,
            text: "Transactions",
            link: "/transaction",
        }
    ]

    return (
        <Stack
            boxShadow={{
                base: "none",
                lg: "lg",
            }}
            w={{
                base: "full",
                lg: "256px"
            }}
            h="100vh"
            justify="space-between" bg="white" >
            <Box>
                <Heading pt="54px" mx="7" fontSize="20px" as="h1">MDV</Heading>
                <Box mx="3" mt="6">
                    {navLinks.map((nav) => (
                        <Link to={nav.link}>
                            <HStack key={nav.text} py="3" px="4" _hover={{
                                bg: "#F3F3F7",
                                color: "#171717"
                            }} borderRadius="10px" color="#797E82" transition="0.2s">
                                <Icon as={nav.icon}></Icon>
                                <Text fontSize="14px" fontWeight="600">{nav.text}</Text>
                            </HStack>
                        </Link>
                    ))}
                </Box>
            </Box>
            <Box mx="3" mt="6" mb="6">
                <Link to={'/support'}>
                    <HStack py="3" px="4" _hover={{
                        bg: "#F3F3F7",
                        color: "#171717"
                    }} borderRadius="10px" color="#797E82" transition="0.2s">
                        <Icon as={BiSupport}></Icon>
                        <Text fontSize="14px" fontWeight="600">Support</Text>
                    </HStack>
                </Link>
            </Box>
        </Stack>
    )
}

export default SideNav