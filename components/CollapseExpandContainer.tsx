export default function CollapseExpandContainer(accordionType: string, children: React.ReactNode) {
  return (
    <div id="accordion-collapse" data-accordion={accordionType} className="rounded-base border border-default overflow-hidden shadow-xs">
      {children}
    </div>

  )
}