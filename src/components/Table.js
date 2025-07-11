import { FaSort } from "react-icons/fa";

export default function Table({ columns = [], data = [] }) {
  return (
    <div className="rounded-2xl shadow-lg overflow-x-auto bg-[#F7FAFC]">
      <table className="min-w-full">
        <thead>
          <tr className="bg-[#E9F1F7] text-[#22314F] text-sm">
            <th className="px-4 py-3 text-left font-semibold">
              <input type="checkbox" className="accent-[#2ED6A1] w-5 h-5" />
            </th>
            {columns.map((col) => (
              <th key={col.accessor} className="px-4 py-3 text-left font-semibold whitespace-nowrap">
                <div className="flex items-center gap-2">
                  {col.header}
                  <FaSort className="text-xs opacity-60" />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="bg-white border-b last:border-b-0 hover:bg-[#F1F8F6] transition">
              <td className="px-4 py-3">
                <input type="checkbox" className="accent-[#2ED6A1] w-5 h-5" />
              </td>
              {columns.map((col) => (
                <td key={col.accessor} className="px-4 py-3 whitespace-nowrap text-[#22314F]">
                  {row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 