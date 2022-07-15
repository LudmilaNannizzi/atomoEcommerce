import { useState } from 'react'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { object, string } from 'yup'

const userSchema = object({
  email: string().email().required('Debe ingresar su edad '),
  password: string()
    .required('Debe ingresar su contraseña')
    .min(8, 'Debe tener mínimo 8 caractéres'),
  name: string().required('Debe ingresar su Nombre '),
})

const SingUpForm = () => {
  const [hiddenPass, setHiddenPass] = useState(false)

  const handleOnClick = () => setHiddenPass(!hiddenPass)

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(userSchema),
  })

  const onSubmit = ({ email, password, name }) =>
    console.log(email, password, name)

  console.log(errors)
  return (
    <Box w="350px" mt="30px">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.name} w="350px">
          <FormLabel htmlFor="name" name="name">
            Nombre completo
          </FormLabel>
          <Input
            id="nameReg"
            type="text"
            name="name"
            placeholder="Nombre completo"
            {...register('name', {
              required: 'Ingrese su nombre completo',
            })}
          />
          <FormErrorMessage>
            {errors.name && errors.name.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.email} w="350px">
          <FormLabel htmlFor="email" name="email">
            Email
          </FormLabel>
          <Input
            id="emailReg"
            type="email"
            name="email"
            placeholder="email"
            {...register('email', {
              required: 'Ingrese un mail',
            })}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.password} w="350px">
          <FormLabel htmlFor="password" name="password">
            Contraseña
          </FormLabel>
          <InputGroup>
            <Input
              id="passwordReg"
              name="password"
              type={hiddenPass ? 'text' : 'password'}
              placeholder="password"
              {...register('password', {
                required: 'Ingrese una contraseña',
                minLength: {
                  value: 8,
                  message: 'La contraseña debe tener 8 caracteres mínimo ',
                },
              })}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleOnClick}>
                {hiddenPass ? <ViewOffIcon /> : <ViewIcon />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>
            {errors.password && errors.password.message}
          </FormErrorMessage>
        </FormControl>

        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Registrarse
        </Button>
      </form>
    </Box>
  )
}
export default SingUpForm
