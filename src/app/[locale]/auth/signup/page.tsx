"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl"; // Import for i18n support
import { usePathname } from "next/navigation"; // Use this to get the current path

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const router = useRouter();
  const t = useTranslations("signup"); // Fetch translations for "signup"
  const pathname = usePathname(); // Get current pathname

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would send the data to your API (e.g., /api/register)
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push("/"); // Redirect to login after successful signup
    } else {
      const errorData = await res.json();
      setError(errorData.message || t("error"));
    }
  };

  // Dynamically generate the login link based on the current locale
  const loginLink = pathname.replace('signup', 'signin');

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-96">
        <h2 className="text-2xl font-semibold mb-4">{t("title")}</h2>

        {error && <p className="text-red-500">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder={t("fullName")}
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder={t("email")}
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <input
            type="password"
            name="password"
            placeholder={t("password")}
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 text-white w-full p-2 rounded hover:bg-blue-600 transition"
          >
            {t("register")}
          </button>
        </form>

        <p className="text-gray-600 mt-4">
          {t("qa")}
          <a href={loginLink} className="text-blue-500 hover:underline">
            {t("loginPrompt")}
          </a>
        </p>

        <div className="mt-4">
          <button
            onClick={() => signIn("google")}
            className="bg-red-500 text-white w-full p-2 rounded hover:bg-red-600 transition"
          >
            {t("signUpWithGoogle")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
