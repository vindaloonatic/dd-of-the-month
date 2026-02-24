'use client';
import { ReactNode, useState, useId } from 'react';

export interface CollapseExpandItemProps {
  heading: string;
  children: ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function CollapseExpandItem({ heading, children, isOpen: initialOpen, onToggle }: CollapseExpandItemProps) {
  const [localOpen, setLocalOpen] = useState(false);
  const open = initialOpen ?? localOpen;
  const toggle = onToggle ?? (() => setLocalOpen(!open));

  const id = useId();
  const buttonId = `accordion-button-${id}`;
  const panelId = `accordion-panel-${id}`;

  return (
    <div className="border-b">
      <h2 id={buttonId}>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-t-base border border-t-0 border-x-0 border-b-default hover:text-heading hover:bg-neutral-secondary-medium gap-3" 
          onClick={() => toggle()}
          aria-expanded={open}
          aria-controls={panelId}
        >
          <span>{heading}</span>
          <svg data-accordion-icon className="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m5 15 7-7 7 7" /></svg>
        </button>
      </h2>
      <div
        id={panelId}
        className={open ? '' : 'hidden border border-s-0 border-e-0 border-t-0 border-b-default'} aria-labelledby={buttonId}
      >
        <div className="p-4 md:p-5">
          {children}
        </div>
      </div>
    </div>
  )
}