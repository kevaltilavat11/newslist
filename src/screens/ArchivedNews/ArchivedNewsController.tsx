import { useEffect, useState } from "react";
import { getData, saveData, STORAGE_KEYS } from "../../utils/storage";
import { useIsFocused } from "@react-navigation/native";

export const useArchivedNews=()=>{
    const [archived, setArchived] = useState<any[]>([]);
    const isFocused = useIsFocused();
  useEffect(() => {
    if(isFocused){
      loadArchived();
    }
  }, [isFocused]);

  const loadArchived = async () => {
  const stored = (await getData(STORAGE_KEYS.ARCHIVED)) || [];
  setArchived(stored);
};

  const handleRestore = async (item: any) => {
    const updated = archived.filter(n => n.title !== item.title);
    setArchived(updated);
    await saveData(STORAGE_KEYS.ARCHIVED, updated);
  };

  return{
    archived,
    handleRestore
  }
}