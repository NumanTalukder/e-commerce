'use client'

import Heading from '@/components/Heading'
import Input from '@/components/Input/Input'
import Button from '@/components/Products/Button'
import Link from 'next/link'
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { AiOutlineGoogle } from 'react-icons/ai'

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
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
      <Heading title='Signin for E-Commerce' />
      <Button
        outline
        label='Sign in with Google'
        icon={AiOutlineGoogle}
        onClick={() => {}}
      />
      <hr className='bg-slate-300 w-full h-px' />
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
        label={isLoading ? 'Loading' : 'Log in'}
        onClick={handleSubmit(onSubmit)}
      />
      <p className='text-sm'>
        Don&apos;t have an account?{' '}
        <Link href={'/register'} className='underline'>
          Register
        </Link>
      </p>
    </>
  )
}

export default LoginForm
