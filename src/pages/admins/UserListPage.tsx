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

export default function UserListPage() {
  const { data, isLoading, isSuccess, isError, error } = useGetAllUserQuery({
    role: "USER",
    populate: "wallet",
  });
  // const [updateUserStatus] = useUpdateUserStatusMutation();
  const [updateWallet, { isLoading: isUpdatingWallet }] =
    useUpdateWalletMutation();

  const users: User[] = data?.data || [];
  const updateUserStatus = async (data: any) => {
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
  if (isLoading) return <LoadingSpinner />;
  if (isError) {
    const errorMessage =
      typeof error === "object" && error !== null && "message" in error
        ? String((error as { message: unknown }).message)
        : "An unknown error occurred";
    return <ErrorState title="Error" message={errorMessage} />;
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
                        onValueChange={(value) =>
                          updateUserStatus({ id: user._id, status: value })
                        }
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
