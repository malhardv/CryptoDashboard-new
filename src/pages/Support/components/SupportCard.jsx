import { Box, Button, Card, Checkbox, Flex, FormControl, FormHelperText, FormLabel, HStack, Icon, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import { IoIosMail } from "react-icons/io";

const SupportCard = ({
  leftComponent,
  icon,
  title,
  text,
}) => {
  return (
    <Flex gap={14} mt={'4'}>
      <Stack width={'386px'}>
        <Icon as={icon} boxSize={8} color={'p.purple'}></Icon>
        <Text fontSize={'38px'} fontWeight={'600'}>{title}</Text>
        <Text fontSize={'14px'} fontWeight={'600'} color={'black.60'}>
          {text}
        </Text>
      </Stack>
      <Box maxW={'550px'} width={'full'}>
        {leftComponent}
      </Box>
    </Flex>
  )
}

export default SupportCard