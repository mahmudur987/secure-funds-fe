import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useGetAllUserQuery } from "@/redux/features/user/user.api";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { toast } from "sonner";
import type { User } from "@/types/user.type";
import { useUpdateWalletMutation } from "@/redux/features/wallet/walletApi";
import ErrorState from "@/components/common/ErrorComponent";
import { Button } from "@/components/ui/button";

export default function AgentListPage() {
  const { data, isLoading, isSuccess, isError } = useGetAllUserQuery({
    role: "AGENT",
    populate: "wallet",
  });
  const [updateWallet, { isLoading: isUpdatingWallet }] =
    useUpdateWalletMutation();

  const users: User[] = data?.data || [];
  const updateUserStatus = async () => {
    toast.success("this is under development");
  };
  const updateWalletStatus = async (data: { id: string; status: string }) => {
    console.log(data);
    try {
      const res = await updateWallet(data).unwrap();
      console.log(res);
      if (res.success) {
        toast.success(res.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  // const handleFund = (e) => {
  //   e.preventDefault();
  //   toast.success("this is under development");
  //   setOpenModal(false);
  //   if (!selectedAgent || !amount) return;
  //   // fundAgent({ agentId: selectedAgent._id, amount: Number(amount) });

  //   setAmount("");
  //   setSelectedAgent(null);
  // };
  if (isLoading) return <LoadingSpinner />;
  if (isError) {
    <ErrorState />;
  }
  return (
    <>
      {isSuccess && (
        <Card>
          <CardHeader>
            <CardTitle>Manage Users</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>

                  <TableHead>Phone</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Address</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Wallet Balance</TableHead>
                  <TableHead>Wallet Status</TableHead>
                  <TableHead>Fund Transfer</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell>{user.name}</TableCell>

                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>{user.address}</TableCell>

                    {/* User Status Dropdown */}
                    <TableCell>
                      <Select
                        defaultValue={user.status}
                        onValueChange={(value) => {
                          updateUserStatus();

                          console.log(value);
                        }}
                      >
                        <SelectTrigger className="w-[130px]">
                          <SelectValue placeholder="Select Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ACTIVE">Active</SelectItem>
                          <SelectItem value="BLOCKED">Blocked</SelectItem>
                          <SelectItem value="SUSPENDED">Suspended</SelectItem>
                        </SelectContent>
                      </Select>
                    </TableCell>

                    {/* Wallet */}
                    <TableCell>৳{user.wallet?.balance ?? 0}</TableCell>
                    <TableCell>
                      {isUpdatingWallet ? (
                        <LoadingSpinner />
                      ) : (
                        <Select
                          value={user?.wallet?.status ?? "PENDING"}
                          onValueChange={(value) =>
                            updateWalletStatus({
                              id: user._id,
                              status: value,
                            })
                          }
                        >
                          <SelectTrigger className="w-[130px]">
                            <SelectValue placeholder="Select Wallet Status" />
                          </SelectTrigger>
                          <SelectContent>
                            {[
                              "APPROVED",
                              "SUSPENDED",
                              "BLOCKED",
                              "PENDING",
                            ].map((status) => (
                              <SelectItem key={status} value={status}>
                                {status}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    </TableCell>

                    <TableCell>
                      {/* <div>
                        <Dialog open={openModal} onOpenChange={setOpenModal}>
                          <DialogTrigger asChild>
                            <Button
                              size="sm"
                              onClick={() =>
                                toast.success("this is under development")
                              }
                            >
                              Fund Transfer
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>
                                Fund Transfer to {selectedAgent?.name}
                              </DialogTitle>
                            </DialogHeader>
                            <form onSubmit={handleFund}>
                              <Input
                                type="number"
                                placeholder="Enter amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                              />
                              <Button type="submit" className="mt-4 w-full">
                                Confirm Transfer
                              </Button>
                            </form>
                          </DialogContent>
                        </Dialog>
                      </div> */}

                      <Button
                        size="sm"
                        onClick={() =>
                          toast.success("this is under development")
                        }
                      >
                        Fund Transfer
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </>
  );
}
