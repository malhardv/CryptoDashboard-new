import { Box, Button, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { IoMdInformationCircle } from "react-icons/io";
import { PiCurrencyBtcFill } from "react-icons/pi";
import { FaRupeeSign } from "react-icons/fa";
import { LiaDownloadSolid } from "react-icons/lia";
import { LiaUploadSolid } from "react-icons/lia";

const PortfolioSection = () => {
  return (
    <HStack
    justify="space-between"
    bg="white"
    borderRadius="xl"
    p="6"
    align={{
      base: "flex-start",
      xl: "center",
    }}
    flexDir={{
      base: "column",
      xl: "row",
    }}
    spacing={{
      base: 4,
      xl: 0,
    }}>

      <HStack
      spacing={{
        base: 0,
        xl: 16,
      }}
      align={{
        base: "flex-start",
        xl: "center",
      }}
      flexDir={{
        base: "column",
        xl: "row",
      }}>
        <Stack>
          <HStack>
            <Text fontSize="14px" fontWeight="600" color={'black.80'}>Total Potfolio Value</Text>
            <Icon color={'grey'} as={IoMdInformationCircle} mx={'-5px'}></Icon>
          </HStack>
          <Text
            fontSize={'24px'}
            fontWeight={'600'}>₹ 112,312.24</Text>
        </Stack>

        <Stack>
          <Text
            fontSize={'14px'}
            fontWeight={'600'}
            color={'black.80'}>Wallet Balances</Text>
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
            <HStack gap={'4px'}>
              <Text fontSize="24px" fontWeight="600">22.39401000</Text>
              <Tag borderRadius={'100'} fontSize={'12px'} fontWeight={'600'}>BTC</Tag>
              {/* <Icon as={PiCurrencyBtcFill} fontSize={'20px'} color={'black.80'}></Icon> */}
            </HStack>
            <HStack gap={'4px'}>
              <Text fontSize="24px" fontWeight="600">₹ 1,300.00</Text>
              <Tag borderRadius={'100'} fontSize={'12px'} fontWeight={'600'}>INR</Tag>
              {/* <Icon as={FaRupeeSign} fontSize={'18px'} color={'black.80'}></Icon> */}
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <Stack h={'56px'} justify={'center'}>
        <HStack>
          <Button>
            <Icon as={LiaUploadSolid}></Icon>
            <Text mx={'5px'}>Deposit</Text>
          </Button>
          <Button>
            <Icon as={LiaDownloadSolid}></Icon>
            <Text mx={'5px'}>Withdraw</Text>
          </Button>
        </HStack>
      </Stack>

    </HStack>
  )
}

export default PortfolioSection