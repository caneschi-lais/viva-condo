"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { FaBuilding, FaUsers, FaSignOutAlt, FaThLarge } from "react-icons/fa";

export default function MenuLateral() {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();
  const [checkingSession, setCheckingSession] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

 // Função de logout
const handleLogout = async () => {
  await supabase.auth.signOut();

  // Força o Next.js a recarregar tudo (zera sessão no layout + middleware)
  window.location.href = "/";
};

  // Itens de navegação (somente Condomínios e Usuários)
  const menuItems = [
    {
      label: "Condomínios",
      icon: <FaBuilding size={18} />,
      path: "/condominios",
    },
    {
      label: "Usuários",
      icon: <FaUsers size={18} />,
      path: "/usuarios",
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 shadow-sm flex flex-col">
      {/* Cabeçalho */}
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          <FaThLarge />
          Viva Condo
        </h1>
      </div>
      {/* Navegação */}
      <nav className="flex-1 p-3">
        {menuItems.map((item) => {
          const active = pathname.startsWith(item.path);
          return (
            <button
              key={item.path}
              onClick={() => router.push(item.path)}
              className={`flex items-center w-full gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                active
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          );
        })}
      </nav>

      {/* Botão de Sair */}
      <div className="p-3 border-t border-gray-200">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 w-full text-red-600 hover:bg-red-50 rounded-md transition-colors font-medium"
        >
          <FaSignOutAlt size={18} />
          Sair
        </button>
      </div>
    </aside>
  );
}
