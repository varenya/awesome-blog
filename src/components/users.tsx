import { prisma } from "@/db/prisma-client";
import { DropDown } from "@/components/drop-down";
import { setUser } from "@/app/actions";

export default async function Users() {
  const users = await prisma.user.findMany({
    select: { id: true, name: true },
  });
  return (
    <form action={setUser} className={"flex gap-2 items-center"}>
      <label className="flex-none" htmlFor={"users"}>
        Select User
      </label>
      <select
        id={"users"}
        name={"userId"}
        className="shrink w-40 h-12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
      >
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {(user.name && user.name.split(" ")[0]) || ""}
          </option>
        ))}
      </select>
      <button
        type={"submit"}
        className={
          "bg-rose-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto"
        }
      >
        Set
      </button>
    </form>
  );
}
