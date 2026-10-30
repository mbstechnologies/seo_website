import { CircleDashed } from 'lucide-react'

export function LoadingState({ label = 'content' }) { return <div className="empty-panel"><CircleDashed className="spin" /> Loading {label}…</div> }
export function EmptyState({ label = 'Content' }) { return <div className="empty-panel">{label} will appear here when the content API is connected.</div> }
export function CollectionState({ query, label }) { if (query.isLoading) return <LoadingState label={label} />; if (query.isError || !Array.isArray(query.data) || !query.data.length) return <EmptyState label={label} />; return null }
