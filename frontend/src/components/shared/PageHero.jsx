export default function PageHero({ eyebrow, title, children, rightVisual }) {
  return (
    <section className="page-intro shell">
      <div className="page-intro-line">
        <p className="kicker">{eyebrow}</p>
      </div>
      {rightVisual ? (
        <div className="page-intro-split">
          <div className="page-intro-content">
            <h1>{title}</h1>
            {children && <p className="lede">{children}</p>}
          </div>
          <div className="page-intro-visual-col">
            {rightVisual}
          </div>
        </div>
      ) : (
        <>
          <h1>{title}</h1>
          {children && <p className="lede">{children}</p>}
        </>
      )}
      <div className="page-intro-rule" />
    </section>
  )
}
