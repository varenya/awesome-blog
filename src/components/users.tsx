import { prisma } from "@/db/prisma-client";
import { DropDown } from "@/components/drop-down";
import { setUser } from "@/app/actions";

export default async function Users() {
  const users = await prisma.user.findMany({
    select: { id: true, name: true },
  });
  return (
    <form action={setUser} className={"flex gap-2 items-center"}>
      <label htmlFor={"users"}>Select User</label>
      <select id={"users"} name={"userId"}>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {(user.name && user.name.split(" ")[0]) || ""}
          </option>
        ))}
      </select>
      <button
        type={"submit"}
        className={"bg-amber-500 text-white px-8 py-2 rounded-md"}
      >
        Set
      </button>
    </form>
  );
}
