export default e => {
  e = e || window.event
  const touch = (e.originalEvent && e.originalEvent.touches[0]) ||
    (e.originalEvent && e.originalEvent.changedTouches[0]) ||
    (e.touches && e.touches[0]) || { clientX: 0, clientY: 0 }
  // e.preventDefault()
  return touch
}