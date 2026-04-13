/**
 * SAVED SNIPPET: Wistia Video Section (Why Choose InsideOut)
 * 
 * To re-add this section, paste the JSX block below back into InsideOutHome.tsx
 * inside the Why Choose section container, between the 3-column cards grid
 * (after the closing </div> of the grid) and before the CTA button div.
 * 
 * Paste location in InsideOutHome.tsx:
 *   ... end of 3-column cards grid ...
 *   </div>   <-- closing tag of the grid div
 *
 *   [PASTE HERE]
 *
 *   <div className="text-center">  <-- CTA button
 */

// ─── JSX to paste back in ───────────────────────────────────────────────────

{/* Video Section Label */}
<div className="max-w-4xl mx-auto mb-6 text-center">
  {/* Badge */}
  <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5 shadow-md">
    <span>⭐</span>
    <span>Real Client Proof</span>
    <span>⭐</span>
  </div>

  {/* Main Headline */}
  <h3 className="font-serif text-3xl md:text-4xl font-bold text-blue-900 leading-tight mb-3">
    Watch Real Business Owners{" "}
    <span className="relative inline-block">
      <span className="relative z-10">React to InsideOut</span>
      <span
        className="absolute bottom-1 left-0 w-full h-3 bg-yellow-300 opacity-60 -z-0 rounded"
        style={{ transform: "skewX(-3deg)" }}
      />
    </span>{" "}
    in Real Time
  </h3>

  {/* Subtagline */}
  <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto mb-5">
    Unedited sales call clips + client testimonials — see exactly what they said, what changed, and why they'd do it again.
  </p>

  {/* Animated Arrow */}
  <div className="flex flex-col items-center gap-1">
    <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">Watch Below</span>
    <div className="flex flex-col items-center" style={{ animation: "bounce 1.5s infinite" }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-blue-700">
        <path d="M12 5v14M12 19l-5-5M12 19l5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-blue-400 -mt-2 opacity-60">
        <path d="M12 5v14M12 19l-5-5M12 19l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  </div>
</div>

{/* Wistia Video Embed */}
<div className="max-w-4xl mx-auto mb-12">
  <script src="https://fast.wistia.com/player.js" async></script>
  <script src="https://fast.wistia.com/embed/zhs1dip9av.js" async type="module"></script>
  <style>{`wistia-player[media-id='zhs1dip9av']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/zhs1dip9av/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }`}</style>
  {/* @ts-ignore */}
  <wistia-player media-id="zhs1dip9av" aspect="1.7777777777777777"></wistia-player>
</div>
