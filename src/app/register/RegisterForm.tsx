'use client'

import Heading from '@/components/Heading'
import Input from '@/components/Input/Input'
import Button from '@/components/Products/Button'
import axios from 'axios'
import Link from 'next/link'
import { useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { AiOutlineGoogle } from 'react-icons/ai'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
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

    axios.post('/api/register', data).then(() => {
      toast.success('Account Created!')
    })

    signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.ok) {
          console.log(callback.ok)

          router.push('/cart')
          router.refresh()
          toast.success('Logged In')
        }

        if (callback?.error) {
          console.log(callback.error)

          toast.error(callback.error)
        }
      })
      .catch(() => toast.error('Something went wrong!'))
      .finally(() => setIsLoading(false))
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
