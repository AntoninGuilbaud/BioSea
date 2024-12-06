import React, { useState } from "react";
import { AppSidebar } from "@/components/vision/app-sidebar";
import { Component as Component } from "@/components/vision/chart/Component";
import { ComponentPie as PieChart } from "@/components/vision/chart/PieChart";
import { ComponentLongChart as ComponentLongChart } from "@/components/vision/chart/LongChart";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
  // État pour la section active
  const [activeSection, setActiveSection] = useState("Administering");
  const [activePage, setActivePage] = useState("Dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "Dashboard":
        return (
          <div className="dashboard flex flex-1 flex-col gap-6 p-6">
            {/* En-tête principal */}
            <div className="flex items-center justify-between p-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg">
              <div>
                <h1 className="text-2xl font-bold text-white">Bienvenue, Admin !</h1>
                <p className="text-sm text-white/80">Voici un aperçu de vos données clés aujourd'hui.</p>
              </div>
              <button className="px-4 py-2 bg-white text-indigo-600 font-medium rounded-md shadow hover:bg-indigo-100">
                Voir les rapports
              </button>
            </div>

            {/* Section des statistiques principales */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Carte Statistique */}
              <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                <h3 className="text-lg font-semibold text-gray-700">Connexions</h3>
                <p className="text-3xl font-bold text-indigo-600">45</p>
                <span className="text-sm text-green-500">+12% cette semaine</span>
              </div>

              {/* Carte Statistique */}
              <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                <h3 className="text-lg font-semibold text-gray-700">Utilisateurs</h3>
                <p className="text-3xl font-bold text-purple-600">25</p>
                <span className="text-sm text-green-500">+8% cette semaine</span>
              </div>

              {/* Carte Statistique */}
              <div className="p-6 bg-white rounded-lg shadow-md flex flex-col items-center justify-center text-center">
                <h3 className="text-lg font-semibold text-gray-700">Nouveaux messages</h3>
                <p className="text-3xl font-bold text-pink-600">10</p>
                <span className="text-sm text-red-500">-5% cette semaine</span>
              </div>
            </div>

            {/* Section des graphiques */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Carte Graphique 1 */}
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Performances</h3>
                <div className="h-48">{/* <ChartComponent /> */}</div>
              </div>

              {/* Carte Graphique 2 */}
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Utilisateurs actifs</h3>
                <div className="h-48">
                  {/* Graphique en cours ou données dynamiques */}
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">John Doe</span>
                      <span className="text-sm text-green-500">Actif</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Jane Smith</span>
                      <span className="text-sm text-green-500">Actif</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Bob Johnson</span>
                      <span className="text-sm text-gray-400">Inactif</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-gray-700 font-medium">Alice Cooper</span>
                      <span className="text-sm text-green-500">Actif</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section Activité récente */}
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Activité récente</h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <span className="text-gray-700">Utilisateur: John Doe</span>
                  <span className="text-sm text-gray-500">Connecté il y a 2 heures</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-700">Utilisateur: Jane Smith</span>
                  <span className="text-sm text-gray-500">Connecté hier</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-700">Utilisateur: Bob Johnson</span>
                  <span className="text-sm text-gray-500">Connecté le 26/07/25</span>
                </li>
              </ul>
            </div>
          </div>
        );

      case "Data":
        return (
          <div className="analytics flex flex-1 flex-col gap-4 p-4">
            {/* Section graphique */}
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="flex flex-col h-full rounded-xl bg-muted/50 p-4">
                <h3 className="text-md font-bold mb-2">Performances</h3>
                {/* Composant graphique */}
                <div className="flex-1 flex flex-col items-center justify-center">
                  <Component />
                </div>
              </div>

              <div className="aspect-video rounded-xl bg-muted/50 md:col-span-2">
                <PieChart />
              </div>
            </div>

            {/* Autre contenu */}
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
              <ComponentLongChart />
            </div>
          </div>
        );

      case "Users":
        const fakeUsersData = [
          {
            id: 1,
            name: "John Doe",
            ip: "192.168.0.1",
            active: true,
            lastLogin: "Hier à 14h",
            totalLogins: 45,
          },
          {
            id: 2,
            name: "Jane Smith",
            ip: "192.168.0.2",
            active: false,
            lastLogin: "Il y a 3 jours",
            totalLogins: 25,
          },
          {
            id: 3,
            name: "Alice Johnson",
            ip: "192.168.0.3",
            active: true,
            lastLogin: "Aujourd'hui à 9h",
            totalLogins: 78,
          },
          {
            id: 4,
            name: "Bob Brown",
            ip: "192.168.0.4",
            active: true,
            lastLogin: "Il y a 2 jours",
            totalLogins: 60,
          },
          {
            id: 5,
            name: "Charlie White",
            ip: "192.168.0.5",
            active: false,
            lastLogin: "Il y a 1 semaine",
            totalLogins: 12,
          },
        ];

        return (
          <div className="users flex flex-1 flex-col gap-6 p-6">
            <h2 className="text-2xl font-bold">Liste des utilisateurs</h2>
            <div className="flex flex-col gap-4">
              {fakeUsersData.map((user) => (
                <div
                  key={user.id}
                  className="rounded-lg bg-muted/50 p-4 shadow-md flex flex-col gap-2"
                >
                  <h3 className="text-lg font-bold text-gray-800">{user.name}</h3>
                  <p className="text-sm">
                    <strong>IP :</strong> {user.ip}
                  </p>
                  <p className="text-sm">
                    <strong>Actif :</strong>{" "}
                    <span
                      className={
                        user.active
                          ? "text-green-600 font-bold"
                          : "text-red-600 font-bold"
                      }
                    >
                      {user.active ? "Oui" : "Non"}
                    </span>
                  </p>
                  <p className="text-sm">
                    <strong>Dernière connexion :</strong> {user.lastLogin}
                  </p>
                  <p className="text-sm">
                    <strong>Total de connexions :</strong> {user.totalLogins}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return (
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold">Page Not Found</h2>
            <p>Please select a valid page from the sidebar.</p>
          </div>
        );
    }
  };

  return (
    <SidebarProvider>
      <AppSidebar
        onSectionChange={(
          section: React.SetStateAction<string>,
          page: React.SetStateAction<string>
        ) => {
          setActiveSection(section);
          setActivePage(page);
        }}
      />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">{activeSection}</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>{activePage}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          {renderContent()} {/* Contenu dynamique basé sur activePage */}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
