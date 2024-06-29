import React, { useContext } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Icon
import { TagContext } from '../components/TagContext'; // Import TagContext
import { useNavigation } from '@react-navigation/native';

const tags = [
  { key: 'A', tags: ['Auto', 'Accommodation', 'Apparel'] },
  { key: 'B', tags: ['Bills', 'Books', 'Beauty'] },
  { key: 'C', tags: ['Childcare', 'Clothing', 'Charity', 'Communication'] },
  { key: 'D', tags: ['Debt', 'Dining'] },
  { key: 'E', tags: ['Education', 'Entertainment'] },
  { key: 'F', tags: ['Food', 'Fitness'] },
  { key: 'G', tags: ['Groceries', 'Gifts'] },
  { key: 'H', tags: ['Healthcare', 'Housing', 'Hobbies'] },
  { key: 'I', tags: ['Insurance', 'Investments', 'Internet'] },
  { key: 'J', tags: ['Jewelry'] },
  { key: 'K', tags: ['Kids'] },
  { key: 'L', tags: ['Loans'] },
  { key: 'M', tags: ['Mortgage', 'Medical'] },
  { key: 'N', tags: ['None of the above'] },
  { key: 'O', tags: ['Other'] },
  { key: 'P', tags: ['Pet', 'Personal Care'] },
  { key: 'Q', tags: ['Quarantine Supplies'] },
  { key: 'R', tags: ['Rent', 'Repairs'] },
  { key: 'S', tags: ['Savings', 'Subscriptions'] },
  { key: 'T', tags: ['Travel', 'Transportation'] },
  { key: 'U', tags: ['Utilities'] },
  { key: 'V', tags: ['Vacation'] },
  { key: 'W', tags: ['Water', 'Wellness'] },
  { key: 'X', tags: ['X-ray'] },
  { key: 'Y', tags: ['Yoga'] },
  { key: 'Z', tags: ['Zoo Fees'] },
];

const TagSelectionPage = () => {
  const { setSelectedTag } = useContext(TagContext);
  const navigation = useNavigation();

  const handleTagSelection = (tag) => {
    if (tag === 'None of the above') {
      navigation.navigate('CustomTagPage');
    } else {
      setSelectedTag(tag);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.backArrow} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#007BFF" />
      </Pressable>
      <ScrollView>
        {tags.map((section) => (
          <View key={section.key} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.key}</Text>
            {section.tags.map((tag) => (
              <Pressable
                key={tag}
                style={styles.tagButton}
                onPress={() => handleTagSelection(tag)}
              >
                <Text style={styles.tagButtonText}>{tag}</Text>
              </Pressable>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backArrow: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tagButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    marginBottom: 5,
    borderRadius: 5,
  },
  tagButtonText: {
    fontSize: 16,
  },
});

export default TagSelectionPage;