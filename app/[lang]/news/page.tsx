import LatestNews from "@/components/global/LatestNews";
import NewsList from "@/components/news/NewsList";
import directus from "@/lib/directus/directus";
import { getDictionary, Locale } from "@/lib/i18n";
import { readItems } from "@directus/sdk";

interface contactPageProps {
  params: Promise<{
    lang: Locale;
  }>;
}

async function getNews() {
  return directus.request(
    readItems("News", {
      filter: {
        status: {
          _eq: "published",
        },
      },
    })
  );
}

async function getFiles(fileIds: number[]) {
  if (!fileIds.length) return [];

  try {
    const files = await directus.request(
      readItems("News_files", {
        fields: ["id", "directus_files_id"],
        filter: { id: { _in: fileIds } },
      })
    );
    return files;
  } catch (err) {
    console.log(err);
  }
}

const Page = async ({ params }: contactPageProps) => {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  // const page = dictionary.pages.contact;
  console.log(dictionary == dictionary);

  const News = await getNews();
  if (News.length > 0) {
    News[0].images = await getFiles(News[0].images);
  }

  return (
    <main>
      {/* Lattest news topics */}
      <LatestNews LatestNews={News} />
      {/* News list */}
      <NewsList NewsListData={News} />
      {/* adds */}
      {/* events list */}
      {/* News Letter */}
      {/* contact */}
    </main>
  );
};

export default Page;
