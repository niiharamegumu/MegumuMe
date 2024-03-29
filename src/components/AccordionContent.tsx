import { VFC } from 'react'
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box
} from '@chakra-ui/react'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai'

type Props = {
  title: string
  children: React.ReactNode
}

export const AccordionContent: VFC<Props> = props => {
  const { title, children } = props
  return (
    <AccordionItem border="none" mb={2}>
      {({ isExpanded }: { isExpanded: boolean }) => (
        <>
          <h2>
            <AccordionButton
              borderBottomRadius={isExpanded ? 0 : 10}
              _focus={{ boxShadow: 'none' }}
            >
              <Box flex="1" textAlign="left" py={2}>
                {title}
              </Box>
              {isExpanded ? (
                <AiOutlineMinusCircle fontSize="30px" color="#CBD5E0" />
              ) : (
                <AiOutlinePlusCircle fontSize="30px" color="#CBD5E0" />
              )}
            </AccordionButton>
          </h2>
          <AccordionPanel p={8} bg="gray.800" borderBottomRadius={10}>
            {children}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  )
}
