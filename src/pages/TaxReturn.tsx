import { FileText } from 'lucide-react';

export default function TaxReturn() {
  return (
    <div className="p-8 max-w-7xl">
      <div className="mb-8">
        <div className="text-sm text-gray-500 mb-4">
          Acme Corp • 2025 Tax Year <span className="font-semibold text-white">Tax Return</span>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <FileText size={32} className="text-[#b89968]" />
          <h1 className="text-3xl font-semibold">Tax Return</h1>
        </div>
        <p className="text-gray-400">
          Review your completed tax return and supporting documentation.
        </p>
      </div>

      <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-12 text-center">
        <FileText size={48} className="text-gray-600 mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Tax Return Page</h2>
        <p className="text-gray-400">This page is under construction.</p>
      </div>
    </div>
  );
}
