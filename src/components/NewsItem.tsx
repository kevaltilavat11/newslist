import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Strings } from "../utils/strings";

type Props = {
  item: any;
  onArchive?: () => void;
  onRestore?: () => void;
};

const NewsItem: React.FC<Props> = ({ item, onArchive, onRestore }) => {
  return (
    <View style={styles.card}>
      {item.urlToImage && <Image source={{ uri: item.urlToImage }} style={styles.image} />}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.author}>By {item.author || "Unknown"}</Text>
      <Text style={styles.content}>{item.content || "No content available"}</Text>
      <Text style={styles.date}>{new Date(item.publishedAt).toDateString()}</Text>
      {onArchive && <TouchableOpacity onPress={onArchive}><Text style={styles.archive}>{Strings.archive}</Text></TouchableOpacity>}
      {onRestore && <TouchableOpacity onPress={onRestore}><Text style={styles.restore}>{Strings.restore}</Text></TouchableOpacity>}
    </View>
  );
};

const styles = StyleSheet.create({
  card: { 
    padding: 12, 
    backgroundColor: "#fff", 
    margin: 8, 
    borderRadius: 8, 
    elevation: 2 
},
  image: { 
    width: "100%", 
    height: 150, 
    borderRadius: 8 
},
  title: { 
    fontWeight: "bold", 
    fontSize: 16, 
    marginVertical: 4 
},
  author: { 
    color: "gray", 
    marginBottom: 4 
},
  content:  {
    marginBottom: 4 
},
  date: { 
    fontSize: 12, 
    color: "gray" 
},
  archive: { 
    color: "red", 
    marginTop: 6 
},
  restore: { 
    color: "green", 
    marginTop: 6 
},
});

export default NewsItem;
