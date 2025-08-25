import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { toast } from "sonner";
import type { IErrorResponse } from "@/types";
import { useState } from "react";
import { useLoginMutation } from "@/redux/features/auth/auth.api";
import { useNavigate } from "react-router";
import { useGetProfileQuery } from "@/redux/features/user/user.api";

export function LoginModal() {
  const [login, { isLoading }] = useLoginMutation();
  const [openModal, setOpenModal] = useState(false);
  const { refetch } = useGetProfileQuery();
  const navigate = useNavigate();

  const formSchema = z.object({
    phone: z.string().min(10, {
      message: "Phone number must be at least 10 digits.",
    }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters." }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "01712345611",
      password: "A@1234567",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { password, phone } = values;
    try {
      const res = await login({ phone, password }).unwrap();
      console.log(res);

      if (res.success) {
        if (
          res.data.user.wallet &&
          typeof res.data.user.wallet !== "string" &&
          (res.data.user.wallet.status as string) === "PENDING"
        ) {
          toast.success(res.message);
          toast.success(
            " Your wallet status is pending, please wait for approval."
          );
          setOpenModal(false);
        } else {
          localStorage.setItem("accessToken", res?.data?.accessToken);
          localStorage.setItem("refreshToken", res?.data?.refreshToken);
          toast.success(res.message);
          refetch();
          navigate("/dashboard");
          setOpenModal(false);
        }
      }
    } catch (error: unknown | IErrorResponse) {
      console.log(error);
      toast.error(
        (error as IErrorResponse).data.message || "Something went wrong."
      );
    }
  };

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogTrigger asChild>
        <Button size="sm">Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Login</DialogTitle>
          <DialogDescription>Fill your details perfectly</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8"
              id="form"
            >
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone number</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="tel"
                        defaultValue={field.value}
                        type="tel"
                        placeholder=" 123-456-7890"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        defaultValue={field.value}
                        type="password"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button form="form" type="submit">
            {isLoading ? "Loading..." : "Login"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
