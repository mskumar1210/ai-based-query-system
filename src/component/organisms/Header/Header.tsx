/**
 * Header Component - Top Navigation Bar
 * Krishi Vaani App Header with branding, language toggle, notifications, and user profile
 *
 * According to PRD:
 * - Uses primary green (#44e47e) for brand identity
 * - Includes language toggle (Malayalam/English)
 * - Notification bell for alerts
 * - User profile avatar
 * - Sticky positioning with glass morphism effect
 * - Responsive design (mobile-first approach)
 */

import React, { useState } from 'react';

interface HeaderProps {
  currentLanguage?: 'ml' | 'en';
  onLanguageChange?: (language: 'ml' | 'en') => void;
  onNotificationsClick?: () => void;
  onProfileClick?: () => void;
  userAvatar?: string;
  userName?: string;
  unreadNotifications?: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentLanguage = 'ml',
  onLanguageChange,
  onNotificationsClick,
  onProfileClick,
  userAvatar,
  userName = 'കർഷകൻ',
  unreadNotifications = 0,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-base-300
                 bg-base-100/95 dark:bg-base-300/95
                 backdrop-blur-sm px-4 py-4 sm:px-6"
      role="banner"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Brand Icon - Potted Plant (represents growth and agriculture) */}
          <div
            className="flex items-center justify-center size-10 rounded-lg
                       bg-primary/20 text-primary dark:text-primary
                       shadow-sm hover:shadow-md transition-shadow"
            aria-hidden="true"
          >
            <span
              className="material-symbols-rounded text-2xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              potted_plant
            </span>
          </div>

          {/* Brand Name */}
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-xl font-black tracking-tight
                          text-base-content dark:text-white leading-none">
              കൃഷി വാണി
            </h1>
            <span className="text-xs sm:text-sm text-base-content/60
                            font-medium leading-none">
              Krishi Vaani
            </span>
          </div>
        </div>

        {/* Right Actions - Language Toggle, Notifications, Profile */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle Button */}
          <button
            className="flex h-10 items-center justify-center gap-2
                       rounded-lg bg-base-200 dark:bg-base-content/10
                       px-3 sm:px-4 text-xs sm:text-sm font-bold
                       text-base-content dark:text-white
                       hover:bg-base-300 dark:hover:bg-base-content/20
                       transition-colors focus:outline-none focus:ring-2
                       focus:ring-primary focus:ring-offset-2
                       dark:focus:ring-offset-base-300"
            onClick={() => onLanguageChange?.(currentLanguage === 'ml' ? 'en' : 'ml')}
            aria-label={currentLanguage === 'ml' ? 'Switch to English' : 'മലയാളത്തിലേക്ക് മാറുക'}
            title={currentLanguage === 'ml' ? 'Switch to English' : 'മലയാളത്തിലേക്ക് മാറുക'}
          >
            <span
              className="text-base sm:text-lg material-symbols-rounded"
              aria-hidden="true"
            >
              language
            </span>
            <span className="hidden sm:inline">
              {currentLanguage === 'ml' ? 'മലയാളം' : 'English'}
            </span>
          </button>

          {/* Notifications Button */}
          <button
            className="flex h-10 w-10 sm:h-10 sm:w-auto sm:px-3 items-center
                       justify-center rounded-lg bg-base-200 dark:bg-base-content/10
                       text-base-content dark:text-white
                       hover:bg-base-300 dark:hover:bg-base-content/20
                       transition-colors focus:outline-none focus:ring-2
                       focus:ring-primary focus:ring-offset-2
                       dark:focus:ring-offset-base-300 relative"
            onClick={onNotificationsClick}
            aria-label={`Notifications ${unreadNotifications > 0 ? `(${unreadNotifications} unread)` : ''}`}
            title="അറിയിപ്പുകൾ"
          >
            <span
              className="text-lg sm:text-xl material-symbols-rounded"
              aria-hidden="true"
            >
              notifications
            </span>

            {/* Notification Badge */}
            {unreadNotifications > 0 && (
              <span
                className="absolute top-0 right-0 inline-flex items-center
                           justify-center px-2.5 py-0.5 text-xs font-bold
                           leading-none text-error-content bg-error rounded-full
                           sm:relative sm:ml-2 sm:top-auto sm:right-auto"
                aria-label={`${unreadNotifications} unread notifications`}
              >
                {unreadNotifications}
              </span>
            )}
          </button>

          {/* User Profile Button / Dropdown */}
          <div className="relative">
            <button
              className="flex h-10 w-10 overflow-hidden rounded-lg
                         border-2 border-primary/30 dark:border-primary/20
                         shadow-sm hover:shadow-md transition-shadow
                         focus:outline-none focus:ring-2 focus:ring-primary
                         focus:ring-offset-2 dark:focus:ring-offset-base-300"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
              aria-haspopup="menu"
              aria-expanded={isDropdownOpen}
              aria-label={`User profile - ${userName}`}
              title={userName}
            >
              {userAvatar ? (
                <img
                  alt={`${userName} profile avatar`}
                  className="h-full w-full object-cover"
                  src={userAvatar}
                  loading="lazy"
                />
              ) : (
                <span
                  className="h-full w-full flex items-center justify-center
                             bg-primary text-primary-content font-bold text-lg"
                >
                  {userName.charAt(0).toUpperCase()}
                </span>
              )}
            </button>

            {/* Profile Dropdown Menu */}
            {isDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-base-100
                           dark:bg-base-300 rounded-lg shadow-lg border
                           border-base-300 dark:border-base-content/10 z-40"
                role="menu"
              >
                <button
                  className="w-full px-4 py-3 text-left text-base-content
                             dark:text-white hover:bg-base-200
                             dark:hover:bg-base-content/10 transition-colors
                             first:rounded-t-lg flex items-center gap-3"
                  onClick={() => {
                    onProfileClick?.();
                    setIsDropdownOpen(false);
                  }}
                  role="menuitem"
                >
                  <span className="material-symbols-rounded text-lg" aria-hidden="true">
                    person
                  </span>
                  <span className="font-medium">പ്രൊഫൈൽ</span>
                </button>

                <button
                  className="w-full px-4 py-3 text-left text-base-content
                             dark:text-white hover:bg-base-200
                             dark:hover:bg-base-content/10 transition-colors
                             last:rounded-b-lg flex items-center gap-3"
                  onClick={() => {
                    // Logout handler
                    setIsDropdownOpen(false);
                  }}
                  role="menuitem"
                >
                  <span className="material-symbols-rounded text-lg" aria-hidden="true">
                    logout
                  </span>
                  <span className="font-medium">പുറത്തേക്കിറങ്ങുക</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Skip Navigation Link (Accessibility) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-1 focus:left-1
                   focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-content
                   focus:rounded-md"
      >
        പ്രധാന ഉള്ളടക്കത്തിലേക്ക് കുതിക്കുക
      </a>
    </header>
  );
};

export default Header;