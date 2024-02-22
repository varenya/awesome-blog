"use client";
import { Listbox } from "@headlessui/react";

export function DropDown({
  users,
}: {
  users: { id: number; name: string | null }[];
}) {
  return (
    <Listbox defaultValue={users[0]} name={"userId"}>
      <Listbox.Button
        className={
          "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
        }
      >
        {({ value }) => value.name}
      </Listbox.Button>
      <Listbox.Options>
        {users.map((user) => (
          <Listbox.Option
            className={
              "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm"
            }
            key={user.id}
            value={user}
          >
            {user.name}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}
