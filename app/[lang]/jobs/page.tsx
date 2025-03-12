import { getDictionary, Locale } from "@/lib/i18n";

interface contactPageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

const Page = async ({ params }: contactPageProps) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  // const page = dictionary.pages.contact;

  return (
    <main>
      {/* Job Offers adds list */}
      {/* Job Offers list */}
      {/* News Letter */}
    </main>
  );
};

export default Page;
