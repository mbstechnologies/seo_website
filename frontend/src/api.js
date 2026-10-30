import axios from 'axios'
import {
  initialServices,
  initialPackages,
  initialCaseStudies,
  initialTeam,
  initialBlogPosts,
  initialFaqs,
  initialSiteSettings
} from './data/seoAgencyData'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL ?? '/api',
  timeout: 3000,
})

function collection(data, key) {
  if (Array.isArray(data)) return data
  if (Array.isArray(data?.[key])) return data[key]
  if (Array.isArray(data?.data)) return data.data
  return []
}

export async function fetchServices() {
  try {
    const { data } = await api.get('/services')
    const list = collection(data, 'services')
    return list.length ? list : initialServices
  } catch {
    return initialServices
  }
}

export async function fetchSiteSettings() {
  try {
    const { data } = await api.get('/settings')
    return data && Object.keys(data).length ? data : initialSiteSettings
  } catch {
    return initialSiteSettings
  }
}

export async function fetchFaqs() {
  try {
    const { data } = await api.get('/faqs')
    const list = collection(data, 'faqs')
    return list.length ? list : initialFaqs
  } catch {
    return initialFaqs
  }
}

export async function fetchPackages() {
  try {
    const { data } = await api.get('/packages')
    const list = collection(data, 'packages')
    return list.length ? list : initialPackages
  } catch {
    return initialPackages
  }
}

export async function fetchTeam() {
  try {
    const { data } = await api.get('/team')
    const list = collection(data, 'team')
    return list.length ? list : initialTeam
  } catch {
    return initialTeam
  }
}

export async function fetchCaseStudies() {
  try {
    const { data } = await api.get('/case-studies')
    const list = collection(data, 'caseStudies')
    return list.length ? list : initialCaseStudies
  } catch {
    return initialCaseStudies
  }
}

export async function fetchBlogPosts() {
  try {
    const { data } = await api.get('/blog')
    const list = collection(data, 'posts')
    return list.length ? list : initialBlogPosts
  } catch {
    return initialBlogPosts
  }
}

export async function fetchService(slug) {
  try {
    const { data } = await api.get(`/services/${encodeURIComponent(slug)}`)
    if (data && (data.id || data.title)) return data
  } catch {
    // fallback to local data
  }
  const found = initialServices.find((s) => s.slug === slug || s.id === slug)
  if (found) return found
  return initialServices[0]
}

export async function fetchBlogPost(slug) {
  try {
    const { data } = await api.get(`/blog/${encodeURIComponent(slug)}`)
    if (data && (data.id || data.title)) return data
  } catch {
    // fallback to local data
  }
  const found = initialBlogPosts.find((p) => p.slug === slug || p.id === slug)
  if (found) return found
  return initialBlogPosts[0]
}

export async function fetchPackage(id) {
  try {
    const { data } = await api.get(`/packages/${encodeURIComponent(id)}`)
    if (data && (data.id || data.name)) return data
  } catch {
    // fallback to local data
  }
  const found = initialPackages.find((p) => p.id === id)
  if (found) return found
  return initialPackages[1] // Default to Scale Engine
}

export async function submitInquiry(payload) {
  try {
    const { data } = await api.post('/inquiries', payload)
    return data
  } catch {
    // Save to local storage for demo/persistence
    const existing = JSON.parse(localStorage.getItem('northstar_inquiries') || '[]')
    const entry = { ...payload, id: `inq_${Date.now()}`, createdAt: new Date().toISOString() }
    existing.push(entry)
    localStorage.setItem('northstar_inquiries', JSON.stringify(existing))
    return { success: true, message: 'Inquiry received successfully', inquiry: entry }
  }
}

export async function submitBooking(payload) {
  try {
    const { data } = await api.post('/bookings', payload)
    return data
  } catch {
    // Save to local storage for demo/persistence
    const existing = JSON.parse(localStorage.getItem('northstar_bookings') || '[]')
    const entry = { ...payload, id: `book_${Date.now()}`, createdAt: new Date().toISOString() }
    existing.push(entry)
    localStorage.setItem('northstar_bookings', JSON.stringify(existing))
    return { success: true, message: 'Booking confirmed successfully', booking: entry }
  }
}
