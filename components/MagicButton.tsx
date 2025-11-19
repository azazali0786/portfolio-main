"use client";

import React from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
  href,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  href?: string;
}) => {
  const handleAnchorClick = (e: React.MouseEvent) => {
    if (handleClick) {
      handleClick();
      return;
    }

    if (!href) return;

    // If it's a hash link, perform offset-aware smooth scroll like the navbar
    if (href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace(/^#/, "");
      const el = document.getElementById(id);
      if (el) {
        const nav = document.querySelector(".floating-nav-root");
        const navHeight = (nav as HTMLElement)?.offsetHeight ?? 80;
        const rect = el.getBoundingClientRect();
        const target = window.scrollY + rect.top - navHeight - 8;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const final = Math.min(Math.max(0, target), maxScroll);
        window.scrollTo({ top: final, behavior: "smooth" });
        history.replaceState(undefined, "", `#${id}`);
      } else {
        window.location.hash = href;
      }
    }
    // For non-hash hrefs (mailto, external), let the anchor work normally
  };

  const Content = (
    <span
      className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
    >
      {position === "left" && icon}
      {title}
      {position === "right" && icon}
    </span>
  );

  // If href provided and it's not a hash we should render an anchor so mailto/external links work
  if (href && !href.startsWith("#")) {
    return (
      <a href={href} onClick={handleAnchorClick} className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        {Content}
      </a>
    );
  }

  // For button or hash href, render a button that handles the click
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={href && href.startsWith("#") ? handleAnchorClick : handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      {Content}
    </button>
  );
};

export default MagicButton;
