import { Button, Card, Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tab, TabList, TabPanel, TabPanels, Tabs, Tag } from '@chakra-ui/react'
import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { AiOutlineDownload } from 'react-icons/ai'
import TransactionTable from './components/TransactionTable'
import { BiSearch } from 'react-icons/bi'

const Transaction = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Withdraw",
      count: 153,
    },
    {
      name: "Trade",
      count: 31,
    },
  ]
  return (
    <DashboardLayout title={'Transactions'}>
      <Flex justify={'end'} mt={'6'} mb={'3'}>
        <Button leftIcon={<Icon as={AiOutlineDownload}></Icon>}>Export CSV</Button>
      </Flex>
      <Card borderRadius={'16px'}>
        <Tabs>
          <TabList p={'4'} width={'full'} justifyContent={'space-between'}>
            <HStack>
              {tabs.map((tab) => (
                <Tab>
                  {tab.name}
                  <Tag colorScheme='gray' borderRadius={'full'} mx={2}>{tab.count}</Tag>
                </Tab>
              ))}
            </HStack>
            <InputGroup maxWidth={'195px'} fontSize={'14px'}>
              <InputLeftElement pointerEvents='none'>
                <Icon as={BiSearch} />
              </InputLeftElement>
              <Input type='tel' placeholder='Search Transaction' />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable></TransactionTable>
            </TabPanel>
            <TabPanel>
              <TransactionTable></TransactionTable>
            </TabPanel>
            <TabPanel>
              <TransactionTable></TransactionTable>
            </TabPanel>
            <TabPanel>
              <TransactionTable></TransactionTable>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  )
}

export default Transaction
