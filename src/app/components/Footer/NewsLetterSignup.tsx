interface NewsletterSignupProps {
  headline: string;
  subtext?: string;
}

export default function NewsletterSignup({ headline, subtext }: NewsletterSignupProps) {
  return (
    <div>
      <h3 className="text-white text-xl font-semibold mb-3">{headline}</h3>
      <p className="text-gray-400 mb-6">{subtext}</p>
      <form className="flex w-full max-w-sm">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-grow bg-gray-800 border border-gray-700 text-gray-200 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-amber-500"
        />
        <button
          type="submit"
          className="bg-amber-500 text-gray-900 font-semibold px-4 rounded-r-lg hover:bg-amber-400 transition-colors"
        >
          →
        </button>
      </form>
    </div>
  );
}
