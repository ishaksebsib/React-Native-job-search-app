import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageURL } from "../../../../utils";

import styles from "./popularjobcard.style";

const PopularJobCard = ({ item, selectedJob, handleCardPress }) => {
  return (
    <TouchableOpacity
      style={styles.container(selectedJob, item)}
      onPress={() => handleCardPress(item)}
    >
      <TouchableOpacity style={styles.logoContainer(selectedJob, item)}>
        <Image
          source={{
            uri: checkImageURL(item.employer_logo)
              ? item.employer_logo
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnUT1lE7zClrt63-zjG6XAgxQ4vCJMkYeGad00vGt-3VQy8D1gf2q3_1mf4bJNWwNzkhM&usqp=CAU",
          }}
          resizeMode="contain"
          style={styles.logoImage}
        />
      </TouchableOpacity>

      <Text style={styles.companyName} numberOfLines={1}>
        {item.employer_name}
      </Text>

      <View style={styles.infoContainer}>
        <Text style={styles.jobName(selectedJob, item)} numberOfLines={1}>
          {item.job_title}
        </Text>

        <Text style={styles.location}>{item.job_country}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularJobCard;
