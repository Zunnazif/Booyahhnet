import { useState } from "react"
import { login } from "../services/auth.service";
import Modal from "../component/Modal";
// import Modal from "../component/Modal";


export default function FormLogin() {
  const [ loginFailed, setLoginFailed ] = useState("")
  const [ usernameOrEmail, setUsernameOrEmail ] = useState("")
  const [ password, setPassword ] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault()

    const data = {
      usernameOrEmail: usernameOrEmail,
      password: password
    }
    login(data, (status, res) => {
      if (status) {
        localStorage.setItem("token", res)
        window.location.href = "/payment"
      } else {
        setLoginFailed(res.response.data.message)
      }
    })
  }
  console.log(loginFailed)

    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleLogin} method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={usernameOrEmail}
                      placeholder="Masukan Email"
                      onChange={(e) => {
                        setUsernameOrEmail(e.target.value);
                        setLoginFailed("")
                      }}
                      required
                      className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    placeholder="Masukan Kata Sandi"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setLoginFailed("")
                    }}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <div className="text-sm">
                    <Modal forgot="Forgot password?" text="Dah tua ko lupaa..  inget lagi dongg cuakss"/>
                  </div>
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
            <p className="text-red-500 text-center mt-3">{loginFailed}</p>
            <p className="mt-10 text-center text-sm text-gray-500">
              Not have Account?{' '}
              <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Registered
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }
