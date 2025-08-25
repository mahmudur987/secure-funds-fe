import LoadingSpinner from "@/components/common/LoadingSpinner";
import AgentQuickActions from "@/components/modules/agents/dashboard/AgentQuickAction";
import OffersSlider from "@/components/modules/users/home/OffersSlider";
import RecentTransactions from "@/components/modules/users/home/RecentTransactions";
import WalletBalance from "@/components/modules/users/home/WalletBalance";
import { useGetTransactionQuery } from "@/redux/features/transaction/transaction.api";
import { useGetProfileQuery } from "@/redux/features/user/user.api";

const AgentDashboard = () => {
  const { data, isLoading, isSuccess } = useGetTransactionQuery({ limit: 5 });
  const { data: profile } = useGetProfileQuery();
  const walletBalance = profile?.data.wallet.balance || 100;
  const transactions = data?.data || [];

  return (
    <div className="space-y-6 mx-3  min-h-screen">
      <WalletBalance balance={walletBalance} />
      <div className="space-y-20">
        <section>
          <h2 className="text-lg font-semibold mb-3">Quick Actions</h2>
          <AgentQuickActions />
        </section>

        <section>
          <h2 className="text-3xl text-center bg-accent font-bold mb-3">
            Exclusive Offers
          </h2>

          <OffersSlider />
        </section>
      </div>

      {isLoading && <LoadingSpinner />}

      {isSuccess && <RecentTransactions transactions={transactions} />}
    </div>
  );
};

export default AgentDashboard;
