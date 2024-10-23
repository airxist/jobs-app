import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  SafeAreaView,
  Text,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";

import { COLORS, SIZES, icons } from "../../constants";
import { useResource } from "../../hooks/useResource";

const tabs = ["About", "Qualifications", "Responsibilities"];

const JobDetails = () => {
  const params = useLocalSearchParams();
  console.log(params);
  const router = useRouter();
  const { refetchResource, resource, isLoading, error } = useResource();

  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const onRefresh = () => {};

  const displayTabContent = () => {
    console.log(activeTab);
    switch (activeTab) {
      case "Qualifications":
        return (
          <Specifics
            title={activeTab}
            points={
              [
                "Qualification1",
                "Qualification2",
                "Qualification3",
                "Qualification4",
              ] ?? ["N/A"]
            }
          />
        );
      case "About":
        return (
          <JobAbout
            info={
              "lorem inpusum dolo rem lorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo rem lorem inpusum dolo rem lorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo rem lorem inpusum dolo rem lorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo rem lorem inpusum dolo rem lorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo remlorem inpusum dolo rem" ??
              "No data provided"
            }
          />
        );
      case "Responsibilities":
        return (
          <Specifics
            title={activeTab}
            points={
              [
                "Responsibilities 1",
                "Responsibilities 2",
                "Responsibilities 3",
                "Responsibilities 4",
              ] ?? ["N/A"]
            }
          />
        );
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerTitle: "",
          headerBackVisible: false,
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
        }}
      />
      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {/* {isLoading ? (
            <ActivityIndicator size={"large"} color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : resource.length === 0 ? (
            <Text>No data</Text>
          ) : (
            <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
              <Company
              
              />

              <JobTabs />

               
            </View>
          )} */}

          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <Company
              companyLogo={icons.left}
              jobTitle="Job Title"
              companyName="Company Name"
              location="Location"
            />

            <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {displayTabContent()}
          </View>
        </ScrollView>

        <JobFooter url="https:/careers.google.com/jobs/results" />
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
