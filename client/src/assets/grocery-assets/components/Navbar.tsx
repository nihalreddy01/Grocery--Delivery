import { NavLink } from "react-router-dom";
import { BarChart3Icon, PlusIcon, PackageSearchIcon, ShoppingBagIcon, Truck, LogOutIcon } from "lucide-react";

const navItems = [
  { to: "/admin", label: "Dashboard", icon: BarChart3Icon },
  { to: "/admin/products/new", label: "Add Product", icon: PlusIcon },
  { to: "/admin/products", label: "Products", icon: PackageSearchIcon },
  { to: "/admin/orders", label: "Orders", icon: ShoppingBagIcon },
  { to: "/admin/delivery-partners", label: "Delivery Partners", icon: Truck },
  { to: "/", label: "Exit", icon: LogOutIcon },
];

export default function Navbar() {
  return (
    <div className="bg-white border-b border-app-border p-4 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-app-green">
          <span className="text-lg font-semibold">Admin</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={true}
                className={({ isActive }) =>
                  `inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm transition-colors ${
                    isActive ? "bg-app-green text-white" : "bg-zinc-100 text-zinc-700 hover:bg-app-cream"
                  }`
                }
              >
                <Icon className="size-4" />
                {item.label}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
