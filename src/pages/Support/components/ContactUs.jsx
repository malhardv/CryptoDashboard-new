import { Box, Button, Card, Checkbox, Flex, FormControl, FormHelperText, FormLabel, HStack, Icon, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

const ContactUs = ( ) => {
    return (
        <Card padding={6} borderRadius={'16px'} flexGrow={1}>
            <Stack spacing={6}>
                <Text fontSize={'14px'} fontWeight={600}>You will receive a response within 24 hours of submit.</Text>
                <HStack
                    flexDir={{
                        base: "column",
                        xl: "row"
                    }}

                >
                    <FormControl>
                        <FormLabel fontSize={'12px'} fontWeight={600}>First Name</FormLabel>
                        <Input type='text' placeholder='John' fontSize={'14px'} color={'black.20'} fontWeight={'bold'} height={'38px'} />
                    </FormControl>
                    <FormControl>
                        <FormLabel fontSize={'12px'} fontWeight={600}>Last Name</FormLabel>
                        <Input type='text' placeholder='Doe' fontSize={'14px'} color={'black.20'} fontWeight={'bold'} h={'38px'} />
                    </FormControl>
                </HStack>
                <FormControl>
                    <FormLabel fontSize={'12px'} fontWeight={600}>Email</FormLabel>
                    <Input type='email' placeholder='name@example.com' fontSize={'14px'} color={'black.20'} fontWeight={'bold'} h={'38px'} />
                </FormControl>
                <FormControl>
                    <FormLabel fontSize={'12px'} fontWeight={600}>Message</FormLabel>
                    <Textarea placeholder='Your Message' fontSize={'14px'} color={'black.20'} fontWeight={'bold'} h={'92px'} />
                </FormControl>
                <Checkbox>
                    <Text fontSize={'12px'}>
                        I agree with the
                        <Box color={'p.purple'} as='span'>
                            {" "}Terms & Conditions
                        </Box>
                    </Text>
                </Checkbox>
                <Stack>
                    <Button fontSize={'14x'}>Send Message</Button>
                    <Button fontSize={'14x'} colorScheme='gray'>Book a Meeting</Button>
                </Stack>
            </Stack>
        </Card>
    )
}

export default ContactUs