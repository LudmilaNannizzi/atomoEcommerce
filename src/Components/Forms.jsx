import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

import FormLogIn from './LogInForm'
import SingUpForm from './SingUpForm'

const Forms = () => {
  return (
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
  )
}
export default Forms
