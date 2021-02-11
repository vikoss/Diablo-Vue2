import Vue from 'vue'

Vue.directive('focus', {
  inserted(el) {
    el.focus()
  },
})

Vue.directive('diablo', {
  bind(el, binding) {
    const color = { bone: '#e8dcc2', white: '#ffffff' }
    // Always font family 'DiabloHeavy'
    el.style.fontFamily = 'DiabloHeavy, sans-serif'

    // If argument is 'bone' the color bone else white
    el.style.color = binding.arg === 'bone' ? color.bone : color.white

    // Check for modifiers
    if (Object.keys(binding.modifiers).length > 0) {
      const value = binding.value || 1
      const borderExp = `${value}px solid ${el.style.color}`
      // If modifier is 'bottom'
      if (binding.modifiers.bottom) {
        el.style.borderBottom = borderExp
        el.style.paddingBottom = '10px'
      }
      // If modifier is 'top'
      if (binding.modifiers.top) {
        el.style.borderTop = borderExp
        el.style.paddingTop = '10px'
      }
    }
  },
})