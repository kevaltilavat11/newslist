import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import NewsItem from "../../components/NewsItem";
import { useArchivedNews } from "./ArchivedNewsController";
import { Strings } from "../../utils/strings";

const ArchivedNews = () => {

  const {archived,handleRestore} = useArchivedNews()
 

  if (archived.length === 0) return <Text style={styles.screenContainer}>{Strings.no_archived_news}</Text>;

  return (
    <View style={styles.flexContainer}>
      <FlatList
        data={archived}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <NewsItem item={item} onRestore={() => handleRestore(item)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer:{
    flex:1
  },
  screenContainer:{ flex: 1, textAlign: "center" }
})

export default ArchivedNews;
