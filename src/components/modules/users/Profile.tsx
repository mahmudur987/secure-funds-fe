import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const profileSchema = z.object({
  name: z.string().min(2, "Name is required").optional(),
  phone: z.string().min(10, "Phone is required").optional(),
  email: z.string().email().optional(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[0-9]/, {
      message: "Password must contain at least one digit",
    })
    .regex(/[@$!%*?&#^()\-_=+{}[\]|;:'",.<>/~`]/, {
      message: "Password must contain at least one special character",
    })
    .optional()
    .or(z.literal("")),
  address: z.string().min(3, "Address is required").optional(),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

interface UserProfileProps {
  user: {
    _id: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    password: string;
  };
  onSubmit: (data: ProfileFormValues) => void;
}

export default function UserProfileForm({ user, onSubmit }: UserProfileProps) {
  const [isEditing, setIsEditing] = useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      password: "",
      address: user.address,
    },
  });

  const handleSubmit = (data: z.infer<typeof profileSchema>) => {
    if (user.phone === data.phone) {
      delete data.phone;
    }
    if (user.email === data.email) {
      delete data.email;
    }
    if (data.password === "") {
      delete data.password;
    }
    if (user.address === data.address) {
      delete data.address;
    }
    if (user.phone === data.phone) {
      delete data.phone;
    }

    console.log(data);
    onSubmit(data);
    setIsEditing(false);
  };

  return (
    <Card className="w-full max-w-lg mx-auto shadow-md rounded-2xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">User Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-4"
          >
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=" Jhon Doe "
                      {...field}
                      value={field.value as string}
                      disabled={!isEditing}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={!isEditing} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} disabled={!isEditing} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      disabled={!isEditing}
                      placeholder="******"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Address */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={!isEditing} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <CardFooter className="flex justify-end gap-2 pt-4">
              {!isEditing ? (
                <Button type="button" onClick={() => setIsEditing(true)}>
                  Edit
                </Button>
              ) : (
                <>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Save</Button>
                </>
              )}
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
