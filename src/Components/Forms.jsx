import { useEffect } from 'react'

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useDisclosure,
} from '@chakra-ui/react'
import { useRecoilState } from 'recoil'

import authModaState from '../Recoil/authModalAtom'
import FormLogIn from './LogInForm'
import SingUpForm from './SingUpForm'

const Forms = () => {
  const [showModal, setShowModal] = useRecoilState(authModaState)
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    if (showModal) onOpen()
  }, [showModal, onOpen])

  useEffect(() => {
    if (!isOpen) setShowModal(false)
  }, [isOpen, showModal])
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Tabs isFitted variant="enclosed" w="400px" boxShadow="lg">
            <TabList mb="1em">
              <Tab>Log in </Tab>
              <Tab>Sing up</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <FormLogIn />
              </TabPanel>
              <TabPanel>
                <SingUpForm />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
export default Forms
