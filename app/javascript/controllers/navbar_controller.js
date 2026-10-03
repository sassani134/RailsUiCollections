import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  static targets = ["menu", "button"]



  toggle() {
    this.menuTarget.classList.toggle("hidden")

    // Accessibilité
    const isExpanded = !this.menuTarget.classList.contains("hidden")
    this.buttonTarget.setAttribute("aria-expanded", isExpanded)
  }
}

