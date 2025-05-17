import { useCallback, useEffect, useState } from 'react'

type UseClipboardProps = {
  timeout?: number
}

export const useClipboard = ({ timeout = 2000 }: UseClipboardProps) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = useCallback(async (text: string) => {
    if (!navigator?.clipboard) {
      console.error('Clipboard not supported')
      return false
    }

    try {
      await navigator.clipboard.writeText(text)
      setIsCopied(true)
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }, [])

  useEffect(() => {
    if (isCopied) {
      const timeoutId = setTimeout(() => {
        setIsCopied(false)
      }, timeout)

      return () => clearTimeout(timeoutId)
    }
  }, [isCopied, timeout])

  return {
    handleCopy,
    isCopied,
  }
}
