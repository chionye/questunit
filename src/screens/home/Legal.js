/** @format */

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import { Text } from "react-native-paper";
import Storage from "../../utils/Storage";
import * as LocalAuthentication from "expo-local-authentication";

const Legal = ({ navigation }) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.header}>U.S. Consumer Privacy Notice</Text>
        <Text variant='bodyMedium' style={styles.text}>
          The U.S. Consumer Privacy Notice applies to customers, applicants, and
          former customers of the Silver Credit Inc family of companies listed
          in the notice. It details our privacy and security practices regarding
          our relationship with you and provides instructions on how to limit
          the sharing of your information. This notice does not apply to
          business or commercial customers.
        </Text>
        <Text style={styles.header}>Social Security Number Protections</Text>
        <Text variant='bodyMedium' style={styles.text}>
          In the limited cases where Social Security number is necessary, we
          have measures in place to protect you.
        </Text>
        <Text style={styles.header}>Your Privacy Rights and Choices</Text>
        <Text variant='bodyMedium' style={styles.text}>
          Learn more about your privacy rights and how you can opt out of email
          marketing or targeted advertising. Your Privacy Rights and Choices
        </Text>
        <Text style={styles.header}>Manage Your Data</Text>
        <Text variant='bodyMedium' style={styles.text}>
          You’re able to request a copy of your data, request to correct certain
          data, and delete some of the data we’ve collected. Manage Your Data
        </Text>
        <Text style={styles.header}>
          Silver Credit Inc California Consumer Privacy Act (CCPA) Disclosure
        </Text>
        <Text variant='bodyMedium' style={styles.text}>
          The Silver Credit Inc California Consumer Privacy Act Disclosure
          provides an overview of how consumers in California receive certain
          privacy rights and protections. The Silver Credit Inc Workforce CCPA
          Disclosure provides similar information for members of the Silver
          Credit Inc workforce.
        </Text>
        <Text variant='bodyMedium' style={styles.text}>
          Silver Credit Inc does not provide, endorse, nor guarantee any
          third-party product, service, information, or recommendation available
          through links from this Web site. The third parties providing products
          and services available through this Web siteare not affiliated with
          Silver Credit Inc and are solely responsible for their products,
          services, information, recommendations, and all other content on their
          Web sites. Any educational tools, calculators, guides, and other
          content available on thissite are provided by third parties and are
          for informational purposes only. These materials are not intended to
          provide legal, investment, or financial advice or to indicate the
          availability or suitability of any Silver Credit Inc product or
          serviceto your unique circumstances. For specific advice about your
          unique circumstances, you may wish to consult a qualified
          professional. Silver Credit Inc works hard to offer you products and
          services that it believes to be useful and reliable; however, Silver
          Credit Inc does not provide, endorse, nor guarantee these unaffiliated
          third-party products, services, or information nor guarantee their
          accuracy. Silver Credit Inc is not liable for any third party’s
          failure with regard to such advertised products, services, and
          benefits. These advertised products and services are NOT FDIC INSURED
          NOR BANK GUARANTEED. We encourage you tocheck individual offers,
          products, and services to become familiar with any applicable
          restrictions or conditions. By responding to offers advertised on this
          Web site, you may be communicating information about yourself to the
          company that provides such product or services—for example, that you
          are a Silver Credit Inc customer. Please be aware that these
          thirdparties may have a different privacy policy than Silver Credit
          Inc’s. Their Web sites may also provide less security than Silver
          Credit Inc. NOTICE FOR CALIFORNIA RESIDENTS: Applicants may, after
          credit approval, use the credit card account up to its credit limit
          and be liable for amounts extended under the plan to any joint
          applicant. If you are married, you may apply for credit in your own
          name. NOTICE FOR DELAWARE RESIDENTS: Service charges not in excess of
          those permitted by law will be charged on the outstanding balances
          from month to month. NOTICE FOR OHIO RESIDENTS: Ohio
          anti-discrimination laws require creditors to make credit equally
          available to all creditworthy customers and that credit reporting
          agencies maintain separate credit histories on individuals
          uponrequest. The Ohio Civil Rights Commission administers these laws.
          NOTICE FOR NEW YORK AND VERMONT RESIDENTS: Silver Credit Inc may
          obtain at any time your credit reports, for any legitimate purpose
          associated with the account or the application or request for an
          account, including but not limited toreviewing, modifying, renewing
          and collecting on your account. On your request, you will be informed
          if such a report was ordered. If so, you will be given the name and
          address of the consumer reporting agency furnishing the report. New
          York residentsmay contact the New York State Department of Financial
          Services by telephone or visit its website for free information on
          comparative credit card rates, fees and grace periods. New York State
          Department of Financial Services: 1-877-226-5697 or
          http://www.dfs.ny.gov. NOTICE FOR WISCONSIN RESIDENTS: No provision of
          any marital agreement, unilateral statement, or court order applying
          to marital property will adversely affect a creditor's interests
          unless prior to the time credit is granted, thecreditor is furnished
          with a copy of the agreement, statement or court order, or has actual
          knowledge of the provision. If you are married, by submitting your
          credit card application you are confirming that this credit card
          obligation is beingincurred in the interest of your marriage and your
          family. If the credit card for which you are applying is granted, you
          will notify the Bank if you have a spouse who needs to receive
          notification that credit has been extended to you. Silver Credit Inc
          Auto Finance is a division of Silver Credit Inc, N.A. Silver Credit
          Inc Home Loans LLC and Silver Credit Inc Settlement Services LLC, are
          wholly-owned subsidiaries of Silver Credit Inc, N.A.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    width: "100%",
    padding: 10,
  },
  disclaimer: {
    fontSize: 16,
  },
  faq: {
    fontSize: 16,
    color: "#1434A4",
    marginBottom: 20,
  },
  header: {
    alignItems: "center",
    width: 390,
    fontSize: 18,
    padding: 10,

    marginBottom: 5,
  },
  heading: {
    fontSize: 18,
    color: "#fff",
    width: "70%",
    marginTop: 10,
    textAlign: "center",
  },
  heading1: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "200",
  },
  heading2: {
    fontSize: 14,
    color: "#fff",
    marginTop: 10,
    fontWeight: "200",
  },
  icons: {
    flexDirection: "row",
    marginTop: 10,
  },
  icon: {
    marginRight: 20,
  },
  cardInner: {
    width: 185,
    alignItems: "center",
  },
  cards: {
    margin: 10,
  },
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  otherPart: {
    marginLeft: 10,
  },
  thickText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  card: {
    padding: 10,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  actions: {
    marginTop: 5,
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
    padding: 10,
    width: 400,
    flexDirection: "row",
  },
  actions1: {
    marginTop: 5,
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
    paddingLeft: 10,
    width: 400,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  actions2: {
    marginTop: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#b3b3b3",
    borderBottomWidth: 0.5,
    borderBottomColor: "#b3b3b3",
    padding: 10,
    width: 400,
    flexDirection: "row",
  },
  leftSide: {
    flexDirection: "row",
  },
  text: {
    padding: 10,
    width: 380,
  },
  scrollView: {
    flexWrap: "wrap",
  },
});

export default Legal;
