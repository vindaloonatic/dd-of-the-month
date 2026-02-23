export default function CollapseExpandItem(heading: string, content: React.ReactNode) {
  return (
    <div>
      <h2 id="accordion-collapse-heading-1">
        <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body rounded-t-base border border-t-0 border-x-0 border-b-default hover:text-heading hover:bg-neutral-secondary-medium gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
          <span>{heading}</span>
          <svg data-accordion-icon className="w-5 h-5 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7" /></svg>
        </button>
      </h2>
      <div id="accordion-collapse-body-1" className="hidden border border-s-0 border-e-0 border-t-0 border-b-default" aria-labelledby="accordion-collapse-heading-1">
        <div className="p-4 md:p-5">
          {content}
        </div>
      </div>
    </div>
  )
}