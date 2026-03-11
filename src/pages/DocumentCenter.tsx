import { FolderOpen } from 'lucide-react';

export default function DocumentCenter() {
  return (
    <div className="p-8 max-w-7xl">
      <div className="mb-8">
        <div className="text-sm text-gray-500 mb-4">
          Acme Corp • 2025 Tax Year <span className="font-semibold text-white">Document Center</span>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <FolderOpen size={32} className="text-[#b89968]" />
          <h1 className="text-3xl font-semibold">Document Center</h1>
        </div>
        <p className="text-gray-400">
          Access and manage all your tax-related documents in one place.
        </p>
      </div>

      <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-12 text-center">
        <FolderOpen size={48} className="text-gray-600 mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Document Center Page</h2>
        <p className="text-gray-400">This page is under construction.</p>
      </div>
    </div>
  );
}
