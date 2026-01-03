import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'mr';

type Translations = {
  [key: string]: {
    en: string;
    mr: string;
  };
};

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', mr: 'मुख्यपृष्ठ' },
  'nav.about': { en: 'About', mr: 'आमच्याबद्दल' },
  'nav.work': { en: 'Work', mr: 'काम' },
  'nav.reels': { en: 'Reels', mr: 'रील्स' },
  'nav.services': { en: 'Services', mr: 'सेवा' },
  'nav.contact': { en: 'Contact', mr: 'संपर्क' },
  'nav.whyChooseUs': { en: 'Why Choose Us', mr: 'आम्हाला का निवडा' },
  'nav.footer': { en: 'Footer', mr: 'तळटीप' },

  // Hero Section
  'hero.badge': {
    en: 'Political Campaigning | Social Media Marketing | Business Development',
    mr: 'राजकीय मोहिमा | सोशल मीडिया मार्केटिंग | व्यवसाय विकास',
  },
  'hero.brand': { en: 'Swamiraj Media', mr: 'स्वामीराज मीडिया' },
  'hero.tagline': {
    en: 'Your Voice. Our Strategy. Winning Impact.',
    mr: 'तुमचा आवाज. आमची रणनीती. जिंकणारा परिणाम.',
  },
  'hero.description': {
    en: 'A modern & result-oriented media agency specializing in political campaigns, digital marketing, and business development. We deliver your message to the right audience at the right time.',
    mr: 'राजकीय मोहिमा, डिजिटल मार्केटिंग आणि व्यवसाय विकासात खास आधुनिक व परिणामाभिमुख मीडिया एजन्सी. आम्ही तुमचा संदेश योग्य प्रेक्षकांपर्यंत योग्य वेळी पोहोचवतो.',
  },
  'hero.cta.primary': { en: 'Get Started', mr: 'सुरुवात करा' },
  'hero.cta.secondary': { en: 'Learn More', mr: 'अधिक जाणून घ्या' },
  'hero.cta.contact': { en: 'Contact Us', mr: 'आमच्याशी संपर्क साधा' },
  'hero.stats.campaigns': { en: 'Campaigns', mr: 'मोहीमा' },
  'hero.stats.clients': { en: 'Clients', mr: 'क्लायंट्स' },
  'hero.stats.years': { en: 'Years Experience', mr: 'वर्षांचा अनुभव' },

  // About Section
  'about.badge': { en: 'About Us', mr: 'आमच्याबद्दल' },
  'about.title': { en: 'Who We Are', mr: 'आम्ही कोण आहोत' },
  'about.subtitle': { en: 'Crafting success with strategy, creativity, and technology.', mr: 'रणनीती, सर्जनशीलता आणि तंत्रज्ञानाने यश घडवतो.' },
  'about.p1': { en: 'At Swamiraj Media, we specialize in political campaigning, social media marketing, and business development. Our team understands the pulse of the audience and crafts strategies that resonate with them.', mr: 'स्वामीराज मीडियामध्ये आम्ही राजकीय मोहिमा, सोशल मीडिया मार्केटिंग आणि व्यवसाय विकासात विशेष आहोत. आमची टीम प्रेक्षकांची नाडी ओळखते आणि त्यांच्याशी जुळणारी रणनीती तयार करते.' },
  'about.p2': { en: 'With years of experience in both political and business fields, we combine ground campaign support with cutting-edge digital strategies to ensure your message reaches the right people at the right time.', mr: 'राजकीय आणि व्यावसायिक क्षेत्रातील अनेक वर्षांच्या अनुभवासह, आम्ही जमिनीवरील मोहिमांसोबत आधुनिक डिजिटल रणनीती जोडतो जेणेकरून तुमचा संदेश योग्य वेळी योग्य लोकांपर्यंत पोहोचेल.' },
  'about.mission.title': { en: 'Our Mission', mr: 'आमचे ध्येय' },
  'about.mission.quote': { en: 'To deliver your message to the right audience, at the right time, in the most effective way.', mr: 'तुमचा संदेश योग्य वेळी योग्य प्रेक्षकांपर्यंत सर्वात प्रभावी पद्धतीने पोहोचवणे.' },
  'about.feature1.title': { en: 'Strategic Approach', mr: 'धोरणात्मक दृष्टिकोन' },
  'about.feature1.desc': { en: 'Data-driven strategies tailored to your specific goals and target audience.', mr: 'तुमच्या उद्दिष्टे आणि लक्ष्यित प्रेक्षकांसाठी अनुरूप डेटा-आधारित रणनीती.' },
  'about.feature2.title': { en: 'Proven Results', mr: 'सिद्ध परिणाम' },
  'about.feature2.desc': { en: 'Track record of successful campaigns across political and business sectors.', mr: 'राजकीय आणि व्यावसायिक क्षेत्रातील यशस्वी मोहिमांचा ट्रॅक रेकॉर्ड.' },
  'about.feature3.title': { en: 'Expert Team', mr: 'तज्ञ टीम' },
  'about.feature3.desc': { en: 'Experienced professionals in campaigning, content creation, and digital marketing.', mr: 'मोहिमा, सामग्री निर्मिती आणि डिजिटल मार्केटिंगमधील अनुभवी व्यावसायिक.' },

  // Services Section
  'services.badge': { en: 'Our Services', mr: 'आमच्या सेवा' },
  'services.title': { en: 'Comprehensive Solutions for Every Need', mr: 'प्रत्येक गरजेसाठी सर्वसमावेशक उपाय' },
  'services.description': { en: 'We offer a wide range of services tailored to meet your specific requirements', mr: 'आम्ही तुमच्या विशिष्ट आवश्यकतांनुसार तयार केलेल्या सेवांची विस्तृत श्रेणी ऑफर करतो' },
  'services.card1.title': { en: 'Political Campaigning', mr: 'राजकीय मोहिमा' },
  'services.card1.description': { en: 'Strategic election campaigns that connect candidates with voters.', mr: 'उमेदवारांना मतदारांशी जोडणाऱ्या धोरणात्मक निवडणूक मोहिमा.' },
  'services.card1.feature1': { en: 'Election strategy planning', mr: 'निवडणूक धोरण नियोजन' },
  'services.card1.feature2': { en: 'Candidate branding', mr: 'उमेदवार ब्रँडिंग' },
  'services.card1.feature3': { en: 'Political content creation', mr: 'राजकीय सामग्री निर्मिती' },
  'services.card1.feature4': { en: 'Ground campaign support', mr: 'मैदानी मोहिम समर्थन' },
  'services.card2.title': { en: 'Social Media Marketing', mr: 'सोशल मीडिया मार्केटिंग' },
  'services.card2.description': { en: 'Build your digital presence across all major platforms.', mr: 'सर्व प्रमुख प्लॅटफॉर्मवर तुमची डिजिटल उपस्थिती उभारणे.' },
  'services.card2.feature1': { en: 'Facebook, Instagram, YouTube', mr: 'Facebook, Instagram, YouTube' },
  'services.card2.feature2': { en: 'Reels & short videos', mr: 'रील्स आणि शॉर्ट व्हिडिओ' },
  'services.card2.feature3': { en: 'Paid advertisements', mr: 'सशुल्क जाहिराती' },
  'services.card2.feature4': { en: 'WhatsApp marketing', mr: 'WhatsApp मार्केटिंग' },
  'services.card3.title': { en: 'Business Development', mr: 'व्यवसाय विकास' },
  'services.card3.description': { en: 'Grow your business with strategic marketing solutions.', mr: 'धोरणात्मक मार्केटिंग उपायांसह तुमचा व्यवसाय वाढवा.' },
  'services.card3.feature1': { en: 'Brand identity creation', mr: 'ब्रँड ओळख निर्मिती' },
  'services.card3.feature2': { en: 'Lead generation', mr: 'लीड जनरेशन' },
  'services.card3.feature3': { en: 'Local business marketing', mr: 'स्थानिक व्यवसाय मार्केटिंग' },
  'services.card3.feature4': { en: 'Growth consulting', mr: 'वाढ सल्लामसलत' },

  // Why Choose Us Section
  'whyChooseUs.badge': { en: 'Why Choose Us', mr: 'आम्हाला का निवडा' },
  'whyChooseUs.title': { en: 'Excellence in Every Endeavor', mr: 'प्रत्येक प्रयत्नात उत्कृष्टता' },
  'whyChooseUs.description': { en: 'We combine expertise, innovation, and dedication to deliver outstanding results', mr: 'आम्ही उत्कृष्ट परिणाम देण्यासाठी कौशल्य, नवकल्पना आणि समर्पण एकत्र करतो' },
  'whyChooseUs.reason1.title': { en: 'Experience in Political & Business Fields', mr: 'राजकीय आणि व्यावसायिक क्षेत्रातील अनुभव' },
  'whyChooseUs.reason1.desc': { en: 'Years of proven expertise in both political campaigning and business development.', mr: 'राजकीय मोहिमा आणि व्यवसाय विकासातील अनेक वर्षांचा सिद्ध अनुभव.' },
  'whyChooseUs.reason2.title': { en: 'Strong Ground + Digital Presence', mr: 'बलवान मैदानी + डिजिटल उपस्थिती' },
  'whyChooseUs.reason2.desc': { en: 'Combined on-ground campaign support with powerful digital marketing strategies.', mr: 'मैदानी मोहिमांसह प्रभावी डिजिटल मार्केटिंग रणनीतींचा समन्वय.' },
  'whyChooseUs.reason3.title': { en: 'Professional Creatives & Content', mr: 'व्यावसायिक क्रिएटिव्ह आणि सामग्री' },
  'whyChooseUs.reason3.desc': { en: 'High-quality designs, videos, and content that capture attention and drive engagement.', mr: 'उच्च दर्जाचे डिझाईन्स, व्हिडिओ आणि सामग्री जी लक्ष वेधते आणि एंगेजमेंट वाढवते.' },
  'whyChooseUs.reason4.title': { en: 'Local Audience Targeting Expertise', mr: 'स्थानिक प्रेक्षक लक्ष्यीकरणातील कौशल्य' },
  'whyChooseUs.reason4.desc': { en: 'Deep understanding of local demographics and effective regional marketing.', mr: 'स्थानिक जनसांख्यिकीची सखोल समज आणि प्रभावी प्रादेशिक मार्केटिंग.' },
  'whyChooseUs.reason5.title': { en: 'Trust, Transparency & Reliability', mr: 'विश्वास, पारदर्शकता आणि विश्वासार्हता' },
  'whyChooseUs.reason5.desc': { en: 'We build lasting relationships based on honest communication and consistent results.', mr: 'प्रामाणिक संवाद आणि सातत्यपूर्ण परिणामांवर आधारित टिकाऊ संबंध आम्ही निर्माण करतो.' },
  'whyChooseUs.stats.satisfaction': { en: 'Client Satisfaction', mr: 'क्लायंट समाधान' },
  'whyChooseUs.stats.campaigns': { en: 'Successful Campaigns', mr: 'यशस्वी मोहिमा' },

  // Work Section
  'work.badge': { en: 'Our Work', mr: 'आमचे काम' },
  'work.title': { en: 'Featured Projects', mr: 'वैशिष्ट्यीकृत प्रकल्प' },
  'work.description': { en: 'Take a look at some of our successful campaigns, creatives, and projects.', mr: 'आमच्या काही यशस्वी मोहिमा, सर्जनशील आणि प्रकल्पांवर एक नजर टाका.' },
  'work.viewAll': { en: 'View All', mr: 'सर्व पहा' },
  'work.project': { en: 'Project', mr: 'प्रकल्प' },

  // Reels Section
  'reels.badge': { en: 'Video Reels', mr: 'व्हिडिओ रील्स' },
  'reels.title': { en: 'Our Latest Reels', mr: 'आमच्या नवीनतम रील्स' },
  'reels.description': { en: 'Watch our engaging video content, campaign highlights, and creative reels.', mr: 'आमचा आकर्षक व्हिडिओ सामग्री, मोहीम हायलाइट्स आणि सर्जनशील रील्स पहा.' },
  'reels.viewAll': { en: 'View All Reels', mr: 'सर्व रील्स पहा' },
  'reels.reel': { en: 'Reel', mr: 'रील' },

  // Categories
  'category.all': { en: 'All', mr: 'सर्व' },
  'category.political': { en: 'Political', mr: 'राजकीय' },
  'category.socialmedia': { en: 'Social Media', mr: 'सोशल मीडिया' },
  'category.business': { en: 'Business', mr: 'व्यवसाय' },

  // Contact Section
  'contact.badge': { en: 'Contact Us', mr: 'आमच्याशी संपर्क साधा' },
  'contact.title': { en: 'Get In Touch', mr: 'संपर्क साधा' },
  'contact.description': { en: "Ready to start your campaign? Contact us today and let's discuss how we can help you achieve your goals.", mr: 'तुमची मोहीम सुरू करण्यास तयार आहात का? आजच आमच्याशी संपर्क साधा आणि आम्ही तुमची उद्दिष्टे साध्य करण्यात कशी मदत करू शकतो ते चर्चा करूया.' },
  'contact.info.address.label': { en: 'Address', mr: 'पत्ता' },
  'contact.info.address.value': { en: 'Sri Sri Residency, Nirman Chowk, Front of Magdum lawns, Sambhajinagar, Kolhapur.', mr: 'श्री श्री रेसिडेन्सी, निर्मान चौक, मगदूम लॉन्ससमोर, संभाजीनगर, कोल्हापूर.' },
  'contact.info.phone.label': { en: 'Phone', mr: 'फोन' },
  'contact.info.email.label': { en: 'Email', mr: 'ईमेल' },
  'contact.info.hours.label': { en: 'Working Hours', mr: 'कामाचे तास' },
  'contact.info.hours.value': { en: 'Mon - Sat: 9:00 AM - 7:00 PM', mr: 'सोम - शनि: सकाळी 9:00 - सायं 7:00' },
  'contact.action.whatsapp': { en: 'Chat on WhatsApp', mr: 'WhatsApp वर चॅट करा' },
  'contact.action.call': { en: 'Call Now', mr: 'आता कॉल करा' },
  'contact.form.title': { en: 'Send Us a Message', mr: 'आम्हाला संदेश पाठवा' },
  'contact.form.name': { en: 'Your Name', mr: 'तुमचे नाव' },
  'contact.form.email': { en: 'Email Address', mr: 'ईमेल पत्ता' },
  'contact.form.phone': { en: 'Phone Number', mr: 'फोन नंबर' },
  'contact.form.message': { en: 'Your Message', mr: 'तुमचा संदेश' },
  'contact.placeholder.name': { en: 'Enter your name', mr: 'तुमचे नाव लिहा' },
  'contact.placeholder.email': { en: 'Enter your email', mr: 'तुमचा ईमेल लिहा' },
  'contact.placeholder.phone': { en: 'Enter your phone number', mr: 'तुमचा फोन नंबर लिहा' },
  'contact.placeholder.message': { en: 'Tell us about your requirements...', mr: 'तुमच्या गरजा आम्हाला सांगा...' },
  'contact.submit': { en: 'Send Message', mr: 'संदेश पाठवा' },
  'contact.sending': { en: 'Sending...', mr: 'पाठवत आहोत...' },
  'contact.toast.title': { en: 'Message Sent!', mr: 'संदेश पाठवला!' },
  'contact.toast.desc': { en: "Thank you for contacting us. We'll get back to you soon.", mr: 'संपर्क केल्याबद्दल धन्यवाद. आम्ही लवकरच तुमच्याशी संपर्क करू.' },

  // Footer
  'footer.description': { en: 'Empowering your vision with strategic solutions', mr: 'धोरणात्मक उपायांसह तुमच्या दृष्टीला सशक्त करणे' },
  'footer.quickLinks': { en: 'Quick Links', mr: 'द्रुत दुवे' },
  'footer.followUs': { en: 'Follow Us', mr: 'आम्हाला फॉलो करा' },
  'footer.rights': { en: 'All rights reserved', mr: 'सर्व हक्क राखीव' },
  'footer.brand.tagline': { en: 'Your Voice. Our Strategy. Winning Impact.', mr: 'तुमचा आवाज. आमची रणनीती. जिंकणारा परिणाम.' },
  'footer.contactInfo': { en: 'Contact Info', mr: 'संपर्क माहिती' },
  'footer.crafted': { en: 'Crafted with love in Kolhapur', mr: 'कोल्हापूरमध्ये प्रेमाने तयार' },
  'footer.home': { en: 'Home', mr: 'मुख्यपृष्ठ' },
  'footer.about': { en: 'About', mr: 'आमच्याबद्दल' },
  'footer.services': { en: 'Services', mr: 'सेवा' },
  'footer.work': { en: 'Work', mr: 'काम' },
  'footer.contact': { en: 'Contact', mr: 'संपर्क' },
  'footer.social.facebook': { en: 'Facebook', mr: 'Facebook' },
  'footer.social.instagram': { en: 'Instagram', mr: 'Instagram' },
  'footer.social.youtube': { en: 'YouTube', mr: 'YouTube' },
  'footer.social.twitter': { en: 'Twitter', mr: 'Twitter' },

  // Floating Buttons
  'floating.whatsapp': { en: 'Chat on WhatsApp', mr: 'WhatsApp वर चॅट करा' },
  'floating.call': { en: 'Call Now', mr: 'आता कॉल करा' },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('mr');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'mr' : 'en'));    
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
