import { z } from 'zod'
import { useNavigate, useRouteContext } from '@tanstack/react-router'
import { useMutation } from '@tanstack/react-query'
import { Login } from '@/domain/model/Login.ts'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { User } from '@/domain/model/User.ts'
import { Card, CardFooter } from '@/ui/components/ui/card.tsx'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/ui/components/ui/form.tsx'
import { Input } from '@/ui/components/ui/input.tsx'
import { Button } from '@/ui/components/ui/button.tsx'
import { LoginViewProps } from '@/ui/views/login/interface'

const formSchema = z.object({
  username: z.string().min(4, {
    message: 'Username must be at least 4 characters.'
  }),
  password: z.string().min(4, {
    message: 'Password must be at least 4 characters.'
  })
})

export const LoginView = ({ postLoginUseCase }: LoginViewProps) => {
  const navigate = useNavigate()
  const { authentication, session } = useRouteContext({ from: '/login' })
  const { sigIn } = authentication
  const { setSession } = session

  const { mutateAsync } = useMutation({
    mutationFn: (login: Login) => postLoginUseCase.execute(login),
    onError: () => console.log('ERROR')
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const onSubmit = async (
    values: z.infer<typeof formSchema>
  ): Promise<void> => {
    const { username, password } = values
    const userData: User = await mutateAsync({
      username,
      password
    })
    setSession(userData)
    sigIn()
    await navigate({ to: '/dashboard' })
  }

  return (
    <div className='w-full flex items-center'>
      <div className='w-full m-6 sm:flex sm:justify-center'>
        <Card className='p-8 sm:w-2/5 sm:p-11'>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name='username'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Usuario</FormLabel>
                    <FormControl>
                      <Input {...field} autoComplete='off' />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='mt-4'>
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contraseña</FormLabel>
                      <FormControl>
                        <Input {...field} type='password' autoComplete='off' />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <CardFooter className='p-0 mt-8 sm:justify-center'>
                <Button className='w-full lg:w-1/4' type='submit'>
                  Submit
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  )
}
