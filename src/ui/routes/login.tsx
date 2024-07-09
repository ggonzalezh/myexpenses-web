import {
  createFileRoute,
  useNavigate,
  useRouteContext
} from '@tanstack/react-router'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/ui/components/ui/form.tsx'
import { Input } from '@/ui/components/ui/input.tsx'
import { Card, CardFooter } from '@/ui/components/ui/card.tsx'
import { Button } from '@/ui/components/ui/button.tsx'

const formSchema = z.object({
  username: z.string().min(4, {
    message: 'Username must be at least 2 characters.'
  }),
  password: z.string().min(6, {
    message: 'Password must be at least 6 characters.'
  })
})

const LoginForm = () => {
  const context = useRouteContext({ from: '/login' })
  const { sigIn } = context.authentication
  const navigate = useNavigate()

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
    console.log(values)
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
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input {...field} />
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
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input {...field} />
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

export const Route = createFileRoute('/login')({
  component: LoginForm
})
