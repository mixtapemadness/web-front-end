/* eslint react/no-unescaped-entities: 0 */
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 1200px;
  margin: auto;
  padding: 20px;
`

const Heading = styled.h1`
  font-weight: 800;
  text-align: justify;
  margin-bottom: 20px;
`

const Headingh2 = styled.h2`
  font-weight: 800;
  margin-top: 10px;
  text-align: justify;
`

const Headingh3 = styled.h3`
  font-weight: 800;
  margin-top: 10px;
  text-align: justify;
`

const Content = styled.p`
  font-weight: 400;
  text-align: justify;
`

const PrivacyAndPolicy = () => (
  <Container>
    <Heading>Privacy Policy</Heading>
    <Content>Effective date: October 07, 2018</Content>
    <Content>
      Mixtape Madness ("us", "we", or "our") operates the www.mixtapemadness.com
      website (the "Service").
    </Content>
    <Content>
      This page informs you of our policies regarding the collection, use, and
      disclosure of personal data when you use our Service and the choices you
      have associated with that data. Our Privacy Policy for Mixtape Madness is
      managed through Free Privacy Policy.
    </Content>

    <Content>
      {' '}
      We use your data to provide and improve the Service. By using the Service,
      you agree to the collection and use of information in accordance with this
      policy. Unless otherwise defined in this Privacy Policy, terms used in
      this Privacy Policy have the same meanings as in our Terms and Conditions,
      accessible from www.mixtapemadness.com
    </Content>

    <Headingh2>Information Collection And Use</Headingh2>
    <Content>
      {' '}
      We collect several different types of information for various purposes to
      provide and improve our Service to you.
    </Content>

    <Headingh2>Types of Data Collected</Headingh2>

    <Headingh3>Personal Data</Headingh3>
    <Content>
      {' '}
      While using our Service, we may ask you to provide us with certain
      personally identifiable information that can be used to contact or
      identify you ("Personal Data"). Personally identifiable information may
      include, but is not limited to:
    </Content>
    <Content> Email address</Content>

    <Headingh3> Cookies and Usage Data</Headingh3>
    <Content> - Usage Data</Content>
    <Content>
      {' '}
      We may also collect information how the Service is accessed and used
      ("Usage Data"). This Usage Data may include information such as your
      computer's Internet Protocol address (e.g. IP address), browser type,
      browser version, the pages of our Service that you visit, the time and
      date of your visit, the time spent on those pages, unique device
      identifiers and other diagnostic data.
    </Content>

    <Headingh3> Tracking & Cookies Data</Headingh3>
    <Content>
      {' '}
      We use cookies and similar tracking technologies to track the activity on
      our Service and hold certain information.
    </Content>
    <Content>
      {' '}
      Cookies are files with small amount of data which may include an anonymous
      unique identifier. Cookies are sent to your browser from a website and
      stored on your device. Tracking technologies also used are beacons, tags,
      and scripts to collect and track information and to improve and analyze
      our Service.
    </Content>

    <Content>
      {' '}
      You can instruct your browser to refuse all cookies or to indicate when a
      cookie is being sent. However, if you do not accept cookies, you may not
      be able to use some portions of our Service.
    </Content>

    <Headingh3> Examples of Cookies we use:</Headingh3>
    <Content>
      {' '}
      Session Cookies. We use Session Cookies to operate our Service.
    </Content>
    <Content>
      {' '}
      Preference Cookies. We use Preference Cookies to remember your preferences
      and various settings.
    </Content>

    <Headingh3> Security Cookies.</Headingh3>
    <Content> We use Security Cookies for security purposes.</Content>

    <Headingh3> Use of Data</Headingh3>
    <Content>
      {' '}
      Mixtape Madness uses the collected data for various purposes:
    </Content>
    <Content> - To provide and maintain the Service.</Content>
    <Content> - To notify you about changes to our Service.</Content>
    <Content>
      {' '}
      - To allow you to participate in interactive features of our Service when
      you choose to do so.
    </Content>
    <Content> - To provide customer care and support.</Content>
    <Content>
      {' '}
      - To provide analysis or valuable information so that we can improve the
      Service
    </Content>
    <Content> - To monitor the usage of the Service.</Content>
    <Content> - To detect, prevent and address technical issues</Content>

    <Headingh3> Transfer Of Data</Headingh3>
    <Content>
      {' '}
      Your information, including Personal Data, may be transferred to — and
      maintained on — computers located outside of your state, province, country
      or other governmental jurisdiction where the data protection laws may
      differ than those from your jurisdiction.
    </Content>

    <Content>
      {' '}
      If you are located outside United Kingdom and choose to provide
      information to us, please note that we transfer the data, including
      Personal Data, to United Kingdom and process it there.
    </Content>
    <Content>
      {' '}
      Your consent to this Privacy Policy followed by your submission of such
      information represents your agreement to that transfer.
    </Content>
    <Content>
      {' '}
      Mixtape Madness will take all steps reasonably necessary to ensure that
      your data is treated securely and in accordance with this Privacy Policy
      and no transfer of your Personal Data will take place to an organization
      or a country unless there are adequate controls in place including the
      security of your data and other personal information.
    </Content>

    <Headingh2> Disclosure Of Data</Headingh2>

    <Headingh3> Legal Requirements</Headingh3>
    <Content>
      {' '}
      Mixtape Madness may disclose your Personal Data in the good faith belief
      that such action is necessary to:
    </Content>
    <Content> To comply with a legal obligation</Content>
    <Content>
      {' '}
      To protect and defend the rights or property of Mixtape Madness
    </Content>
    <Content>
      {' '}
      To prevent or investigate possible wrongdoing in connection with the
      Service
    </Content>
    <Content>
      {' '}
      To protect the personal safety of users of the Service or the public
    </Content>
    <Content> To protect against legal liability</Content>
    <Headingh3> Security Of Data</Headingh3>
    <Content>
      {' '}
      The security of your data is important to us, but remember that no method
      of transmission over the Internet, or method of electronic storage is 100%
      secure. While we strive to use commercially acceptable means to protect
      your Personal Data, we cannot guarantee its absolute security.
    </Content>

    <Headingh3>Service Providers</Headingh3>
    <Content>
      {' '}
      We may employ third party companies and individuals to facilitate our
      Service ("Service Providers"), to provide the Service on our behalf, to
      perform Service-related services or to assist us in analyzing how our
      Service is used.
    </Content>
    <Content>
      {' '}
      These third parties have access to your Personal Data only to perform
      these tasks on our behalf and are obligated not to disclose or use it for
      any other purpose.
    </Content>

    <Headingh3> Analytics</Headingh3>
    <Content>
      {' '}
      We may use third-party Service Providers to monitor and analyze the use of
      our Service.
    </Content>

    <Headingh3> Google Analytics</Headingh3>
    <Content>
      {' '}
      Google Analytics is a web analytics service offered by Google that tracks
      and reports website traffic. Google uses the data collected to track and
      monitor the use of our Service. This data is shared with other Google
      services. Google may use the collected data to contextualize and
      personalize the ads of its own advertising network.
    </Content>

    <Content>
      {' '}
      You can opt-out of having made your activity on the Service available to
      Google Analytics by installing the Google Analytics opt-out browser
      add-on. The add-on prevents the Google Analytics JavaScript (ga.js,
      analytics.js, and dc.js) from sharing information with Google Analytics
      about visits activity.
    </Content>
    <Content>
      {' '}
      For more information on the privacy practices of Google, please visit the
      Google Privacy & Terms web page: https://policies.google.com/privacy?hl=en
    </Content>

    <Headingh3> Links To Other Sites</Headingh3>
    <Content>
      {' '}
      Our Service may contain links to other sites that are not operated by us.
      If you click on a third party link, you will be directed to that third
      party's site. We strongly advise you to review the Privacy Policy of every
      site you visit.
    </Content>
    <Content>
      {' '}
      We have no control over and assume no responsibility for the content,
      privacy policies or practices of any third party sites or services.
    </Content>

    <Headingh3> Children's Privacy</Headingh3>
    <Content>
      {' '}
      Our Service does not address anyone under the age of 18 ("Children").
    </Content>
    <Content>
      {' '}
      We do not knowingly collect personally identifiable information from
      anyone under the age of 18. If you are a parent or guardian and you are
      aware that your Children has provided us with Personal Data, please
      contact us. If we become aware that we have collected Personal Data from
      children without verification of parental consent, we take steps to remove
      that information from our servers.
    </Content>

    <Headingh3> Changes To This Privacy Policy</Headingh3>
    <Content>
      {' '}
      We may update our Privacy Policy from time to time. We will notify you of
      any changes by posting the new Privacy Policy on this page.
    </Content>
    <Content>
      {' '}
      We will let you know via email and/or a prominent notice on our Service,
      prior to the change becoming effective and update the "effective date" at
      the top of this Privacy Policy.
    </Content>

    <Content>
      {' '}
      You are advised to review this Privacy Policy periodically for any
      changes. Changes to this Privacy Policy are effective when they are posted
      on this page.
    </Content>

    <Headingh2>Contact Us</Headingh2>
    <Content>
      {' '}
      If you have any questions about this Privacy Policy, please contact us:
    </Content>
    <Content> By email: admin@mixtapemadness.com</Content>
  </Container>
)

export default PrivacyAndPolicy
