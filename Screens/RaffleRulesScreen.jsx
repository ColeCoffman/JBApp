import {View, Text, SafeAreaView, ScrollView, StyleSheet, Button} from 'react-native';
import {useEffect} from 'react';


function RaffleRulesScreen(route, navigation) {

    useEffect(() => {
        route.navigation.setOptions({headerLeft: () => (
          <View style={{flexDirection: 'row'}}>
            <Button title="Back" onPress={() => {
                route.navigation.goBack();
            }}/>
          </View>
        )});
      });

    console.log(route);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>
                    1. Eligibility: Jeep Beach Raffle Drawing (the “Sweepstakes”) is open only to individuals who are eighteen (18) years old as of April 19th, 2020. The sweepstakes is only open to legal residents of the United States, Canada, and Mexico and is void where prohibited by law. Board members of Jeep Beach, Inc. (the “Sponsor") are not eligible to participate in the Sweepstakes. NEITHER APPLE NOR THE VENDORS WHO HAVE DONATED PRIZES FOR THIS RAFFLE ARE A SPONSOR OF THIS SWEEPSTAKES. The Sweepstakes is subject to all applicable federal, state and local laws and regulations. Void where prohibited.
                </Text>
                <Text style={styles.text}>
                    2. Agreement to Rules: By participating, you agree to be fully unconditionally bound by these Rules, and you represent and warrant that you meet the eligibility requirements set forth herein. In addition, you agree to accept the decisions of Jeep Beach Board Members and volunteers, as final and binding as it relates to the content. The Sweepstakes is subject to all applicable federal, state and local laws.
                </Text>
                <Text style={styles.text}>
                    3. Sweepstakes Period: Entries will be accepted starting on or about April 19th, 2022 and ending April 25th, 2022. All raffle tickets must be purchased by April 25th, 2022 2:45 PM EST.
                </Text>
                <Text style={styles.text}>
                    4. How to Enter: The Sweepstakes can be entered by purchasing at least one raffle ticket (sold at the raffle tent and various other Jeep Beach events). Entries that do not adhere to the rules or specifications may be disqualified at the sole discretion of Jeep Beach, Inc. You may purchase as many raffle tickets as you wish. If you use fraudulent methods or otherwise attempt to circumvent the rules, you may be removed from eligibility at the sole discretion of Jeep Beach, Inc.
                </Text>
                <Text style={styles.text}>
                    5. Prizes: Winners will receive various prizes donated by attending Vendors. For a list of prizes, please visit the raffle tent from 10:00 AM until 3:00 PM, April 25th, 2020. Actual/ appraised value may differ at time of prize award. The specifics of the prize shall be solely determined by the Sponsor. No cash or other prize substitution permitted except at Sponsor's discretion. The prize is non-transferable. Any and all prize related expenses, including without limitation any and all federal, state, and/or local taxes shall be the sole responsibility of the winner. No substitution of prize or transfer/ assignment of prize to others or request for the cash equivalent by winners is permitted.
                </Text>
                <Text style={styles.text}>
                    6. Odds: The odds of winning depend on the number of raffle tickets purchased.
                </Text>
                <Text style={styles.text}>
                    7. Winner selection and notification: Winners of the Sweepstakes will be selected in a random drawing under the supervision of the Sponsor. Winning ticket numbers will be displayed at the raffle tent and Jeep Beach Mobile apps (iPhone and Android). Jeep Beach, Inc. shall have no liability for failure to check raffle ticket numbers for a winning entry. You must be onsite to win, all prizes must be picked up at the raffle tent by 4:30 PM EST on April 25th, 2020. If any prizes remain unclaimed, Jeep Beach, Inc. board members shall determine the distribution of those unclaimed prizes.{"\n"}{"\n"}The receipt by winner any prize offered in this Sweepstakes is conditioned upon compliance with any and all federal and state laws and regulations. ANY VIOLATION OF THESE OFFICIAL RULES BY ANY WINNER (AT SPONSOR'S SOLE DISCRETION) WILL RESULT IN SUCH WINNER'S DISQUALIFICATION AS WINNER OF THE SWEEPSTAKES AND ALL PRIVILEGES AS WINNER WILL BE IMMEDIATELY TERMINATED.
                </Text>
                <Text style={styles.text}>
                    8. Terms: Jeep Beach, Inc. reserves the right, in its sole discretion to cancel, terminate, modify or suspend the Sweepstakes should (in its sole discretion) a virus, bugs, non-authorized human intervention, fraud or other causes beyond its control corrupt or affect the administration, security, fairness or proper conduct of the Sweepstakes. In such case, Jeep Beach, Inc. may select the recipients from all eligible ticket entries received prior to and/or after (if appropriate) the action taken by Jeep Beach, Inc. Jeep Beach, Inc. reserves the right at its sole discretion to disqualify any individual who tampers or attempts to tamper with the raffle ticket, entry process or the operation of the Sweepstakes or website or violates these Terms & Conditions.
                </Text>
                <Text style={styles.text}>
                    9. Limitation of Liability: By entering you agree to release and hold harmless Jeep Beach, Inc., and its subsidiaries, affiliates, advertising and promotion agencies, partners, representatives, volunteers, agents, successors, assigns, employees, officers and directors from any liability, illness, injury, death, loss, litigation, claim or damage that may occur, directly or indirectly, whether caused by negligence or not, from (i) such entrant's participation in the sweepstakes and/or his/her acceptance, possession, use, or misuse of any prize or any portion thereof, (ii) technical failures of any kind, including but not limited to the malfunctioning of any computer, cable, network, hardware or software; (iii) the unavailability or inaccessibility of any transmissions or telephone or Internet service; (iv) unauthorized human intervention in any part of the entry process or the Promotion; (v) electronic or human error which may occur in the administration of the Promotion or the processing of entries.
                </Text>
                <Text style={styles.text}>
                    10. Disputes: THIS SWEEPSTAKES IS GOVERNED BY THE LAWS OF VOLUSIA COUNTY AND THE STATE OF FLORIDA, WITHOUT RESPECT TO CONFLICT OF LAW DOCTRINES. As a condition of participating in this Sweepstakes, participant agrees that any and all disputes which cannot be resolved between the parties, and causes of action arising out of or connected with this Sweepstakes, shall be resolved individually, without resort to any form of class action, exclusively before a court located in THE STATE OF FLORIDA having jurisdiction. Further, in any such dispute, under no circumstances will participant be permitted to obtain awards for, and hereby waives all rights to claim punitive, incidental, or consequential damages, including reasonable attorneys' fees, other than participant's actual out-of-pocket expenses (i.e. costs associated with entering this Sweepstakes), and participant further waives all rights to have damages multiplied or increased.
                </Text>
                <Text style={styles.text}>
                    11. Sponsor: The Sponsor of the Sweepstakes is Jeep Beach, Inc., 124 North Nova Road, #206, Ormond Beach, FL 32174.
                </Text>
                
            </ScrollView>
        </SafeAreaView>
      
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      margin: 10
    },
    text: {
      fontSize: 15,
      paddingTop: 5
    },
  });

export {RaffleRulesScreen};

