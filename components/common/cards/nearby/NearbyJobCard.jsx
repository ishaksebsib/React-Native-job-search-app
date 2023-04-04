import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { checkImageURL } from "../../../../utils";

import styles from "./nearbyjobcard.style";

const NearbyJobCard = ({ job, selectedJob, handleNavigate }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={handleNavigate}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image
          source={{
            uri: checkImageURL(job.employer_logo)
              ? job.employer_logo
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnUT1lE7zClrt63-zjG6XAgxQ4vCJMkYeGad00vGt-3VQy8D1gf2q3_1mf4bJNWwNzkhM&usqp=CAU",
          }}
          resizeMode="contain"
          style={styles.logImage}
        />
      </TouchableOpacity>

      <View style={styles.textContainer}>
        <Text style={styles.jobName} numberOfLines={1}>
          {job.job_title}
        </Text>

        <Text style={styles.jobType}>{job.job_employment_type}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NearbyJobCard;
