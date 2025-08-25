/* eslint-disable @typescript-eslint/no-explicit-any */
import LoadingSpinner from "@/components/common/LoadingSpinner";
import UserProfileForm from "@/components/modules/users/Profile";

import {
  useGetProfileQuery,
  useUpdateUserProfileMutation,
} from "@/redux/features/user/user.api";
import type { User } from "@/types/user.type";
import { toast } from "sonner";

const ProfilePage = () => {
  const { data, isLoading, isSuccess } = useGetProfileQuery();
  const [updateProfile] = useUpdateUserProfileMutation();

  const handleSubmit = async (data: any) => {
    try {
      const res = await updateProfile(data).unwrap();
      console.log(res);

      if (res.data.accessToken) {
        localStorage.setItem(
          "accessToken",
          (res.data as unknown as { accessToken: string }).accessToken
        );
      }

      if (res.data.refreshToken) {
        localStorage.setItem(
          "refreshToken",
          (res.data as unknown as { refreshToken: string }).refreshToken
        );
      }

      if (res.success) {
        toast.success(res.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      {isLoading && <LoadingSpinner />}

      {isSuccess && (
        <UserProfileForm user={data?.data as User} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default ProfilePage;
