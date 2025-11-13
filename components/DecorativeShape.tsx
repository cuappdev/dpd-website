interface DecorativeShapeProps {
  type: 'blob' | 'star' | 'star-small'
  color: 'purple' | 'orange' | 'red'
  className?: string
}

export default function DecorativeShape({ type, color, className = '' }: DecorativeShapeProps) {
  const colorClasses = {
    purple: 'text-purple-primary',
    orange: 'text-orange-primary',
    red: 'text-red-primary',
  }

  if (type === 'blob') {
    return (
      <svg
        className={`${colorClasses[color]} ${className}`}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40,80 C20,60 10,40 30,20 C50,10 70,15 90,25 C110,10 130,15 150,30 C170,45 180,65 170,85 C185,105 180,125 160,140 C145,160 125,175 100,170 C75,175 55,160 40,140 C25,120 25,100 40,80 Z"
          fill="currentColor"
          opacity="0.25"
        />
      </svg>
    )
  }

  if (type === 'star') {
    return (
      <svg
        className={`${colorClasses[color]} ${className}`}
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60,5 L70,40 L105,40 L75,60 L85,95 L60,75 L35,95 L45,60 L15,40 L50,40 Z"
          fill="currentColor"
          opacity="0.3"
        />
        <path
          d="M60,15 L68,42 L95,42 L72,58 L80,85 L60,70 L40,85 L48,58 L25,42 L52,42 Z"
          fill="currentColor"
          opacity="0.5"
        />
      </svg>
    )
  }

  // star-small
  return (
    <svg
      className={`${colorClasses[color]} ${className}`}
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25,2.5 L30,17.5 L45,17.5 L34,27.5 L39,42.5 L25,32.5 L11,42.5 L16,27.5 L5,17.5 L20,17.5 Z"
        fill="currentColor"
        opacity="0.4"
      />
    </svg>
  )
}

