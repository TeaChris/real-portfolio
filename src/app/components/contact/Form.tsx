'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from 'emailjs-com'
import { toast } from 'react-hot-toast'

import Image from 'next/image'
import dots from '../../assets/Dots.png'
import dotts from '../../assets/dotts.png'
import rec from '../../assets/rec.png'
import pattern from '../../assets/pattern.png'

import Input from './Input'
import TextArea from './TextArea'

type FormValues = {
  name: string
  email: string
  title: string
  message: string
}

export default function Form() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      title: '',
      message: '',
    },
  })

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    // send from
    emailjs
      .sendForm(
        'service_p56xgsp',
        'template_z2wunmd',
        document.getElementById('my-form') as HTMLFormElement,
        'cSfCB_fQMQ8n04-ZW'
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text)
          toast.success('Email sent successfully!') //Display success toast notification
          // reset form state
          reset()
        },
        // if error occurs
        (error) => {
          console.error('Error sending email:', error.text)
          toast.error('Email not sent!') // Display error toast notification
        }
      )
  }

  return (
    <section className="w-full h-[30rem]">
      <div className="w-full mx-auto md:w-wmd md:mx-auto lg:w-wlg lg:mx-auto lg:h-full">
        <div className="w-full h-full py-3 grid grid-cols-1 justify-center items-center lg:grid lg:grid-cols-2 lg:items-center lg:justify-center">
          {/* left */}
          <div className="w-[35%] h-full relative">
            <Image src={dotts} alt="" className="" />
            <Image src={pattern} alt="" className="top-16 left-16 absolute" />
            <Image src={dots} alt="" className="bottom-0 right-0 absolute" />
            <Image src={rec} alt="" className="right-10 top-24 absolute" />
          </div>

          {/* right --- form */}
          <div className="w-full h-fit p-1">
            <form
              id="my-form"
              className="w-full h-full flex flex-col items-start gap-1"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="w-full h-fit flex flex-col items-center gap-3 lg:flex lg:flex-row lg:items-center lg:gap-3">
                <Input
                  id="name"
                  errors={errors}
                  label="Full Name"
                  type="name"
                  register={register}
                />

                <Input
                  id="email"
                  errors={errors}
                  label="Email"
                  type="email"
                  register={register}
                />
              </div>
              <div className="w-full">
                <Input
                  id="title"
                  errors={errors}
                  label="Title"
                  type="title"
                  register={register}
                />
              </div>
              <div className="w-full">
                <TextArea
                  id="message"
                  errors={errors}
                  label="Message"
                  register={register}
                />
              </div>

              <button
                className="w-28 h-fit capitalize py-3 px-2 bg-transparent border border-gray hover:bg-primary hover:text-white text-sm text-gray duration-300 ease-in-out"
                type="submit"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
