"use client";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {useEffect} from "react";

const userSchema = z.object({
  nome: z.string().min(4, "O nome deve possuir no mínimo 4 caracteres"),
  idade: z.number().min(18, "A sua idade tem que ser no mínimo 18 anos!"),
  cpf: z.string().min(11, "O CPF deve possuir no mínimo 11 números!"),
  email: z.string().email("Deve ser um e-mail válido!"),
  senha: z.string().min(11, "A senha deve possuir no mínimo 11 caracteres!"),
});

type Inputs = z.infer<typeof userSchema>;

export default function RegisterForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
    resolver: zodResolver(userSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    toast.success("Cadastro realizado com sucesso!");
  };

  useEffect(() => {
    if (errors.nome) toast.error(errors.nome.message);
    if (errors.idade) toast.error(errors.idade.message);
    if (errors.cpf) toast.error(errors.cpf.message);
    if (errors.email) toast.error(errors.email.message);
    if (errors.senha) toast.error(errors.senha.message);
  }, [errors]);

  return (
    <>
      <form className="flex rounded-2xl m-auto gap-4 p-6 flex-col text-white bg-primaryBlack" onSubmit={handleSubmit(onSubmit)}>
        <label className="flex outline-none flex-col">
          <span>Nome:</span>
          <input className="text-black outline-none p-1" {...register("nome")}/>
        </label>
        <label className="flex flex-col">
          <span>Idade:</span>
          <input {...register("idade")} className="text-black p-1 outline-none" type="number"/>
        </label>
        <label className="flex outline-none flex-col">
          <span>CPF:</span>
          <input className="text-black outline-none p-1" {...register("cpf")}/>
        </label>
     
        <label className="flex outline-none flex-col">
          <span>E-mail:</span>
          <input className="text-black outline-none p-1" {...register("email")}/>
        </label>
        
        <label className="flex outline-none flex-col">
          <span>Senha:</span>
          <input className="text-black outline-none p-1" {...register("senha")} type="password"/>
        </label>
        <button className="bg-white text-black p-2 rounded-lg" type="submit">Cadastrar</button>
      </form>

      <ToastContainer />
    </>
  );
}
