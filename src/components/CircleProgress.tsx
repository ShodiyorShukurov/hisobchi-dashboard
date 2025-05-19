const CircleProgress = ({ value = 75, amount = 12000000 }) => {
  const radius = 98;
  const stroke = 12;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex items-center justify-center mt-[24px]">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          stroke="#47DDC2" 
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Progress circle */}
        <circle
          stroke="#FF6393" 
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>

      {/* Text in the center */}
      <div className="absolute text-center">
        <div className="text-[20px] font-bold text-[#171725] leading-[100%]">
          +{amount.toLocaleString("ru-RU")}
        </div>
        <div className="text-[12px] leading-semibold text-[#171725]">UZS</div>
      </div>
    </div>
  );
};

export default CircleProgress;
