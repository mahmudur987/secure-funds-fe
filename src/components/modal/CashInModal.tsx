import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { toast } from "sonner";
import type { IErrorResponse } from "@/types";

import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useCashInMutation } from "@/redux/features/transaction/transaction.api";
import { useGetProfileQuery } from "@/redux/features/user/user.api";

export interface ICashInForm {
  phoneNumber: string;
  amount: number;
  note: string;
}

const CashInSchema = z.object({
  phoneNumber: z
    .string()
    .min(10, { message: "Phone number must be at least 10 digits." }),
  amount: z.number().min(1, { message: "Amount must be greater than 0." }),
  note: z.string().optional(),
});

export function CashInModal({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [sendMoney] = useCashInMutation();
  const { data, refetch } = useGetProfileQuery();

  const form = useForm<z.infer<typeof CashInSchema>>({
    resolver: zodResolver(CashInSchema),
    defaultValues: {
      phoneNumber: "",
      amount: 0,
      note: "",
    },
  });

  const { handleSubmit, reset } = form;

  const onSubmit = async (values: z.infer<typeof CashInSchema>) => {
    if (data?.data.phone === values.phoneNumber) {
      toast.error("You can't send money to yourself");
      return;
    }

    try {
      const data = {
        transactionType: "CashIn",
        amount: values.amount,
        toUserPhone: values.phoneNumber,
        description: values.note,
      };
      const res = await sendMoney(data).unwrap();
      console.log(res);
      if (res.success) {
        refetch();
        setOpenModal(false);
        toast.success(res.message);
        reset();
      }
    } catch (error: unknown | IErrorResponse) {
      console.log(error);
      toast.error((error as IErrorResponse).data.message);
    }
  };

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogContent className="w-full max-w-md p-4">
        <DialogHeader>
          <DialogTitle className="text-center">Cash In</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8  py-5">
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> User Phone number</FormLabel>
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
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Amount</FormLabel>
                  <FormControl>
                    <Input
                      defaultValue={String(field.value)}
                      type="number"
                      placeholder="Amount"
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="note"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Note (optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      autoComplete="off"
                      defaultValue={field.value}
                      placeholder="Note"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormItem className="flex justify-end">
              <Button variant="outline" onClick={() => setOpenModal(false)}>
                Cancel
              </Button>
              <Button type="submit" className="mr-4">
                Send
              </Button>
            </FormItem>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
