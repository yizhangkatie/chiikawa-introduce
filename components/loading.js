export default function Loading() {
  return (
    <div className="fixed inset-0 z-max flex flex-col items-center justify-center bg-white">
      <div className="h-10 w-10 rounded-full border-4 border-gray-300 border-t-gray-800 animate-spin" />
      <p className="mt-4 text-sm text-gray-500">Loading...</p>
    </div>
  );
}
