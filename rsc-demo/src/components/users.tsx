import { prisma } from "../../../db/prisma-client";
import { setUser } from "../app/actions";
import React from "react";
import { SelectUser } from "./select-user";

export default async function Users() {
  const users = await prisma.user.findMany({
    select: { id: true, name: true },
  });
  return <SelectUser users={users} />;
}
