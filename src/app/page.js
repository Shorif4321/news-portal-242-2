import LatestNews from "@/components/ui/LatestNews/LatestNews";
import Sidebar from "@/components/ui/Sidebar/Sidebar";
import Image from "next/image";

// { data:[{},{},{}] }
// { meals:[ {},{},{} ] }
// [ {},{},{} ]

export default function Home() {
  return (
    <div className="px-14 py-5">
      <div className="flex gap-5">
        <div className="w-2/3 ">
          <LatestNews></LatestNews>
        </div>
        <div className="w-1/3 bg-amber-400">
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
}
