import React from 'react'
import SideNav from '../../components/SideNav'
import TopNav from '../../components/TopNav'
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import DashboardLayout from '../../components/DashboardLayout'
import PortfolioSection from './components/PortfolioSection'
import { CustomCard } from '../../Chakra/CustomCard'
import CurrentPrice from './components/currentPrice'
import Transactions from './components/Transactions'
import InfoCard from './components/InfoCard'

const Dashboard = ({}) => {
    return (
        <DashboardLayout title="Dashboard">
            <Grid 
            gridTemplateColumns={{
                base: "repeat(1, 1fr)",
                xl: "repeat(2, 1fr)",
            }} gap={6}>
                <GridItem colSpan={{
                    base: 1,
                    xl: 2,
                }}>
                    <PortfolioSection></PortfolioSection>
                </GridItem>
                <GridItem colSpan={1}>
                    <CurrentPrice></CurrentPrice>
                </GridItem>
                <GridItem colSpan={1}>
                    <Transactions></Transactions>
                </GridItem>
                <GridItem colSpan={1}>
                    <InfoCard 
                    tagText={'Loans'}
                    imgURL={'/left.svg'}
                    inverted={true}
                    text={'Learn more about Loans – Keep your Bitcoin, access it’s value without selling it'} ></InfoCard>
                </GridItem>
                <GridItem colSpan={1}>
                    <InfoCard 
                    tagText={'Contact'}
                    imgURL={'/right.svg'}
                    inverted={false}
                    text={'Learn more about our real estate, mortgage, and  corporate account services'}></InfoCard>
                </GridItem>
            </Grid>
        </DashboardLayout>
    )
}

export default Dashboard