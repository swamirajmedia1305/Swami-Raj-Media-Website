import { Languages } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary/100 text-white hover:bg-primary hover:text-primary-foreground transition-colors"
      aria-label="Toggle Language"
    >
      <Languages className="w-4 h-4" />
      <span className="text-sm font-medium">{language === 'en' ? 'मराठी' : 'English'}</span>
    </button>
  );
};

export default LanguageToggle;
