import { useRef } from 'react'

export function useOtpInput(length: number = 6) {
  const inputRefs = useRef<HTMLInputElement[]>([])

  function setRef(element: HTMLInputElement | null, index: number): void {
    if (element) inputRefs.current[index] = element
  }

  function focusNext(currentIndex: number): void {
    const isLastInput = currentIndex >= length - 1
    if (!isLastInput) inputRefs.current[currentIndex + 1].focus()
  }

  function focusPrevious(currentIndex: number): void {
    const isFirstInput = currentIndex <= 0
    if (!isFirstInput) inputRefs.current[currentIndex - 1].focus()
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>, index: number): void {
    const onlyNumbers = event.target.value.replace(/\D/g, '')
    event.target.value = onlyNumbers.slice(-1)

    const hasValue = !!onlyNumbers
    if (hasValue) focusNext(index)
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>, index: number): void {
    const isBackspace = event.key === 'Backspace'
    const isEmpty = !event.currentTarget.value

    if (isBackspace && isEmpty) focusPrevious(index)
  }

  function handlePaste(event: React.ClipboardEvent<HTMLInputElement>): void {
    event.preventDefault()

    const pastedText = event.clipboardData.getData('text')
    const onlyNumbers = pastedText.replace(/\D/g, '').slice(0, length)

    onlyNumbers.split('').forEach((digit: string, index: number) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = digit
      }
    })

    const lastFilledIndex = Math.min(onlyNumbers.length, length - 1)
    inputRefs.current[lastFilledIndex].focus()
  }

  return { setRef, handleChange, handleKeyDown, handlePaste }
}