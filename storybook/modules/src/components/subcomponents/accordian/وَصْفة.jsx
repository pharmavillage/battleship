

export default function وَصْفة() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex items-center justify-between rounded-t-md bg-gray-100 px-4 py-3 font-medium transition-colors hover:bg-gray-200 data-[state=open]:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:data-[state=open]:bg-gray-700">
          What is the purpose of this accordion?
          <ChevronDownIcon className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
        </AccordionTrigger>
        <AccordionContent className="rounded-b-md bg-gray-100 px-4 py-3 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
          This accordion is designed to provide a clean and minimalist way to display expandable content. It features a smooth animation when opening
          and closing, and a clear visual hierarchy to make the content easy to scan and understand.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="flex items-center justify-between rounded-t-md bg-gray-100 px-4 py-3 font-medium transition-colors hover:bg-gray-200 data-[state=open]:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:data-[state=open]:bg-gray-700">
          How does the accordion work?
          <ChevronDownIcon className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
        </AccordionTrigger>
        <AccordionContent className="rounded-b-md bg-gray-100 px-4 py-3 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
          The accordion works by allowing users to click on the title of each item to expand or collapse the content. When an item is clicked, the
          content for that item is revealed or hidden using a smooth animation. This makes it easy for users to quickly scan the available content and
          focus on the information they're most interested in.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="flex items-center justify-between rounded-t-md bg-gray-100 px-4 py-3 font-medium transition-colors hover:bg-gray-200 data-[state=open]:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:data-[state=open]:bg-gray-700">
          What are the benefits of using this accordion?
          <ChevronDownIcon className="h-4 w-4 transition-transform data-[state=open]:rotate-180" />
        </AccordionTrigger>
        <AccordionContent className="rounded-b-md bg-gray-100 px-4 py-3 text-gray-500 dark:bg-gray-800 dark:text-gray-400">
          The main benefits of using this accordion are:
          <ul className="mt-2 list-disc pl-4">
            <li>Clean and minimalist design that focuses on the content</li>
            <li>Smooth animation when expanding and collapsing items</li>
            <li>Clear visual hierarchy to make the content easy to scan</li>
            <li>Responsive design that works well on both desktop and mobile</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
