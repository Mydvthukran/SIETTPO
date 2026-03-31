import React from 'react';

export default function Form() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <header className="relative w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 overflow-hidden">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-3/5">
              <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-xs font-bold tracking-widest uppercase mb-6">
                Category Tag
              </span>
              <h1 className="text-5xl md:text-6xl font-['DM_Serif_Display'] text-primary-container leading-tight mb-6">
                Main Form Heading&nbsp;<br />
                <span className="text-secondary italic">Subheading Text</span>
              </h1>
              <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed">
                Introductory description goes here. Provide a brief overview of what this form is for and any instructions the user might need before filling it out.
              </p>
            </div>
            <div className="md:w-2/5 w-full">
              <div className="bg-surface-container-highest p-8 rounded-3xl border border-white shadow-xl rotate-3">
                <div className="flex items-center gap-4 mb-4">
                  <span className="material-symbols-outlined text-secondary scale-125" style={{ fontVariationSettings: "'FILL' 1" }}>
                    stars
                  </span>
                  <span className="font-bold text-primary-container">Highlight Title</span>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  Important notice or highlight description text goes here to capture the user's attention.
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Generic Form */}
        <div className="max-w-5xl mx-auto px-6">
          <form action="#" className="space-y-12">
            {/* Section 1 */}
            <section className="bg-surface-container-lowest rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-10 border-b border-surface-container pb-6">
                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-xl">domain</span>
                </div>
                <h2 className="text-2xl font-bold text-primary-container">Section 1 Title</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Input Label 1</label>
                  <input className="soft-well h-12 px-4 rounded-t-lg focus:ring-0 text-primary-container font-medium" placeholder="Placeholder text..." type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Input Label 2</label>
                  <input className="soft-well h-12 px-4 rounded-t-lg focus:ring-0 text-primary-container font-medium" placeholder="Placeholder text..." type="url" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Dropdown Label</label>
                  <select className="soft-well h-12 px-4 rounded-t-lg focus:ring-0 text-primary-container font-medium appearance-none">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                    <option>Option 4</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Input Label 3</label>
                  <input className="soft-well h-12 px-4 rounded-t-lg focus:ring-0 text-primary-container font-medium" placeholder="Placeholder text..." type="text" />
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="bg-surface-container-lowest rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-10 border-b border-surface-container pb-6">
                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-xl">person</span>
                </div>
                <h2 className="text-2xl font-bold text-primary-container">Section 2 Title</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Input Label 1</label>
                  <input className="soft-well h-12 px-4 rounded-t-lg focus:ring-0 text-primary-container font-medium" placeholder="Placeholder text..." type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Input Label 2</label>
                  <input className="soft-well h-12 px-4 rounded-t-lg focus:ring-0 text-primary-container font-medium" placeholder="Placeholder text..." type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Email Label</label>
                  <input className="soft-well h-12 px-4 rounded-t-lg focus:ring-0 text-primary-container font-medium" placeholder="email@example.com" type="email" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Phone Label</label>
                  <input className="soft-well h-12 px-4 rounded-t-lg focus:ring-0 text-primary-container font-medium" placeholder="+1 XXXXX XXXXX" type="tel" />
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="bg-surface-container-lowest rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-10 border-b border-surface-container pb-6">
                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-xl">event_available</span>
                </div>
                <h2 className="text-2xl font-bold text-primary-container">Section 3 Title</h2>
              </div>
              <div className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Dropdown Label</label>
                    <select className="soft-well h-12 px-4 rounded-t-lg focus:ring-0 text-primary-container font-medium appearance-none">
                      <option>Option A</option>
                      <option>Option B</option>
                      <option>Option C</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Checkbox Group Label</label>
                    <div className="flex gap-4 h-12 items-center">
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary/20" type="checkbox" />
                        <span className="text-sm font-medium group-hover:text-secondary transition-colors">Checkbox 1</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer group">
                        <input className="w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary/20" type="checkbox" />
                        <span className="text-sm font-medium group-hover:text-secondary transition-colors">Checkbox 2</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Multi-select / Tags Label</label>
                  <div className="flex flex-wrap gap-3">
                    {['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'].map((tag, idx) => (
                      <button key={idx} className="px-6 py-2.5 rounded-full bg-primary-fixed text-on-primary-fixed text-sm font-bold border-2 border-transparent hover:border-secondary transition-all" type="button">
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="bg-surface-container-lowest rounded-2xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-outline-variant/10">
              <div className="flex items-center gap-3 mb-10 border-b border-surface-container pb-6">
                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-xl">upload_file</span>
                </div>
                <h2 className="text-2xl font-bold text-primary-container">Section 4 Title</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="flex flex-col gap-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Upload Area 1</label>
                  <div className="border-2 border-dashed border-outline-variant rounded-xl p-8 text-center hover:bg-surface-container-low transition-colors group cursor-pointer">
                    <span className="material-symbols-outlined text-4xl text-outline mb-2 group-hover:text-secondary transition-colors">cloud_upload</span>
                    <p className="text-sm font-medium text-on-surface-variant">Click to upload or drag &amp; drop</p>
                    <p className="text-[10px] text-outline mt-1 uppercase">FILE FORMAT, MAX SIZE</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Upload Area 2</label>
                  <div className="border-2 border-dashed border-outline-variant rounded-xl p-8 text-center hover:bg-surface-container-low transition-colors group cursor-pointer">
                    <span className="material-symbols-outlined text-4xl text-outline mb-2 group-hover:text-secondary transition-colors">description</span>
                    <p className="text-sm font-medium text-on-surface-variant">Click to upload or drag &amp; drop</p>
                    <p className="text-[10px] text-outline mt-1 uppercase">FILE FORMAT, MAX SIZE</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Submission Area */}
            <div className="flex flex-col items-center gap-6 pt-10">
              <div className="flex items-start gap-3 max-w-2xl">
                <input className="mt-1 w-5 h-5 rounded border-outline-variant text-secondary focus:ring-secondary/20" id="consent" type="checkbox" />
                <label className="text-sm text-on-surface-variant leading-relaxed" htmlFor="consent">
                  Agreement text goes here. The user must confirm this statement before being able to submit the form data successfully.
                </label>
              </div>
              <button className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-secondary to-secondary-container text-on-secondary font-bold text-lg rounded-full shadow-lg shadow-secondary/20 hover:scale-105 active:scale-95 transition-all" type="submit">
                Submit Form Button
              </button>
              <p className="text-sm text-slate-500">Post-submission informational text or expected response time.</p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}