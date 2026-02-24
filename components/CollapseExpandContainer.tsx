'use client';
import {
  ReactNode,
  useState,
  Children,
  isValidElement,
  cloneElement,
} from 'react';
import type { CollapseExpandItemProps } from './CollapseExpandItem';

interface CollapseExpandContainerProps {
  accordionType: string;
  children: ReactNode;
}

export default function CollapseExpandContainer({
  accordionType,
  children,
}: CollapseExpandContainerProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = Children.map(children, (child, idx) => {
    if (!isValidElement<CollapseExpandItemProps>(child)) return child;

    return cloneElement<CollapseExpandItemProps>(child, {
      isOpen: openIndex === idx,
      onToggle: () => setOpenIndex(openIndex === idx ? null : idx),
    });
  });

  return (
    <div
      id="accordion-collapse"
      data-accordion={accordionType}
      className="rounded-base border border-default overflow-hidden shadow-xs mt-8"
    >
      {items}
    </div>
  );
}