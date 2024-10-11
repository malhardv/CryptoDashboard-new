import React from 'react'
import { Flex, Heading, Container, Menu, MenuButton, MenuList, MenuItem, Button, HStack, Center, Box, Icon } from '@chakra-ui/react'
import { HiOutlineUserCircle } from "react-icons/hi2"
import { IoMdMenu } from "react-icons/io";

const TopNav = ({ title, onOpen }) => {
    return (
        <Box px="4" bg="white">
            <HStack
                height="16"
                maxW="72rem"
                justify="space-between"
                mx={'auto'}>
                    <Icon as={IoMdMenu} onClick={onOpen} display={{
                        base: "block",
                        lg: "none"
                    }}></Icon>
                <Heading fontSize="28px" fontWeight="600">{title}</Heading>

                <Menu>
                    <MenuButton>
                        <Icon as={HiOutlineUserCircle} fontSize="24px"></Icon>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Log Out</MenuItem>
                        <MenuItem>Support</MenuItem>
                    </MenuList>
                </Menu>

            </HStack>
        </Box>
    )
}

export default TopNav