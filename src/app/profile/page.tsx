import data from "../../lib/data.json";
import ProfileUserInfoBlock from "@/components/ProfileUserInfoBlock/ProfileUserInfoBlock";

export default function ProfilePage() {
  return (
    <div data-tid="pageWrap" className="px-[100px] py-[60px]">
      <ProfileUserInfoBlock />
    </div>
  );
}
