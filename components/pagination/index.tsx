type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-2 mt-12 mb-10">
      <button className="w-8 h-8 flex items-center justify-center bg-[#E0F2F7] text-[#06434F] hover:bg-[#CFE9F2] transition-colors">
        {"<"}
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`w-8 h-8 flex items-center justify-center font-serif text-lg transition-colors
            ${page === currentPage
              ? "bg-[#BDD1D6] text-[#06434F] font-bold"
              : "bg-[#E0F2F7] text-[#06434F] hover:bg-[#CFE9F2]"
            }`}
        >
          {page}
        </button>
      ))}

      <button className="w-8 h-8 flex items-center justify-center bg-[#E0F2F7] text-[#06434F] hover:bg-[#CFE9F2] transition-colors">
        {">"}
      </button>
    </div>
  );
}