"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "./ui/checkbox"
import { Label } from "./ui/label"

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(100),
  fname: z.string().min(2).max(100),
  lname: z.string().min(2).max(100),
})

export default function Register() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
  }

  return (
    <div className="w-full py-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="E-mail" id="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="password" id="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          <FormField
            control={form.control}
            name="fname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="first name" id="fname" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          <FormField
            control={form.control}
            name="lname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="last name" id="lname" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
          <div className="flex items-center space-x-2">
            <Checkbox id="ad" />
            <Label htmlFor="ad" className="font-extralight text-xs text-zinc-600">I want to receive personalized commercial communications from <span className="text-black font-bold uppercase">Zara{" "}</span> by email</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="cookies" />
            <Label htmlFor="cookies" className="font-extralight text-xs text-zinc-600">I have read and understood the Privacy and Cookies Policy</Label>
          </div>
          <Button variant="outline" type="submit" className="w-full">Submit</Button>
        </form>
      </Form>
    </div>
  )
}