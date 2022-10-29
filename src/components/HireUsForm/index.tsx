import React from "react"
import { Formik, Form, useField } from "formik"
import toast, { Toaster } from "react-hot-toast"

import * as Yup from "yup"
import IHeading from "../IHeading"

const HireUsSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
})

const IHandleSubmit = async (values: any, actions: any) => {
  const toastId = toast.loading("Sending your message...")
  window.scrollTo(0, 0)
  const fields: { name: string; value: string | number }[] = []
  Object.entries(values).forEach(([name, value]) => {
    fields.push({
      name,
      value: value as string | number,
    })
  })
  const data = { fields }
  const response = await (
    await fetch(
      "https://api.hsforms.com/submissions/v3/integration/submit/21472735/eee1d454-fc80-4be0-9458-1791a8fabe15",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
  ).json()
  if (response.inlineMessage?.match(/Thank/)) {
    actions.setSubmitting(false)
    actions.setStatus = {
      message: response.inlineMessage,
      status_code: "success",
    }
    actions.resetForm()
    toast.success("Thank you for reaching out! We'll get back to you soon.")
    toast.dismiss(toastId)
  } else {
    actions.setSubmitting(false)
    actions.setStatus = {
      message: response.message,
      status_code: "error",
    }
    toast.error(`Something went wrong! \n Looks like there was a problem submitting your message. \n\n That's on us! Please reach out
    to <a href="mailto:hello@easesol.net">hello@easesol.net</a>`)
    toast.dismiss(toastId)
  }
}

const IFieldTextArea = ({ label, ...props }: any) => {
  const [field, meta] = useField(props)
  const { name } = props
  const isRequired = false
  let baseClass = ""
  if (meta.touched && meta.error) {
    baseClass = "border-red-700"
  }

  return (
    <>
      <label className="block absolute left-2 -top-3 pl-2 pr-2 bg-gray-50 dark:bg-primary-800 text-slate-500 dark:text-primary-400 text-xs md:text-sm" htmlFor={name}>
        {label}
        {isRequired && <span className="required-text">*</span>}
      </label>
      <textarea
        {...field}
        {...props}
        className={`w-full h-30 px-3 text-base dark:text-primary-300 placeholder-gray-600 dark:placeholder-primary-300 border border-slate-400 rounded bg-gray-50 dark:bg-primary-800 duration-300 hover:border-slate-700 dark:hover:border-primary-400 focus:border-slate-900 dark:focus:border-primary-50 outline-none ${baseClass}`}
      />
      {meta.touched && meta.error ? (
        <span className="text-xs text-red-700 dark:text-red-500">{meta.error}</span>
      ) : null}
      {meta.touched && !meta.error ? (
        <span className="text-xs text-green-700">{meta.error}</span>
      ) : null}
    </>
  )
}
const IFieldInput = ({ label, ...props }: any) => {
  const [field, meta] = useField(props)
  const { name } = props
  const isRequired = false

  let baseClass = ""
  if (meta.touched && meta.error) {
    baseClass = "border-red-700"
  }
  return (
    <>
      <label className="block absolute left-2 -top-3 pl-2 pr-2 bg-gray-50 dark:bg-primary-800 text-slate-500 dark:text-primary-400 text-xs md:text-sm" htmlFor={name}>
        {label}
        {isRequired && <span className="required-text">*</span>}
      </label>
      <input
        {...field}
        {...props}
        className={`w-full px-3 py-3 text-base dark:text-primary-300 placeholder-gray-600 border dark:placeholder-primary-300 border-slate-400 rounded bg-gray-50 dark:bg-primary-800 duration-300 hover:border-slate-700 dark:hover:border-primary-400 focus:border-slate-900 dark:focus:border-primary-50 outline-none ${baseClass}`}
      />
      {meta.touched && meta.error ? (
        <span className="text-xs text-red-700 dark:text-red-500">{meta.error}</span>
      ) : null}
      {meta.touched && !meta.error ? (
        <span className="text-xs text-green-700">{meta.error}</span>
      ) : null}
    </>
  )
}
interface HireUsForm {
  firstName: string
  lastName: string
  email: string
}

const HireUsForm = () => {
  return (
    <div>
      <Toaster position="bottom-right" />
      <Formik
        initialValues={{
          firstname: "",
          lastname: "",
          email: "",
          company: "",
          message: "",
        }}
        validationSchema={HireUsSchema}
        onSubmit={IHandleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4 text-gray-700">
            <div className="w-full py-4 mx-auto text-center">
              <IHeading size="subHeader" align="text-center">About You</IHeading>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full relative my-3">
                <IFieldInput
                  name="email"
                  label="Firstly, what’s your email?"
                ></IFieldInput>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3 space-y-4 md:space-y-0">
              <div className="w-full md:w-1/2 relative">
                <IFieldInput name="firstname" label="First Name"></IFieldInput>
              </div>
              <div className="w-full md:w-1/2 relative">
                <IFieldInput name="lastname" label="Last Name"></IFieldInput>
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full relative my-3">
                <IFieldInput
                  name="company"
                  label="On behalf of what company are you reaching out today?"
                ></IFieldInput>
              </div>
            </div>

            <div className="w-full py-4 mx-auto text-center">
              <IHeading align="text-center" size="subHeader">About Your Project</IHeading>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full relative">
                <IFieldTextArea
                  name="message"
                  label={`Thanks for reaching out. Tell us what we can do for you?`}
                ></IFieldTextArea>
              </div>
            </div>

            <div className="flex flex-col w-full mb-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-5 py-3 text-lg text-white duration-300 rounded bg-red-500 hover:bg-red-600"
              >
                Let's chat
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default HireUsForm
