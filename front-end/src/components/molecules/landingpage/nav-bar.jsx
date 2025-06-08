import { Navitem } from "../../atoms/navitem";
import { Card } from "../../atoms/card";
import { Icon } from "../../atoms/icon";
import { Button } from "../../atoms/button";

export const Navbar = () => {
  return (
    <Card className="flex items-center justify-around py-3 bg-[#A0C878]/90 backdrop-blur-md text-white shadow-xl w-fit">
      <div className="flex items-center gap-2">
        <img src="/assets/logo.png" alt="Logo" className="w-fit h-8" />
      </div>
      <nav className="flex items-center gap-6">
        <Navitem
          label="Beranda"
          href="/"
          text="text-sm"
          icon={<Icon name="home" className="block md:hidden" />}
          active
        />
        <Navitem
          label="produk"
          href="/produk"
          text="text-sm"
          icon={<Icon name="menu" className="block md:hidden" />}
        />
        <Navitem
          label="Toko"
          href="/"
          text="text-sm"
          icon={<Icon name="shop" className="block md:hidden" />}
        />
      </nav>
      <Button
        href="/login"
        className="flex items-center gap-2 whitespace-nowrap"
      >
        <Icon name="login" className="block md:hidden" />
        <span className="hidden md:block text-sm">Login</span>
      </Button>
    </Card>
  );
};
