import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Icon,
    Stack,
    Text,
    Tag,
} from '@chakra-ui/react'
import { BiDownArrow } from 'react-icons/bi'

const TransactionTable = () => {

    const tableData = [
        {
            id: "HD82NA2H",
            date: "23-10-10",
            time: "7:06 PM",
            type: {
                name: "INR Deposit",
                tag: "E-Transfer",
            },
            amount: "+ ₹81,123.10",
            amount2: "",
            status: "Pending",
            color: "gray"
        },
        {
            id: "HD82NA2H",
            date: "23-10-9",
            time: "2:48 PM",
            type: {
                name: "INR Withdraw",
                tag: "Wire-Transfer",
            },
            amount: "- ₹81,123.10",
            status: "Processing",
            color: "yellow"
        },
        {
            id: "HD82NA2H",
            date: "23-10-7",
            time: "9:21 PM",
            type: {
                name: "Buy",
                tag: "",
            },
            amount: "+ 12.48513391 BTC",
            status: "Cancelled",
            color: "red"
        },
        {
            id: "HD82NA2H",
            date: "23-10-7",
            time: "1:32 PM",
            type: {
                name: "Sell",
                tag: "",
            },
            amount: "- 0.36401628 BTC",
            status: "Completed",
            color: "green"
        },
        {
            id: "HD82NA2H",
            date: "23-10-6",
            time: "9:19 PM",
            type: {
                name: "BTC Deposit",
                tag: "",
            },
            amount: "+ 4.13946104 BTC",
            status: "Completed",
            color: "green"
        },
        {
            id: "HD82NA2H",
            date: "23-10-5",
            time: "1:56 PM",
            type: {
                name: "BTC Withdraw",
                tag: "",
            },
            amount: "- 10.00000000 BTC",
            status: "Completed",
            color: "green"
        },
    ]

    const statusColor = {
        Pending: "#797E82",
        Processing: "#F5A50B",
        Completed: "#059669",
        Cancelled: "#DC2626",
    };

    return (
        <TableContainer>
            <Table variant='simple' colorScheme='gray'>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Date & Time <Icon as={BiDownArrow}></Icon></Th>
                        <Th>Type</Th>
                        <Th>Amount<Icon as={BiDownArrow}></Icon></Th>
                        <Th>Status</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {tableData.map((data) => (
                        <Tr>
                            <Td fontSize={'14px'} fontWeight={'600'}>{data.id}</Td>
                            <Td>
                                <Stack>
                                    <Text fontSize={'14px'} fontWeight={'600'}>{data.date}</Text>
                                    <Text fontSize={'12px'} fontWeight={'600'} color={'gray'}>{data.time}</Text>
                                </Stack>
                            </Td>
                            <Td>
                                <Stack>
                                    <Text fontSize={'14px'} fontWeight={'600'}>{data.type.name}</Text>
                                    <Text fontSize={'12px'} fontWeight={'600'} color={'gray'}>{data.type.tag}</Text>
                                </Stack>
                            </Td>
                            <Td fontSize={'14px'} fontWeight={'600'}>{data.amount}</Td>
                            <Td ><Tag fontSize={'14px'} fontWeight={'600'} color={'white'} bg={statusColor[data.status]}>{data.status}</Tag></Td>
                        </Tr>
                    ))}
                </Tbody>

            </Table>
        </TableContainer>
    )
}

export default TransactionTable