import { motion } from "framer-motion";

// ============================================
// HERO SKELETON
// ============================================
export function HeroSkeleton() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 md:px-6 overflow-hidden bg-black">
      <div className="relative z-10 max-w-4xl w-full text-center px-2 md:px-4">
        {/* Badge */}
        <div className="inline-block mb-4 md:mb-6">
          <div className="w-48 h-10 bg-gray-800/50 rounded-full animate-pulse" />
        </div>

        {/* Name */}
        <div className="mb-4 md:mb-6 flex justify-center">
          <div className="w-96 h-16 bg-gray-800/50 rounded-2xl animate-pulse" />
        </div>

        {/* Title */}
        <div className="mb-4 md:mb-6 flex justify-center">
          <div className="w-80 h-10 bg-gray-800/50 rounded-xl animate-pulse" />
        </div>

        {/* Description */}
        <div className="mb-8 md:mb-10 flex flex-col items-center gap-3">
          <div className="w-full max-w-2xl h-6 bg-gray-800/50 rounded-lg animate-pulse" />
          <div className="w-96 h-6 bg-gray-800/50 rounded-lg animate-pulse" />
        </div>

        {/* Buttons */}
        <div className="flex gap-3 md:gap-4 justify-center">
          <div className="w-40 h-14 bg-gray-800/50 rounded-full animate-pulse" />
          <div className="w-40 h-14 bg-gray-800/50 rounded-full animate-pulse" />
          <div className="w-40 h-14 bg-gray-800/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

// ============================================
// PROJECTS SKELETON
// ============================================
export function ProjectsSkeleton() {
  return (
    <section className="relative bg-black text-white py-16 md:py-24 px-4 md:px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="w-96 h-14 bg-gray-800/50 rounded-2xl mx-auto mb-4 animate-pulse" />
          <div className="w-64 h-6 bg-gray-800/50 rounded-lg mx-auto animate-pulse" />
        </div>

        {/* Counter */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-10 bg-gray-800/50 rounded-full animate-pulse" />
        </div>

        {/* Project Card */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="bg-gray-800/50 rounded-2xl md:rounded-3xl overflow-hidden" style={{ height: 400 }}>
            <div className="w-full h-full animate-pulse" />
          </div>

          {/* Info */}
          <div className="space-y-4 md:space-y-6">
            <div className="w-32 h-8 bg-gray-800/50 rounded-full animate-pulse" />
            <div className="w-full h-12 bg-gray-800/50 rounded-xl animate-pulse" />
            <div className="w-48 h-6 bg-gray-800/50 rounded-lg animate-pulse" />
            <div className="space-y-2">
              <div className="w-full h-4 bg-gray-800/50 rounded animate-pulse" />
              <div className="w-full h-4 bg-gray-800/50 rounded animate-pulse" />
              <div className="w-3/4 h-4 bg-gray-800/50 rounded animate-pulse" />
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-20 h-8 bg-gray-800/50 rounded-xl animate-pulse" />
              ))}
            </div>
            <div className="flex gap-3 md:gap-4">
              <div className="w-36 h-12 bg-gray-800/50 rounded-xl animate-pulse" />
              <div className="w-36 h-12 bg-gray-800/50 rounded-xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// EXPERIENCE SKELETON
// ============================================
export function ExperienceSkeleton() {
  return (
    <section className="relative bg-black text-white py-24 px-6">
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="w-80 h-14 bg-gray-800/50 rounded-2xl mx-auto mb-4 animate-pulse" />
          <div className="w-64 h-6 bg-gray-800/50 rounded-lg mx-auto animate-pulse" />
        </div>

        {/* Timeline */}
        <div className="space-y-24">
          {[1, 2, 3].map((i) => (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {i % 2 === 0 && <div className="hidden md:block" />}
              <div className="bg-gray-800/50 rounded-2xl p-8 space-y-4 animate-pulse">
                <div className="w-48 h-8 bg-gray-700/50 rounded-full" />
                <div className="w-full h-8 bg-gray-700/50 rounded-xl" />
                <div className="w-64 h-6 bg-gray-700/50 rounded-lg" />
                <div className="space-y-2">
                  <div className="w-full h-4 bg-gray-700/50 rounded" />
                  <div className="w-full h-4 bg-gray-700/50 rounded" />
                  <div className="w-3/4 h-4 bg-gray-700/50 rounded" />
                </div>
              </div>
              {i % 2 !== 0 && <div className="hidden md:block" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// ABOUT SKELETON
// ============================================
export function AboutSkeleton() {
  return (
    <section className="relative bg-black text-white py-20 md:py-28 px-4 md:px-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="w-80 h-14 bg-gray-800/50 rounded-2xl mx-auto mb-4 animate-pulse" />
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16">
          {/* Left */}
          <div className="space-y-10">
            <div className="bg-gray-800/50 rounded-2xl p-4 sm:p-6 space-y-4 animate-pulse">
              <div className="w-40 h-8 bg-gray-700/50 rounded-xl" />
              <div className="space-y-2">
                <div className="w-full h-4 bg-gray-700/50 rounded" />
                <div className="w-full h-4 bg-gray-700/50 rounded" />
                <div className="w-3/4 h-4 bg-gray-700/50 rounded" />
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-2xl p-4 sm:p-6 animate-pulse" style={{ height: 400 }} />
          </div>

          {/* Right */}
          <div className="space-y-10">
            <div className="bg-gray-800/50 rounded-2xl p-4 sm:p-6 space-y-6 animate-pulse" style={{ height: 300 }} />
            <div className="bg-gray-800/50 rounded-2xl p-4 sm:p-6 space-y-6 animate-pulse" style={{ height: 300 }} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SKILLS SKELETON
// ============================================
export function SkillsSkeleton() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto mb-6 sm:mb-8">
        <div className="w-48 h-12 bg-gray-800/50 rounded-2xl mb-3 animate-pulse" />
        <div className="w-96 h-6 bg-gray-800/50 rounded-lg animate-pulse" />
      </div>

      <div
        className="relative w-full max-w-7xl mx-auto bg-slate-800/50 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm border border-slate-700/50"
        style={{ height: "400px", minHeight: "400px" }}
      >
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="absolute rounded-xl sm:rounded-2xl bg-gray-700/50 animate-pulse"
            style={{
              width: 100,
              height: 100,
              left: `${(i * 15) % 80}%`,
              top: `${(i * 25) % 70}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}