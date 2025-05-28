import { Navitem } from "../../atoms/navitem";
import { Card } from "../../atoms/card";
import { RiHomeSmileFill } from "react-icons/ri";
import { MdRestaurantMenu } from "react-icons/md";
import { GiShop } from "react-icons/gi";

export const Navbar = () => {
  return (
    <div className="flex justify-center fixed top-6 inset-x-0 z-50">
      <Card className="flex items-center justify-around px-6 py-3 bg-[#A0C878]/90 backdrop-blur-md text-white rounded-full shadow-xl w-fit">
        <nav className="flex items-center gap-6">
          <Navitem
            label="Beranda"
            href="/"
            text="text-sm"
            icon={<RiHomeSmileFill size={22} />}
            active
          />
          <Navitem
            label="Menu"
            href="/"
            text="text-sm"
            icon={<MdRestaurantMenu size={22} />}
          />
          <Navitem
            label="Toko"
            href="/"
            text="text-sm"
            icon={<GiShop size={22} />}
          />
        </nav>
      </Card>
    </div>
  );
};
