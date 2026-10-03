import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["track"]
  static values = {
    speed: { type: Number, default: 20 } // durée en secondes pour un cycle
  }

  connect() {
    this.play()
  }

  play() {
    this.trackTarget.style.animation = `marquee ${this.speedValue}s linear infinite`
  }

  pause() {
    this.trackTarget.style.animationPlayState = "paused"
  }

  // Relance l’animation (utile si tu changes la vitesse dynamiquement)
  restart() {
    this.trackTarget.style.animation = "none"
    // Force un reflow
    void this.trackTarget.offsetWidth
    this.play()
  }
}