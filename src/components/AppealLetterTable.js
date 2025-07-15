import { useState, useMemo } from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { PiSlidersDuotone } from "react-icons/pi";
import { IoEllipsisVerticalSharp } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const data = [
  { year: 2017, company: "Alabama and Gulf Coast Railway LLC", state: "AL", assessor: "Wilcox County Tax Collector", account: "1_87060", appealed: "June 25,", status: "Pending", appealedDate: "2023-06-25", appealedBy: "John Doe" },
  { year: 2018, company: "First Coast Railroad Inc.", state: "GA", assessor: "Camden County Tax", account: "UTIL150_ Camden County", appealed: "June 25,", status: "Approved", appealedDate: "2023-06-25", appealedBy: "Jane Smith" },
  { year: 2019, company: "Buffalo and Pittsburgh Railroad, Inc.", state: "NY", assessor: "City Of Buffalo Assessor", account: "10782900", appealed: "June 25,", status: "Rejected", appealedDate: "2023-06-25", appealedBy: "Alice Brown" },
  { year: 2020, company: "Conecuh Valley Railway, LLC", state: "OH", assessor: "Ellicottville Tax Collector", account: "043689 38.004-1-31", appealed: "June 25,", status: "Pending", appealedDate: "2023-06-25", appealedBy: "Bob Lee" },
  { year: 2021, company: "Georgia Central Railway LP", state: "KY", assessor: "Pike County Revenue Commissioner", account: "PUBUT - 000780 (TROY)-50054", appealed: "June 25,", status: "Approved", appealedDate: "2023-06-25", appealedBy: "Carol White" },
  { year: 2022, company: "KWT Railway Inc.", state: "UT", assessor: "City Of Dublin", account: "400 294_400 294", appealed: "June 25,", status: "Pending", appealedDate: "2023-06-25", appealedBy: "David Green" },
  { year: 2022, company: "KWT Railway Inc.", state: "UT", assessor: "City Of Dublin", account: "400 294_400 294", appealed: "June 25,", status: "Pending", appealedDate: "2023-06-25", appealedBy: "David Green" },
];

const columns = [
  { key: "year", label: "TAX YEAR" },
  { key: "company", label: "COMPANY" },
  { key: "state", label: "STATE" },
  { key: "assessor", label: "ASSESSOR" },
  { key: "account", label: "ACCOUNT NUMBER" },
  { key: "appealedDeadline", label: "APPEALED DEADLINE" },
  { key: "status", label: "STATUS" },
  { key: "appealedDate", label: "APPEALED DATE" },
  { key: "appealedBy", label: "APPEALED BY" },
  { key: "appealed", label: "APPEALED" },
];

export default function AppealLetterTable() {
  const [openActionIdx, setOpenActionIdx] = useState(null);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");
  const [searchText, setSearchText] = useState("");
  const [selectedRows, setSelectedRows] = useState([]); // <-- NEW

  const filteredData = useMemo(() => {
    if (!searchText) return data;
    return data.filter(row =>
      Object.values(row).some(val =>
        String(val).toLowerCase().includes(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  const sortedData = useMemo(() => {
    if (!sortColumn) return filteredData;
    return [...filteredData].sort((a, b) => {
      const aVal = a[sortColumn] ?? "";
      const bVal = b[sortColumn] ?? "";
      if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortColumn, sortDirection]);

  const handleSort = (colKey) => {
    if (sortColumn === colKey) {
      setSortDirection(dir => (dir === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(colKey);
      setSortDirection("asc");
    }
  };

  const allSelected = selectedRows.length === sortedData.length && sortedData.length > 0;

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRows(sortedData.map((_, idx) => idx));
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelect = (idx) => {
    setSelectedRows(prev =>
      prev.includes(idx)
        ? prev.filter(i => i !== idx)
        : [...prev, idx]
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-x-auto p-6 md:p-0 2xl:p-0">
        <div className="flex justify-end mb-4 2xl:mb-4 gap-3">
          <input
            type="text"
            placeholder="Search by Property, Jurisdiction, Parcel Number or Client"
            className="px-5 2xl:py-4 h-10 2xl:h-16 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2ED6A1] w-80 md:w-96 bg-white"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
          <button className="p-2 px-4 border border-gray-300 rounded-lg bg-white hover:bg-[#2ED6A1] hover:text-[#22314F] transition"><PiSlidersDuotone /></button>
          <div className="flex items-center justify-center p-2 2xl:h-16 2xl:w-16 border bg-gray-200 border-gray-300 rounded-full hover:bg-[#2ED6A1] hover:text-[#22314F] transition"><IoEllipsisVerticalSharp /></div>
        </div>
      <div className="overflow-x-auto">
        <table className="text-[#22314F] w-full " style={{ tableLayout: 'fixed' }}>
          <colgroup>
            <col style={{ width: '40px' }} />
            <col style={{ width: '200px' }} />
            <col style={{ width: '380px' }} />
            <col style={{ width: '160px' }} />
            <col style={{ width: '300px' }} />
            <col style={{ width: '300px' }} />
            <col style={{ width: '260px' }} />
            <col style={{ width: '420px' }} />
            <col style={{ width: '210px' }} />
            <col style={{ width: '600px' }} />
            <col style={{ width: '300px' }} />
            <col style={{ width: '260px' }} />
          </colgroup>
          <thead>
            <tr className="bg-[#e9f0f7] text-[#22314F] text-sm 2xl:text-base ">
              <th className="p-4 font-semibold text-left whitespace-nowrap">
                <input
                  type="checkbox"
                  className="2xl:w-5 2xl:h-5 h-3 w-3 accent-[#2ED6A1] rounded-2xl"
                  checked={allSelected}
                  onChange={handleSelectAll}
                  indeterminate={selectedRows.length > 0 && !allSelected ? "indeterminate" : undefined}
                />
              </th>
              {columns.map(col => (
                <th key={col.key} className="p-4 font-semibold text-left whitespace-nowrap text-gray-500">
                  <span className="inline-flex items-center gap-1 cursor-pointer select-none" onClick={() => handleSort(col.key)}>
                    {col.label}
                    <span className="flex flex-col text-gray-400 text-xs">
                      <FaSortUp className={sortColumn === col.key && sortDirection === 'asc' ? 'text-[#22314F]' : ''} />
                      <FaSortDown className={sortColumn === col.key && sortDirection === 'desc' ? 'text-[#22314F]' : ''} />
                    </span>
                  </span>
                </th>
              ))}
              <th className="p-4 font-semibold text-left whitespace-nowrap">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((row, idx) => (
              <tr key={idx} className=" hover:bg-[#f0f7fa] transition">
                <td className="p-4">
                  <input
                    type="checkbox"
                    className="2xl:w-5 2xl:h-5 h-3 w-3 accent-[#2ED6A1] rounded-2xl"
                    checked={selectedRows.includes(idx)}
                    onChange={() => handleRowSelect(idx)}
                  />
                </td>
                <td className="2xl:p-4 p-3.5 2xl:text-lg text-xs font-semibold">{row.year}</td>
                <td className="2xl:p-4 p-3.5 2xl:text-lg text-xs font-semibold whitespace-nowrap overflow-hidden text-ellipsis" style={{ maxWidth: '200px' }}>{row.company}</td>
                <td className="2xl:p-4 p-3.5 2xl:text-lg text-xs font-semibold">{row.state}</td>
                <td className="2xl:p-4 p-3.5 2xl:text-lg text-xs font-semibold whitespace-nowrap overflow-hidden text-ellipsis" style={{ maxWidth: '300px' }}>{row.assessor}</td>
                <td className="2xl:p-4 p-3.5 2xl:text-lg text-xs font-semibold">{row.account}</td>
                <td className="2xl:p-4 p-3.5 2xl:text-lg text-xs font-semibold">{row.appealedDeadline || row.appealed}</td>
                <td className="2xl:p-4 p-3.5 2xl:text-lg text-xs font-semibold">{row.status}</td>
                <td className="2xl:p-4 p-3.5 2xl:text-lg text-xs font-semibold">{row.appealedDate}</td>
                <td className="2xl:p-4 p-3.5 2xl:text-lg text-xs font-semibold">{row.appealedBy}</td>
                <td className="2xl:p-4 p-3.5 2xl:text-lg text-xs font-semibold">{row.appealed}</td>
                <td className="2xl:p-4 p-3.5 relative">
                  <button
                    className="p-2 rounded-full hover:bg-gray-200 focus:outline-none"
                    onClick={() => setOpenActionIdx(openActionIdx === idx ? null : idx)}
                    aria-label="Actions"
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                      <circle cx="10" cy="4" r="1.5" />
                      <circle cx="10" cy="10" r="1.5" />
                      <circle cx="10" cy="16" r="1.5" />
                    </svg>
                  </button>
                  {openActionIdx === idx && (
                    <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow-lg z-20">
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">View</button>
                      <button className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600">Delete</button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Custom horizontal scrollbar below the table */}
    
      {/* Pagination */}
      <div className="flex items-center justify-between p-2 py-4 bg-[#f6f7f8] rounded-xl 2xl:mt-4 mt-2 shadow-sm text-sm">
        <span className="text-gray-400 ml-4">1-10 of 120</span>
        <div className="flex items-center gap-6">
          <button className="px-3 py-1.5 flex items-center gap-1  hover:text-[#22314F] font-medium rounded transition disabled:opacity-50" disabled>
            <span className="text-lg">&#8592;</span> Previous
          </button>
          <span className="mx-1 rounded bg-white text-[#22314F] font-semibold px-3 py-1 shadow">1</span>
          <span className="mx-1 text-gray-400">2</span>
          <span className="mx-1 text-gray-400">3</span>
          <span className="mx-1 text-gray-300">...</span>
          <span className="mx-1 text-gray-400">10</span>
          <button className="px-3 py-1.5 flex items-center gap-1  hover:text-[#22314F] font-medium rounded transition">
            Next <span className="text-lg">&#8594;</span>
          </button>
        </div>
        <div className="flex items-center gap-2 mr-4">
          <span className="text-gray-400">Go on to</span>
          <input type="number" className="w-12 text-center border border-gray-200 rounded px-2 py-1 bg-white  text-gray-700" min="1" max="10" defaultValue={10} />
        </div>
      </div>

      {/* Bottom popup modal */}
      {selectedRows.length > 0 && (
        <div className="fixed left-0 right-0 bottom-0 z-50 flex justify-center animate-slideup">
          <div className="flex items-center justify-between w-full max-w-4xl bg-[#e9f6fb] border border-[#d2eaf3] shadow-lg rounded-2xl px-8 py-4 mb-4">
            <span className="font-semibold text-[#22314F] text-base">{selectedRows.length} Appeal Letter{selectedRows.length > 1 ? 's' : ''} selected</span>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-[#2ED6A1] text-[#2ED6A1] bg-white rounded-lg font-semibold hover:bg-[#d2f5ea] transition">
                <FiDownload className="text-lg" /> Export Grid Details
              </button>
              <button className="px-4 py-2 border border-[#2ED6A1] text-[#2ED6A1] bg-white rounded-lg font-semibold hover:bg-[#d2f5ea] transition">
                Download Letter
              </button>
              <button className="px-4 py-2 bg-[#2ED6A1] text-white rounded-lg font-semibold hover:bg-[#24b88a] transition">
                Change Status
              </button>
            </div>
            <button className="ml-4 p-2 rounded-full hover:bg-[#d2eaf3] transition" onClick={() => setSelectedRows([])} aria-label="Close">
              <IoClose className="text-xl text-[#22314F]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 