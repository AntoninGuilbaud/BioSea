import { LogOut } from "lucide-react"; // Import de l'icône LogOut
import {
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { useNavigate } from "react-router-dom";

export function VersionSwitcher() {

  const navigate = useNavigate();
  // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex items-center w-full mt-5">
          {/* Informations de l'entreprise à gauche */}
          <a href="#" className="flex items-center flex-grow gap-2">
            <div className="ml-2 grid text-left text-sm leading-tight">
              <span className="truncate font-semibold">Bio Sea</span>
              <span className="truncate text-xs">Race for water</span>
            </div>
          </a>
          <button
            onClick={handleLogout} // Action au clic
            className="flex items-center justify-center p-2 text-gray-700 hover:bg-gray-300 active:bg-gray-400 rounded transition-all duration-200" title="Quitter l'espace admin" // Infobulle
          >
            <LogOut className="w-5 h-5" /> {/* Icône LogOut */}
          </button>
        </div>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
