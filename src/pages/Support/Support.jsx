import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import SupportCard from './components/SupportCard'
import ContactUs from './components/ContactUs'
import { IoMdMail } from 'react-icons/io'
import { AiTwotoneMessage } from 'react-icons/ai'
import InfoCard from '../Dashboard/components/InfoCard'

const Support = () => {
  return (
    <DashboardLayout title={'Support'}>
      <SupportCard
        leftComponent={<ContactUs></ContactUs>}
        title={'Contact Us'}
        text={'Feel Free to Reach Out to Us!'}
        icon={IoMdMail}>
      </SupportCard>

      <SupportCard
        leftComponent={<InfoCard
          tagText={'Chatbot'}
          imgURL={'/right.svg'}
          inverted={false}
          text={'Chat With Us Now!'}
        ></InfoCard>}
        title={'Live Chat'}
        text={'Can\'t wait?, Chat with us now!'}
        icon={AiTwotoneMessage}>
      </SupportCard>

    </DashboardLayout>
  )
}

export default Support