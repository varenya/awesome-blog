"use client";

import classNames from "classnames";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function ActiveLink({
	children,
	href,
}: {
	children: React.ReactNode;
	href: string;
}) {
	const pathName = usePathname();
	return (
		<Link
			href={href}
			className={classNames(
				href === pathName
					? "text-indigo-600"
					: "text-gray-400 hover:text-indigo-600",
				"group flex gap-x-3 rounded-md text-sm leading-6 font-semibold"
			)}
		>
			{children}
		</Link>
	);
}

export { ActiveLink };
