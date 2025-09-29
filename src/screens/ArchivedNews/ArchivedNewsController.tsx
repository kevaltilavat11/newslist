import { useEffect, useState } from "react";
import { getData, saveData, STORAGE_KEYS } from "../../utils/storage";

export const useArchivedNews=()=>{
     const [archived, setArchived] = useState<any[]>([]);

  useEffect(() => {
    loadArchived();
  }, []);

  const loadArchived = async () => {
  const stored = (await getData(STORAGE_KEYS.ARCHIVED)) || [];
  setArchived(stored);
};

  const handleRestore = async (item: any) => {
    const updated = archived.filter(n => n.title !== item.title);
    setArchived(updated);
    await saveData(STORAGE_KEYS.ARCHIVED, JSON.stringify(updated));
  };

  return{
    archived,
    handleRestore
  }
}