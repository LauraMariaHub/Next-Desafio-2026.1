"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import clsx from "clsx";

export default function Pagination({ totalPages, currentPage }: { totalPages: number; currentPage: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const generatePagination = (current: number, total: number) => {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    if (current <= 3) return [1, 2, 3, "...", total - 1, total];
    if (current >= total - 2) return [1, 2, "...", total - 2, total - 1, total];
    return [1, "...", current - 1, current, current + 1, "...", total];
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className="inline-flex items-center gap-2">
      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      <div className="flex -space-x-px">
        {allPages.map((page, index) => (
          <PaginationNumber
            key={index}
            href={createPageURL(page)}
            page={page}
            isActive={currentPage === page}
            position={
              index === 0 ? "first" : index === allPages.length - 1 ? "last" : "middle"
            }
          />
        ))}
      </div>

      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}

function PaginationNumber({ page, href, isActive, position }: any) {
  const className = clsx(
    "flex h-10 w-10 items-center justify-center text-sm border border-gray-300",
    {
      "rounded-l-md": position === "first",
      "rounded-r-md": position === "last",
      "bg-[#06434F] text-white z-10": isActive,
      "hover:bg-gray-100": !isActive && page !== "...",
      "text-gray-300": page === "...",
    }
  );

  if (page === "..." || isActive) return <div className={className}>{page}</div>;
  return <Link href={href} className={className}>{page}</Link>;
}

function PaginationArrow({ href, direction, isDisabled }: any) {
  const className = clsx(
    "flex h-10 w-10 items-center justify-center rounded-md border border-gray-300",
    { "pointer-events-none text-gray-300": isDisabled, "hover:bg-gray-100": !isDisabled }
  );
  const icon = direction === "left" ? <ArrowLeftIcon className="w-4" /> : <ArrowRightIcon className="w-4" />;
  return isDisabled ? <div className={className}>{icon}</div> : <Link href={href} className={className}>{icon}</Link>;
}