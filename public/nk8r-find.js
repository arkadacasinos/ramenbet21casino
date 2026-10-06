(function () {
  var form = document.querySelector("[data-nk8r-find]")
  if (!form) return
  var input = form.querySelector("input")
  var status = form.querySelector("[data-nk8r-status]")
  var tags = Array.prototype.slice.call(document.querySelectorAll("[data-nk8r-tag]"))

  function norm(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/\s+/g, " ")
      .trim()
  }

  function apply() {
    var query = norm(input.value)
    var first = null
    var count = 0
    tags.forEach(function (tag) {
      var hay = norm(tag.getAttribute("data-nk8r-tag") + " " + tag.textContent)
      var hit = !query || hay.indexOf(query) !== -1
      tag.hidden = Boolean(query) && !hit
      if (hit) {
        count += 1
        if (!first) first = tag
      }
    })
    if (status) {
      status.textContent = query
        ? count
          ? "Нашли на странице: " + count
          : "На этой странице такой фразы нет"
        : ""
    }
    return first
  }

  function go(event) {
    if (event && (event.isComposing || event.keyCode === 229)) return
    if (event) event.preventDefault()
    var first = apply()
    if (!first) return
    var node = document.querySelector(first.getAttribute("href"))
    if (node && node.scrollIntoView) {
      node.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  input.addEventListener("input", apply)
  input.addEventListener("keydown", function (event) {
    if (event.isComposing || event.keyCode === 229) return
    if (event.key !== "Enter") return
    go(event)
  })
  form.addEventListener("submit", go)
})()
