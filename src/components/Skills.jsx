import React, { useRef, useEffect } from 'react';

const Skills = ({ skills, theme }) => {
  const trackRef = useRef(null);
  const wrapperRef = useRef(null);
  const dragState = useRef({ isDragging: false, startX: 0, cssOffset: 0 });

  useEffect(() => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track || !wrapper) return;

    function getAnimX() {
      const matrix = new WebKitCSSMatrix(window.getComputedStyle(track).transform);
      return matrix.m41;
    }

    function startDrag(clientX) {
      dragState.current.isDragging = true;
      dragState.current.startX = clientX;
      dragState.current.cssOffset = getAnimX();
      track.style.animation = 'none';
      track.style.transform = `translateX(${dragState.current.cssOffset}px)`;
    }

    function moveDrag(clientX) {
      if (!dragState.current.isDragging) return;
      const delta = clientX - dragState.current.startX;
      let newX = dragState.current.cssOffset + delta;
      const half = track.scrollWidth / 2;
      newX = ((newX % half) + half) % half - half;
      track.style.transform = `translateX(${newX}px)`;
    }

    function endDrag(clientX) {
      if (!dragState.current.isDragging) return;
      dragState.current.isDragging = false;

      let finalX = dragState.current.cssOffset + (clientX - dragState.current.startX);
      const half = track.scrollWidth / 2;
      finalX = ((finalX % half) + half) % half - half;

      const delay = -(Math.abs(finalX) / half) * 25;
      track.style.transform = '';
      track.style.animationDelay = `${delay}s`;
      track.style.animation = '';
      requestAnimationFrame(() => {
        track.style.animation = `skillsScroll 25s linear ${delay}s infinite`;
      });
    }

    wrapper.addEventListener('mousedown', e => startDrag(e.clientX));
    window.addEventListener('mousemove', e => moveDrag(e.clientX));
    window.addEventListener('mouseup', e => endDrag(e.clientX));
    wrapper.addEventListener('touchstart', e => startDrag(e.touches[0].clientX), { passive: true });
    window.addEventListener('touchmove', e => { if (dragState.current.isDragging) moveDrag(e.touches[0].clientX); }, { passive: false });
    window.addEventListener('touchend', e => endDrag(e.changedTouches[0].clientX));

    return () => {
      window.removeEventListener('mousemove', moveDrag);
      window.removeEventListener('mouseup', endDrag);
    };
  }, []);

  const duplicated = [...skills, ...skills];

  return (
    <section id="skills" className={`relative z-10 py-32 border-y ${theme.border}`}>
      <style>{`
        @keyframes skillsScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .skills-track {
          animation: skillsScroll 30s linear infinite;
          display: flex;
          width: max-content;
        }
      `}</style>

      <h2 className="text-center text-white text-3xl font-black mb-20 tracking-widest uppercase italic">
        Skills
      </h2>

      <div className="max-w-[1400px] mx-auto px-5 md:px-20">
        <div
          ref={wrapperRef}
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div ref={trackRef} className="skills-track">
            {duplicated.map((s, i) => (
              <div key={`${s.name}-${i}`} className="flex flex-col items-center mx-8 md:mx-12 group flex-shrink-0">
                <div className={`w-20 h-20 md:w-24 md:h-24 rounded-full border ${theme.border} flex items-center justify-center text-3xl md:text-4xl text-white group-hover:text-emerald-500 group-hover:border-emerald-500 transition-colors duration-300`}>
                  {s.icon}
                </div>
                <span className="mt-4 text-[10px] md:text-[11px] font-black tracking-widest uppercase text-white/90">
                  {s.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;