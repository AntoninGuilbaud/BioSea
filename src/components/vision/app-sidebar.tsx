import * as React from "react";

import { VersionSwitcher } from "@/components/vision/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  versions: ["1.0.1"],
  navMain: [
    {
      title: "Administering",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "#",
          isActive: true,
        },
        {
          title: "Data",
          url: "#",
        },
        {
          title: "Users",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  const [activeItem, setActiveItem] = React.useState("Data");

  const handleItemClick = (
    section: React.SetStateAction<string>,
    item: React.SetStateAction<string>
  ) => {
    setActiveItem(item);

    // Si une fonction de callback est passée, l'appeler
    if (props.onSectionChange) {
      props.onSectionChange(section, item);
    }
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        {/* Exemple de recherche et switcher */}
        <VersionSwitcher />
      </SidebarHeader>
      <SidebarContent className="mt-2.5">
        {data.navMain.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      isActive={activeItem === item.title}
                      onClick={() => handleItemClick(section.title, item.title)}
                    >
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
