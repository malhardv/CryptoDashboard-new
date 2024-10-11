import React from 'react'
import { CustomCard } from '../../../Chakra/CustomCard'
import { Tag, Text } from '@chakra-ui/react'

const InfoCard = ({ imgURL, text, tagText, inverted }) => {
    return (
        <CustomCard 
        bgImage={imgURL} 
        bgSize={'cover'} 
        bgRepeat={'no-repeat'}
        bgColor={inverted ? 'white' : 'p.purple'}>
            <Tag
                bg={inverted ? 'p.purple' : 'white'}
                borderRadius={'full'}
                color={inverted ? 'white': 'p.purple'}>
                {tagText}
            </Tag>
            <Text
                fontWeight={600}
                fontSize={'18px'}
                mt={'4'}
                color={inverted ? 'black': 'white'}>
                {text}
            </Text>
        </CustomCard>
    )
}

export default InfoCard