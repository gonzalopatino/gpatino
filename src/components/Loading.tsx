export default function Loading() {
  return (
    <div
      className="flex items-center justify-center min-h-[50vh]"
      role="status"
      aria-label="Loading content"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
        <span className="text-neutral-500 text-sm">Loading...</span>
      </div>
    </div>
  )
}
