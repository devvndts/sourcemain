'use client'

import { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Input from "../components/inputs/Input";
import {FieldValues,SubmitHandler,useForm} from 'react-hook-form'
import Button from "../Button";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { AiOutlineGoogle } from "react-icons/ai";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { SafeUser } from "@/types";
interface LoginFormProps{
    currentUser : SafeUser | null
}
const LoginForm:React.FC<LoginFormProps> = ({currentUser}) => {
    const [isLoading,setIsLoading] = useState(false);
    const router = useRouter();
    const {register,handleSubmit,formState: {errors}} = useForm<FieldValues>({
        defaultValues:{
            email: "",
            password: "",
        }
    })
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true); 
        signIn('credentials',{
            ...data,
            redirect: false
        }).then((callback) => {
            setIsLoading(false);
            if(callback?.ok){
                router.push('/cart');
                router.refresh();
                toast.success('Logged In')
            }
            if(callback?.error){
                toast.error(callback.error)
            }
        })
    }
    useEffect(()=>{
        if(currentUser){
            router.push('/cart');
            router.refresh();
        }
    },[])
    if(currentUser){
        return(
            <p className="text-center">Đã đăng nhập . Đang chuyển hướng .....</p>
        )
    } 
    return ( 
        <>
            <Heading title="ĐĂNG NHẬP"/>
            <Button label="Đăng ký bằng Google" icon={AiOutlineGoogle} outline onClick={()=>{
                signIn('google')
            }}/>
            <hr className="bg-slate-300 w-full h-px"/>
            <Input id="email" label="Email" disabled={isLoading} register={register} errors={errors} required/>
            <Input id="password" label="Password" disabled={isLoading} register={register} errors={errors} required type="password"/>
            <Button label={isLoading ? "Loading" : "Đăng nhập"} onClick={handleSubmit(onSubmit)} disabled = {isLoading ? true : false}/>
            <p className="text-sm">
                Bạn chưa có tài khoản ? <Link className="underline" href="/register">SignUp</Link>
            </p>
        </>
     );
}
 
export default LoginForm;