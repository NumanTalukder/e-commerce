'use client'

import Heading from '@/components/Heading'
import Input from '@/components/Input/Input'
import Button from '@/components/Products/Button'
import Link from 'next/link'
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { AiOutlineGoogle } from 'react-icons/ai'

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)
    console.log(data)
  }

  return (
    <>
      <Heading title='Signup for E-Commerce' />
      <Button
        outline
        label='Sign up with Google'
        icon={AiOutlineGoogle}
        onClick={() => {}}
      />
      <hr className='bg-slate-300 w-full h-px' />
      <Input
        id='name'
        label='Name'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='email'
        label='Email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='password'
        label='Password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
        type='password'
      />
      <Button
        label={isLoading ? 'Loading' : 'Sign Up'}
        onClick={handleSubmit(onSubmit)}
      />
      <p className='text-sm'>
        Already have an account?{' '}
        <Link href={'/login'} className='underline'>
          Login
        </Link>
      </p>
    </>
  )
}

export default RegisterForm
