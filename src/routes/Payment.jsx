import { useEffect, useState } from "react"
import { getEmail } from "../services/auth.service"
const token = localStorage.getItem("token")

export default function Payment() {

    const [ email, setEmail ] = useState("")

    useEffect(() => {
        setEmail(getEmail(token))
    }, [])


    return (
        <>
            <p>Paymentttt {email}</p>
        </>
    )
}