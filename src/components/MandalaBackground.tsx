import mandalaImage from "@/assets/mandala-gold.png";

const MandalaBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Primary centered mandala with golden glow */}
      <div 
        className="absolute top-1/2 left-1/2 w-[100vw] max-w-[1600px] aspect-square animate-mandala-spin"
        style={{ 
          filter: 'drop-shadow(0 0 80px rgba(212, 175, 55, 0.2)) drop-shadow(0 0 40px rgba(212, 175, 55, 0.15))',
        }}
      >
        <img
          src={mandalaImage}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain opacity-[0.08]"
        />
      </div>
      
      {/* Secondary mandala - top right, counter-rotating */}
      <div 
        className="absolute top-[5%] right-[-20%] w-[60vw] max-w-[700px] aspect-square animate-mandala-spin-reverse"
        style={{ 
          filter: 'drop-shadow(0 0 40px rgba(212, 175, 55, 0.1))',
        }}
      >
        <img
          src={mandalaImage}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain opacity-[0.05]"
        />
      </div>
      
      {/* Tertiary mandala - bottom left */}
      <div 
        className="absolute bottom-[-15%] left-[-15%] w-[70vw] max-w-[800px] aspect-square animate-mandala-spin"
        style={{ 
          filter: 'drop-shadow(0 0 50px rgba(212, 175, 55, 0.12))',
          animationDelay: '-50s',
        }}
      >
        <img
          src={mandalaImage}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-contain opacity-[0.06]"
        />
      </div>
    </div>
  );
};

export default MandalaBackground;
