import React, { HTMLAttributes } from "react";

export function Title1({
  children,
  className = "", // Ajout du paramètre className avec une valeur par défaut
  ...props
}: {
  children: React.ReactNode;
  className?: string; // className est désormais optionnel
} & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`} // Fusion des classes existantes avec le className passé en paramètre
      {...props}
    >
      {children}
    </h1>
  );
}

export function Title2({
  children,
  className = "", // Ajout du paramètre className avec une valeur par défaut
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`} // Fusion des classes existantes avec le className passé en paramètre
      {...props}
    >
      {children}
    </h2>
  );
}

export function Title3({
  children,
  className = "", // Ajout du paramètre className avec une valeur par défaut
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`} // Fusion des classes existantes avec le className passé en paramètre
      {...props}
    >
      {children}
    </h3>
  );
}

export function Title4({
  children,
  className = "", // Ajout du paramètre className avec une valeur par défaut
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}
      {...props}
    >
      {children}
    </h4>
  );
}

export function P({
  children,
  className = "", // Ajout du paramètre className avec une valeur par défaut
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={`leading-7 text-[22px] [&:not(:first-child)]:mt-6 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

export function Blockquote({
  children,
  className = "", // Ajout du paramètre className avec une valeur par défaut
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLElement>) {
  return (
    <blockquote
      className={`mt-6 border-l-2 pl-6 italic ${className}`}
      {...props}
    >
      {children}
    </blockquote>
  );
}

export function Table({
  className = "", // Ajout du paramètre className avec une valeur par défaut
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`my-6 w-full overflow-y-auto ${className}`} {...props}>
      <table className="w-full">
        <thead>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              King's Treasury
            </th>
            <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
              People's happiness
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Empty
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Overflowing
            </td>
          </tr>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Modest
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Satisfied
            </td>
          </tr>
          <tr className="m-0 border-t p-0 even:bg-muted">
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Full
            </td>
            <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
              Ecstatic
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function List({
  className = "", // Ajout du paramètre className avec une valeur par défaut
  ...props
}: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul className={`my-6 ml-6 list-disc [&>li]:mt-2 ${className}`} {...props}>
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li>
    </ul>
  );
}
