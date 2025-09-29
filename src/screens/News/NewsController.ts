import { useEffect, useState } from "react";
import { fetchNews } from "../../api/newsApi";
import { getData, saveData, STORAGE_KEYS } from "../../utils/storage";
export const useNews = () =>{
    const [news, setNews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      setLoading(true);
      const articles = await fetchNews();
      setNews(articles);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleArchive = async (item: any) => {
  const archived = (await getData(STORAGE_KEYS.ARCHIVED)) || [];
  await saveData(STORAGE_KEYS.ARCHIVED, [...archived, item]);
  setNews(news.filter(n => n.title !== item.title));
};

  const filteredNews = news.filter(n => n.title.toLowerCase().includes(search.toLowerCase()));

    return {
        loading,
        error,
        search,
        filteredNews,
        news,
        handleArchive,
        setSearch
    }

}