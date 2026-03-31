import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PlacementBrochure() {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/pdfs/placement-brochure.pdf'
    link.download = 'SIET_Placement_Brochure_2024.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="bg-[#f8f9ff] font-['Inter'] text-[#0f1c2d] antialiased">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-[#0A1628]/80 backdrop-blur-xl border-b border-[#0A1628]/10 dark:border-white/10 shadow-sm dark:shadow-none">
        <div className="flex justify-between items-center h-16 px-8 max-w-full">
          <div className="flex items-center gap-8">
            <span className="text-xl font-bold tracking-tighter text-[#0A1628] dark:text-white">The Academic Curator</span>
            <nav className="hidden md:flex items-center gap-6">
              <a className="text-[#C9922A] border-b-2 border-[#C9922A] pb-1 font-['Inter'] font-medium tracking-tight hover:text-[#C9922A] transition-colors duration-300" href="#">Brochure</a>
              <a className="text-[#0A1628]/60 dark:text-white/60 font-['Inter'] font-medium tracking-tight hover:text-[#C9922A] transition-colors duration-300" href="#" onClick={(e) => { e.preventDefault(); navigate('/pdf-viewer?type=guidelines'); }}>Guidelines</a>
              <a className="text-[#0A1628]/60 dark:text-white/60 font-['Inter'] font-medium tracking-tight hover:text-[#C9922A] transition-colors duration-300" href="#" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex gap-2 mr-4">
              <button className="p-2 text-[#0A1628]/60 hover:text-[#C9922A] transition-colors" onClick={() => window.print()}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              </button>
            </div>
            <button
              onClick={handleDownload}
              className="bg-gradient-to-r from-[#7e5700] to-[#ffc256] text-white px-6 py-2 rounded-full font-medium shadow-sm hover:scale-95 active:opacity-80 transition-transform flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <button
              onClick={() => navigate('/')}
              className="group flex items-center gap-2 text-[#101c2e] hover:text-[#7e5700] transition-colors mb-4"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="text-sm font-semibold tracking-wide">BACK TO DASHBOARD</span>
            </button>
            <h1 className="text-4xl md:text-5xl font-['DM_Serif_Display'] text-[#101c2e] leading-tight mb-4">
              Placement Cell <span className="text-[#7e5700] italic">Brochure 2024-25</span>
            </h1>
            <p className="text-[#45474c] text-lg max-w-xl">
              Comprehensive overview of our placement procedures, industry partnerships, and recruitment opportunities for the academic session.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#e6eeff] p-4 rounded-xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#7e5700]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[0.6875rem] font-bold tracking-widest text-[#101c2e] uppercase">Edition Status</p>
                <p className="font-bold text-[#101c2e]">2024-25 Final</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* PDF Viewer Mockup */}
          <div className="lg:col-span-8">
            <div className="bg-[#dde9ff] rounded-2xl p-4 md:p-8 min-h-[800px] flex flex-col items-center relative overflow-hidden" style={{ boxShadow: '0 16px 32px -8px rgba(15, 28, 45, 0.12)' }}>
              {/* PDF Controls Bar */}
              <div className="w-full bg-[#101c2e]/90 backdrop-blur-md rounded-lg p-3 mb-8 flex justify-between items-center text-white/90">
                <div className="flex items-center gap-4">
                  <svg className="w-5 h-5 cursor-pointer hover:text-[#C9922A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  <span className="text-sm font-medium">Placement_Brochure_2024.pdf</span>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                    </svg>
                    <span className="text-xs bg-white/10 px-3 py-1 rounded">125%</span>
                    <svg className="w-4 h-4 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <div className="h-4 w-[1px] bg-white/20"></div>
                  <span className="text-xs">Page 1 / 32</span>
                </div>
              </div>

              {/* PDF Content Placeholder */}
              <div className="w-full max-w-2xl bg-white shadow-2xl aspect-[1/1.414] p-16 flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-12">
                  <img
                    alt="Institutional Seal"
                    className="w-full h-full object-contain opacity-80"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUw-RbXh3NKm4cbuAr4832pGJHR-Zv0adD60uRssRUrwBs9QkVluLFA5dp5yleLpZGhi4CqZ117IHexeQreA-EJ4tYtfMt1GHtazEaF2RWBZVihg30Q5iUSCQG8F7eeLkrHq7Px0U6M7IPBJb3a2Geu7YuuiU0SrQWAbtsQVeYrG7S-AJlPZyWdLnAX-Fdw0yKCyZ1EvzbW-ZCJA75sSjI72mhQGHLAgKbz63l1DniMSd--QPPLpy7HkcD4X1KCVBaAYd0v1WB6kF0"
                  />
                </div>
                <h2 className="font-['DM_Serif_Display'] text-3xl text-[#0A1628] mb-2">
                  State Institute of Engineering &amp; Technology
                </h2>
                <p className="text-sm tracking-[0.2em] text-[#C9922A] font-bold mb-12">PANCHKULA, HARYANA</p>
                <div className="w-16 h-1 bg-[#C9922A] mb-12"></div>
                <h3 className="text-5xl font-bold tracking-tighter text-[#0A1628] mb-6">
                  PLACEMENT<br/>BROCHURE
                </h3>
                <p className="text-[#45474c] font-medium mb-24">Academic Session 2024 - 2025</p>
                <div className="mt-auto pt-12 border-t border-[#c5c6cd]/30 w-full text-xs text-[#45474c]/60 uppercase tracking-widest">
                  For Recruiting Companies • Industry Partners
                </div>
              </div>

              {/* Subtle Gradient Overlays for "Depth" */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#0A1628]/5"></div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Summary Bento Card */}
            <div className="bg-white rounded-2xl p-8 border border-[#c5c6cd]/10 shadow-sm">
              <h4 className="text-[0.6875rem] font-bold tracking-widest text-[#7e5700] uppercase mb-6">Key Highlights</h4>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[#7e5700] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                  </svg>
                  <div>
                    <h5 className="font-bold text-[#101c2e] text-sm">500+ Students</h5>
                    <p className="text-xs text-[#45474c] leading-relaxed mt-1">Graduating across Computer Science, Electronics, and Mechanical Engineering streams.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[#7e5700] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <div>
                    <h5 className="font-bold text-[#101c2e] text-sm">Industry Ready</h5>
                    <p className="text-xs text-[#45474c] leading-relaxed mt-1">Training in cutting-edge technologies with hands-on project experience.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <svg className="w-6 h-6 text-[#7e5700] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                  <div>
                    <h5 className="font-bold text-[#101c2e] text-sm">85%+ Placement Rate</h5>
                    <p className="text-xs text-[#45474c] leading-relaxed mt-1">Consistent track record with leading companies across diverse sectors.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline / Version History */}
            <div className="bg-[#101c2e] text-white rounded-2xl p-8 overflow-hidden relative">
              {/* Glassy Background Detail */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#7e5700]/20 rounded-full blur-3xl"></div>
              <h4 className="text-[0.6875rem] font-bold tracking-widest text-[#f9bc51] uppercase mb-6">Recruitment Timeline</h4>
              <div className="space-y-6 relative">
                <div className="absolute left-[11px] top-2 bottom-2 w-[1px] bg-white/10"></div>
                <div className="flex gap-6 relative">
                  <div className="w-6 h-6 rounded-full bg-[#C9922A] border-4 border-[#101c2e] z-10"></div>
                  <div>
                    <p className="text-xs font-bold text-white">September 2024</p>
                    <p className="text-[10px] text-white/50">Campus Drives Begin</p>
                  </div>
                </div>
                <div className="flex gap-6 relative">
                  <div className="w-6 h-6 rounded-full bg-white/20 border-4 border-[#101c2e] z-10"></div>
                  <div>
                    <p className="text-xs font-bold text-white/80">December 2024</p>
                    <p className="text-[10px] text-white/50">Peak Recruitment Phase</p>
                  </div>
                </div>
                <div className="flex gap-6 relative">
                  <div className="w-6 h-6 rounded-full bg-white/20 border-4 border-[#101c2e] z-10"></div>
                  <div>
                    <p className="text-xs font-bold text-white/80">March 2025</p>
                    <p className="text-[10px] text-white/50">Final Placements Close</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action */}
            <div className="bg-[#eff3ff] rounded-2xl p-8 text-center">
              <p className="text-sm text-[#45474c] mb-4 italic">Interested in recruiting from SIET?</p>
              <button className="w-full py-3 rounded-full border border-[#7e5700] text-[#7e5700] font-bold text-sm hover:bg-[#7e5700] hover:text-white transition-all">
                Contact TPC Office
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Information */}
      <footer className="bg-white border-t border-[#c5c6cd]/10 py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <img
              alt="Mini Logo"
              className="w-8 h-8 opacity-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi12JLvkcDkQ15mwHH9t6aKcvbbZI05RVPFmVuUGzNr7rj1-El1PjAIwEt44UVnnPfZldhc2ofYTxMjC59UOKA6kbDX5YTUBsWSmEqsCn3DMlS83qEqMNvRpQVVGOfKaLQs-KlYmW7SYDv1kHz7BLS4BOQ1VPR_vS1kEDB6buvq54SHyun-tbn7c-ps7G8EBrxOIE36pAm6rkyWdPOiGDenZVVXM-2jdP6Fwk-LWa4XjwAccVSgMCpMfgRNDaz6uSqOTunYdjtR1TJ"
            />
            <p className="text-xs text-[#45474c]/60 font-medium tracking-tight">© 2024 SIET Panchkula Career Services. All Rights Reserved.</p>
          </div>
          <div className="flex gap-8">
            <a className="text-xs font-bold tracking-widest text-[#101c2e] hover:text-[#7e5700] transition-colors uppercase" href="#">Privacy Policy</a>
            <a className="text-xs font-bold tracking-widest text-[#101c2e] hover:text-[#7e5700] transition-colors uppercase" href="#">Support Center</a>
            <a className="text-xs font-bold tracking-widest text-[#101c2e] hover:text-[#7e5700] transition-colors uppercase" href="#">Legal Disclosure</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
