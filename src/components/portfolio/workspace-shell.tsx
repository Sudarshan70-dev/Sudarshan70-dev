"use client";

import {
  Braces,
  Code2,
  FileText,
  FolderOpen,
  Mail,
  Menu,
  MapPin,
  Search,
  TerminalSquare,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent, type MouseEvent, type ReactNode } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ButtonLink } from "@/components/ui/button-link";
import type { SocialLink } from "@/types/content";

const files = [
  { id: "hero", label: "Hero.tsx", icon: Code2, tone: "text-cyan-300" },
  { id: "about", label: "AboutMe.md", icon: FileText, tone: "text-blue-300" },
  { id: "projects", label: "Projects.tsx", icon: FolderOpen, tone: "text-violet-300" },
  { id: "experience", label: "ProfessionalExperience.json", icon: Braces, tone: "text-amber-300" },
  { id: "contact", label: "Contact.sh", icon: TerminalSquare, tone: "text-emerald-300" },
];

const aboutSectionIds = new Set(["about", "skills", "achievements"]);

function getTabForHash(hash: string) {
  if (aboutSectionIds.has(hash)) return "about";
  return files.some((file) => file.id === hash) ? hash : undefined;
}

function linkIcon(label: string) {
  if (label === "GitHub") return GitHubIcon;
  if (label === "LinkedIn") return LinkedInIcon;
  return Mail;
}

export function WorkspaceShell({
  children,
  socialLinks,
  navigationPrefix = "",
  initialFile = "hero",
  skipTarget = "#hero",
}: {
  children: ReactNode;
  socialLinks: SocialLink[];
  navigationPrefix?: string;
  initialFile?: string;
  skipTarget?: string;
}) {
  const [activeFile, setActiveFile] = useState(initialFile);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeTabRef = useRef<HTMLAnchorElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const firstMenuLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const selectHashTab = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      const tab = getTabForHash(hash);
      if (tab) setActiveFile(tab);
    };

    selectHashTab();
    window.addEventListener("hashchange", selectHashTab);
    window.addEventListener("popstate", selectHashTab);
    return () => {
      window.removeEventListener("hashchange", selectHashTab);
      window.removeEventListener("popstate", selectHashTab);
    };
  }, []);

  useEffect(() => {
    const scrollRoot = document.querySelector<HTMLElement>("[data-editor-scroll]");
    if (scrollRoot) scrollRoot.scrollTop = 0;
  }, [activeFile]);

  useEffect(() => {
    const tab = activeTabRef.current;
    const tabList = tab?.parentElement;
    if (!tab || !tabList) return;

    const tabRect = tab.getBoundingClientRect();
    const tabListRect = tabList.getBoundingClientRect();
    const tabLeft = tabRect.left - tabListRect.left + tabList.scrollLeft;
    const tabRight = tabLeft + tabRect.width;
    if (tabLeft < tabList.scrollLeft) {
      tabList.scrollTo({ left: tabLeft, behavior: "smooth" });
    } else if (tabRight > tabList.scrollLeft + tabList.clientWidth) {
      tabList.scrollTo({ left: tabRight - tabList.clientWidth, behavior: "smooth" });
    }
  }, [activeFile]);

  useEffect(() => {
    if (!menuOpen) return;

    firstMenuLinkRef.current?.focus();
    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuToggleRef.current?.focus();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  useEffect(() => {
    const nonMobileQuery = window.matchMedia("(min-width: 425px)");
    const closeOnNonMobile = () => {
      if (nonMobileQuery.matches) setMenuOpen(false);
    };

    nonMobileQuery.addEventListener("change", closeOnNonMobile);
    return () => nonMobileQuery.removeEventListener("change", closeOnNonMobile);
  }, []);

  const selectFile = (id: string) => {
    if (!navigationPrefix) setActiveFile(getTabForHash(id) ?? "hero");
  };

  const handleWorkspaceClick = (event: MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof Element)) return;
    const link = event.target.closest<HTMLAnchorElement>("a[href]");
    if (!link) return;

    const destination = new URL(link.href, window.location.href);
    if (destination.origin !== window.location.origin || destination.pathname !== window.location.pathname) return;

    const tab = getTabForHash(decodeURIComponent(destination.hash.slice(1)));
    if (tab) setActiveFile(tab);
  };

  return (
    <div className="workspace-shell" onClick={handleWorkspaceClick}>
      <header className="workspace-titlebar">
        <div className="workspace-brand">
          <span aria-hidden="true" className="workspace-window-dots">
            <i />
            <i />
            <i />
          </span>
          <span className="hidden sm:inline">Sudarshan Gadekar — Portfolio Workspace</span>
        </div>

        <div className="workspace-command hidden sm:flex" aria-label="Portfolio workspace">
          <Search aria-hidden="true" className="h-3.5 w-3.5" />
          <span>sudarshan70-dev / portfolio</span>
        </div>

        <button
          aria-controls="workspace-mobile-menu"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close portfolio menu" : "Open portfolio menu"}
          className="workspace-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          ref={menuToggleRef}
          type="button"
        >
          {menuOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>

        <ButtonLink href={`${navigationPrefix}#contact`} variant="primary" className="workspace-contact">
          <Mail aria-hidden="true" className="h-3.5 w-3.5" />
          Contact
        </ButtonLink>
      </header>

      <div className="workspace-body">
        <aside aria-label="Quick navigation" className="workspace-activity">
          <nav className="workspace-activity-nav">
            {files.filter(({ id }) => ["hero", "projects", "experience", "contact"].includes(id)).map(({ id, label, icon: Icon }) => (
              <a
                key={id}
                aria-current={activeFile === id ? "location" : undefined}
                aria-label={label}
                className={`workspace-activity-link ${activeFile === id ? "is-active" : ""}`}
                href={`${navigationPrefix}#${id}`}
                onClick={() => selectFile(id)}
                title={label}
              >
                <Icon aria-hidden="true" className="h-5 w-5" />
              </a>
            ))}
          </nav>
          <nav aria-label="Social profiles" className="workspace-social-nav">
            {socialLinks
              .filter((link) => link.label !== "Email")
              .map((link) => {
                const Icon = linkIcon(link.label);
                return (
                  <a
                    key={link.label}
                    aria-label={link.label}
                    className="workspace-social-link"
                    href={link.href}
                    rel={link.external ? "noreferrer" : undefined}
                    target={link.external ? "_blank" : undefined}
                    title={link.label}
                  >
                    <Icon aria-hidden="true" className="h-4 w-4" />
                  </a>
                );
              })}
          </nav>
        </aside>

        <aside aria-label="Portfolio files" className="workspace-explorer">
          <div className="workspace-explorer-heading">EXPLORER: PORTFOLIO</div>
          <p className="workspace-tree-root"><span aria-hidden="true">▾</span> SUDARSHAN-PORTFOLIO</p>
          <nav aria-label="Portfolio sections" className="workspace-file-list">
            {files.map(({ id, label, icon: Icon, tone }) => (
              <a
                key={id}
                aria-current={activeFile === id ? "location" : undefined}
                className={`workspace-file-link ${activeFile === id ? "is-active" : ""}`}
                href={`${navigationPrefix}#${id}`}
                onClick={() => selectFile(id)}
              >
                <Icon aria-hidden="true" className={`h-4 w-4 ${tone}`} />
                <span>{label}</span>
              </a>
            ))}
          </nav>
          <div className="workspace-profile-card">
            <div className="workspace-profile-card-title">OPEN TO WORK</div>
            <p><span className="workspace-status-dot" /> React and Full Stack roles</p>
            <p className="workspace-location"><MapPin aria-hidden="true" className="h-3.5 w-3.5" /> Pune, India</p>
          </div>
        </aside>

        <section aria-label="Portfolio editor" className="workspace-editor">
          <nav aria-label="Open portfolio files" className="workspace-tabs" role="tablist">
            {files.map(({ id, label, icon: Icon, tone }) => (
              <a
                key={id}
                aria-current={activeFile === id ? "location" : undefined}
                aria-controls="portfolio-content"
                aria-selected={activeFile === id}
                className={`workspace-tab ${activeFile === id ? "is-active" : ""}`}
                href={`${navigationPrefix}#${id}`}
                id={`tab-${id}`}
                onClick={() => selectFile(id)}
                ref={activeFile === id ? activeTabRef : undefined}
                role="tab"
              >
                <Icon aria-hidden="true" className={`h-3.5 w-3.5 ${tone}`} />
                <span>{label}</span>
                {activeFile === id ? <span aria-hidden="true" className="workspace-tab-close">×</span> : null}
              </a>
            ))}
          </nav>

          <div className="workspace-breadcrumb" aria-live="polite">
            <span>sudarshan-portfolio</span><span aria-hidden="true">›</span><span>src</span><span aria-hidden="true">›</span>
            <span className="workspace-breadcrumb-current">{files.find((file) => file.id === activeFile)?.label ?? "Hero.tsx"}</span>
          </div>

          <div
            aria-labelledby={`tab-${activeFile}`}
            className="workspace-scroll"
            data-active-file={activeFile}
            data-editor-scroll
            data-home-view={navigationPrefix ? undefined : "true"}
            id="portfolio-content"
            role="tabpanel"
          >
            <a className="workspace-skip-link" href={skipTarget}>Skip to portfolio content</a>
            {children}
          </div>

          <TerminalPanel navigationPrefix={navigationPrefix} onNavigate={selectFile} />
        </section>
      </div>

      <div className="workspace-mobile-menu" hidden={!menuOpen}>
        <button
          aria-label="Close portfolio menu"
          className="workspace-menu-backdrop"
          onClick={() => {
            setMenuOpen(false);
            menuToggleRef.current?.focus();
          }}
          tabIndex={-1}
          type="button"
        />
        <aside aria-label="Portfolio file menu" className="workspace-menu-drawer" id="workspace-mobile-menu">
          <div className="workspace-menu-heading">
            <span>EXPLORER: PORTFOLIO</span>
            <button
              aria-label="Close portfolio menu"
              className="workspace-menu-close"
              onClick={() => {
                setMenuOpen(false);
                menuToggleRef.current?.focus();
              }}
              type="button"
            >
              <X aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
          <p className="workspace-tree-root"><span aria-hidden="true">▾</span> SUDARSHAN-PORTFOLIO</p>
          <nav aria-label="Portfolio sections" className="workspace-file-list">
            {files.map(({ id, label, icon: Icon, tone }, index) => (
              <a
                key={id}
                aria-current={activeFile === id ? "location" : undefined}
                className={`workspace-file-link ${activeFile === id ? "is-active" : ""}`}
                href={`${navigationPrefix}#${id}`}
                onClick={() => {
                  selectFile(id);
                  setMenuOpen(false);
                  menuToggleRef.current?.focus();
                }}
                ref={index === 0 ? firstMenuLinkRef : undefined}
              >
                <Icon aria-hidden="true" className={`h-4 w-4 ${tone}`} />
                <span>{label}</span>
              </a>
            ))}
          </nav>
          <div className="workspace-profile-card">
            <div className="workspace-profile-card-title">OPEN TO WORK</div>
            <p><span className="workspace-status-dot" /> React and Full Stack roles</p>
            <p className="workspace-location"><MapPin aria-hidden="true" className="h-3.5 w-3.5" /> Pune, India</p>
          </div>
          <nav aria-label="Social profiles" className="workspace-menu-socials">
            {socialLinks.map((link) => {
              const Icon = linkIcon(link.label);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  rel={link.external ? "noreferrer" : undefined}
                  target={link.external ? "_blank" : undefined}
                >
                  <Icon aria-hidden="true" className="h-4 w-4" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>
        </aside>
      </div>

      <footer className="workspace-statusbar">
        <div className="workspace-status-group">
          <span className="workspace-status-branch"><Code2 aria-hidden="true" className="h-3.5 w-3.5" /> main</span>
          <span className="hidden sm:inline">● Available for opportunities</span>
          <span className="hidden md:inline"><MapPin aria-hidden="true" className="inline h-3 w-3" /> Pune, Maharashtra</span>
        </div>
        <div className="workspace-status-group">
          <span className="hidden sm:inline">UTF-8</span>
          <span>TypeScript React</span>
        </div>
      </footer>
    </div>
  );
}

type TerminalLine = { text: string; tone?: "green" | "cyan" | "muted" };

function TerminalPanel({
  navigationPrefix,
  onNavigate,
}: {
  navigationPrefix: string;
  onNavigate: (id: string) => void;
}) {
  const [command, setCommand] = useState("");
  const [lines, setLines] = useState<TerminalLine[]>([
    { text: "$ portfolio --stack", tone: "cyan" },
    { text: "React.js · TypeScript · Firebase · Google Cloud · Selenium", tone: "green" },
    { text: "Type help for available commands.", tone: "muted" },
  ]);

  const runCommand = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    const value = command.trim().toLowerCase();
    if (!value) return;
    setCommand("");

    if (value === "clear") {
      setLines([]);
      return;
    }

    const destinations: Record<string, string> = {
      hero: "hero",
      about: "about",
      skills: "about",
      achievements: "about",
      experience: "experience",
      exp: "experience",
      projects: "projects",
      contact: "contact",
    };

    if (destinations[value]) {
      const destination = destinations[value];
      const section = document.getElementById(destination);
      if (section && !navigationPrefix) {
        onNavigate(destination);
      } else if (navigationPrefix) {
        window.location.href = `${navigationPrefix}#${destination}`;
      }
      setLines((current) => [
        ...current,
        { text: `$ ${value}`, tone: "cyan" },
        { text: `Opened ${destination}.`, tone: "green" },
      ].slice(-8));
      return;
    }

    const response = value === "help"
      ? "Commands: hero, about, skills, experience, projects, achievements, contact, clear"
      : `Command not found: ${value}. Type help to see available commands.`;
    setLines((current) => [...current, { text: `$ ${value}`, tone: "cyan" }, { text: response, tone: "muted" }].slice(-8));
  };

  return (
    <section aria-label="Portfolio terminal" className="workspace-terminal">
      <div className="workspace-terminal-heading">
        <div className="flex items-center gap-4">
          <span className="workspace-terminal-active">TERMINAL</span>
          <span>OUTPUT</span>
          <span className="hidden sm:inline">PORTFOLIO PROFILE</span>
        </div>
        <span className="hidden sm:inline">powershell — 80×24</span>
      </div>
      <div aria-live="polite" className="workspace-terminal-output">
        {lines.map((line, index) => (
          <p className={`workspace-terminal-line ${line.tone ? `tone-${line.tone}` : ""}`} key={`${line.text}-${index}`}>{line.text}</p>
        ))}
      </div>
      <label className="workspace-terminal-prompt">
        <span>sudarshan@pune-dev:~$</span>
        <input
          aria-label="Enter a portfolio command"
          onChange={(event) => setCommand(event.target.value)}
          onKeyDown={runCommand}
          placeholder="help, projects, contact…"
          value={command}
        />
      </label>
    </section>
  );
}
