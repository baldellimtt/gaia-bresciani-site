'use client';

export default function CookiePreferencesButton() {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event('open-cookie-preferences'))}
      className="hover:text-white/60 transition-colors"
    >
      Gestisci cookie
    </button>
  );
}
