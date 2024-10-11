import React from 'react'
import { CustomCard } from '../../../Chakra/CustomCard'
import { Button, Flex, HStack, Icon, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Tag, Text } from '@chakra-ui/react'
import { GoArrowUpRight } from "react-icons/go";
import { BiSolidPlusCircle } from "react-icons/bi";
import { AiFillMinusCircle } from "react-icons/ai";

const CurrentPrice = () => {

  const timeStamps = ["6:55", "7:55", "8:55", "9:55", "10:55"]

  return (
    <CustomCard>
      <Flex justify='space-between' align='start'>
        <Stack>
          <HStack color={'black.80'}>
            <Text
              fontSize={'14px'}
              fontWeight={'600'}>Current Price</Text>
          </HStack>
          <HStack
            spacing={2}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}>
            <HStack>
              <Text fontSize="24px" fontWeight="600">₹26,670.25</Text>
              <HStack color={'green.500'} fontWeight={'600'}>
                <Icon as={GoArrowUpRight}></Icon>
                <Text fontSize="sm" fontWeight="600" mx={'-5px'}>0.04%</Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <Stack h={'56px'} justify={'center'}>
          <HStack>
            <Button>
              <Icon as={BiSolidPlusCircle}></Icon>
              <Text mx={'5px'}>Buy</Text>
            </Button>
            <Button>
              <Icon as={AiFillMinusCircle}></Icon>
              <Text mx={'5px'}>Sell</Text>
            </Button>
          </HStack>
        </Stack>
      </Flex>
      <Tabs variant='soft-rounded' colorScheme='green'>
        <Flex justify={'end'}>
          <TabList bg={'black.5'} p={'3px'} borderRadius={'6px'}>
            {
              ["1H", "1D", "1W", "1M"].map((tab) => (
                <Tab
                  key={tab}
                  fontSize={'sm'}
                  px={'6px'}
                  py={'4px'}
                  borderRadius={4}
                  _selected={{
                    bg: "white"
                  }}>{tab}</Tab>
              ))
            }
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image src='/graph.svg' width={'100%'} mt='50px'></Image>
            <HStack justify={'space-between'}>
              {timeStamps.map((time) => (
                <Text key={time} fontSize={'sm'} color={'black.80'}>{time}</Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <Image src='/graph2.svg' width={'100%'} mt='50px'></Image>
            <HStack justify={'space-between'}>
              {timeStamps.map((time) => (
                <Text key={time} fontSize={'sm'} color={'black.80'}>{time}</Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <Image src='/graph3.svg' width={'100%'} mt='50px'></Image>
            <HStack justify={'space-between'}>
              {timeStamps.map((time) => (
                <Text key={time} fontSize={'sm'} color={'black.80'}>{time}</Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <Image src='/graph4.svg' width={'100%'} mt='50px'></Image>
            <HStack justify={'space-between'}>
              {timeStamps.map((time) => (
                <Text key={time} fontSize={'sm'} color={'black.80'}>{time}</Text>
              ))}
            </HStack>
          </TabPanel>
        </TabPanels>
      </Tabs>


    </CustomCard>
  )
}

export default CurrentPrice