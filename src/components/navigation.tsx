const navigation = [
  { name: "Dashboard", href: "#", current: false },
  { name: "Team", href: "#", current: true },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Documents", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function Navigation() {
  return (
    <nav className="flex flex-1 flex-col" aria-label="Sidebar">
      <ul role="list" className="-mx-2 space-y-1">
        {navigation.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className={classNames(
                item.current
                  ? "text-indigo-600"
                  : "text-gray-400 hover:text-indigo-600",
                "group flex gap-x-3 rounded-md p-2 pl-3 text-sm leading-6 font-semibold",
              )}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
