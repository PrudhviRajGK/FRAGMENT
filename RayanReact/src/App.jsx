import { useState } from 'react'

const rawApiBase = import.meta.env.VITE_API_BASE_URL || ''
const API_BASE = rawApiBase.replace(/\/$/, '')
const buildUrl = (path) => `${API_BASE}${path}`

const durationOptions = [
  { label: 'Short (30-60s)', value: 45 },
  { label: 'Standard (2-3m)', value: 150 },
  { label: 'Detailed (5-10m)', value: 300 },
]

const navigationItems = [
  { label: 'Dashboard', href: '#top', active: true },
  { label: 'Projects', href: '#generator' },
  { label: 'Templates', href: '#assets' },
  { label: 'Assets', href: '#assets' },
]

const heroMetrics = [
  { value: '12', label: 'Active renders' },
  { value: '04:20', label: 'Avg export time' },
  { value: '4.8K', label: 'Licensed assets' },
]

const pipelineStages = [
  { label: 'Script', icon: 'description', state: 'complete' },
  { label: 'Image', icon: 'image', state: 'complete' },
  { label: 'Voice', icon: 'mic', state: 'complete' },
  { label: 'Subtitles', icon: 'subtitles', state: 'active', progress: '67%' },
  { label: 'Assembly', icon: 'inventory_2', state: 'pending' },
]

const activityItems = [
  {
    title: 'Cell Mitosis Deep Dive',
    subtitle: 'Completed 2m ago',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCRI43RDg--jMxWOUT9EidIZPUUg8F_Nf70AA5ZpEWO1BTw1S6ZbY1O4F42NlB62TwsICJyluIfAV7XPURrBdnVqllASA3hK2u73QjSmJor8yD9uK8oJKBto5cT7uwQQhmhnXhVQgQAq8NkglT7jBx20SIGSQQLo0kkTHT9rNEz0WjQY5H6vg6TlvK67RS3UhDIjhSam5IrEbYXjjiTuqJ26adx4TXabo7D_AkqZk9s35ZLyOSQmI4wTjEqUTg3fMpUaGrNxf9z1gY',
    icon: 'check_circle',
    tone: 'complete',
  },
  {
    title: 'Black Hole Thermodynamics',
    subtitle: 'Rendering 85%',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAnWYFJ_rh_jF9-e8dqNDHVIYM3qci4s6Kv9j5e4dE6rDOQEjOFiqgj_CaoS6hvaIalfgAIqtG1S3s9zl_XGFGQhQ5vcWk2K8SQvHjjuNhNoylHK6WE50OVt3mvYh5UYzdhGSVFAHgJKjh-9UgqzQZDI4KU-qEIeWgwHZBUMeuEkMD7DDTr2YaPILqYRn3H-7CleEy4hCpCBbodypQtO5FPmM4RPREaiZn0WJU2J2JuXjXSaZU6DR8528cxRF7crvoGB-0Eh7Ej3XY',
    icon: 'hourglass_empty',
    tone: 'active',
  },
  {
    title: 'Modernist Architecture',
    subtitle: 'Queued 1 hour ago',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAJO3DJb-odvNvkhDgvZ2iVvqhU_tBZX7NXbebg8EINOgdJq4tzR3r52PtgiLNJRyZqjdw44zaEneSpkJoTZXSy036Wh-jXTNNc-WqJh7gbs_bAUTkjqkp8_FNIWwD_2euqX93oTppqH3C892vxR1VLABtwXoL6j7Pgnvom2Nron00Xxjdf6vjrWM7dXw-2Lfg-3sDzcic975vzxd8Irv_gD8LR-1iv1WCU-uUDv1vV-xbL-B74IAFFAqp2CU1mIMq33qSkhKhQDZQ',
    icon: 'visibility',
    tone: 'muted',
  },
]

const assetItems = [
  {
    title: 'The Fibonacci Sequence',
    meta: 'Mathematics / HD 1080p',
    duration: '02:45',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC4GEi2JUoKQjMBNWnMf1VxbsGKp1RlvlHALZBjZLqoorpmNPVsol5UuVG18Uu3L3Z6Nd15JbB3H9LzZH7YIhLpECNOJnQqswNzZfLs0xLSrQYgnI-CIBVssuWGpBiSbaHE4gCArQtwc9BSgWxJRQuciRnxQg5mExcw4mG7um1C2sMoHVDPSio4un-7Lk2AZnh3V_hrNrH9S-N00BOCuSAZoXsY6auDkYJuIutDIpIJx5tRUBfO0o_Ie7eCeYQ57l0T4_mAS9m-dqE',
  },
  {
    title: 'AI Neural Structures',
    meta: 'Technology / 4K UHD',
    duration: '01:12',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBuVCpAGsj9HsNW6S5qdt2ZzbRsEfMZ2DoUrTne6A49llcQlkKU6UVGOUul99Ib3Iqz1g-lp8W4uS1bLtIEsQyV7r1ssZib512uoej44gvWZ-8tWN9GDYZIlyLQ7N13QxO_JaeZPXYVxFUyeb-lK0ugqHlO7OQxIE27mw757DNCXI9dxaiUAIpk80wA2akhpPKYhvHifUSnwt3dvLoDEcijuR9-hFFnR9qwgj0PbI_S0au3Yp6V0cGA7ZEr6Pzql7LwbVU64xz3I0w',
  },
  {
    title: 'Roman Architecture',
    meta: 'History / HD 1080p',
    duration: '05:20',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuABCB8aEy50bHE0138BQBmx-aBAxn-0Ioxc3uA8-tIrmtsaBp3QISZfWQpIIrqmmIuKHLsmy3g9axLX7L34lJyCwdxtXMf0xIMq5jhHB7YmO_GBgtmeLgh2SFtTCoMhR-UQBbg0c_dYUAjlzwK0iG2L9BfqKRUpN30Bs2eemtQEUSkWxNmT1B8Z_yHhtHUZ1Q1MMey4MLAfRHVgo3vGTZXPnqIZ6mXOD3tZfpHo3UmdDS4_Zqf440LsjLmq3dlmx9ihw0PSlzXBYI0',
  },
  {
    title: 'Global Economics 2024',
    meta: 'Finance / 4K UHD',
    duration: '03:30',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCvkHvRBQzuTIAmVGCRDRI6JugPcojSY8NchI8k6Q30NeaGjjPeXf5DKKis9bDsm_0LbpRX7GyKaAdNDzTwFgQZZXWuaHH1zqWkHrLg20zT_mG6QIxGCZbeqLU43VxTs-Dnbnxm_z9tuP_XpQV62Fvvw4nkwDkJgg3Vf4gP1d8iMi4wC70mv_gdxexn2pifIUIQdNmUiY_H4mZEfOidcF-yJdsEpTeZ0O1GtEsm6wIn0J5jyl9MJrL5Df-CPKAjIZCACwqQaER-670',
  },
]

const footerLinks = ['Legal', 'Status', 'API Docs', 'Twitter']

function App() {
  const [topic, setTopic] = useState('')
  const [duration, setDuration] = useState(durationOptions[0].value)
  const [keyPoints, setKeyPoints] = useState('')
  const [status, setStatus] = useState({ message: '', type: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const trimmedTopic = topic.trim()
    if (!trimmedTopic) {
      setStatus({ message: 'Topic is required.', type: 'error' })
      return
    }

    const points = keyPoints
      .split('\n')
      .map((point) => point.trim())
      .filter(Boolean)

    const payload = {
      topic: trimmedTopic,
      duration,
      key_points: points,
      style: 'educational',
    }

    setIsSubmitting(true)
    setStatus({ message: 'Generation started. This can take a few minutes.', type: 'info' })

    try {
      const response = await fetch(buildUrl('/api/v1/videos/generate'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await response.json().catch(() => ({}))

      if (response.ok && data?.success) {
        setStatus({ message: 'Video generation launched successfully.', type: 'success' })
        setTopic('')
        setKeyPoints('')
        setDuration(durationOptions[0].value)
      } else {
        const message = data?.error || data?.message || 'Failed to generate video.'
        setStatus({ message, type: 'error' })
      }
    } catch (error) {
      setStatus({ message: error?.message || 'Request failed.', type: 'error' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const statusClassName = ['status-banner', status.type ? `status-banner--${status.type}` : '']
    .filter(Boolean)
    .join(' ')

  return (
    <div className="app-shell" id="top">
      <header className="topbar">
        <div className="topbar__inner">
          <div className="topbar__brand-group">
            <a className="brand" href="#top">
              <span className="brand__mark">
                <span className="material-symbols-outlined">segment</span>
              </span>
              <span className="brand__text">
                FRAGMENT <em>AI</em>
              </span>
            </a>

            <nav className="nav-links" aria-label="Primary">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  className={item.active ? 'nav-links__item is-active' : 'nav-links__item'}
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="topbar__actions">
            <label className="search-field" htmlFor="global-search">
              <span className="material-symbols-outlined">search</span>
              <input id="global-search" placeholder="Search workflow..." type="text" />
            </label>

            <button className="button button--ghost button--small" type="button">
              Upgrade Pro
            </button>

            <button className="avatar-button" type="button" aria-label="Open profile">
              <img
                alt="User profile avatar"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUyboEDatglmBny8nq6fecEWqptFCfct3mkBHvLFfmHqYcG3z-zgPUmrKKSOSsymd5kOkm88lNeeNr8Y7OfnyR5ICBIC65XLSuNzQG-Z_mk8Bj0VyBUu0dRysa2gz89y4K0r4wGQxJ38bx5k4nN26xNP0imgRQub-n66Z5ODN3Np0wlmgMW336kV5Mn1h2PZC2spvbunYGtPeO2kxqPLKGP2s7qS5BDdb5hLWwxoWx4hzoQaKq1ahOOViTZCoxO6YdKOy-chyF5MU"
              />
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard">
        <section className="hero section-card section-card--hero">
          <div className="hero__copy">
            <div className="eyebrow">
              <span className="material-symbols-outlined">auto_awesome</span>
              <span>Next Gen Video Engine</span>
            </div>

            <h1 className="hero__title">
              True Power.
              <br />
              <span>AI Driven.</span>
            </h1>

            <p className="hero__text">
              Generate polished educational videos in minutes with a cinematic workspace for scripts,
              visuals, voice, and final assembly.
            </p>

            <div className="hero__actions">
              <a className="button button--primary" href="#generator">
                Start Creating
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <a className="button button--secondary" href="#assets">
                View Demo
              </a>
            </div>

            <div className="hero-metrics">
              {heroMetrics.map((metric) => (
                <div className="hero-metrics__card" key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero-preview">
              <div className="hero-preview__chrome">
                <span />
                <span />
                <span />
              </div>

              <div className="hero-preview__frame">
                <img
                  alt="Abstract cinematic dashboard preview"
                  className="hero-preview__image"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO5kGY3cN2LdgU28cmCcZNoVm4wApr8px0rKTP-NVGbD7TJCXduQqmRqmqk9MVRW702SnCQFKqgjQDPQxZ1JnD_xNZnCt1i2V0rZWFNMumcM1jXcTJtoQsrFwTO--8rkJt_tuRAogjo3H1O13jW4D2S67ThA-zxxE54hUFpqAEEyaFDY6SUqmYdm7wU17SaY40fMCJ6WKrKPA3n9czD-1-hQ10AMV82FSDE3NzKrc1X7Y4V3ZURcatXEIJ7hx7pQWkWmxcAOJ0lVA"
                />
                <div className="hero-preview__overlay" />
                <button className="play-button" type="button" aria-label="Play preview">
                  <span className="material-symbols-outlined">play_arrow</span>
                </button>
              </div>

              <div className="hero-preview__footer">
                <div>
                  <p>Onyx Render Core</p>
                  <strong>Live preview stream</strong>
                </div>
                <span className="hero-preview__badge">Render ETA 38s</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section-card pipeline-card">
          <div className="section-heading">
            <div>
              <span className="section-heading__eyebrow">Project Pipeline</span>
              <h2>Production flow</h2>
            </div>
            <span className="section-heading__status">85% rendering complete</span>
          </div>

          <div className="pipeline-grid">
            {pipelineStages.map((stage) => (
              <article
                className={`pipeline-stage pipeline-stage--${stage.state}`}
                key={stage.label}
              >
                <div className="pipeline-stage__track">
                  <span style={stage.progress ? { width: stage.progress } : undefined} />
                </div>
                <div className="pipeline-stage__body">
                  <span className="material-symbols-outlined">{stage.icon}</span>
                  <strong>{stage.label}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="workspace-grid">
          <form className="section-card panel panel--wide" id="generator" onSubmit={handleSubmit}>
            <div className="panel__header">
              <div>
                <span className="section-heading__eyebrow">Generation Panel</span>
                <h2>
                  <span className="material-symbols-outlined">psychology</span>
                  Compose your next video
                </h2>
              </div>
              <span className="engine-pill">v2.4 Onyx Engine</span>
            </div>

            <fieldset className="panel__body" disabled={isSubmitting}>
              <div className="form-grid">
                <label className="field">
                  <span>Video Topic</span>
                  <input
                    placeholder="e.g. Quantum Physics Explained"
                    type="text"
                    value={topic}
                    onChange={(event) => setTopic(event.target.value)}
                  />
                </label>

                <label className="field">
                  <span>Duration</span>
                  <select
                    value={duration}
                    onChange={(event) => setDuration(Number(event.target.value))}
                  >
                    {durationOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="field field--stacked">
                <span>Key Points and Context</span>
                <textarea
                  placeholder="Describe the core message, tone, and specific data points to include..."
                  rows="6"
                  value={keyPoints}
                  onChange={(event) => setKeyPoints(event.target.value)}
                />
              </label>

              <div className="panel__footer">
                <div className="system-pills">
                  <span className="system-pill">
                    <span className="system-pill__dot" />
                    GPU ready
                  </span>
                  <span className="system-pill">
                    <span className="material-symbols-outlined">database</span>
                    12.4 GB free
                  </span>
                  <span className="system-pill">
                    <span className="material-symbols-outlined">timer</span>
                    Avg export 04:20
                  </span>
                </div>

                <button className="button button--primary button--submit" type="submit">
                  {isSubmitting ? 'Generating...' : 'Generate Video'}
                </button>
              </div>

              {status.message ? (
                <p aria-live="polite" className={statusClassName}>
                  {status.message}
                </p>
              ) : null}
            </fieldset>
          </form>

          <aside className="section-card panel">
            <div className="panel__header">
              <div>
                <span className="section-heading__eyebrow">Activity</span>
                <h2>Recent renders</h2>
              </div>
              <span className="panel__meta">Sync live</span>
            </div>

            <div className="activity-list">
              {activityItems.map((item) => (
                <article className={`activity-card activity-card--${item.tone}`} key={item.title}>
                  <img alt={item.title} className="activity-card__image" src={item.image} />
                  <div className="activity-card__content">
                    <strong>{item.title}</strong>
                    <span>{item.subtitle}</span>
                  </div>
                  <span className="material-symbols-outlined activity-card__icon">{item.icon}</span>
                </article>
              ))}
            </div>

            <button className="button button--secondary button--block" type="button">
              View Full History
            </button>
          </aside>
        </section>

        <section className="section-card library-section" id="assets">
          <div className="section-heading">
            <div>
              <span className="section-heading__eyebrow">Cinematic Assets</span>
              <h2>
                <span className="material-symbols-outlined">video_library</span>
                Curated video library
              </h2>
            </div>

            <div className="view-toggle" aria-label="Asset views">
              <button className="view-toggle__button is-active" type="button" aria-label="Grid view">
                <span className="material-symbols-outlined">grid_view</span>
              </button>
              <button className="view-toggle__button" type="button" aria-label="List view">
                <span className="material-symbols-outlined">list</span>
              </button>
            </div>
          </div>

          <div className="asset-grid">
            {assetItems.map((asset) => (
              <article className="asset-card" key={asset.title}>
                <div className="asset-card__media">
                  <img alt={asset.title} src={asset.image} />
                  <div className="asset-card__overlay" />
                  <span className="asset-card__duration">{asset.duration}</span>
                  <button className="asset-card__play" type="button" aria-label={`Preview ${asset.title}`}>
                    <span className="material-symbols-outlined">play_arrow</span>
                  </button>
                </div>

                <div className="asset-card__body">
                  <div>
                    <strong>{asset.title}</strong>
                    <span>{asset.meta}</span>
                  </div>
                  <button className="asset-card__more" type="button" aria-label={`More options for ${asset.title}`}>
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <a className="brand brand--footer" href="#top">
            <span className="brand__mark">
              <span className="material-symbols-outlined">segment</span>
            </span>
            <span className="brand__text">
              FRAGMENT <em>AI</em>
            </span>
          </a>

          <div className="footer__links">
            {footerLinks.map((link) => (
              <a key={link} href="#top">
                {link}
              </a>
            ))}
          </div>

          <p className="footer__copy">(c) {new Date().getFullYear()} FRAGMENT AI. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
