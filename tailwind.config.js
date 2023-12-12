/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      focus: {
        cursor: 'pointer',
        outline: 'none',
      },
      colors: {
        prime1: "#000",
        prime2: "#ffd700",
        primet: "#fff",
        primet2: "#CD7F32",

        borderColor: "#333333",
        //
        secondary1: "#1E1E1E",
        secondary2: "#CFB53B",
      }
    }
  }
}
// Primary Accent:
//
// Rich Gold (#FFD700) for primary buttons, call-to-action elements, or important highlights.
// Secondary Background:
//
// Matte Black (#1E1E1E) for softer backgrounds or areas with less focus.
// Secondary Accent:
//
// Antique Gold (#CFB53B) for secondary buttons or additional highlights.
// Borders and Dividers:
//
// Charcoal Gray (#333333) for borders, dividers, and other separating elements.
// Hover or Focus State:
//
// Consider using a slightly lighter or darker shade of gold or black to indicate interactive elements.
// Alerts or Notifications:
//
// Use contrasting colors, such as red or orange, for alerts or notifications to grab attention.
// Subtle Gradient (Optional):
//
// Apply a subtle gradient between black and gold for a smooth transition in certain UI elements.
// Background Highlights:
//
// Bronze (#CD7F32) for subtle background highlights or shadows.
