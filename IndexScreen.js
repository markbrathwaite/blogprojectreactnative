import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import Context from '../context/BlogContext';

const IndexScreen = () => {
    const { data, addBlogPost } = useContext(Context);
    return (
        <View>
        <Text>Index Screen</Text>
        <Button title="Add Post" onPress={addBlogPost} />
        <FlatList 
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
            return <Text>{item.title}</Text>
        }}
        />
    </View>
    );
}

const styles = StyleSheet.create({});

export default IndexScreen;

// Provider --> stack nav --> index screen --> show screen 
// --> create screen --> edit screen

// BLog Post Provider --> stuff --> IndexScreen

// {data: blogPosts, addBlogPost: () => {}}

// useState manages State , context moves info
