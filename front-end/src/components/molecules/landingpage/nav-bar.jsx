import { Navitem } from "../../atoms/navitem";
import { Card } from "../../atoms/card";
import { RiHomeSmileFill } from "react-icons/ri";
import { MdRestaurantMenu } from "react-icons/md";
import { GiShop } from "react-icons/gi";

export const Navbar = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="flex items-center gap-6 p-2 bg-[#A0C878] text-white rounded-xl shadow-lg">
        <nav className="flex items-center gap-4">
          <Navitem
            label="Beranda"
            href="/home"
            text="text-sm"
            icon={<RiHomeSmileFill size={20} />}
            active
          />
          <Navitem
            label="Menu"
            href="/menu"
            text="text-sm"
            icon={<MdRestaurantMenu size={20} />}
          />
          <Navitem
            label="Toko"
            href="/toko"
            text="text-sm"
            icon={<GiShop size={20} />}
          />
        </nav>
      </Card>
    </div>
  );
};
