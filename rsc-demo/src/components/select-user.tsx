"use client";
import React from "react";
import { setUser } from "../app/actions";

function SelectUser({
  users,
}: {
  users: { id: number; name: string | null }[];
}) {
  function updateUser(event: React.FormEvent<HTMLSelectElement>) {
    event.currentTarget.form?.requestSubmit();
  }

  return (
    <form action={setUser} className={"flex gap-2 items-center"}>
      <select
        id={"users"}
        name={"userId"}
        onChange={updateUser}
        className="shrink w-40 h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
      >
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {(user.name && user.name.split(" ")[0]) || ""}
          </option>
        ))}
      </select>
    </form>
  );
}

export { SelectUser };
