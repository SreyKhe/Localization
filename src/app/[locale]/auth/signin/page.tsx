"use client";

import { signIn } from "next-auth/react";
import { useLocale } from "use-intl";
import { usePathname } from "next/navigation"; // Import to get current path
import Link from "next/link";

export default function SignInPage() {
  const locale = useLocale(); // Get current language
  const pathname = usePathname(); // Get the current pathname

  // Dynamically generate the sign-up link based on the current locale
  const signUpLink = pathname.replace('signin', 'signup');

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold text-center mb-4">
          {locale === "kh" ? "ចូលប្រើ" : "Sign In"}
        </h2>

        <form className="space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-gray-700">{locale === "kh" ? "អ៊ីមែល" : "Email"}</label>
            <input
              type="email"
              placeholder={locale === "kh" ? "បញ្ចូលអ៊ីមែល" : "Enter your email"}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-700">{locale === "kh" ? "ពាក្យសម្ងាត់" : "Password"}</label>
            <input
              type="password"
              placeholder={locale === "kh" ? "បញ្ចូលពាក្យសម្ងាត់" : "Enter your password"}
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            {locale === "kh" ? "ចូលប្រើ" : "Sign In"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Sign In Button */}
        <button
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        >
          <img src="/google-icon.svg" alt="Google" className="h-5 w-5 mr-2" />
          {locale === "kh" ? "ចូលប្រើដោយ Google" : "Sign in with Google"}
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600 mt-4">
          {locale === "kh" ? "មិនទាន់មានគណនី?" : "Don't have an account?"}{" "}
          <Link href={signUpLink} className="text-blue-500 hover:underline">
            {locale === "kh" ? "ចុះឈ្មោះ" : "Sign Up"}
          </Link>
        </p>
      </div>
    </div>
  );
}
