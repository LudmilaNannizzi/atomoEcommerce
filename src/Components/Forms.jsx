import {
  Button,
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
import { FaUserAlt } from 'react-icons/fa'
import { useRecoilState } from 'recoil'

import { userLogedState } from '../Recoil/userAtom'
import Log from './Log'
import FormLogIn from './LogInForm'
import SingUpForm from './SingUpForm'

const Forms = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [user] = useRecoilState(userLogedState)
  if (!user) {
    return (
      <>
        <Button onClick={onOpen} colorScheme="black">
          <FaUserAlt mx="10px" fontSize="1.5rem" />
        </Button>
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
      </>
    )
  }
  return <Log />
}
export default Forms
/*   const [showModal, setShowModal] = useRecoilState(authModaState)

  useEffect(() => {
    if (showModal) onOpen()
  }, [showModal, onOpen])

  useEffect(() => {
    if (!isOpen) setShowModal(false)
  }, [isOpen, showModal]) */
