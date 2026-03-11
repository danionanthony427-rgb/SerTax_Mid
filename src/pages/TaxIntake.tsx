import { Upload } from 'lucide-react';

export default function TaxIntake() {
  return (
    <div className="p-8 max-w-7xl">
      <div className="mb-8">
        <div className="text-sm text-gray-500 mb-4">
          Acme Corp • 2025 Tax Year <span className="font-semibold text-white">Tax Intake</span>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <Upload size={32} className="text-[#b89968]" />
          <h1 className="text-3xl font-semibold">Tax Intake</h1>
        </div>
        <p className="text-gray-400">
          Upload and organize your tax documents for the 2025 tax year.
        </p>
      </div>

      <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-12 text-center">
        <Upload size={48} className="text-gray-600 mx-auto mb-4" />
        <h2 className="text-xl font-semibold mb-2">Tax Intake Page</h2>
        <p className="text-gray-400">This page is under construction.</p>
      </div>
    </div>
  );
}
