import { SubmitHandler, useForm } from "react-hook-form"
import AuthService from "../api/AuthService"

export type LoginFormFields = {
  email: string
  password: string
}

export default function LoginPage() {
  const {
    handleSubmit: submitHandler,
    register,
    formState: { errors },
  } = useForm<LoginFormFields>()

  const handleSubmit: SubmitHandler<LoginFormFields> = async data => {
    try {
      const response = await AuthService.login(data)
      console.log(response)
    } catch (err) {
      console.log(err.response)
    }
  }

  return (
    <form onSubmit={submitHandler(handleSubmit)}>
      <input type="email" {...register("email", { required: true })} />
      <input type="password" {...register("password", { required: true })} />
      <button type="submit">Login</button>
    </form>
  )
}
