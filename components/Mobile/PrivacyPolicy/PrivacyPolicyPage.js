import React from 'react';
import styles from './termsOfUse.module.css'

const PrivacyPolicyPage = () => {
    return (
        <div className={styles.termsContainer}>
            <h2 className={styles.h2}>Privacy Policy</h2>
            <p className={styles.p}>
                This Privacy Policy governs the manner in which TRUEVINE FAMILY Mobile Application
                ({`"`}the Application{`"`}) collects, uses, maintains, and discloses information collected
                from users (each, a {`"`}User{`"`}) of the Application. This Privacy Policy applies to the
                Application and all products and services offered by TRUEVINE CHRISTIAN CENTRE.
            </p>

            <h3 className={styles.h3}>1. Information We Collect</h3>
            <p className={styles.p}>
                We may collect personal identification information from Users in various ways,
                including but not limited to when Users visit our Application, register on the
                Application, fill out a form, and in connection with other activities, services,
                features, or resources we make available on our Application. Users may be asked
                for, as appropriate, name, email address, mailing address, and phone number.
            </p>

            <h3 className={styles.h3}>2. How We Use Collected Information</h3>
            <p className={styles.p}>
                We may collect and use Users{`'`} personal information for the following purposes:
            </p>
            <ul>
                <li>To personalize user experience: We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Application.</li>
                <li>To improve our Application: We continually strive to improve our Application offerings based on the information and feedback we receive from Users.</li>
                <li>To send periodic emails: We may use the email address to respond to inquiries, questions, and/or other requests from Users.</li>
            </ul>

            <h3 className={styles.h3}>3. How We Protect Your Information</h3>
            <p className={styles.p}>
                We adopt appropriate data collection, storage, and processing practices and security
                measures to protect against unauthorized access, alteration, disclosure, or destruction
                of your personal information, username, password, transaction information, and data
                stored on our Application.
            </p>

            <h3 className={styles.h3}>4. Sharing Your Personal Information</h3>
            <p className={styles.p}>
                We do not sell, trade, or rent Users{`'`} personal identification information to others.
                We may share generic aggregated demographic information not linked to any personal
                identification information regarding visitors and users with our business partners,
                trusted affiliates, and advertisers.
            </p>

            <h3 className={styles.h3} id="delete_account">5. Deleting of Account and Erasing of associated data</h3>
            <p className={styles.p}>
                You can delete your account at any time by visiting the settings of the application and follow the few steps to delete your account You can also contact us at <a style={{
                    color: 'blue'
                }} href="mailto:collinsrollins07@gmail.com">Support Centre</a> to have your account deleted. Upon deletion of your account, all associated data of yours will be completely erased from our database.
            </p>

            <h3 className={styles.h3}>6. Changes to This Privacy Policy</h3>
            <p className={styles.p}>
                TRUEVINE CHRISTIAN CENTRE has the discretion to update this Privacy Policy at any time.
                When we do, we will revise the updated date at the bottom of this page. We encourage
                Users to frequently check this page for any changes to stay informed about how we are
                helping to protect the personal information we collect. You acknowledge and agree that
                it is your responsibility to review this Privacy Policy periodically and become aware
                of modifications.
            </p>

            <h3 className={styles.h3}>7. Your Acceptance of These Terms</h3>
            <p className={styles.p}>
                By using this Application, you signify your acceptance of this Privacy Policy. If you
                do not agree to this Privacy Policy, please do not use our Application. Your continued
                use of the Application following the posting of changes to this Privacy Policy will
                be deemed your acceptance of those changes.
            </p>

            <h3 className={styles.h3}>8. Contacting Us</h3>
            <p className={styles.p}>
                If you have any questions about this Privacy Policy, the practices of this Application,
                or your dealings with this Application, please contact us at <a style={{
                    color: 'blue'
                }} href="mailto:collinsrollins07@gmail.com">Support Centre</a>.
            </p>
            {/* add last updated */}
            <br />
            <br />
            <p className={styles.p}>
                This document was last updated on 21st of June 2023.
            </p>

        </div>
    );
};

export default PrivacyPolicyPage;
