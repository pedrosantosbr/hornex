import classnames from "classnames";

interface TournamentRulesProps {
  classNames?: string;
}

interface RulesTextProps {
  children: React.ReactNode;
  className?: string;
}
const RulesText = ({ children, className }: RulesTextProps) => (
  <p className={classnames("indent-8 text-sm md:text-base", className)}>
    {children}
  </p>
);

interface RulesSubHeadingProps {
  children: React.ReactNode;
  className?: string;
}
const RulesSubHeading = ({ children, className }: RulesSubHeadingProps) => (
  <h3
    className={classnames(
      "pt-2 text-sm font-bold md:pt-4 md:text-base",
      className
    )}
  >
    {children}
  </h3>
);

export const TournamentRules: React.FC<TournamentRulesProps> = ({
  classNames
}) => {
  return (
    <main className={classnames("p-6", classNames)}>
      <h2 className="text-center text-base font-bold tracking-tighter text-slate-400 md:text-xl">
        Tournament Rules
      </h2>

      <section className="m-auto my-4 flex max-w-4xl flex-col gap-2">
        <RulesSubHeading>Important!</RulesSubHeading>
        <RulesText>
          This competition is not affiliated with or sponsored by Riot Games,
          Inc. or League of Legends Esports.
        </RulesText>
        <RulesText>
          Refer to the tournament details to see what game modes are tracked.
        </RulesText>
        <RulesText>
          Smurfing will result in an immediate and permanent ban from Repeat.gg
          and all winnings will be forfeited. This can include, but is not
          limited to, creating a new account to play with or intentionally
          losing games to lower your rank or affect your matchmaking lobbies.
        </RulesText>
        <RulesText>
          You must play the minimum number of games in order to get paid out in
          a tournament. The minimum number of games to play is the same as the
          number of games we count for your score, which can be found in the
          Tournament Details.
        </RulesText>
        <RulesText>
          Winners of digital prizes have 14 days after the tournament ends to
          claim the prize.
        </RulesText>
        <RulesText>
          Winners of physical prizes have 7 days after the tournament ends to
          claim the prize.
        </RulesText>
        <RulesText>
          If users end up with the same score in the tournament, the tiebreaker
          for prize pool will prioritize the user who entered the tournament
          first.
        </RulesText>
        <RulesSubHeading>
          When Physical Products Tournament Are Given to Top ## Places
        </RulesSubHeading>
        <RulesText>
          No Purchase is necessary to enter or win. Odds of winning depend on
          the number of entries within the tournament. Giveaway winners are
          subject to all applicable federal, state and local laws and
          regulations. Void where prohibited. By entering the Tournament
          Giveaway, the contestant (&ldquot;You&rdquot;) agree to comply with
          and abide by these Rules and the decisions of Repeat.gg, and you
          represent and warrant that you meet the eligibility requirements. In
          addition, you agree to accept Repeat.gg&quot;s decisions as final and
          binding as it relates to the content of this campaign.
        </RulesText>
        <RulesText>
          How to enter: By joining this tournament you have entered the
          giveaway.
        </RulesText>
        <RulesText>
          You must provide the information requested by Repeat in order to claim
          the prize. You may not enter more times than indicated by using
          multiple email addresses, identities, or devices in an attempt to
          circumvent the rules. If you use fraudulent methods or otherwise
          attempt to circumvent the rules of the giveaway, your submission may
          be disqualified at the sole discretion of Repeat.gg.
        </RulesText>
        <RulesText>
          Actual/appraised value of prizes may differ at time of prize award.
          The specifics of the prize shall be solely determined by Repeat.gg. No
          cash or other prize substitution shall be permitted except for at
          Repeat.gg&quot;s discretion. The prize is non transferable.
          Substitution of the prize or transfer/assignment of the prize to
          others or request for the cash equivalent of the prize by the Winner
          is not permitted. Any and all prize related expenses, including
          without limitation any and all federal, state, and/or local taxes
          shall be the sole responsibility of the Winner. Acceptance of the
          prize constitutes permission for Repeat.gg to use the Winner&quot;s
          name, likeness, and entry for purposes of advertising and trade
          without further compensation, unless prohibited by law.
        </RulesText>
        <RulesText>
          Winners will be notified within 7 days of the winner selection.
          Repeat.gg shall have no liability for a Winner&quot;s failure to
          receive notices due to spam, junk e-mail or other security settings or
          for a Winner&quot;s provision of incorrect or otherwise
          non-functioning contact information. If the Winner cannot be
          contacted, is ineligible, fails to claim the prize within 7 days from
          the time award notification was sent, or fails to timely return a
          completed and executed declaration and release as required, the prize
          may be forfeited and an alternate Winner selected. Receipt of the
          prize offered in this Campaign by the Winner is conditioned upon
          compliance with any and all federal, state, and local laws and
          regulations. Any violation of these official rules by the Winner at
          Repeat.gg&quot;s sole discretion will result in the Winner&quot;s
          disqualification as winner, and all privileges as winner will be
          immediately terminated.
        </RulesText>
        <RulesText>
          Repeat.gg reserves the right, in its sole discretion, to cancel,
          terminate, modify or suspend the Tournament Giveaway should virus,
          bug, non-authorised human intervention, fraud, or other cause beyond
          Repeat.gg&quot;s control corrupt or affect the administration,
          security, fairness, or proper conduct of the Tournament Giveaway. In
          such cases, Repeat.gg may select a winner(s) from eligible entries
          received before and/or after the action taken by Repeat.gg if
          appropriate. Repeat.gg reserves the right at its sole discretion to
          disqualify any individual who tampers or attempts to tamper with the
          entry process or the operation of the Tournament Giveaway or website
          or violates these Terms &amp; Conditions. Repeat.gg has the right, in
          its sole discretion, to maintain the integrity of the Tournament
          Giveaway, to void entries for any reason, including, but not limited
          to: multiple entries from the same user from different IP addresses;
          multiple entries from the same computer in excess of that allowed by
          Tournament Giveaway rules; or the use of bots, macros, scripts, or
          other technical means for entering. Any attempt by an entrant to
          deliberately damage any website or undermine the legitimate operation
          of the Tournament Giveaway may be a violation of criminal and civil
          laws. Should such an attempt be made, Repeat.gg reserves the right to
          seek damages to the fullest extent permitted by law.
        </RulesText>
        <RulesText>
          Limitation of Liability: By entering the Tournament Giveaway you agree
          to release and hold harmless Repeat.gg and its subsidiaries,
          affiliates, advertising and promotion agencies, partners,
          representatives, agents, successors, assigns, employees, officers and
          directors from any liability, illness, injury, death, loss,
          litigation, claim or damage that may occur, directly or indirectly,
          whether caused by negligence or not, from (i) such entrant&quot;s
          participation in the Tournament Giveaway and/or his/her acceptance,
          possession, use, or misuse of any prize or any portion thereof; (ii)
          unauthorized human intervention in any part of the Tournament
          Giveaway; (iii) electronic or human error in the administration of the
          Tournament Giveaway or the processing of entries; (iv) technical
          errors of any kind, including but not limited to the malfunction of
          any computer, cable, network, hardware, or software, or other
          mechanical equipment; (v) the unavailability or inaccessibility of any
          transmissions, telephone, or Internet service; (vi) printing errors;
          (vii) lost, late, postage due, misdirected, or undeliverable mail.
        </RulesText>
        <RulesText>
          Disputes: This Tournament Giveaway is governed by the laws of United
          States, without respect to conflict of law doctrines. By participating
          in this Campaign, you agree that any and all disputes that cannot be
          resolved between the parties, and causes of action arising out of or
          connected with this Campaign, shall be resolved individually, without
          resort to any form of class action, exclusively before a court located
          in United States having jurisdiction. Further, in any such dispute,
          under no circumstances shall You be permitted to obtain awards for,
          and hereby waives all rights to, punitive, incidental, or
          consequential damages, including reasonable attorney&quot;s fees,
          other than actual out-of-pocket expenses (i.e. costs associated with
          entering the Tournament Giveaway). You further waive all rights to
          have damages multiplied or increased.
        </RulesText>
        <RulesText>
          The Tournament Giveaway is in no way sponsored, endorsed, administered
          by, or associated with Facebook, Twitter, Instagram, Snapchat,
          YouTube, Reddit, Pinterest, LinkedIn or any other social networks that
          are used to share the Tournament Giveaway. You understand that you are
          providing your information to the owner of the Tournament Giveaway and
          not to Facebook, Twitter, Instagram, Snapchat, YouTube, Reddit,
          Pinterest, LinkedIn or any other social networks.
        </RulesText>
        <RulesText>
          Acceptance of Rules: By participating in the tournament giveaway, You
          have affirmatively reviewed, accepted, and agreed to all of the
          Official Rules, Terms and Conditions.
        </RulesText>
        <RulesSubHeading>
          When Tournament Includes a Random Giveaway or “Door” Prize{" "}
        </RulesSubHeading>
        <RulesText>
          Though this Tournament Giveaway awards winners at random, Repeat.gg
          are not bound by US lottery rules as there is no consideration of
          entry to participate in the giveaway.
        </RulesText>
        <RulesText>
          Consideration - of which there are two types of consideration consists
          of; Monetary and Non-Monetary. Monetary is the purchase of a
          Sponsor&quot;s product or any other payment/entry fee required to
          enter. Non-monetary is substantial time or effort expended which
          benefits the Sponsor in some direct way.
        </RulesText>
        <RulesText>*All the above terms and conditions also apply*</RulesText>
      </section>
    </main>
  );
};
