import { useEffect, useState, useRef, useMemo } from 'react'
import { motion } from 'framer-motion'

export default function DecryptedText({
  text,
  speed = 100,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = '01',
  className = 'text-black dark:text-white',
  parentClassName = '',
  encryptedClassName = 'text-gray-400 dark:text-gray-600',
  animateOn = 'load',
  variant = 'default',
  ...props
}) {
  const [displayText, setDisplayText] = useState(text)
  const [isHovering, setIsHovering] = useState(false)
  const [isScrambling, setIsScrambling] = useState(false)
  const [revealedIndices, setRevealedIndices] = useState(new Set())
  const [hasAnimated, setHasAnimated] = useState(false)
  const containerRef = useRef(null)

  // Automatically start animation on load
  useEffect(() => {
    if (animateOn === 'load' && !hasAnimated) {
      setIsHovering(true)
      setHasAnimated(true)
    }
  }, [animateOn, hasAnimated])

  // Memoize available characters to prevent unnecessary re-renders
  const availableChars = useMemo(() => {
    return useOriginalCharsOnly
      ? Array.from(new Set(text.split(''))).filter((char) => char !== ' ')
      : characters.split('')
  }, [text, characters, useOriginalCharsOnly])

  // Variant-based styling
  const variantStyles = useMemo(() => {
    switch (variant) {
      case 'glitch':
        return {
          parent: 'relative overflow-hidden',
          encrypted: 'opacity-50 transform scale-110 blur-sm',
          revealed: 'transition-all duration-300 ease-in-out'
        }
      case 'neon':
        return {
          parent: 'text-shadow-neon',
          encrypted: 'text-blue-400 opacity-50',
          revealed: 'text-blue-600 dark:text-blue-300'
        }
      case 'matrix':
        return {
          parent: 'text-green-600 dark:text-green-400',
          encrypted: 'text-green-300 dark:text-green-700 opacity-50',
          revealed: 'text-green-800 dark:text-green-200'
        }
      default:
        return {
          parent: '',
          encrypted: encryptedClassName,
          revealed: className
        }
    }
  }, [variant, className, encryptedClassName])

  useEffect(() => {
    let interval
    let currentIteration = 0

    const getNextIndex = (revealedSet) => {
      const textLength = text.length
      switch (revealDirection) {
        case 'start':
          return revealedSet.size
        case 'end':
          return textLength - 1 - revealedSet.size
        case 'center': {
          const middle = Math.floor(textLength / 2)
          const offset = Math.floor(revealedSet.size / 2)
          const nextIndex =
            revealedSet.size % 2 === 0
              ? middle + offset
              : middle - offset - 1

          if (nextIndex >= 0 && nextIndex < textLength && !revealedSet.has(nextIndex)) {
            return nextIndex
          }
          for (let i = 0; i < textLength; i++) {
            if (!revealedSet.has(i)) return i
          }
          return 0
        }
        default:
          return revealedSet.size
      }
    }

    const shuffleText = (originalText, currentRevealed) => {
      if (useOriginalCharsOnly) {
        const positions = originalText.split('').map((char, i) => ({
          char,
          isSpace: char === ' ',
          index: i,
          isRevealed: currentRevealed.has(i),
        }))

        const nonSpaceChars = positions
          .filter((p) => !p.isSpace && !p.isRevealed)
          .map((p) => p.char)

        for (let i = nonSpaceChars.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1))
          ;[nonSpaceChars[i], nonSpaceChars[j]] = [nonSpaceChars[j], nonSpaceChars[i]]
        }

        let charIndex = 0
        return positions
          .map((p) => {
            if (p.isSpace) return ' '
            if (p.isRevealed) return originalText[p.index]
            return nonSpaceChars[charIndex++]
          })
          .join('')
      } else {
        return originalText
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (currentRevealed.has(i)) return originalText[i]
            return availableChars[Math.floor(Math.random() * availableChars.length)]
          })
          .join('')
      }
    }

    if (isHovering) {
      setIsScrambling(true)
      interval = setInterval(() => {
        setRevealedIndices((prevRevealed) => {
          if (sequential) {
            if (prevRevealed.size < text.length) {
              const nextIndex = getNextIndex(prevRevealed)
              const newRevealed = new Set(prevRevealed)
              newRevealed.add(nextIndex)
              setDisplayText(shuffleText(text, newRevealed))
              return newRevealed
            } else {
              clearInterval(interval)
              setIsScrambling(false)
              return prevRevealed
            }
          } else {
            setDisplayText(shuffleText(text, prevRevealed))
            currentIteration++
            if (currentIteration >= maxIterations) {
              clearInterval(interval)
              setIsScrambling(false)
              setDisplayText(text)
            }
            return prevRevealed
          }
        })
      }, speed)
    } else {
      setDisplayText(text)
      setRevealedIndices(new Set())
      setIsScrambling(false)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [
    isHovering,
    text,
    speed,
    maxIterations,
    sequential,
    revealDirection,
    availableChars,
    useOriginalCharsOnly,
  ])

  useEffect(() => {
    if (animateOn !== 'view') return

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsHovering(true)
          setHasAnimated(true)
        }
      })
    }

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const currentRef = containerRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [animateOn, hasAnimated])

  const hoverProps =
    animateOn === 'load' || animateOn === 'hover'
      ? {
          onMouseEnter: () => {
            if (animateOn === 'hover') {
              setIsHovering(true)
            }
          },
          onMouseLeave: () => {
            if (animateOn === 'hover') {
              setIsHovering(false)
            }
          },
        }
      : {}

  return (
    <motion.span
      ref={containerRef}
      className={`inline-block whitespace-pre-wrap ${variantStyles.parent} ${parentClassName}`}
      {...hoverProps}
      {...props}
    >
      <span className="sr-only">{displayText}</span>

      <span aria-hidden="true">
        {displayText.split('').map((char, index) => {
          const isRevealedOrDone =
            revealedIndices.has(index) || !isScrambling || !isHovering

          return (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: isRevealedOrDone ? 1 : 0.7, 
                scale: isRevealedOrDone ? 1 : 0.9 
              }}
              transition={{ 
                duration: 0.3, 
                type: 'spring', 
                stiffness: 300 
              }}
              className={isRevealedOrDone 
                ? `${variantStyles.revealed} ${className}` 
                : `${variantStyles.encrypted} ${encryptedClassName}`}
            >
              {char}
            </motion.span>
          )
        })}
      </span>
    </motion.span>
  )
} 