import React from "react";
import { View, FlatList, ActivityIndicator, Text, TextInput, StyleSheet } from "react-native";
import NewsItem from "../../components/NewsItem";
import { useNews } from "./NewsController";
import { Strings } from "../../utils/strings";


const News = () => {

  const { 
    loading, 
    error, 
    search, 
    filteredNews, 
    setSearch, 
    handleArchive 
  } = useNews()


  if (loading) return <ActivityIndicator size="large" style={styles.flexContainer} />;
  if (error) return <Text style={styles.screenContainer}>{error}</Text>;

  return (
    <View style={styles.flexContainer}>
      <TextInput
        placeholder={Strings.search_desc}
        value={search}
        onChangeText={setSearch}
        style={styles.search}
      />
      <FlatList
        data={filteredNews}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <NewsItem item={item} onArchive={() => handleArchive(item)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flexContainer:{
    flex:1,
  },
  screenContainer:{ 
    flex: 1, 
    textAlign: "center" 
  },
  search: { 
    padding: 10, 
    borderWidth: 1, 
    borderColor: "#ccc", 
    margin: 10, 
    borderRadius: 8 
  },
});

export default News;
