'use client';

import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';
import { useLocale } from 'use-intl';
import { useTranslations } from 'next-intl'; // Use the next-intl hook for translations

const LanguageSwitcher = () => {
  const [isPening ,startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();
  const t = useTranslations('language');
  // Function to handle language selection
  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    
    // startTransition(()=>{
    //     router.replace(`/${selectedLang}`);
    // })
    if (selectedLang !== localActive) {
      startTransition(() => {
        // Replace the current locale in the URL while keeping the current path
        const newPath = `/${selectedLang}${pathname.replace(`/${localActive}`, '')}`;
        router.replace(newPath);
      });
    }
    
  };

  return (
    <div className="flex space-x-4 border-2 border-blue-500 rounded">
     <form action="">
      <select
          name='lang'
          defaultValue={localActive}
          onChange={handleLanguageChange}
          disabled={isPening}
          className="bg-gray-800 text-base text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="kh">{t('kh')}</option> {/* Translate "Khmer" */}
          <option value="en">{t('en')}</option> {/* Translate "English" */}
        </select>
     </form>
    </div>
  );
};

export default LanguageSwitcher;


// "use client";

// import { useRouter, usePathname } from "next/navigation";
// import { ChangeEvent, useTransition } from "react";
// import { useLocale } from "next-intl";

// const LanguageSwitcher = () => {
//   const [isPending, startTransition] = useTransition();
//   const router = useRouter();
//   const localeActive = useLocale();
//   const pathname = usePathname(); // Get the current path

//   // Function to handle language selection
//   const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
//     const selectedLang = e.target.value;

//     if (selectedLang !== localeActive) {
//       startTransition(() => {
//         // Update the URL while keeping the current pathname
//         router.replace(`/${selectedLang}${pathname.replace(`/${localeActive}`, "")}`);
//       });
//     }
//   };

//   return (
//     <div className="flex space-x-4">
//       <select
//         value={localeActive}
//         onChange={handleLanguageChange}
//         disabled={isPending}
//         className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//       >
//         <option value="kh">Khmer</option>
//         <option value="en">English</option>
//       </select>
//     </div>
//   );
// };

// export default LanguageSwitcher;
