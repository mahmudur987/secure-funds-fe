import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
// import { useGetAgentsQuery, useUpdateAgentStatusMutation, useFundAgentMutation } from "@/redux/features/admin/admin.api";

export default function AgentListPage() {
  // const { data, isLoading } = useGetAgentsQuery();
  // const [updateAgentStatus] = useUpdateAgentStatusMutation();
  // const [fundAgent] = useFundAgentMutation();

  const [selectedAgent, setSelectedAgent] = useState<any>(null);
  const [amount, setAmount] = useState("");

  // if (isLoading) return <p>Loading...</p>;
  const agents = [
    {
      _id: "688b39e480d9ea25be46e450",
      name: "John11 Doe",
      email: "john11@gmail.com",
      password: "$2b$10$hjcMFPbsyNDKyb9Vs63yOOA9OK84CG7I1pP7aIuDySI/owE/g8y72",
      role: "ADMIN",
      phone: "01712345611",
      address: "Dhaka, Bangladesh",
      isEmailVerified: true,
      isPhoneVerified: true,
      status: "ACTIVE",
      auths: [
        {
          provider: "credential",
          providerId: "01712345611",
        },
      ],
      isDeleted: false,
      loginAttempts: 10,
      loginWrongAttempts: 1,
      lastLogin: "2025-08-23T14:00:22.546Z",
      createdAt: "2025-07-31T09:39:48.627Z",
      updatedAt: "2025-08-23T14:00:22.548Z",
      wallet: {
        _id: "688b39e480d9ea25be46e452",
        userId: "688b39e480d9ea25be46e450",
        balance: 50000,
        status: "BLOCKED",
        createdAt: "2025-07-31T09:39:48.721Z",
        updatedAt: "2025-07-31T11:40:23.984Z",
      },
    },
    {
      _id: "688b39e480d9ea25be46e450",
      name: "John11 Doe",
      email: "john11@gmail.com",
      password: "$2b$10$hjcMFPbsyNDKyb9Vs63yOOA9OK84CG7I1pP7aIuDySI/owE/g8y72",
      role: "ADMIN",
      phone: "01712345611",
      address: "Dhaka, Bangladesh",
      isEmailVerified: true,
      isPhoneVerified: true,
      status: "ACTIVE",
      auths: [
        {
          provider: "credential",
          providerId: "01712345611",
        },
      ],
      isDeleted: false,
      loginAttempts: 10,
      loginWrongAttempts: 1,
      lastLogin: "2025-08-23T14:00:22.546Z",
      createdAt: "2025-07-31T09:39:48.627Z",
      updatedAt: "2025-08-23T14:00:22.548Z",
      wallet: {
        _id: "688b39e480d9ea25be46e452",
        userId: "688b39e480d9ea25be46e450",
        balance: 50000,
        status: "BLOCKED",
        createdAt: "2025-07-31T09:39:48.721Z",
        updatedAt: "2025-07-31T11:40:23.984Z",
      },
    },
  ];

  const handleFund = () => {
    if (!selectedAgent || !amount) return;
    // fundAgent({ agentId: selectedAgent._id, amount: Number(amount) });
    setAmount("");
    setSelectedAgent(null);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Manage Agents</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Wallet Balance</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {agents.map((agent: any) => (
              <TableRow key={agent._id}>
                <TableCell>{agent.name}</TableCell>
                <TableCell>{agent.email}</TableCell>
                <TableCell>{agent.phone}</TableCell>

                {/* Agent Status */}
                <TableCell>
                  <Select
                    defaultValue={agent.status}
                    onValueChange={(value) =>
                      updateAgentStatus({ id: agent._id, status: value })
                    }
                  >
                    <SelectTrigger className="w-[130px]">
                      <SelectValue placeholder="Select Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="APPROVED">Approved</SelectItem>
                      <SelectItem value="SUSPENDED">Suspended</SelectItem>
                    </SelectContent>
                  </Select>
                </TableCell>

                {/* Wallet Balance */}
                <TableCell>৳{agent.wallet?.balance ?? 0}</TableCell>

                {/* Fund Agent Modal */}
                <TableCell>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" onClick={() => setSelectedAgent(agent)}>
                        Fund Agent
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Fund {selectedAgent?.name}</DialogTitle>
                      </DialogHeader>
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                      />
                      <Button className="mt-4 w-full" onClick={handleFund}>
                        Confirm Fund
                      </Button>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
