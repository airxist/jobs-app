import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import { COLORS, icons, SIZES } from "../../constants";
import { NearbyJobCard, ScreenHeaderBtn } from "../../components";

import popular from "../../mock-data/popular.json";
import styles from "../../styles/search";

const Search = () => {
  const params = useLocalSearchParams();
  const router = useRouter();

  const [searchResult, setSearchResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [page, setPage] = useState(1);

  return (
    <SafeAreaView style={{ backgroundColor: COLORS.lightWhite, flex: 1 }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />

      <FlatList
        data={popular}
        // renderItem={({ item }) => {
        //   return (
        //     <NearbyJobCard
        //       job={item}
        //       key={`nearby-job-${item?.job_id}`}
        //       handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
        //     />
        //   );
        // }}
        // keyExtractor={(item) => item.job_id}
        // contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
        ListHeaderComponent={() => {
          <>
            <View style={styles.container}>
              <Text style={styles.searchTitle}>{params.id}</Text>
              <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
            </View>
            
            <View style={styles.container}>
              <Text style={styles.searchTitle}>{params.id}</Text>
              <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
            </View>
          </>;
        }}
      />
    </SafeAreaView>
  );
};

export default Search;
