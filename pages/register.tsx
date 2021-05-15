import { SubmitHandler, useForm } from "react-hook-form"
import AuthService from "../api/AuthService"

export type RegisterFormFields = {
  name: string
  email: string
  password: string
  password_confirmation: string
}

export default function RegisterPage() {
  const {
    handleSubmit: submitHandler,
    register,
    formState: { errors },
  } = useForm<RegisterFormFields>()

  const handleSubmit: SubmitHandler<RegisterFormFields> = async data => {
    try {
      const response = await AuthService.registerUser(data)
      console.log(response)
    } catch (err) {
      console.log(err.response)
    }
  }

  return (
    <form onSubmit={submitHandler(handleSubmit)}>
      <input type="text" {...register("name", { required: true })} />
      <input type="email" {...register("email", { required: true })} />
      <input type="password" {...register("password", { required: true })} />
      <input
        type="password"
        {...register("password_confirmation", { required: true })}
      />
      <button type="submit">Register</button>
    </form>
  )
}
