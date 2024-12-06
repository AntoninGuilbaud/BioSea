"use client";

import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { BsSend } from "react-icons/bs";
import Game from "./Dyno"; // Import direct du jeu

export function SignupFormDemo() {
  const [isGameOpen, setIsGameOpen] = useState(false);
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isCaptchaVerified) {
      setIsGameOpen(true); // Ouvre le jeu si la vérification n'est pas encore effectuée
    } else {
      console.log("Formulaire envoyé :", formData);
      setIsFormSubmitted(true); // Affiche la notification
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
      }); // Réinitialise les champs du formulaire
      setIsCaptchaVerified(false); // Réinitialise le captcha
      setTimeout(() => setIsFormSubmitted(false), 3000); // Masque la notification après 3 secondes
    }
  };

  const handleGameEnd = (success: boolean) => {
    if (success) {
      setIsCaptchaVerified(true); // Vérification réussie
      console.log("Captcha vérifié via le jeu !");
    }
    setIsGameOpen(false); // Ferme le jeu
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Contactez-nous
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Attention, vous devrez compléter un défi pour vérifier que vous êtes un humain.
      </p>

      <form className="h-full my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">Nom</Label>
            <Input
              id="firstname"
              placeholder="Tyler"
              type="text"
              value={formData.firstname}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Prénom</Label>
            <Input
              id="lastname"
              placeholder="Durden"
              type="text"
              value={formData.lastname}
              onChange={handleInputChange}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Votre message ici..."
            value={formData.message}
            onChange={handleInputChange}
          />
        </LabelInputContainer>

        <button
          type="submit"
          className={`
            mt-4
            flex items-center justify-center gap-2 
            w-full h-10 
            bg-gradient-to-br from-black to-neutral-600 dark:from-zinc-900 dark:to-zinc-900 
            text-white font-medium rounded-md 
            shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] 
            dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] 
            hover:bg-opacity-90 transition
            group/btn
          `}
        >
          <span>Envoyer</span>
          <BsSend className="h-5 w-5" />
        </button>
      </form>

      {/* Afficher le jeu pour validation */}
      {isGameOpen && <Game onGameEnd={handleGameEnd} />}

      {/* Notification de soumission */}
      {isFormSubmitted && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
          Formulaire envoyé avec succès !
        </div>
      )}
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
